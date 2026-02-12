@echo off
echo ========================================
echo Pushing Cinema Booking Page to GitHub
echo Repository: bookmyreel
echo ========================================
echo.

cd /d e:\AntiGravity

echo Step 1: Initializing Git repository...
git init

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Creating initial commit...
git commit -m "Initial commit: Premium cinema booking landing page with latest 2026 movies"

echo.
echo Step 4: Setting branch to main...
git branch -M main

echo.
echo Step 5: Adding remote repository...
git remote add origin https://github.com/manojkumaras0-coder/bookmyreel.git

echo.
echo Step 6: Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo Done! Your site should be live at:
echo https://manojkumaras0-coder.github.io/bookmyreel/
echo ========================================
echo.
echo To enable GitHub Pages:
echo 1. Go to: https://github.com/manojkumaras0-coder/bookmyreel/settings/pages
echo 2. Under Source, select 'main' branch
echo 3. Click Save
echo 4. Wait 1-2 minutes for deployment
echo.
pause
