/* global React, PortalMark, MascotMark, PortalBadge, MascotBadge, Wordmark, Lockup */

// ───────────────────────────────────────────────
// Business Card — 3.5" x 2" @ 240dpi preview scale (≈ 420 × 240 px on screen)
// ───────────────────────────────────────────────
function BusinessCardFront({ mark = 'portal', reFont = 'bebas' }) {
  return (
    <div className="card card--front">
      <div className="card__inner">
        <Lockup mark={mark} reFont={reFont} orientation="stacked" tagline={false} size={0.85} />
      </div>
      <div className="card__corner-mark" aria-hidden="true" />
    </div>
  );
}

function BusinessCardBack({ mark = 'portal' }) {
  return (
    <div className="card card--back">
      <div className="card__back-grid">
        <div className="card__back-left">
          <div className="card__name">Andy J. Wu, PhD, OT</div>
          <div className="card__title">Founder &amp; CEO</div>
          <div className="card__divider" />
          <div className="card__contact">andy@respawnfoundation.org</div>
          <div className="card__contact">www.respawnfoundation.org</div>
          <div className="card__tagline">Enabling Every Player, Every Game</div>
        </div>
        <div className="card__back-right">
          <div className="card__qr" aria-hidden="true">
            {/* placeholder QR */}
            <svg width="56" height="56" viewBox="0 0 56 56">
              <rect width="56" height="56" fill="var(--soft-white)" />
              {Array.from({ length: 8 }).map((_, r) =>
                Array.from({ length: 8 }).map((_, c) => {
                  const on = (r * 7 + c * 3) % 5 < 2 || (r === 0 && c < 3) || (r < 3 && c === 0) || (r === 7 && c > 4);
                  return on ? <rect key={`${r}-${c}`} x={c * 7} y={r * 7} width="6" height="6" fill="var(--navy)" /> : null;
                })
              )}
            </svg>
          </div>
          <div className="card__qr-label">scan</div>
        </div>
      </div>
      <div className="card__back-mark">
        {mark === 'portal'
          ? <PortalMark size={28} ring="var(--soft-white)" inner="var(--red)" dot="var(--soft-white)" />
          : <MascotMark size={28} body="var(--soft-white)" accent="var(--red)" />}
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────
// T-shirt — simple flat mockup in SVG
// ───────────────────────────────────────────────
function Tshirt({ color = 'navy', option = 'A', mark = 'portal', reFont = 'bebas' }) {
  const isNavy = color === 'navy';
  const shirtFill = isNavy ? 'var(--navy)' : 'var(--soft-white)';
  const stroke = isNavy ? 'rgba(255,255,255,0.08)' : 'rgba(13,31,60,0.12)';
  const bodyColor = isNavy ? 'var(--soft-white)' : 'var(--navy)';
  const subColor = isNavy ? 'rgba(255,255,255,0.75)' : 'var(--graphite)';

  return (
    <div className="tee">
      <div className="tee__canvas">
        <svg viewBox="0 0 400 440" width="100%" style={{ display: 'block' }}>
          {/* shirt silhouette */}
          <path
            d="M 80 60
               L 150 40
               Q 175 75 200 75
               Q 225 75 250 40
               L 320 60
               L 360 140
               L 310 160
               L 310 420
               L 90 420
               L 90 160
               L 40 140 Z"
            fill={shirtFill}
            stroke={stroke}
            strokeWidth="1.5"
          />
          <path d="M 150 40 Q 200 90 250 40" fill="none"
                stroke={isNavy ? 'rgba(255,255,255,0.15)' : 'rgba(13,31,60,0.2)'} strokeWidth="2" />
          <path d="M 90 160 L 90 420" stroke={stroke} strokeWidth="1" fill="none" />
          <path d="M 310 160 L 310 420" stroke={stroke} strokeWidth="1" fill="none" />

          {/* OPTION A — left chest mark */}
          {option === 'A' && (
            <g transform="translate(135, 130)">
              <foreignObject x="0" y="0" width="56" height="56">
                <MascotMark size={56} body={bodyColor} accent="var(--red)" />
              </foreignObject>
            </g>
          )}

          {/* OPTION B — large centered wordmark */}
          {option === 'B' && (
            <g transform="translate(200, 230)" textAnchor="middle">
              <text
                x="0" y="0"
                fontFamily={reFont === 'bebas' ? 'Bebas Neue, sans-serif' : 'Montserrat, sans-serif'}
                fontWeight={reFont === 'bebas' ? 400 : 800}
                fontSize="64"
                fill="var(--red)"
                letterSpacing={reFont === 'bebas' ? '1' : '-1'}
              >
                <tspan>RE</tspan>
                <tspan fill={bodyColor} fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="48" dx="2">SPAWN</tspan>
              </text>
              <text x="0" y="22"
                    fontFamily="DM Sans, sans-serif"
                    fontWeight="400"
                    fontSize="9"
                    letterSpacing="3"
                    fill={subColor}>
                FOUNDATION
              </text>
              <line x1="-72" y1="38" x2="72" y2="38" stroke="var(--red)" strokeWidth="1" />
              <text x="0" y="52"
                    fontFamily="DM Sans, sans-serif"
                    fontWeight="500"
                    fontSize="9"
                    letterSpacing="2.4"
                    fill="var(--red)">
                ENABLING EVERY PLAYER, EVERY GAME
              </text>
            </g>
          )}
        </svg>
      </div>

      <div className="tee__label">
        <span>{isNavy ? 'Navy' : 'White'}</span>
        <span>·</span>
        <span>Option {option}</span>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────
// Social avatar (square badge) + cover banner
// ───────────────────────────────────────────────
function Avatar({ mark = 'portal', bg = 'navy' }) {
  const bgColor = bg === 'navy' ? 'var(--navy)' : 'var(--soft-white)';
  const isNavy = bg === 'navy';
  return (
    <div className="avatar">
      <div className="avatar__img" style={{ background: bgColor }}>
        {mark === 'portal'
          ? <PortalMark size={80} ring={isNavy ? 'var(--soft-white)' : 'var(--navy)'} inner="var(--red)" dot={isNavy ? 'var(--soft-white)' : 'var(--navy)'} />
          : <MascotMark size={80} body={isNavy ? 'var(--soft-white)' : 'var(--navy)'} accent="var(--red)" />}
      </div>
      <div className="avatar__label">@respawnfoundation</div>
    </div>
  );
}

function SocialCover({ mark = 'portal', reFont = 'bebas' }) {
  return (
    <div className="cover">
      <div className="cover__bg">
        {/* decorative rings */}
        <svg className="cover__rings" viewBox="0 0 820 300" preserveAspectRatio="none">
          <circle cx="720" cy="150" r="160" fill="none" stroke="rgba(230,57,70,0.18)" strokeWidth="1.5" />
          <circle cx="720" cy="150" r="110" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          <circle cx="720" cy="150" r="60" fill="none" stroke="rgba(230,57,70,0.28)" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="cover__content">
        <Lockup mark={mark} reFont={reFont} mode="dark" orientation="horizontal" tagline={true} size={0.8} />
      </div>
      <div className="cover__meta">
        <span>Cover · 820 × 312</span>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────
// One-pager layout preview
// ───────────────────────────────────────────────
function OnePager({ mark = 'portal', reFont = 'bebas' }) {
  return (
    <div className="onepager">
      <div className="onepager__header">
        <Lockup mark={mark} reFont={reFont} orientation="horizontal" tagline={false} size={0.5} />
        <div className="onepager__meta">DONOR BRIEF · 2026</div>
      </div>

      <div className="onepager__hero">
        <div className="onepager__hero-text">
          <div className="onepager__eyebrow">A 501(c)(3) clinician-led nonprofit</div>
          <h1 className="onepager__h1">Adaptive gaming,<br />delivered where healing happens.</h1>
          <p className="onepager__lede">
            ReSpawn Foundation integrates adaptive gaming programs into rehabilitation hospitals —
            giving patients with physical disabilities a way back into the games, teams, and lives they love.
          </p>
        </div>
        <div className="onepager__hero-img ph">
          <span>photo · patient + adapted controller</span>
        </div>
      </div>

      <div className="onepager__stats">
        <div className="stat"><div className="stat__num">12</div><div className="stat__label">Partner rehab hospitals</div></div>
        <div className="stat"><div className="stat__num">1,400+</div><div className="stat__label">Patients served</div></div>
        <div className="stat"><div className="stat__num">38</div><div className="stat__label">Clinicians trained</div></div>
      </div>

      <div className="onepager__body">
        <div>
          <h3>The problem</h3>
          <p>For patients recovering from spinal cord injury, stroke, and amputation, rehab is often the moment play disappears. Standard equipment doesn't fit. Peer connection thins. Motivation dips at the exact point it's needed most.</p>
        </div>
        <div>
          <h3>Our approach</h3>
          <p>We embed adaptive gaming stations — with clinician-designed protocols — directly into inpatient and outpatient rehab. Occupational and physical therapists use play as a clinical modality, measured and documented.</p>
        </div>
        <div>
          <h3>What's next</h3>
          <p>Expanding to 25 partner hospitals by end of 2027, publishing open protocols for the field, and growing our clinician fellowship to 60 OTs and PTs trained in adaptive gaming practice.</p>
        </div>
      </div>

      <div className="onepager__footer">
        <div className="onepager__tagline">Enabling Every Player, Every Game</div>
        <div className="onepager__contact">andy@respawnfoundation.org &nbsp;·&nbsp; respawnfoundation.org</div>
      </div>
    </div>
  );
}

Object.assign(window, { BusinessCardFront, BusinessCardBack, Tshirt, Avatar, SocialCover, OnePager });
