import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useMemo } from "react";
import { ArrowUpRight, Calendar, Clock, MapPin, Phone, Sparkles } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import paper from "@/assets/ivory-paper.jpg";
import seal from "@/assets/bronze-seal.png";
import floralInvitationBg from "@/assets/floral-invitation-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahal & Nefha — Nikkah Invitation" },
      {
        name: "description",
        content:
          "With faith, love and the blessings of Allah, join us to celebrate the Nikkah of Sahal and Nefha on Saturday, 28 November 2026 at 4:30 PM, Rixos The Palm, Dubai.",
      },
      { property: "og:title", content: "Sahal & Nefha — Nikkah Invitation" },
      {
        property: "og:description",
        content:
          "Celebrate the Nikkah of Sahal and Nefha on Saturday, 28 November 2026 at Rixos The Palm, Dubai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const calendarLink =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sahal+%26+Nefha+%E2%80%94+Nikkah&dates=20261128T163000%2F20261128T193000&ctz=Asia%2FDubai&location=Rixos+The+Palm%2C+Dubai&details=The+Nikkah+Celebration+of+Sahal+and+Nefha.+Ceremony+commences+at+4%3A30+PM+at+Rixos+The+Palm%2C+Dubai.";

function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${(i * 7 + 4) % 94}%`,
        size: 8 + (i % 4) * 3,
        duration: 9 + (i % 5) * 2,
        delay: (i * 0.9) % 6,
        opacity: 0.14 + (i % 4) * 0.08,
        type: i % 3 === 0 ? "sparkle" : "heart",
      })),
    []
  );

  return (
    <div className="floating-particles-container" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className={`floating-particle ${h.type === "sparkle" ? "particle-sparkle" : "particle-heart"}`}
          style={{
            left: h.left,
            width: `${h.size}px`,
            height: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          {h.type === "sparkle" ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
}

function FloralOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`floral-flourish ${className}`} aria-hidden="true">
      <span className="flourish-line" />
      <svg viewBox="0 0 48 18" fill="none" className="flourish-svg">
        <path
          d="M24 9C19 2 12 3 0 9C12 15 19 16 24 9ZM24 9C29 2 36 3 48 9C36 15 29 16 24 9Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="24" cy="9" r="2.2" fill="currentColor" />
      </svg>
      <span className="flourish-line" />
    </div>
  );
}

function Crest() {
  return (
    <div className="crest" aria-hidden="true">
      <svg viewBox="0 0 140 140" fill="none">
        <path
          d="M70 7c12 12 29 7 35 20 14 5 8 24 21 36-13 12-7 32-21 37-6 13-23 8-35 22-12-14-29-9-35-22-14-5-8-25-21-37 13-12 7-31 21-36C41 14 58 19 70 7Z"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M70 17c10 10 26 6 30 18 12 4 7 20 18 28-11 10-6 27-18 31-4 12-20 8-30 19-10-11-26-7-30-19-12-4-7-21-18-31 11-8 6-24 18-28 4-12 20-8 30-18Z"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <circle cx="70" cy="70" r="42" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 3" />
      </svg>
      <span className="crest-monogram">
        <span className="crest-letter">S</span>
        <i className="crest-amp">&</i>
        <span className="crest-letter">N</span>
      </span>
    </div>
  );
}

function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.835.82 2.796.82h.005c3.181 0 5.767-2.586 5.768-5.766 0-1.542-.601-2.992-1.691-4.083-1.09-1.09-2.538-1.706-4.083-1.725zm3.435 8.163c-.144.405-.837.774-1.17.822-.312.043-.706.071-2.272-.577-1.921-.795-3.149-2.753-3.245-2.881-.096-.128-.779-1.036-.779-1.975 0-.939.493-1.401.669-1.593.175-.192.383-.24.511-.24.128 0 .256.002.368.007.118.005.276-.045.431.328.16.384.544 1.327.592 1.424.048.096.08.208.016.336-.064.128-.096.208-.192.32-.096.112-.202.25-.289.336-.096.096-.197.2-.085.392.112.192.497.82 1.066 1.326.732.651 1.349.853 1.541.949.192.096.304.08.416-.048.112-.128.48-.56.608-.752.128-.192.256-.16.432-.096.176.064 1.119.528 1.311.624.192.096.32.144.368.224.048.08.048.464-.096.869z" />
    </svg>
  );
}

function ContactNumberPopover({
  number,
  cleanNumber,
}: {
  number: string;
  cleanNumber: string;
}) {
  const [open, setOpen] = useState(false);
  const telHref = `tel:${cleanNumber}`;
  const waHref = `https://wa.me/${cleanNumber.replace("+", "")}?text=Assalamu%20Alaikum`;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="contact-number-link"
          aria-label={`Contact ${number}`}
        >
          <span className="contact-num-digits">{number}</span>
          <span className="contact-arrow-indicator">▾</span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="center"
        sideOffset={6}
        className="contact-anchored-popover"
      >
        <div className="popover-contact-header">
          <span className="popover-contact-label">Reach Out</span>
        </div>
        <div className="contact-popover-actions">
          <a
            href={telHref}
            className="popover-btn call-action-btn"
            onClick={() => setOpen(false)}
          >
            <Phone className="size-3.5" />
            <span>Call</span>
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="popover-btn whatsapp-action-btn"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon className="size-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function Index() {
  const [stage, setStage] = useState<"closed" | "opening" | "open">("closed");
  const openingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openInvitation() {
    if (stage !== "closed") return;
    setStage("opening");
    const reducedMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    openingTimer.current = setTimeout(
      () => {
        setStage("open");
        window.scrollTo({ top: 0, behavior: "instant" });
      },
      reducedMotion ? 100 : 1600
    );
  }

  return (
    <main className={`invitation ${stage === "open" ? "is-open" : ""}`}>
      {/* Paper texture backdrop */}
      <img className="paper-backdrop" src={paper} width={1024} height={1024} alt="" aria-hidden="true" />
      <div className="ambient-gradient-overlay" aria-hidden="true" />

      {/* Floating Animated Particles */}
      <FloatingHearts />

      {/* STAGE 1: ENVELOPE LANDING PAGE */}
      {stage !== "open" ? (
        <section
          className={`opening-scene ${stage === "opening" ? "opening" : ""}`}
          aria-label="Open your invitation"
        >
          <div className="opening-hero">
            <p className="bismillah-sm" lang="ar" dir="rtl">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p className="eyebrow-hero">AN INVITATION TO CELEBRATE</p>
            <h1 className="opening-title">
              <span className="script-lead">The Nikkah Of</span>
              <span className="names-highlight">
                <span className="name-groom">Sahal</span>
                <span className="name-amp">&</span>
                <span className="name-bride">Nefha</span>
              </span>
            </h1>
            <FloralOrnament className="my-2" />
          </div>

          <div className="envelope-container">
            <div className="envelope-card-shadow" />
            <div className="envelope">
              <div className="envelope-back material-sage" />
              <div className="sliding-card">
                <p className="sliding-bismillah" lang="ar" dir="rtl">
                  بِسْمِ اللَّهِ
                </p>
                <span className="sliding-eyebrow">THE NIKKAH OF</span>
                <span className="sliding-names" lang="ar" dir="rtl">
                  سَهْل <em>وَ</em> نَفْحَة
                </span>
                <span className="sliding-date">28 • 11 • 2026</span>
              </div>
              <div className="envelope-side left material-sage" />
              <div className="envelope-side right material-sage" />
              <div className="envelope-bottom material-sage">
                <span className="envelope-inscription">WITH FAITH, WITH LOVE, WITH YOU</span>
              </div>
              <div className="envelope-flap material-sage">
                <Crest />
              </div>
              <button
                type="button"
                className="seal-button"
                onClick={openInvitation}
                disabled={stage === "opening"}
                aria-label="Open invitation"
                title="Tap seal to open invitation"
              >
                <div className="seal-glow-ring" />
                <img
                  src={seal}
                  alt="Antique bronze wax seal stamped S & N"
                  width={816}
                  height={816}
                  className="seal-image"
                />
              </button>
            </div>
          </div>

          <div className="opening-action">
            <p className="natural-open-hint">
              <span className="hint-pulse-dot" />
              <span>Tap the wax seal to open</span>
              <span className="hint-pulse-dot" />
            </p>
          </div>

          <footer className="opening-footer">
            <p>“And among His signs is that He created for you mates from among yourselves…”</p>
          </footer>
        </section>
      ) : (
        /* STAGE 2: UNFOLDED LUXURY OLIVE FLORAL INVITATION */
        <div className="unfolded-invitation">
          <article className="invitation-card-container">
            {/* Seamless Golden Floral Botanical Watercolor Backdrop */}
            <img src={floralInvitationBg} alt="" className="floral-art-img" aria-hidden="true" />

            {/* Inner Content Layer */}
            <div className="invitation-card-content">
              {/* 1. Arabic Bismillah & English Translation with Small Center Line */}
              <header className="card-top-announcement">
                <p className="bismillah-arabic" lang="ar" dir="rtl">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
                <p className="bismillah-translation">
                  In the Name of Allah, the Most Gracious, the Most Merciful
                </p>
                <div className="bismillah-sep" aria-hidden="true">
                  <span className="bismillah-sep-line" />
                </div>

                {/* 2. Couple Names in Two Distinct Lines */}
                <div className="names-showcase">
                  <h1 className="couple-names-calligraphy">
                    <span className="person-name groom">Sahal</span>
                    <span className="ampersand-badge">
                      <span>&</span>
                    </span>
                    <span className="person-name bride">Nefha</span>
                  </h1>
                </div>
              </header>

              <FloralOrnament className="my-3" />

              {/* 3. Cordial Invitation (From Groom's Parents Perspective) */}
              <section className="cordial-invitation-section" aria-label="Cordial Invitation">
                <div className="cordial-card">
                  <h3 className="cordial-title">We Cordially Invite You</h3>
                  <p className="cordial-text">
                    With hearts full of gratitude to Almighty Allah, we cordially invite you to grace the blessed
                    Nikkah ceremony of our beloved son Sahal with Nefha. Your presence, love, and prayers will
                    make this joyous union truly memorable for our family.
                  </p>
                </div>
              </section>

              <FloralOrnament className="my-3" />

              {/* 4. 3-Column Event Details Row (Date with Add to Calendar, Time, Venue with Map) */}
              <section className="event-details-trio" aria-label="Ceremony Details">
                {/* Date */}
                <div className="trio-item date-trio">
                  <div className="trio-icon-wrap">
                    <Calendar className="size-4 text-amber-700" />
                  </div>
                  <span className="trio-day">Saturday</span>
                  <span className="trio-date-num">28</span>
                  <span className="trio-month-year">NOVEMBER 2026</span>
                  <a
                    href={calendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trio-action-link"
                  >
                    <span>Add to Calendar</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                </div>

                <span className="trio-v-divider" />

                {/* Time */}
                <div className="trio-item time-trio">
                  <div className="trio-icon-wrap">
                    <Clock className="size-4 text-amber-700" />
                  </div>
                  <span className="trio-label">Nikkah Ceremony</span>
                  <span className="trio-time-num">
                    4:30 <span className="time-meridiem">PM</span>
                  </span>
                </div>

                <span className="trio-v-divider" />

                {/* Venue */}
                <div className="trio-item venue-trio">
                  <div className="trio-icon-wrap">
                    <MapPin className="size-4 text-amber-700" />
                  </div>
                  <span className="trio-venue-name">Rixos The Palm</span>
                  <span className="trio-venue-loc">Dubai, United Arab Emirates</span>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Rixos+The+Palm+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trio-action-link"
                  >
                    <span>View on Map</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                </div>
              </section>

              <FloralOrnament className="my-3" />

              {/* 5. Family Details (2 Columns Side-by-Side on all screens) */}
              <section className="family-details-section" aria-label="Family Details">
                <div className="families-grid">
                  {/* Groom's Side (Left) */}
                  <div className="family-column groom-column">
                    <h3 className="member-name">Mohammed Sahal M P</h3>
                    <div className="parents-block">
                      <span className="relation-tag">Son of</span>
                      <p className="parent-names">AK Sameer &amp; Shahida M P</p>
                    </div>
                    <div className="residence-block">
                      <span className="residence-tag">Residence</span>
                      <p className="residence-address">
                        <strong>‘Aqeelas’</strong>
                        <br />
                        Acharath Road, Saidarpally, Thalassery
                      </p>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="family-column-divider">
                    <span className="v-line" />
                    <div className="center-seal-symbol">
                      <span>S</span>
                      <em>&</em>
                      <span>N</span>
                    </div>
                    <span className="v-line" />
                  </div>

                  {/* Bride's Side (Right) */}
                  <div className="family-column bride-column">
                    <h3 className="member-name">Nefha Al Ameen</h3>
                    <div className="parents-block">
                      <span className="relation-tag">Daughter of</span>
                      <p className="parent-names">Al Ameen</p>
                    </div>
                    <div className="residence-block">
                      <span className="residence-tag">Residence</span>
                      <p className="residence-address">
                        <strong>Al Ameen’s Mansion</strong>
                        <br />
                        No. 38, Nad Al Sheba 4, Dubai
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 6. Closing Prayers (No Repeated Names) */}
              <div className="invitation-closing-block">
                <p className="keep-in-duas">Keep us in your heart with duas.</p>
              </div>

              {/* 7. VERY BOTTOM: Compliments, Dua & Contact Details */}
              <footer className="bottom-compliments-section">
                <p className="compliments-heading">WITH BEST COMPLIMENTS FROM</p>
                <p className="compliments-families">AK Family and MP Family</p>

                <div className="joining-block">
                  <p className="joining-label">Joining the invitation:</p>
                  <p className="joining-name">Zayed Akbar</p>
                </div>

                {/* Sunnah Dua Quote: Positioned between Compliments and Contact Details */}
                <div className="duas-quote">
                  <p className="dua-arabic" lang="ar">
                    بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
                  </p>
                  <p className="dua-translation">
                    “May Allah bless you, shower His blessings upon you, and unite you both in goodness.”
                  </p>
                </div>

                {/* Contact Numbers - Interactive Anchored Popover (Call or WhatsApp) */}
                <div className="contact-numbers-wrap">
                  <p className="contact-label">CONTACT DETAILS</p>
                  <div className="contact-items-list">
                    <ContactNumberPopover
                      number="+91 98470 13456"
                      cleanNumber="+919847013456"
                    />
                    <ContactNumberPopover
                      number="+971 56 154 7790"
                      cleanNumber="+971561547790"
                    />
                  </div>
                </div>
              </footer>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
