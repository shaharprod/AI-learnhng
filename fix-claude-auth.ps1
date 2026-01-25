# סקריפט לתיקון בעיית Auth conflict ב-Claude Code
# Script to fix Auth conflict in Claude Code

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "תיקון בעיית Auth conflict ב-Claude Code" -ForegroundColor Yellow
Write-Host "Fixing Claude Code Auth conflict" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# בדיקה והסרה של ANTHROPIC_API_KEY מכל המקומות
Write-Host "בודק משתני סביבה..." -ForegroundColor Green
Write-Host "Checking environment variables..." -ForegroundColor Green

# 1. הסרה מתהליך נוכחי
if ($env:ANTHROPIC_API_KEY) {
    Write-Host "  [1] מוסר ANTHROPIC_API_KEY מתהליך נוכחי..." -ForegroundColor Yellow
    Remove-Item Env:ANTHROPIC_API_KEY
    Write-Host "      ✓ הוסר מתהליך נוכחי" -ForegroundColor Green
} else {
    Write-Host "  [1] ✓ לא מוגדר בתהליך נוכחי" -ForegroundColor Green
}

# 2. בדיקה והסרה ממשתני משתמש
$userKey = [Environment]::GetEnvironmentVariable("ANTHROPIC_API_KEY", "User")
if ($userKey) {
    Write-Host "  [2] מוסר ANTHROPIC_API_KEY ממשתני משתמש..." -ForegroundColor Yellow
    [Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", $null, "User")
    Write-Host "      ✓ הוסר ממשתני משתמש" -ForegroundColor Green
} else {
    Write-Host "  [2] ✓ לא מוגדר במשתני משתמש" -ForegroundColor Green
}

# 3. בדיקה והסרה ממשתני מערכת
$machineKey = [Environment]::GetEnvironmentVariable("ANTHROPIC_API_KEY", "Machine")
if ($machineKey) {
    Write-Host "  [3] מוסר ANTHROPIC_API_KEY ממשתני מערכת..." -ForegroundColor Yellow
    Write-Host "      ⚠ דורש הרשאות מנהל!" -ForegroundColor Red
    [Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", $null, "Machine")
    Write-Host "      ✓ הוסר ממשתני מערכת" -ForegroundColor Green
} else {
    Write-Host "  [3] ✓ לא מוגדר במשתני מערכת" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✓ ניקוי הושלם!" -ForegroundColor Green
Write-Host "✓ Cleanup completed!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# הוראות המשך
Write-Host "הוראות המשך / Next steps:" -ForegroundColor Yellow
Write-Host "1. סגור את Claude Code (אם פתוח)" -ForegroundColor White
Write-Host "   Close Claude Code (if open)" -ForegroundColor White
Write-Host ""
Write-Host "2. פתח טרמינל חדש" -ForegroundColor White
Write-Host "   Open a new terminal" -ForegroundColor White
Write-Host ""
Write-Host "3. הפעל Claude Code מחדש" -ForegroundColor White
Write-Host "   Run Claude Code again" -ForegroundColor White
Write-Host ""
Write-Host "4. Claude Code ישתמש במפתח קונסול פנימי" -ForegroundColor Cyan
Write-Host "   Claude Code will use internal Console key" -ForegroundColor Cyan
Write-Host ""

# בדיקה סופית
Write-Host "בדיקה סופית / Final check:" -ForegroundColor Yellow
$finalCheck = [Environment]::GetEnvironmentVariable("ANTHROPIC_API_KEY", "Process")
if (-not $finalCheck) {
    Write-Host "✓ ANTHROPIC_API_KEY לא מוגדר - הכל תקין!" -ForegroundColor Green
    Write-Host "✓ ANTHROPIC_API_KEY not set - All good!" -ForegroundColor Green
} else {
    Write-Host "⚠ ANTHROPIC_API_KEY עדיין מוגדר - נסה להפעיל מחדש את הטרמינל" -ForegroundColor Red
    Write-Host "⚠ ANTHROPIC_API_KEY still set - Try restarting terminal" -ForegroundColor Red
}
