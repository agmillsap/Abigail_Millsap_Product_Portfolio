#!/usr/bin/env python3
"""One-time source-level anonymization of market NAM identities.

The portfolio is intentionally stored as 14 UTF-8 byte fragments of one HTML
document, with two embedded gzip+base64 demo payloads. Rebuild only the
Market Opportunity payload so raw employee identities are not distributed
inside publicly downloadable fragments.
"""
from pathlib import Path
import base64
import gzip
import json
import re

parts_dir = Path("docs/parts")
files = [parts_dir / f"{i:02d}.part" for i in range(14)]
assert all(f.is_file() for f in files), "All 14 portfolio fragments are required"
source = b"".join(f.read_bytes() for f in files)
market_match = re.search(
    rb"(market:\{title:'Market Opportunity Navigator',data:')([A-Za-z0-9+/=]+)(')",
    source,
)
assert market_match, "Embedded Market Opportunity payload not found"
market_html = gzip.decompress(base64.b64decode(market_match.group(2)))
roster_match = re.search(rb'"nam_options"\s*:\s*(\[[^\]]*\])', market_html)
assert roster_match, "Cannot identify NAM roster in underlying data"
names = json.loads(roster_match.group(1).decode("utf-8"))
assert isinstance(names, list) and len(names) == 6 and len(set(names)) == 6
assert all(isinstance(n, str) and n.strip() for n in names)
if all(re.fullmatch(r"National AM \d+", n) for n in names):
    print("Published Market Opportunity source is already anonymized.")
    raise SystemExit(0)
assert not any(re.fullmatch(r"National AM \d+", n) for n in names), "Partial redaction detected"

cleaned = market_html
replacement_count = 0
for index, name in sorted(enumerate(names, 1), key=lambda item: len(item[1]), reverse=True):
    old = name.encode("utf-8")
    occurrences = cleaned.count(old)
    assert occurrences > 0, "Expected NAM identity missing from payload"
    replacement_count += occurrences
    cleaned = cleaned.replace(old, f"National AM {index}".encode("utf-8"))
assert all(name.encode("utf-8") not in cleaned for name in names)
updated_payload = base64.b64encode(gzip.compress(cleaned, compresslevel=9, mtime=0))
assert gzip.decompress(base64.b64decode(updated_payload)) == cleaned
updated_source = (
    source[:market_match.start(2)] +
    updated_payload +
    source[market_match.end(2):]
)
chunks = [updated_source[i:i + 600_000] for i in range(0, len(updated_source), 600_000)]
assert len(chunks) == len(files), "Unexpected portfolio fragment count"
for path, chunk in zip(files, chunks):
    chunk.decode("utf-8")
    if path.read_bytes() != chunk:
        path.write_bytes(chunk)
print(f"Sanitized {len(names)} NAM identities across {replacement_count} source occurrences.")
