from pathlib import Path
import re

root = Path(__file__).resolve().parent
html_files = sorted(root.rglob('*.html'))
missing = []

for html in html_files:
    text = html.read_text(encoding='utf-8')
    refs = re.findall(r'(?:href|src)=["\']([^"\']+)["\']', text, flags=re.I)
    for ref in refs:
        if ref.startswith(('http://', 'https://', 'mailto:', 'tel:', '#', 'javascript:')):
            continue
        target = root / ref.lstrip('/') if ref.startswith('/') else (html.parent / ref)
        if not target.exists():
            missing.append((html.relative_to(root).as_posix(), ref))

if missing:
    print('BROKEN LINKS FOUND:')
    for item in missing:
        print(item)
    raise SystemExit(1)

print(f'Checked {len(html_files)} HTML pages. No broken local links found.')
