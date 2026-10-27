#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
PORT=8052
printf '
VICAR V5.2: http://localhost:%s/index.html?v=5.2

' "$PORT"
python3 -m http.server "$PORT"
