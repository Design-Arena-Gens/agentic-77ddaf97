import Link from "next/link";

const heroBackground =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80";

const featureHighlights = [
  {
    title: "Curated Residences",
    description:
      "Handpicked homes with hotel-level amenities, natural light, and thoughtful interiors."
  },
  {
    title: "Concierge Coordination",
    description:
      "Effortless booking with itinerary assistance, dining reservations, and local insight."
  },
  {
    title: "Trusted Hosts",
    description:
      "Hosts vetted for hospitality, design quality, and verified reviews from discerning travelers."
  }
];

const stays = [
  {
    name: "The Solstice Loft",
    location: "San Francisco, California",
    description:
      "Floor-to-ceiling glass, curated art, and a private terrace overlooking the bay.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Juniper Ridge Retreat",
    location: "Sedona, Arizona",
    description:
      "Calming desert palette with serene spa-like bathrooms and panoramic canyon views.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Atelier Haus",
    location: "Berlin, Germany",
    description:
      "Minimalist loft blending concrete, oak, and bespoke furnishings near the cultural quarter.",
    image:
      "https://images.unsplash.com/photo-1484100356142-db6ab6244067?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <div
          className="hero__image"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <nav className="nav">
            <Link href="/" className="logo">
              Toshi Home
            </Link>
            <div className="nav__links">
              <Link href="#host">List Your Home</Link>
              <Link href="#help">Help</Link>
              <Link href="#signin">Sign In</Link>
            </div>
          </nav>
          <div className="hero__copy">
            <p className="eyebrow">Elevated stays for the modern voyager</p>
            <h1>Curated Homes. Effortless Stays.</h1>
            <p className="subtitle">
              Escape the ordinary with thoughtfully designed residences that
              feel like your own private sanctuary.
            </p>
          </div>
          <form className="search">
            <label>
              <span>Destination</span>
              <input placeholder="Where to next?" type="text" name="destination" />
            </label>
            <label>
              <span>Dates</span>
              <input placeholder="Add dates" type="text" name="dates" />
            </label>
            <label>
              <span>Guests</span>
              <input placeholder="Add guests" type="text" name="guests" />
            </label>
            <button type="submit">Search Toshi Homes</button>
          </form>
        </div>
      </header>

      <section className="section section--features">
        <div className="section__header">
          <h2>Travel Reimagined</h2>
          <p>
            We curate a refined collection of residences designed for those who
            seek calm, quality, and considered experiences everywhere they go.
          </p>
        </div>
        <div className="feature-grid">
          {featureHighlights.map((feature) => (
            <div key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--stays">
        <div className="section__header">
          <h2>Signature Residences</h2>
          <p>
            Discover interiors that balance natural textures, sculptural lines,
            and a sense of tranquil refinement.
          </p>
        </div>
        <div className="stays-grid">
          {stays.map((stay) => (
            <article key={stay.name} className="stay-card">
              <div
                className="stay-card__image"
                style={{ backgroundImage: `url(${stay.image})` }}
              />
              <div className="stay-card__content">
                <div>
                  <h3>{stay.name}</h3>
                  <p className="stay-card__location">{stay.location}</p>
                </div>
                <p>{stay.description}</p>
                <button type="button" className="stay-card__cta">
                  View residence
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--promise" id="help">
        <div className="promise-card">
          <div className="promise-card__content">
            <h2>Our Promise to Guests</h2>
            <p>
              Each stay includes seamless check-in, elevated amenities, curated
              city guides, and 24/7 guest services. We partner with design-led
              homeowners and boutique hospitality teams to ensure every detail
              is intentional.
            </p>
            <div className="promise-card__badges">
              <span>Design Verified</span>
              <span>Concierge Backed</span>
              <span>Carbon Considered</span>
            </div>
          </div>
          <div className="promise-card__image" />
        </div>
      </section>

      <section className="section section--host" id="host">
        <div className="section__header">
          <h2>Host with Toshi Home</h2>
          <p>
            Partner with our hospitality team to showcase your space to a
            discerning global audience. We handle styling, photography, and
            guest experience end-to-end.
          </p>
        </div>
        <div className="host-cta">
          <div>
            <h3>Become a Toshi Host</h3>
            <p>
              Share your residence with guests who appreciate thoughtful design
              and respectful stays.
            </p>
          </div>
          <button type="button">Start the conversation</button>
        </div>
      </section>

      <section className="section section--journal">
        <div className="section__header">
          <h2>Journal &amp; Insights</h2>
          <p>
            Guides to architectural hideaways, design-driven neighborhoods, and
            slow travel itineraries from our editors.
          </p>
        </div>
        <div className="journal-grid">
          <article>
            <h3>Morning rituals in Kyoto townhouses</h3>
            <p>Immerse yourself in tranquil tea ceremonies and garden quietude.</p>
            <a href="#journal">Read the story</a>
          </article>
          <article>
            <h3>Design guide to Copenhagen&apos;s harborside</h3>
            <p>Where to find minimalist cafes, local makers, and hidden courtyards.</p>
            <a href="#journal">Read the story</a>
          </article>
          <article>
            <h3>Architectural escapes in the American Southwest</h3>
            <p>Discover sculptural homes that frame desert horizons like art.</p>
            <a href="#journal">Read the story</a>
          </article>
        </div>
      </section>

      <section className="section section--cta" id="signin">
        <div className="cta-card">
          <div>
            <h2>Let us tailor your next stay</h2>
            <p>
              Create an account to receive preview access to new residences,
              member rates, and curated travel notes.
            </p>
          </div>
          <form className="cta-form">
            <label htmlFor="email">Email</label>
            <div className="cta-input">
              <input
                id="email"
                type="email"
                placeholder="you@domain.com"
                required
              />
              <button type="submit">Join Toshi</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__upper">
          <div className="footer__brand">
            <span className="logo">Toshi Home</span>
            <p>
              Boutique homestays crafted for travelers who appreciate elevated
              design and calm experiences.
            </p>
          </div>
          <div className="footer__links">
            <div>
              <h4>Stay</h4>
              <Link href="#journal">Our Journal</Link>
              <Link href="#help">Guest Services</Link>
              <Link href="#signin">Membership</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link href="#host">Become a Host</Link>
              <Link href="#help">Support</Link>
              <Link href="#help">Contact</Link>
            </div>
          </div>
        </div>
        <div className="footer__lower">
          <span>© {new Date().getFullYear()} Toshi Home. All rights reserved.</span>
          <div className="footer__legal">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Accessibility</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
