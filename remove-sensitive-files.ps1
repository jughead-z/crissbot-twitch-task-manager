# PowerShell script to remove sensitive files from git tracking
# Run this script if you have sensitive files already tracked in git

Write-Host "🔍 Checking for sensitive files in git tracking..." -ForegroundColor Yellow

# Check if files are tracked
$trackedFiles = git ls-files | Where-Object { $_ -match "tokens\.json|tasks\.json|criss_bot_data\.json" }

if ($trackedFiles) {
    Write-Host "❌ Found sensitive files tracked in git:" -ForegroundColor Red
    $trackedFiles | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
    
    Write-Host "`n🗑️ Removing from git tracking (files will remain locally)..." -ForegroundColor Yellow
    $trackedFiles | ForEach-Object {
        git rm --cached $_
        Write-Host "  ✓ Removed $_ from tracking" -ForegroundColor Green
    }
    
    Write-Host "`n✅ Sensitive files removed from git tracking!" -ForegroundColor Green
    Write-Host "💡 The files still exist locally but won't be pushed to GitHub" -ForegroundColor Cyan
} else {
    Write-Host "✅ No sensitive files found in git tracking" -ForegroundColor Green
}

Write-Host "`n📋 Current .gitignore entries for sensitive files:" -ForegroundColor Cyan
Write-Host "  - tokens.json" -ForegroundColor White
Write-Host "  - tasks.json" -ForegroundColor White
Write-Host "  - criss_bot_data.json" -ForegroundColor White
Write-Host "  - bot/data/*.json" -ForegroundColor White
Write-Host "  - criss_bot/data/*.json" -ForegroundColor White

Write-Host "`n🎯 Your sensitive files are now protected from being pushed to GitHub!" -ForegroundColor Green 