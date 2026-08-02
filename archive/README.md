# EvoFlux downloads

This directory is the source of downloadable artifacts published by the website.

- `extension/EvoFlux-WebBridge.zip` — packaged Chrome/Edge WebBridge extension.
- `package/macos-silicon/` — reserved for Apple silicon desktop packages.
- `package/macos-intel/` — reserved for Intel Mac desktop packages.
- `package/window/` — reserved for Windows desktop packages.

The production installers are hosted as public GitHub Release assets in `morphai-lab/evoflux-page` because their files exceed the GitHub Pages repository size limit. The website download cards point to the verified `v0.0.3` release.

Keep these filenames stable. The website links directly to them, so replacing a
file and rebuilding the site updates the download without changing page code.
