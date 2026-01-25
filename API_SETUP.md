# הגדרת מפתח API של Claude

## ✅ מה כבר הושלם:
1. נוצר קובץ `.env` עם המפתח שלך
2. נוצר קובץ `.gitignore` כדי לא לחשוף את המפתח
3. נוצר קובץ `.env.example` לדוגמא
4. נוצר סקריפט `setup-env.ps1` לטעינת משתני סביבה

## 🔧 כיצד להשתמש במפתח:

### אופן 1: טעינה אוטומטית מקובץ .env
```powershell
# הפעל את הסקריפט
.\setup-env.ps1
```

### אופן 2: הגדרה ידנית בטרמינל
```powershell
$env:ANTHROPIC_API_KEY = "YOUR_ANTHROPIC_API_KEY"
```

### אופן 3: הגדרה קבועה במערכת
```powershell
setx ANTHROPIC_API_KEY "YOUR_ANTHROPIC_API_KEY"
```

## 🔍 בדיקת המפתח:
```powershell
echo $env:ANTHROPIC_API_KEY
```

## 🚨 אבטחה:
- הקובץ `.env` כלול ב-`.gitignore` ולא יועלה ל-git
- אל תשתף את המפתח באופן פומבי
- השתמש בקובץ `.env.example` לחלוקה עם אחרים

## 🚨 **בעיה שזוהתה:**
Claude Code משתמש במפתח קונסול פנימי ולא ב-ANTHROPIC_API_KEY

**הודעת שגיאה:**
```
Auth conflict: Using ANTHROPIC_API_KEY instead of Anthropic Console key.
Either unset ANTHROPIC_API_KEY, or run `claude /logout`.
```

## 🔧 פתרון מהיר:

### אופציה 1: הפעל סקריפט אוטומטי (מומלץ)
```powershell
.\fix-claude-auth.ps1
```

### אופציה 2: פתרון ידני
```powershell
# הסר את המשתנה
Remove-Item Env:ANTHROPIC_API_KEY

# או הרץ logout
claude /logout
```

### אופציה 3: הסרה קבועה
```powershell
# הסר ממשתני משתמש
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", $null, "User")

# הסר ממשתני מערכת (דורש הרשאות)
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", $null, "Machine")
```

## 📋 שלבים לתיקון:
1. **הפעל את הסקריפט** `fix-claude-auth.ps1` או הסר ידנית
2. **סגור את Claude Code** (אם פתוח)
3. **פתח טרמינל חדש**
4. **הפעל Claude Code מחדש** - אמור לעבוד!

## 🔍 מצב נוכחי:
- ✅ סקריפט תיקון זמין: `fix-claude-auth.ps1`
- ✅ Claude Code ישתמש במפתח קונסול פנימי
- ✅ אין צורך ב-ANTHROPIC_API_KEY