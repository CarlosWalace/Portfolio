# CAMINHOS CORRIGIDOS - baseado no local real do script
$deployPath = "C:\Users\Carlos\OneDrive\Área de Trabalho\CarlosWalace.github.io"
$projectPath = "C:\Users\Carlos\OneDrive\Área de Trabalho\Portfolio"
$distPath = "$projectPath\dist"

try {
    Write-Host "=== DEPLOY PARA GITHUB PAGES ===" -ForegroundColor Green
    
    # 1. Verificar se as pastas existem
    Write-Host "1. Verificando pastas..." -ForegroundColor Yellow
    
    if (-not (Test-Path $projectPath)) {
        throw "Pasta do projeto não encontrada: $projectPath"
    }
    
    if (-not (Test-Path $deployPath)) {
        throw "Pasta de deploy não encontrada: $deployPath - Clone o repositório primeiro!"
    }
    
    Write-Host "✅ Pastas verificadas" -ForegroundColor Green
    
    # 2. Navegar para o projeto
    Set-Location -Path $projectPath
    
    # 3. Verificar configuração do Vite
    if (Test-Path "vite.config.js") {
        $viteConfig = Get-Content "vite.config.js" -Raw
        if ($viteConfig -match 'base: "/Portfolio/"') {
            Write-Host "✅ Vite config CORRETO" -ForegroundColor Green
        } else {
            Write-Host "❌ AVISO: base não está como '/Portfolio/' no vite.config.js" -ForegroundColor Yellow
            Write-Host "   Isso pode causar erros 404!" -ForegroundColor Yellow
        }
    }
    
    # 4. Instalar dependências se necessário
    if (-not (Test-Path "node_modules")) {
        Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
        npm install
    }
    
    # 5. Build do projeto
    Write-Host "2. Executando build..." -ForegroundColor Yellow
    npm run build
    
    if (-not (Test-Path $distPath)) {
        throw "❌ Pasta 'dist' não foi criada após o build!"
    }
    
    Write-Host "✅ Build bem-sucedido!" -ForegroundColor Green
    
    # 6. Verificar conteúdo do build
    Write-Host "Conteúdo da pasta dist:" -ForegroundColor Cyan
    Get-ChildItem -Path $distPath | ForEach-Object { 
        Write-Host "  📁 $($_.Name)" 
    }
    
    # 7. Limpar deploy anterior
    Write-Host "3. Preparando deploy..." -ForegroundColor Yellow
    if (Test-Path $deployPath) {
        Get-ChildItem -Path $deployPath -Force -Exclude ".git" | Remove-Item -Recurse -Force
    }
    
    # 8. Copiar arquivos
    Write-Host "4. Copiando arquivos..." -ForegroundColor Yellow
    Copy-Item -Path "$distPath\*" -Destination $deployPath -Recurse -Force
    
    # 9. Deploy no Git
    Write-Host "5. Deploy no GitHub..." -ForegroundColor Yellow
    Set-Location -Path $deployPath
    git add .
    git commit -m "deploy: $(Get-Date -Format 'dd/MM/yyyy HH:mm')"
    git push
    
    Write-Host "`n🎉 DEPLOY CONCLUÍDO!" -ForegroundColor Green
    Write-Host "🌐 Acesse: https://carloswalace.github.io/Portfolio/" -ForegroundColor Cyan
    Write-Host "⏱️  Aguarde 1-2 minutos para o GitHub Pages atualizar" -ForegroundColor Yellow
    
}
catch {
    Write-Host "❌ ERRO: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}