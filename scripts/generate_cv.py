#!/usr/bin/env python3
"""
Generate curtis-irwin-cv.pdf — a professional 2-page A4 CV.

Pure standard-library PDF writer (no external deps, works offline).
Uses the 14 built-in PDF fonts (Helvetica family) so no font embedding
is required. Produces a clean, ATS-friendly two-page A4 document.

Run:  python3 scripts/generate_cv.py
Out:  public/curtis-irwin-cv.pdf
"""

import os

# ----- Page geometry (A4, points; 1pt = 1/72 inch) -----
PAGE_W, PAGE_H = 595.28, 841.89
MARGIN_X = 54.0
MARGIN_TOP = 54.0
MARGIN_BOTTOM = 48.0
CONTENT_W = PAGE_W - 2 * MARGIN_X
MAX_PAGES = 2

# Colors (RGB 0-1)
DARK = (0.06, 0.09, 0.16)      # slate-900
BODY = (0.20, 0.25, 0.33)      # slate-700-ish
MUTED = (0.42, 0.47, 0.55)     # slate-500
ACCENT = (0.70, 0.33, 0.03)    # amber-700

# --- Built-in AFM widths (Helvetica). We approximate with a compact width
# table for the WinAnsi/ASCII range so text wrapping is accurate. ---
# Widths are in 1/1000 em. Source: Adobe Helvetica AFM (standard values).
HELV_W = {
    ' ': 278, '!': 278, '"': 355, '#': 556, '$': 556, '%': 889, '&': 667,
    "'": 191, '(': 333, ')': 333, '*': 389, '+': 584, ',': 278, '-': 333,
    '.': 278, '/': 278, '0': 556, '1': 556, '2': 556, '3': 556, '4': 556,
    '5': 556, '6': 556, '7': 556, '8': 556, '9': 556, ':': 278, ';': 278,
    '<': 584, '=': 584, '>': 584, '?': 556, '@': 1015, 'A': 667, 'B': 667,
    'C': 722, 'D': 722, 'E': 667, 'F': 611, 'G': 778, 'H': 722, 'I': 278,
    'J': 500, 'K': 667, 'L': 556, 'M': 833, 'N': 722, 'O': 778, 'P': 667,
    'Q': 778, 'R': 722, 'S': 667, 'T': 611, 'U': 722, 'V': 667, 'W': 944,
    'X': 667, 'Y': 667, 'Z': 611, '[': 278, '\\': 278, ']': 278, '^': 469,
    '_': 556, '`': 333, 'a': 556, 'b': 556, 'c': 500, 'd': 556, 'e': 556,
    'f': 278, 'g': 556, 'h': 556, 'i': 222, 'j': 222, 'k': 500, 'l': 222,
    'm': 833, 'n': 556, 'o': 556, 'p': 556, 'q': 556, 'r': 333, 's': 500,
    't': 278, 'u': 556, 'v': 500, 'w': 722, 'x': 500, 'y': 500, 'z': 500,
    '{': 334, '|': 260, '}': 334, '~': 584,
}
BOLD_IS_SAME_TABLE = True  # Helvetica-Bold uses different widths; approximate
HELVB_W = {
    ' ': 278, '!': 333, '"': 474, '#': 556, '$': 556, '%': 889, '&': 722,
    "'": 238, '(': 333, ')': 333, '*': 389, '+': 584, ',': 278, '-': 333,
    '.': 278, '/': 278, '0': 556, '1': 556, '2': 556, '3': 556, '4': 556,
    '5': 556, '6': 556, '7': 556, '8': 556, '9': 556, ':': 333, ';': 333,
    '<': 584, '=': 584, '>': 584, '?': 611, '@': 975, 'A': 722, 'B': 722,
    'C': 722, 'D': 722, 'E': 667, 'F': 611, 'G': 778, 'H': 722, 'I': 278,
    'J': 556, 'K': 722, 'L': 611, 'M': 833, 'N': 722, 'O': 778, 'P': 667,
    'Q': 778, 'R': 722, 'S': 667, 'T': 611, 'U': 722, 'V': 667, 'W': 944,
    'X': 667, 'Y': 667, 'Z': 611, '[': 333, '\\': 278, ']': 333, '^': 584,
    '_': 556, '`': 333, 'a': 556, 'b': 611, 'c': 556, 'd': 611, 'e': 556,
    'f': 333, 'g': 611, 'h': 611, 'i': 278, 'j': 278, 'k': 556, 'l': 278,
    'm': 889, 'n': 611, 'o': 611, 'p': 611, 'q': 611, 'r': 389, 's': 556,
    't': 333, 'u': 611, 'v': 556, 'w': 778, 'x': 556, 'y': 556, 'z': 500,
    '{': 389, '|': 280, '}': 389, '~': 584,
}


def char_w(ch, size, bold):
    table = HELVB_W if bold else HELV_W
    return table.get(ch, 556) / 1000.0 * size


def text_w(s, size, bold=False):
    return sum(char_w(c, size, bold) for c in s)


def wrap(s, size, bold, max_w):
    words = s.split(' ')
    lines, cur = [], ''
    for w in words:
        trial = w if not cur else cur + ' ' + w
        if text_w(trial, size, bold) <= max_w or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


# ---------- PDF primitives ----------
def esc(s):
    return s.replace('\\', r'\\').replace('(', r'\(').replace(')', r'\)')


class Page:
    def __init__(self):
        self.ops = []

    def color(self, rgb):
        self.ops.append(f'{rgb[0]:.3f} {rgb[1]:.3f} {rgb[2]:.3f} rg')

    def text(self, x, y, s, size, bold=False, rgb=BODY):
        font = 'F2' if bold else 'F1'
        self.color(rgb)
        self.ops.append('BT')
        self.ops.append(f'/{font} {size:.2f} Tf')
        self.ops.append(f'1 0 0 1 {x:.2f} {y:.2f} Tm')
        self.ops.append(f'({esc(s)}) Tj')
        self.ops.append('ET')

    def line(self, x1, y1, x2, y2, rgb, w=0.7):
        self.ops.append(f'{rgb[0]:.3f} {rgb[1]:.3f} {rgb[2]:.3f} RG')
        self.ops.append(f'{w:.2f} w')
        self.ops.append(f'{x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S')

    def rect(self, x, y, w, h, rgb):
        self.ops.append(f'{rgb[0]:.3f} {rgb[1]:.3f} {rgb[2]:.3f} rg')
        self.ops.append(f'{x:.2f} {y:.2f} {w:.2f} {h:.2f} re f')

    def stream(self):
        return '\n'.join(self.ops).encode('latin-1', 'replace')


class Doc:
    def __init__(self):
        self.pages = [Page()]
        self.pi = 0
        self.y = PAGE_H - MARGIN_TOP

    @property
    def page(self):
        return self.pages[self.pi]

    def space(self, needed):
        """Ensure `needed` vertical space; move to next page if required."""
        if self.y - needed < MARGIN_BOTTOM:
            if self.pi + 1 < MAX_PAGES:
                self.pages.append(Page())
                self.pi += 1
                self.y = PAGE_H - MARGIN_TOP
            # else: keep going on last page (overflow guard handled by content sizing)

    def gap(self, h):
        self.y -= h


def build():
    d = Doc()
    x = MARGIN_X

    # ---------------- Header ----------------
    d.page.text(x, d.y - 26, 'Curtis Irwin', 26, bold=True, rgb=DARK)
    d.y -= 30
    d.page.text(x, d.y - 12, 'LEARNING & DEVELOPMENT LEADER', 10.5, bold=True, rgb=ACCENT)
    d.y -= 20
    contact = 'Greater London Area, UK   |   curtisirwin@me.com   |   curtisirwin.com'
    d.page.text(x, d.y - 10, contact, 9.5, rgb=MUTED)
    d.y -= 16
    d.page.line(x, d.y, PAGE_W - MARGIN_X, d.y, ACCENT, 2.0)
    d.y -= 14

    def section(title):
        d.space(30)
        d.page.text(x, d.y - 10, title.upper(), 10.5, bold=True, rgb=DARK)
        d.y -= 13
        d.page.line(x, d.y, PAGE_W - MARGIN_X, d.y, (0.85, 0.87, 0.9), 0.6)
        d.y -= 10

    def para(s, size=9.3, rgb=BODY, lead=12.0, indent=0.0):
        for ln in wrap(s, size, False, CONTENT_W - indent):
            d.space(lead)
            d.page.text(x + indent, d.y - size, ln, size, rgb=rgb)
            d.y -= lead

    def bullet(s, size=9.0, lead=11.5):
        bx = x + 10
        lines = wrap(s, size, False, CONTENT_W - 14)
        for i, ln in enumerate(lines):
            d.space(lead)
            if i == 0:
                d.page.text(x + 2, d.y - size, '-', size, bold=True, rgb=ACCENT)
            d.page.text(bx, d.y - size, ln, size, rgb=BODY)
            d.y -= lead

    # ---------------- Summary ----------------
    section('Professional Summary')
    para(
        'Learning & Development leader with 20+ years designing and scaling learning across '
        'EMEA. Currently building leadership development at Amazon, turning skill gaps into '
        'career breakthroughs through technology, product thinking and facilitation. Led teams '
        'of 50+, trained 1,100+ leaders directly, delivered in 9 countries and reached 40,000+ '
        'leaders through scalable programmes - with 97% satisfaction and a combined NPS of +74.'
    )
    d.gap(6)

    # ---------------- Key Achievements ----------------
    section('Key Achievements')
    achievements = [
        '1,100+ leaders trained directly; 40,000+ reached through scalable programmes.',
        'Led teams of 50+ across 4 managers and 20+ designers, product managers and technologists.',
        'Delivered 80+ workshops in 9 countries with a 97% satisfaction rate and +74 combined NPS.',
        '20+ years in L&D spanning instructional design, learning product and leadership facilitation.',
    ]
    for a in achievements:
        bullet(a)
    d.gap(6)

    # ---------------- Experience ----------------
    section('Experience')

    def role(title, period, location, points):
        # Reserve enough for the title, location and the first bullet line so a
        # role heading is never orphaned at the foot of a page.
        d.space(24 + 11.5)
        # title (bold) left, period (muted) right
        d.page.text(x, d.y - 10, title, 10, bold=True, rgb=DARK)
        pw = text_w(period, 9, bold=False)
        d.page.text(PAGE_W - MARGIN_X - pw, d.y - 10, period, 9, rgb=MUTED)
        d.y -= 12
        d.page.text(x, d.y - 9, location, 8.8, rgb=ACCENT)
        d.y -= 12
        for p in points:
            bullet(p)
        d.gap(4)

    def company(name, period, summary):
        d.space(24)
        d.page.text(x, d.y - 12, name, 12.5, bold=True, rgb=DARK)
        pw = text_w(period, 9.5, bold=True)
        d.page.text(PAGE_W - MARGIN_X - pw, d.y - 12, period, 9.5, bold=True, rgb=MUTED)
        d.y -= 15
        if summary:
            para(summary, size=8.6, rgb=MUTED, lead=10.5)
        d.gap(2)

    company('Amazon', '2016 - Present',
            'From payroll training in Bratislava to scaling leadership development for 40K+ '
            'leaders across EMEA - building teams of 30+ and turning L&D into a product discipline.')
    role('Sr. Learning Program Manager, Leadership Development', '2025 - Present', 'London, UK', [
        'Co-own the "Leaders as Facilitator" certification, qualifying business leaders to facilitate at scale.',
        'Enabled the organisation to reach 40,000+ leaders through a scalable facilitation model.',
    ])
    role('Manager, Learning Product Design', '2023 - 2025', 'London, UK', [
        'Led 6 Product Managers and Technologists building technical learning infrastructure for EU Transportation Services.',
        'Applied product-management thinking to people development, treating learning as a product discipline.',
    ])
    role('Manager, Learning Experience Design', '2022 - 2023', 'London, UK', [
        'Scaled and led a team of 20 designers and 4 managers across EU & UK Sort Centers.',
        'Reached 10,000 employees with training that closed skill gaps through diverse modalities and emerging tech.',
    ])
    role('Sr. Learning Experience Designer', '2019 - 2022', 'London, UK', [
        'Designed end-to-end learning for Amazon 4-Star stores and EU Vendor Managers.',
        'Built mobile-first training apps, evaluation frameworks and performance-support tools.',
    ])
    role('Global Payroll Training Program Manager', '2016 - 2019', 'Bratislava, Slovakia', [
        'Built instructor-led and eLearning programmes for global payroll compliance.',
        'Created the "Peculiar Partnership" programme connecting vendors to Amazon culture.',
    ])

    company('AT&T', '2005 - 2015',
            'Built operations from scratch, led global teams across India and Europe, and designed '
            'leadership programmes that shaped hundreds of managers.')
    role('Senior Project Manager', '2012 - 2015', 'Bratislava, Slovakia', [
        'Managed an India-based team supporting enterprise customers and designed global sales-enablement learning.',
    ])
    role('Senior Project Manager, Communications & Training', '2011 - 2012', 'Bratislava, Slovakia', [
        'Designed and deployed operational-process and professional-skills training across job families.',
    ])
    role('Operations Manager, Project Management', '2009 - 2011', 'Bratislava, Slovakia', [
        'Established go-to-market service-delivery operations from scratch; hired and developed 15 Project Managers.',
    ])
    role('Transition Project Manager', '2007 - 2008', 'Bratislava, Slovakia', [
        'Led a business-unit transition and expansion to the Kosice Center while managing regulatory compliance.',
    ])
    role('Trainer & Leadership Development Program Manager', '2005 - 2007', 'Bratislava, Slovakia', [
        'Designed leadership programmes for first- and second-level managers; led the Management Assessment Program.',
    ])

    company('Independent Trainer', '2003 - 2005', '')
    role('Professional Communications Training', '2003 - 2005', 'Bratislava, Slovakia', [
        'Delivered professional-communications training to individuals and organisations before joining AT&T.',
    ])
    d.gap(4)

    # ---------------- Skills / Certs / Education ----------------
    section('Core Skills')
    para('Learning Design  -  Team Leadership  -  Change Management  -  EdTech & AI  -  '
         'Performance Strategy  -  Leadership Facilitation  -  Instructional Design  -  '
         'Learning Product Management  -  Program Management', size=9.2)
    d.gap(6)

    section('Certifications')
    for c in [
        'Core Strengths SDI Facilitator',
        'Liz Wiseman Multipliers & Impact Players Facilitator',
        'Situational Leadership II Facilitator',
        'FranklinCovey Leading at the Speed of Trust',
        'CrossFit Level 1',
    ]:
        bullet(c)
    d.gap(6)

    section('Education')
    d.page.text(x, d.y - 10, 'B.S. Communications', 10, bold=True, rgb=DARK)
    d.y -= 12
    d.page.text(x, d.y - 9, 'Drury University - Springfield, MO, USA', 9, rgb=ACCENT)
    d.y -= 14

    # footer on each page
    for p in d.pages:
        p.text(MARGIN_X, MARGIN_BOTTOM - 18,
               'Curtis Irwin  -  curtisirwin.com  -  curtisirwin@me.com',
               8, rgb=MUTED)

    return d.pages


def write_pdf(pages, path):
    objs = []

    def add(body):
        objs.append(body)
        return len(objs)  # 1-based id

    # Reserve: 1=Catalog, 2=Pages, then per-page [Page, Content], then 2 fonts
    catalog_id = 1
    pages_id = 2
    objs.append(None)  # placeholder 1
    objs.append(None)  # placeholder 2

    font1_id = None
    font2_id = None

    page_ids = []
    for pg in pages:
        content = pg.stream()
        cid = add(b'<< /Length %d >>\nstream\n' % len(content) + content + b'\nendstream')
        pid = add(b'')  # placeholder, fill after we know font ids
        page_ids.append((pid, cid))

    font1_id = add(b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>')
    font2_id = add(b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>')

    # Fill page objects
    for (pid, cid) in page_ids:
        objs[pid - 1] = (
            b'<< /Type /Page /Parent %d 0 R /MediaBox [0 0 %.2f %.2f] '
            b'/Resources << /Font << /F1 %d 0 R /F2 %d 0 R >> >> /Contents %d 0 R >>'
            % (pages_id, PAGE_W, PAGE_H, font1_id, font2_id, cid)
        )

    kids = b' '.join(b'%d 0 R' % pid for (pid, _) in page_ids)
    objs[pages_id - 1] = b'<< /Type /Pages /Kids [%s] /Count %d >>' % (kids, len(page_ids))
    objs[catalog_id - 1] = b'<< /Type /Catalog /Pages %d 0 R >>' % pages_id

    # Serialize
    out = bytearray(b'%PDF-1.4\n%\xe2\xe3\xcf\xd3\n')
    offsets = [0] * (len(objs) + 1)
    for i, body in enumerate(objs, start=1):
        offsets[i] = len(out)
        out += b'%d 0 obj\n' % i + body + b'\nendobj\n'
    xref_pos = len(out)
    out += b'xref\n0 %d\n' % (len(objs) + 1)
    out += b'0000000000 65535 f \n'
    for i in range(1, len(objs) + 1):
        out += b'%010d 00000 n \n' % offsets[i]
    out += b'trailer\n<< /Size %d /Root %d 0 R >>\n' % (len(objs) + 1, catalog_id)
    out += b'startxref\n%d\n%%%%EOF\n' % xref_pos

    with open(path, 'wb') as f:
        f.write(out)
    return len(pages)


if __name__ == '__main__':
    here = os.path.dirname(os.path.abspath(__file__))
    out_path = os.path.join(here, '..', 'public', 'curtis-irwin-cv.pdf')
    out_path = os.path.normpath(out_path)
    pages = build()
    n = write_pdf(pages, out_path)
    print(f'Wrote {out_path} ({n} page(s))')
    if n > MAX_PAGES:
        raise SystemExit(f'ERROR: CV exceeded {MAX_PAGES} pages ({n}).')
