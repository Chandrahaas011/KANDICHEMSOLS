# Copy GIF files from src/assets/gifs to public/gifs so they are available in production
$src = Join-Path $PSScriptRoot "..\src\assets\gifs"
$dest = Join-Path $PSScriptRoot "..\public\gifs"

if (-not (Test-Path $src)) {
    Write-Error "Source folder not found: $src"
    exit 1
}

if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest -Force | Out-Null
}

Get-ChildItem -Path $src -Filter "*.gif" -File | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $dest -Force
}

Write-Host "Copied GIFs from $src to $dest"