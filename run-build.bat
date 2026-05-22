@echo off
cd /d C:\Users\draks\Downloads\portfolio

echo Step 2: Deleting app\page.tsx
del app\page.tsx

echo Step 3: Renaming app\page-fixed.tsx to app\page.tsx
ren app\page-fixed.tsx page.tsx

echo Step 2 and 3 Complete - File replacement done
dir app\page*

echo.
echo Step 4: Running npm run build
call npm run build

echo.
echo Build complete. If successful, run: npm run dev
