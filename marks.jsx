/* global React */
// ReSpawn Foundation — mark system
// All marks are pure SVG, parameterized by color so they re-skin instantly.

const C = {
  navy: 'var(--navy)',
  red: 'var(--red)',
  white: 'var(--soft-white)',
  mist: 'var(--mist)',
  graphite: 'var(--graphite)',
};

// ───────────────────────────────────────────────
// Portal Icon — concentric rings + node
// ───────────────────────────────────────────────
function PortalMark({ size = 96, ring = C.navy, inner = C.red, dot = C.navy, bg = 'transparent' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" style={{ display: 'block' }}>
      {bg !== 'transparent' && <rect width="96" height="96" rx="18" fill={bg} />}
      {/* outer ring */}
      <circle cx="48" cy="48" r="34" fill="none" stroke={ring} strokeWidth="5" />
      {/* inner ring */}
      <circle cx="48" cy="48" r="20" fill="none" stroke={inner} strokeWidth="5" />
      {/* center node */}
      <circle cx="48" cy="48" r="6" fill={dot} />
      {/* respawn tick marks — 12, 3, 6, 9 o'clock */}
      <g stroke={ring} strokeWidth="5" strokeLinecap="round">
        <line x1="48" y1="6" x2="48" y2="12" />
        <line x1="90" y1="48" x2="84" y2="48" />
        <line x1="48" y1="90" x2="48" y2="84" />
        <line x1="6" y1="48" x2="12" y2="48" />
      </g>
    </svg>
  );
}

// Portal — solid badge variant (for square avatars / app icons)
function PortalBadge({ size = 96, bg = C.navy, ring = C.white, inner = C.red, dot = C.white }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" style={{ display: 'block' }}>
      <rect width="96" height="96" rx="20" fill={bg} />
      <circle cx="48" cy="48" r="30" fill="none" stroke={ring} strokeWidth="4" opacity="0.4" />
      <circle cx="48" cy="48" r="22" fill="none" stroke={ring} strokeWidth="4" />
      <circle cx="48" cy="48" r="12" fill="none" stroke={inner} strokeWidth="4" />
      <circle cx="48" cy="48" r="4" fill={dot} />
    </svg>
  );
}

// ───────────────────────────────────────────────
// Mascot — player holding a game controller
// The hero mark. A geometric figure with domed head, red visor,
// holding a simple D-pad + two-button controller out in front.
// ───────────────────────────────────────────────
function MascotMark({ size = 96, body = C.navy, accent = C.red, bg = 'transparent' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" style={{ display: 'block' }}>
      {bg !== 'transparent' && <rect width="96" height="96" rx="18" fill={bg} />}

      {/* soft ground shadow */}
      <ellipse cx="48" cy="88" rx="26" ry="2.5" fill={body} opacity="0.12" />

      {/* head — domed square */}
      <rect x="30" y="10" width="36" height="28" rx="10" fill={body} />
      {/* visor stripe */}
      <rect x="32" y="18" width="32" height="9" rx="2" fill={accent} />
      {/* eyes (subtle) */}
      <circle cx="41" cy="22.5" r="1.7" fill={C.white} />
      <circle cx="55" cy="22.5" r="1.7" fill={C.white} />
      {/* antenna node */}
      <circle cx="48" cy="8" r="2" fill={accent} />
      <line x1="48" y1="10" x2="48" y2="6" stroke={accent} strokeWidth="1.5" />

      {/* torso — rounded, bigger to feel grounded */}
      <path d="M 30 40 Q 30 38 32 38 L 64 38 Q 66 38 66 40 L 66 66 Q 66 70 62 70 L 34 70 Q 30 70 30 66 Z"
            fill={body} />

      {/* shoulders / arms reaching forward to hold controller */}
      {/* left upper arm */}
      <path d="M 30 44 Q 22 46 22 56 Q 22 64 30 64" fill="none" stroke={body} strokeWidth="6.5" strokeLinecap="round" />
      {/* right upper arm */}
      <path d="M 66 44 Q 74 46 74 56 Q 74 64 66 64" fill="none" stroke={body} strokeWidth="6.5" strokeLinecap="round" />

      {/* CONTROLLER — held at chest/stomach level */}
      {/* controller body */}
      <path d="M 24 58
               Q 22 58 22 62
               L 22 66
               Q 22 72 28 72
               L 40 72
               Q 44 70 48 70
               Q 52 70 56 72
               L 68 72
               Q 74 72 74 66
               L 74 62
               Q 74 58 72 58
               Q 66 58 60 60
               L 36 60
               Q 30 58 24 58 Z"
            fill={body} />
      {/* D-pad (left) */}
      <rect x="28" y="64" width="8" height="2.2" rx="0.5" fill={accent} />
      <rect x="30.9" y="61.1" width="2.2" height="8" rx="0.5" fill={accent} />
      {/* two face buttons (right) */}
      <circle cx="62" cy="64" r="1.8" fill={accent} />
      <circle cx="68" cy="67" r="1.8" fill={C.white} opacity="0.9" />

      {/* small 'respawn' particle rising behind head */}
      <circle cx="76" cy="18" r="2" fill={accent} />
      <circle cx="82" cy="10" r="1.2" fill={accent} opacity="0.55" />
    </svg>
  );
}

function MascotBadge({ size = 96, bg = C.navy, body = C.white, accent = C.red }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" style={{ display: 'block' }}>
      <rect width="96" height="96" rx="20" fill={bg} />
      {/* head */}
      <rect x="30" y="14" width="36" height="28" rx="10" fill={body} />
      <rect x="32" y="22" width="32" height="9" rx="2" fill={accent} />
      <circle cx="41" cy="26.5" r="1.7" fill={bg} />
      <circle cx="55" cy="26.5" r="1.7" fill={bg} />
      {/* torso */}
      <path d="M 30 44 Q 30 42 32 42 L 64 42 Q 66 42 66 44 L 66 70 Q 66 74 62 74 L 34 74 Q 30 74 30 70 Z" fill={body} />
      {/* arms */}
      <path d="M 30 48 Q 22 50 22 60 Q 22 68 30 68" fill="none" stroke={body} strokeWidth="6.5" strokeLinecap="round" />
      <path d="M 66 48 Q 74 50 74 60 Q 74 68 66 68" fill="none" stroke={body} strokeWidth="6.5" strokeLinecap="round" />
      {/* controller */}
      <path d="M 24 62 Q 22 62 22 66 L 22 70 Q 22 76 28 76 L 40 76 Q 44 74 48 74 Q 52 74 56 76 L 68 76 Q 74 76 74 70 L 74 66 Q 74 62 72 62 Q 66 62 60 64 L 36 64 Q 30 62 24 62 Z" fill={body} />
      <rect x="28" y="68" width="8" height="2.2" rx="0.5" fill={accent} />
      <rect x="30.9" y="65.1" width="2.2" height="8" rx="0.5" fill={accent} />
      <circle cx="62" cy="68" r="1.8" fill={accent} />
      <circle cx="68" cy="71" r="1.8" fill={bg} />
    </svg>
  );
}

// ───────────────────────────────────────────────
// Wordmark — two-font lockup
// `reFont`: 'bebas' | 'montserrat'
// `variant`: 'horizontal' | 'stacked'
// `tagline`: boolean
// ───────────────────────────────────────────────
function Wordmark({
  reFont = 'bebas',
  variant = 'horizontal',
  tagline = false,
  color = C.navy,
  accent = C.red,
  sub = C.graphite,
  size = 1, // multiplier
  taglineText = 'ENABLING EVERY PLAYER, EVERY GAME',
}) {
  const reFamily = reFont === 'bebas'
    ? "'Bebas Neue', sans-serif"
    : "'Montserrat', sans-serif";
  const reWeight = reFont === 'bebas' ? 400 : 800;
  const reLetter = reFont === 'bebas' ? '0.02em' : '-0.02em';
  // Bebas is tall & narrow; Montserrat needs to be pulled down slightly
  const rePad = reFont === 'bebas' ? 0 : 2;

  const base = 56 * size;
  const foundationSize = 10 * size;
  const taglineSize = 9 * size;

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1 }}>
      <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 0 }}>
        <span style={{
          fontFamily: reFamily,
          fontWeight: reWeight,
          fontSize: base,
          color: accent,
          letterSpacing: reLetter,
          lineHeight: 0.9,
          paddingBottom: rePad,
        }}>RE</span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: base * 0.72,
          color,
          letterSpacing: '-0.01em',
          lineHeight: 0.9,
          marginLeft: base * 0.04,
          textTransform: 'uppercase',
        }}>SPAWN</span>
      </div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400,
        fontSize: foundationSize,
        color: sub,
        letterSpacing: '0.32em',
        marginTop: base * 0.14,
        textTransform: 'uppercase',
      }}>Foundation</div>
      {tagline && (
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: taglineSize,
          color: accent,
          letterSpacing: '0.24em',
          marginTop: base * 0.18,
          textTransform: 'uppercase',
          borderTop: `1px solid ${accent}`,
          paddingTop: base * 0.1,
          width: '100%',
          textAlign: 'left',
        }}>{taglineText}</div>
      )}
    </div>
  );
}

// ───────────────────────────────────────────────
// Full lockup — icon + wordmark together
// ───────────────────────────────────────────────
function Lockup({
  mark = 'portal', // 'portal' | 'mascot'
  reFont = 'bebas',
  tagline = false,
  mode = 'light', // 'light' | 'dark'
  mono = false,
  size = 1,
  orientation = 'horizontal', // 'horizontal' | 'stacked'
}) {
  const isDark = mode === 'dark';
  const bg = isDark ? 'var(--navy)' : 'transparent';
  const wordColor = mono
    ? (isDark ? 'var(--soft-white)' : 'var(--navy)')
    : (isDark ? 'var(--soft-white)' : 'var(--navy)');
  const accent = mono
    ? (isDark ? 'var(--soft-white)' : 'var(--navy)')
    : 'var(--red)';
  const sub = mono
    ? (isDark ? 'rgba(255,255,255,0.65)' : 'var(--graphite)')
    : (isDark ? 'rgba(255,255,255,0.6)' : 'var(--graphite)');

  const markSize = 80 * size;

  const markEl = mark === 'portal'
    ? <PortalMark
        size={markSize}
        ring={mono ? (isDark ? 'var(--soft-white)' : 'var(--navy)') : (isDark ? 'var(--soft-white)' : 'var(--navy)')}
        inner={mono ? (isDark ? 'var(--soft-white)' : 'var(--navy)') : 'var(--red)'}
        dot={mono ? (isDark ? 'var(--soft-white)' : 'var(--navy)') : (isDark ? 'var(--soft-white)' : 'var(--navy)')}
      />
    : <MascotMark
        size={markSize}
        body={mono ? (isDark ? 'var(--soft-white)' : 'var(--navy)') : (isDark ? 'var(--soft-white)' : 'var(--navy)')}
        accent={mono ? (isDark ? 'var(--soft-white)' : 'var(--navy)') : 'var(--red)'}
      />;

  if (orientation === 'stacked') {
    return (
      <div style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16 * size,
        background: bg,
        padding: isDark ? 24 * size : 0,
        borderRadius: isDark ? 8 : 0,
      }}>
        {markEl}
        <Wordmark
          reFont={reFont}
          tagline={tagline}
          color={wordColor}
          accent={accent}
          sub={sub}
          size={size * 0.9}
        />
      </div>
    );
  }

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 18 * size,
      background: bg,
      padding: isDark ? 24 * size : 0,
      borderRadius: isDark ? 8 : 0,
    }}>
      {markEl}
      <Wordmark
        reFont={reFont}
        tagline={tagline}
        color={wordColor}
        accent={accent}
        sub={sub}
        size={size * 0.9}
      />
    </div>
  );
}

Object.assign(window, { PortalMark, PortalBadge, MascotMark, MascotBadge, Wordmark, Lockup });
