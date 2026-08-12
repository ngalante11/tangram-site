# Tangram Ad Kit (in-repo)

Social ads built in the **real Tangram Design System** style (from `Tangram Design System/`,
the "tangram-design" skill). No Canva. This replaces the Canva templates as the visual source.

## Files
- `colors_and_type.css`, `ad-styles.css` — copied from the design system (fonts + `.ad` classes).
- `assets/` — logos, owl, Tan, class photo.
- `ad-*.html` — one self-contained ad per file, authored at 1080 base.

## Render an ad to PNG (headless Chrome — true resolution)
```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1080,1080 --screenshot=out.png "file://$PWD/ad-cost-square.html"
```
Square = `--window-size=1080,1080`; Story = `1080,1920`.

## Concepts available in the source kit (ad-kit/ads.jsx)
A build-once · B Meet Tan · C methodology/owl · D 150-students stat · E/F testimonials.
NEW here: cost-comparison (this file). More to port.
