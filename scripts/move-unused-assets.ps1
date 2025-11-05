<#
Move Unused Assets Script
- Dry run by default. To actually move files, provide the -Confirm switch.
- Usage:
    # Dry run (default):
    pwsh .\scripts\move-unused-assets.ps1

    # Execute moves (confirm):
    pwsh .\scripts\move-unused-assets.ps1 -Confirm

- The script preserves directory structure under ./trash_unused_assets/<timestamp>/
- Files included were identified by a static scan; inspect the list below before confirming.
#>

param(
  [switch]$Confirm
)

# Files to move (relative to repo root)
$files = @(
  # single assets
  'src/assets/react.svg',
  'public/vite.svg',

  # images folder (many files flagged as unused)
  'src/assets/images/images (1).jpeg.jpg',
  'src/assets/images/istockphoto-1001264956-612x612.jpg',
  'src/assets/images/istockphoto-1159199214-612x612.jpg',
  'src/assets/images/istockphoto-1165295700-612x612.jpg',
  'src/assets/images/istockphoto-1192066090-612x612.jpg',
  'src/assets/images/istockphoto-1257119370-612x612.jpg',
  'src/assets/images/istockphoto-1272546355-612x612.jpg',
  'src/assets/images/istockphoto-1373203602-612x612.jpg',
  'src/assets/images/istockphoto-1387103853-612x612.jpg',
  'src/assets/images/istockphoto-1395154805-612x612.jpg',
  'src/assets/images/istockphoto-1400039603-612x612.jpg',
  'src/assets/images/istockphoto-1421485330-612x612.jpg',
  'src/assets/images/istockphoto-1432955867-612x612.jpg',
  'src/assets/images/istockphoto-1475521829-612x612.jpg',
  'src/assets/images/istockphoto-183958324-612x612.jpg',
  'src/assets/images/istockphoto-455316385-612x612.jpg',
  'src/assets/images/istockphoto-466209183-612x612.jpg',
  'src/assets/images/istockphoto-466376121-612x612.jpg',
  'src/assets/images/istockphoto-903568264-612x612.jpg',
  'src/assets/images/istockphoto-925527942-612x612.jpg',
  'src/assets/images/istockphoto-926551388-612x612.jpg',
  'src/assets/images/istockphoto-935722028-612x612.jpg',
  'src/assets/images/namedreactions.png',
  'src/assets/images/oreaction.png',
  'src/assets/images/oreaction2.png',
  'src/assets/images/oreactions.png',
  'src/assets/images/organic reactions2.png',
  'src/assets/images/organicreactions.png',
  'src/assets/images/orwhite.png',
  'src/assets/images/PhonePeQR_Canara Bank - 03481.png',
  'src/assets/images/placeholder.jpg',
  'src/assets/images/websitebg1.jpg',

  # public models (only dna2.glb is referenced; others flagged unused)
  'public/models/sucrose_molecule.glb',
  'public/models/science_project_the_atom.glb',
  'public/models/ice_lattice.glb',
  'public/models/dna.glb',
  'public/models/chemistry-benzene.zip',
  'public/models/atom.zip',
  'public/models/atom.glb',
  'public/models/atom (2).glb',
  'public/models/atom (1).glb'
)

# Determine repo root (script works when run from repo root; else resolve path)
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$repoRoot = Resolve-Path (Join-Path $scriptDir '..')
$repoRoot = $repoRoot.Path

# Create a timestamped trash folder
$timestamp = Get-Date -Format 'yyyyMMdd_HHmmss'
$trashRoot = Join-Path $repoRoot "trash_unused_assets\$timestamp"

Write-Host "Repository root: $repoRoot"
Write-Host "Trash root: $trashRoot"
Write-Host "Confirm mode: $Confirm"
Write-Host "\nFiles marked for move ($($files.Count)):\n"
$files | ForEach-Object { Write-Host " - $_" }

if (-not $Confirm) {
  Write-Host "\nDRY RUN: No files will be moved. Re-run with -Confirm to execute moves." -ForegroundColor Yellow
  exit 0
}

# Execute move
foreach ($relative in $files) {
  $source = Join-Path $repoRoot $relative
  if (-not (Test-Path $source)) {
    Write-Host "SKIP: Not found -> $relative" -ForegroundColor DarkYellow
    continue
  }

  # Determine destination directory under trash preserving subfolders
  $destinationDir = Join-Path $trashRoot (Split-Path $relative -Parent)
  New-Item -ItemType Directory -Force -Path $destinationDir | Out-Null

  $dest = Join-Path $destinationDir (Split-Path $relative -Leaf)

  try {
    Move-Item -LiteralPath $source -Destination $dest -Force
    Write-Host "Moved: $relative -> ${dest}" -ForegroundColor Green
  } catch {
    Write-Host "ERROR moving $relative : $_" -ForegroundColor Red
  }
}

Write-Host "\nMove complete. Trash root: $trashRoot" -ForegroundColor Cyan
Write-Host "To restore files, move them back from the trash folder to their original paths."