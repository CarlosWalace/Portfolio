# Caminhos
$deployPath = "C:\Users\Carlos\Desktop\ProjetosVsCode\CarlosWalace.github.io"
$projectPath = "C:\Users\Carlos\Desktop\ProjetosVsCode\Portfolio"
$distPath = "$projectPath\dist"

Write-Host "Limpando diretório $deployPath (exceto .git)..."

# Remove tudo dentro de C:\teste exceto a pasta .git
Get-ChildItem -Path $deployPath -Force -Exclude ".git" | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Build do projeto em $projectPath..."
# Executa npm run build
Set-Location -Path $projectPath
npm run build

Write-Host "Copiando arquivos para $deployPath..."
# Copia o conteúdo da pasta dist para C:\teste
Copy-Item -Path "$distPath\*" -Destination $deployPath -Recurse -Force

Write-Host "Realizando commit e push no Git..."
# Entra em C:\teste e faz git add, commit e push
Set-Location -Path $deployPath
git add .
git commit -m "Deploy"
git push

Write-Host "Deploy concluído com sucesso!"
