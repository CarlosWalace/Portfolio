$deployPath = "C:\Users\Carlos\Desktop\ProjetosVsCode\CarlosWalace.github.io"
$projectPath = "C:\Users\Carlos\Desktop\ProjetosVsCode\Portfolio"
$distPath = "$projectPath\dist"

try {
    Write-Host "=== DEPLOY PARA GITHUB PAGES PROJECT SITE ===" -ForegroundColor Green
    
    # 1. Verificar configuração do Vite
    Write-Host "1. Verificando configuração..." -ForegroundColor Yellow
    Set-Location -Path $projectPath
    
    $viteConfig = Get-Content "vite.config.js" -Raw
    if ($viteConfig -notmatch 'base: "/Portfolio/"') {
        Write-Host "❌ AVISO: base não está como '/Portfolio/' no vite.config.js" -ForegroundColor Red
        Write-Host "   Isso pode causar erros 404!" -ForegroundColor Yellow
    }
    
    # 2. Instalar dependências se necessário
    if (-not (Test-Path "node_modules")) {
        Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
        npm install
    }
    
    # 3. Build do projeto
    Write-Host "2. Executando build..." -ForegroundColor Yellow
    npm run build
    
    if (-not (Test-Path $distPath)) {
        throw "❌ Pasta 'dist' não foi criada após o build!"
    }
    
    Write-Host "✅ Build bem-sucedido!" -ForegroundColor Green
    
    # 4. Verificar conteúdo do build
    Write-Host "Conteúdo da pasta dist:" -ForegroundColor Cyan
    Get-ChildItem -Path $distPath -Recurse | ForEach-Object { 
        Write-Host "  📁 $($_.Name)" 
    }
    
    # 5. Limpar deploy anterior
    Write-Host "3. Preparando deploy..." -ForegroundColor Yellow
    if (Test-Path $deployPath) {
        Get-ChildItem -Path $deployPath -Force -Exclude ".git" | Remove-Item -Recurse -Force
    }
    
    # 6. Copiar arquivos
    Write-Host "4. Copiando arquivos..." -ForegroundColor Yellow
    Copy-Item -Path "$distPath\*" -Destination $deployPath -Recurse -Force
    
    # 7. Deploy no Git
    Write-Host "5. Deploy no GitHub..." -ForegroundColor Yellow
    Set-Location -Path $deployPath
    git add .
    git commit -m "deploy: ajuste base URL para /Portfolio/"
    git push
    
    Write-Host "`n🎉 DEPLOY CONCLUÍDO!" -ForegroundColor Green
    Write-Host "🌐 Acesse: https://carloswalace.github.io/Portfolio/" -ForegroundColor Cyan
    Write-Host "⏱️  Aguarde 1-2 minutos para o GitHub Pages atualizar" -ForegroundColor Yellow
    
}
catch {
    Write-Host "❌ ERRO: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}