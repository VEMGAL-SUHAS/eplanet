import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NayaraPage = () => {
  return (
    <div className="nayara-container">
      
      {/* 1. HEADER (BOOTSTRAP NAVBAR) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 border-bottom sticky-top">
        <div className="container">
          {/* Brand Logo */}
          <a className="navbar-brand d-flex align-items-center fw-bold text-dark gap-2" href="#home">
            <span className="logo-icon-box">⛽</span>
            <span className="brand-text">Petrol Pump Dealership</span>
          </a>

          {/* Mobile Collapse Button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#nayaraNavbar" 
            aria-controls="nayaraNavbar" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="nayaraNavbar">
            <ul className="navbar-nav ms-auto align-items-center gap-3">
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium" href="#home">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle text-dark fw-medium" 
                  href="#services" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu border-0 shadow-sm">
                  <li><a className="dropdown-item" href="#retail">Retail Outlets</a></li>
                  <li><a className="dropdown-item" href="#franchise">Franchise Models</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium" href="#eligibility">Eligibility</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium" href="#faq">FAQ</a>
              </li>
              <li className="nav-item ms-lg-2">
                <button className="btn btn-primary btn-apply-header px-4 py-2 fw-semibold">
                  Apply Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 2. HERO BANNER */}
      <section className="nayara-hero">
        <div className="container py-5">
          <span className="back-btn">← Back to Services</span>
          <div className="hero-tags mt-2">
            <span className="badge bg-white text-danger me-2 px-3 py-2 fw-bold">Private Sector</span>
            <span className="badge bg-warning text-dark px-3 py-2 fw-bold">6,500+ Outlets</span>
          </div>
          <h1 className="display-5 fw-bold mt-3 mb-3">Nayara Energy Petrol Pump Dealership</h1>
          <p className="lead max-width-600 opacity-90">
            Formerly Essar Oil. A Rosneft-Trafigura consortium company offering flexible franchise models with zero royalty.
          </p>
        </div>
      </section>

      {/* 3. FRANCHISE MODELS */}
      <section className="container py-5" id="franchise">
        <h2 className="text-center fw-bold mb-4 segment-title">Franchise Models</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 p-4 model-card border-top-red shadow-sm">
              <h3 className="h4 fw-bold text-dark">CODO (Company Owned, Dealer Operated)</h3>
              <p className="text-muted my-3">
                Nayara owns infrastructure. You manage daily operations, staff, and sales. Lower investment, company support included.
              </p>
              <div className="alert alert-danger border-0 fw-medium mb-3">
                Investment: ₹50 Lakhs - ₹1 Crore
              </div>
              <span className="text-secondary small">👤 Best for: First-time entrepreneurs</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 p-4 model-card border-top-red shadow-sm">
              <h3 className="h4 fw-bold text-dark">DODO (Dealer Owned, Dealer Operated)</h3>
              <p className="text-muted my-3">
                You own land and infrastructure. Nayara provides branding, fuel supply, and technical support. Higher investment, more freedom.
              </p>
              <div className="alert alert-danger border-0 fw-medium mb-3">
                Investment: ₹1.5 - ₹3 Crores
              </div>
              <span className="text-secondary small">👤 Best for: Experienced business owners</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE NAYARA? */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 segment-title">Why Choose Nayara?</h2>
          <div className="row g-3">
            {[
              { title: "Zero Royalty Fees", desc: "No periodic charges" },
              { title: "30-Year Franchise Agreement", desc: "Long-term security" },
              { title: "Strong Brand Recognition", desc: "6,500+ outlets nationwide" },
              { title: "Operational Support", desc: "Technical & marketing assistance" },
              { title: "Add Rural Revenue Streams", desc: "Lubricants, convenience store" },
              { title: "High Demand Product", desc: "Fuel is always in demand" },
              { title: "Supply Chain Excellence", desc: "Reliable fuel logistics" },
              { title: "Training Programs", desc: "For you and your staff" }
            ].map((benefit, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="bg-white p-3 rounded shadow-sm d-flex h-100 align-items-center">
                  <span className="text-danger fw-bold me-2">✔</span>
                  <div className="small">
                    <strong>{benefit.title} — </strong>{benefit.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KEY REQUIREMENTS */}
      <section className="container py-5" id="eligibility">
        <h2 className="text-center fw-bold mb-4 segment-title">Key Requirements</h2>
        <div className="row g-3">
          {[
            { icon: "📍", title: "Land (Highway)", value: "3,000 sq. meters" },
            { icon: "📍", title: "Land (City)", value: "1,200 sq. meters" },
            { icon: "📍", title: "Land (Other Roads)", value: "2,000 sq. meters" },
            { icon: "₹", title: "Minimum Investment", value: "₹2+ Crores" },
            { icon: "🛡️", title: "Frontage", value: "Min 25 meters" },
            { icon: "🎖️", title: "Experience", value: "Business acumen preferred" }
          ].map((req, i) => (
            <div key={i} className="col-md-4 col-sm-6">
              <div className="dark-metric-card p-4 rounded text-white h-100">
                <span className="opacity-50 fs-5">{req.icon}</span>
                <div className="text-muted-custom small mt-2 mb-1">{req.title}</div>
                <div className="fs-5 fw-bold">{req.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. APPLICATION PROCESS */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 segment-title">Application Process</h2>
          <div className="row g-3">
            {[
              { step: 1, title: "Research & Planning", desc: "Study fuel retail industry, assess sites, decide CODO vs DODO." },
              { step: 2, title: "Online Application", desc: "Submit form at anyaraenergy.com with land and financial details." },
              { step: 3, title: "Document Upload", desc: "Upload land docs, ID proof, financial statements." },
              { step: 4, title: "Site Evaluation", desc: "Nayara team inspects traffic, accessibility, competition distance." },
              { step: 5, title: "Letter of Intent (LOI)", desc: "Approval issued with franchise agreement terms." },
              { step: 6, title: "Infrastructure Build", desc: "Construct dispensers, tanks, canopy per Nayara specs." },
              { step: 7, title: "Licensing & Compliance", desc: "Obtain all government permits and safety clearances." },
              { step: 8, title: "Training & Launch", desc: "Staff training on operations, then grand opening." }
            ].map((proc) => (
              <div key={proc.step} className="col-xl-3 col-md-6">
                <div className="bg-white p-4 h-100 rounded shadow-sm relative-box">
                  <div className="step-count-badge bg-danger text-white rounded-circle fw-bold d-flex align-items-center justify-content-center mb-2">
                    {proc.step}
                  </div>
                  <h4 className="h6 fw-bold text-dark mt-2">{proc.title}</h4>
                  <p className="small text-muted mb-0">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER */}
      <section className="bg-danger text-white text-center py-5">
        <div className="container">
          <h3 className="fw-bold">Start Your Nayara Journey</h3>
          <p className="opacity-90 mb-4">Apply online through Nayara Energy's official dealership portal.</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light text-danger fw-bold px-4">Visit Nayara Website</button>
            <button className="btn btn-outline-light fw-bold px-4">Apply Through Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NayaraPage;