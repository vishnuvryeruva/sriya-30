#!/usr/bin/env bash
# ============================================================
# One-command update + redeploy.
# Run this any time you change photos (in /images) or text
# (in config.js). It re-syncs photos and pushes to GitHub,
# which auto-updates https://vishnuvryeruva.github.io/sriya-30/
#
#   ./deploy.sh
# ============================================================
set -euo pipefail
cd "$(dirname "$0")"

./sync-photos.sh

git add -A
if git diff --cached --quiet; then
  echo "Nothing changed — site is already up to date."
  exit 0
fi
git commit -m "Update content/photos"
git push
echo ""
echo "Pushed. The site updates in ~1 minute:"
echo "  https://vishnuvryeruva.github.io/sriya-30/"
