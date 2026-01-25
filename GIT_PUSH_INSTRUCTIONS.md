# הוראות קומיט ופוש לאתר

## ⚠️ חשוב – מאיפה להריץ גיט
**עדיין חייבים להריץ את כל פקודות הגיט מתוך תיקיית הפרויקט בלבד.**

אם ה־repository הוא בתיקיית האבא (למשל `C:\Users\User`), אז `git add -A` יוסיף גם קבצים כמו `.blender`, `.cache` וכולי – ולא רק את קבצי האתר.  
**בדיקה:** הרץ `git rev-parse --show-toplevel`. אם הנתיב לא מסתיים ב־`אתר בינה מלאכותית ללימוד`, פתח טרמינל חדש, עשה `cd` לתיקיית הפרויקט והרץ שוב.  
**כדי שיהיה ריפו נפרד לאתר:** בתיקייה `c:\Users\User\Downloads\אתר בינה מלאכותית ללימוד` הריץ `git init` (אם עדיין אין שם תיקיית `.git`).

---

## פקודות ידניות – להעתקה (PowerShell)

**חובה:** הפקודות האלה רק אחרי ש־`cd` לתיקיית הפרויקט (השורה הראשונה). הרץ לפי הסדר:

```
cd "c:\Users\User\Downloads\אתר בינה מלאכותית ללימוד"
git remote add origin https://github.com/shaharprod/AI-learnhng.git
git add -A
git commit -m "אתר בינה מלאכותית ללימוד - עדכון"
git branch -M main
git push -u origin main
```

אם `origin` כבר קיים, השתמש בזה במקום השורה השנייה:
```
git remote set-url origin https://github.com/shaharprod/AI-learnhng.git
```

---

## GitHub Pages (הרצה אוטומטית)
Workflow מעודכן שמעלה את האתר ל־GitHub Pages בכל פוש ל־`main`:
- **קובץ:** [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
- בונה תיקייה `_site` עם `index.html`, `style.css`, `script.js`, `pages/` ו־`.nojekyll`
- העלאה רק של קבצי האתר (בלי תיעוד/סקריפטים)

**הגדרה ב־GitHub (פעם אחת):**
1. **Settings → Pages**
2. ב־**Source** בחר **GitHub Actions**
3. (אם צריך) ב־**Actions** הרץ את ה־workflow "Deploy to GitHub Pages" ידנית

אחרי הפוש – האתר יופיע ב־`https://shaharprod.github.io/AI-learnhng/`

## מה בוצע אוטומטית
- אתחול Git בתיקייה (אם לא היה)
- הוספת כל הקבצים (לפי `.gitignore` – בלי `.env` ובלי `.claude/`)
- קומיט עם ההודעה: `אתר בינה מלאכותית ללימוד - דפים עיצוב מבחנים PRD`
- הוספת workflow להעלאה ל־GitHub Pages

## איך לבצע פוש ל־GitHub

**ריפו קיים:** [shaharprod/AI-learnhng](https://github.com/shaharprod/AI-learnhng)

### חיבור והעלאה
**יוזר:** `shaharprod`  
**כתובת הריפו:** `https://github.com/shaharprod/AI-learnhng.git`

```powershell
cd "c:\Users\User\Downloads\אתר בינה מלאכותית ללימוד"

# חיבור לריפו (אם עדיין לא חובר):
git remote add origin https://github.com/shaharprod/AI-learnhng.git

# או עדכון אם origin כבר קיים:
# git remote set-url origin https://github.com/shaharprod/AI-learnhng.git

# פוש:
git branch -M main
git push -u origin main
```

---

## הוראות ידניות – שלב אחר שלב

פתח **PowerShell** או **Terminal** והרץ את הפקודות לפי הסדר. כל שורה – פקודה אחת.

### שלב 1: מעבר לתיקיית הפרויקט
```powershell
cd "c:\Users\User\Downloads\אתר בינה מלאכותית ללימוד"
```

### שלב 2: חיבור לריפו ב־GitHub (פעם ראשונה בלבד)
אם עדיין לא חיברת `origin`:
```powershell
git remote add origin https://github.com/shaharprod/AI-learnhng.git
```

אם `origin` כבר קיים ורוצה לעדכן אותו:
```powershell
git remote set-url origin https://github.com/shaharprod/AI-learnhng.git
```

### שלב 3: הוספת כל הקבצים
```powershell
git add -A
```

### שלב 4: בדיקת סטטוס (אופציונלי)
```powershell
git status
```

### שלב 5: קומיט
```powershell
git commit -m "אתר בינה מלאכותית ללימוד - עדכון"
```

(אפשר להחליף את הטקסט בין המרכאות להודעת קומיט אחרת.)

### שלב 6: וידוא שהענף הוא main
```powershell
git branch -M main
```

### שלב 7: פוש ל־GitHub
```powershell
git push -u origin main
```

בפעם הראשונה אולי תתבקש להתחבר ל־GitHub (שם משתמש + token או סיסמה).

---

## קומיטים עתידיים
אחרי ש־`origin` מחובר פעם אחת:

```powershell
cd "c:\Users\User\Downloads\אתר בינה מלאכותית ללימוד"
git add -A
git commit -m "ההודעה שלך"
git push
```

