# 🚨 הוראות תיקון מהירות - Quick Fix Instructions

## הבעיה:
Claude Code מזהה מפתח API חיצוני לא תקין ומציג שגיאות "Invalid API key"

---

## ✅ פתרון שלב אחר שלב:

### שלב 1: סגור את Claude Code לחלוטין
1. לחץ `Ctrl+C` בטרמינל (אם פתוח)
2. סגור את כל חלונות Claude Code
3. ודא שאין תהליכים רצים - בדוק ב-Task Manager

### שלב 2: הפעל את סקריפט התיקון
פתח PowerShell חדש (לא בטרמינל של Claude Code) והרץ:

```powershell
cd "c:\Users\User\Downloads\אתר בינה מלאכותית ללימוד"
.\fix-claude-auth.ps1
```

**או** בצע ידנית:
```powershell
# הסר את המשתנה מכל המקומות
Remove-Item Env:ANTHROPIC_API_KEY -ErrorAction SilentlyContinue
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", $null, "User")
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", $null, "Machine")

# הרץ logout
claude /logout
```

### שלב 3: בדוק שהמשתנה הוסר
```powershell
# בדיקה - אמור להחזיר ריק
echo $env:ANTHROPIC_API_KEY
[Environment]::GetEnvironmentVariable("ANTHROPIC_API_KEY", "User")
```

אם מוחזר משהו - חזור לשלב 2.

### שלב 4: פתח טרמינל חדש לחלוטין
1. **סגור את כל הטרמינלים** (כולל Cursor/IDE)
2. **פתח PowerShell חדש** (לא מהתיקיה של הפרויקט)
3. **נווט לתיקיה:**
   ```powershell
   cd "c:\Users\User\Downloads\אתר בינה מלאכותית ללימוד"
   ```

### שלב 5: הפעל Claude Code מחדש
```powershell
claude
```

### שלב 6: התחבר מחדש ל-Claude Console
אם תתבקש להתחבר:
1. לחץ על הקישור שמוצג
2. התחבר לחשבון Anthropic שלך
3. אשר את ההרשאות

---

## 🔍 אם עדיין לא עובד:

### אופציה A: בדוק קבצי הגדרה
```powershell
# בדוק אם יש מפתח בקבצים
Get-Content .env | Select-String "ANTHROPIC"
Get-Content .env.example | Select-String "ANTHROPIC"
```

אם יש - הסר או הערה את השורות.

### אופציה B: בדוק משתני סביבה של Windows
1. לחץ `Win + R`
2. הקלד: `sysdm.cpl`
3. לחץ על "Environment Variables"
4. בדוק ב-"User variables" אם יש `ANTHROPIC_API_KEY`
5. אם יש - מחק אותו

### אופציה C: אתחל את המחשב
לפעמים משתני סביבה נשארים בזיכרון.

---

## ✅ סימנים שהכל עובד:
- ✅ אין הודעת "Auth conflict"
- ✅ אין שגיאות "Invalid API key"
- ✅ Claude Code עובד עם מפתח קונסול פנימי
- ✅ אתה יכול לשאול שאלות ולראות תשובות

---

## 📞 אם שום דבר לא עובד:
1. מחק את תיקיית הקונפיגורציה של Claude Code:
   ```powershell
   Remove-Item -Recurse -Force "$env:APPDATA\claude" -ErrorAction SilentlyContinue
   ```
2. הפעל מחדש את המחשב
3. התקן מחדש את Claude Code
4. התחבר מחדש

---

**💡 טיפ:** תמיד השתמש במפתח קונסול פנימי של Claude Code - לא צריך ANTHROPIC_API_KEY!
