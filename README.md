# KWin: Hide Inactive Borders

A KWin script that hides the borders of inactive windows.

## Installation

    git clone https://github.com/Jazqa/kwin-hide-inactive-borders.git
    kpackagetool6 --type=KWin/Script -r hide-inactive-borders || true
    kpackagetool6 --type=KWin/Script -i ./kwin-hide-inactive-borders
    rm -rf ./kwin-hide-inactive-borders

## Uninstallation

    kpackagetool6 --type=KWin/Script -r hide-inactive-borders
