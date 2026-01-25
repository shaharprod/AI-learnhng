# סקריפט קומיט ופוש לאתר בינה מלאכותית ללימוד
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "=== Git Commit & Push ===" -ForegroundColor Cyan
git add -A
$status = git status --short
if (-not $status) {
    Write-Host "אין שינויים לקומיט." -ForegroundColor Yellow
    exit 0
}
Write-Host "קבצים להוספה:" -ForegroundColor Green
git status --short
git commit -m "אתר בינה מלאכותית ללימוד - עדכון"
$remote = git remote get-url origin 2>$null
if ($remote) {
    git branch -M main 2>$null
    git push -u origin main
    Write-Host "פוש הושלם ל-$remote" -ForegroundColor Green
} else {
    Write-Host "אין remote. ראה GIT_PUSH_INSTRUCTIONS.md לחיבור ל-GitHub." -ForegroundColor Yellow
}
