import React, { useState } from 'react';
const EligibilityCriteria = () => {
  const [activeAccordion, setActiveAccordion] = useState('individual');

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="eligibility-container">
      {/* Hero Header */}
      <header className="hero-header">
        <h1>Eligibility Criteria</h1>
        <p>Check if you meet our requirements for membership</p>
      </header>

      {/* Quick Overview Cards */}
      <section className="overview-cards">
        <div className="card">
          <span className="card-label">Age Requirement</span>
          <span className="card-value highlight-blue">18+ years</span>
        </div>
        <div className="card">
          <span className="card-label">ID Required</span>
          <span className="card-value highlight-blue">Valid Gov. ID</span>
        </div>
        <div className="card">
          <span className="card-label">Processing Time</span>
          <span className="card-value highlight-blue">3-5 days</span>
        </div>
        <div className="card">
          <span className="card-label">Cost</span>
          <span className="card-value highlight-blue">Free Registration</span>
        </div>
      </section>

      {/* Eligibility Requirements Accordion */}
      <section className="requirements-accordion">
        <h2>Eligibility Requirements</h2>
        
        {/* Individual Requirements */}
        <div className="accordion-item">
          <button 
            className={`accordion-header ${activeAccordion === 'individual' ? 'active' : ''}`}
            onClick={() => toggleAccordion('individual')}
          >
            <span className="header-title">👤 Individual Requirements</span>
            <span className="arrow">{activeAccordion === 'individual' ? '▲' : '▼'}</span>
          </button>
          {activeAccordion === 'individual' && (
            <div className="accordion-content">
              <ul>
                <li>✓ Must be 18 years or older</li>
                <li>✓ Must be an Indian citizen</li>
                <li>✓ Valid government-issued ID</li>
                <li>✓ Proof of residence (utility bill, bank statement)</li>
                <li>✓ Valid vehicle documents (RC book)</li>
                <li>✓ Valid driving license</li>
              </ul>
            </div>
          )}
        </div>

        {/* Business Requirements */}
        <div className="accordion-item">
          <button 
            className={`accordion-header ${activeAccordion === 'business' ? 'active' : ''}`}
            onClick={() => toggleAccordion('business')}
          >
            <span className="header-title">🏢 Business Requirements</span>
            <span className="arrow">{activeAccordion === 'business' ? '▲' : '▼'}</span>
          </button>
          {activeAccordion === 'business' && (
            <div className="accordion-content">
              <ul>
                <li>✓ Registered business entity details</li>
                <li>✓ GST registration certificate</li>
              </ul>
            </div>
          )}
        </div>

        {/* Vehicle Requirements */}
        <div className="accordion-item">
          <button 
            className={`accordion-header ${activeAccordion === 'vehicle' ? 'active' : ''}`}
            onClick={() => toggleAccordion('vehicle')}
          >
            <span className="header-title">🚗 Vehicle Requirements</span>
            <span className="arrow">{activeAccordion === 'vehicle' ? '▲' : '▼'}</span>
          </button>
          {activeAccordion === 'vehicle' && (
            <div className="accordion-content">
              <ul>
                <li>✓ Commercial vehicle registration parameters</li>
              </ul>
            </div>
          )}
        </div>

        {/* Credit & Financial */}
        <div className="accordion-item">
          <button 
            className={`accordion-header ${activeAccordion === 'financial' ? 'active' : ''}`}
            onClick={() => toggleAccordion('financial')}
          >
            <span className="header-title">💳 Credit & Financial</span>
            <span className="arrow">{activeAccordion === 'financial' ? '▲' : '▼'}</span>
          </button>
          {activeAccordion === 'financial' && (
            <div className="accordion-content">
              <ul>
                <li>✓ Minimum credit score requirements</li>
                <li>✓ Bank solvency proof</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="documents-section">
        <h2>Documents Required</h2>
        <div className="documents-grid">
          <div className="doc-box">
            <h3>Identity Documents</h3>
            <ul>
              <li>• Aadhaar Card</li>
              <li>• Passport</li>
              <li>• Voter ID</li>
              <li>• Driving License</li>
            </ul>
          </div>
          <div className="doc-box">
            <h3>Address Proof</h3>
            <ul>
              <li>• Utility Bill</li>
              <li>• Rental Agreement</li>
              <li>• Bank Statement</li>
              <li>• Property Tax Document</li>
            </ul>
          </div>
          <div className="doc-box">
            <h3>Vehicle Documents</h3>
            <ul>
              <li>• RC Book</li>
              <li>• Insurance certificate</li>
              <li>• PUC Certificate</li>
              <li>• Odometer reading</li>
            </ul>
          </div>
          <div className="doc-box">
            <h3>Financial Documents</h3>
            <ul>
              <li>• Bank Account Details</li>
              <li>• PAN Card</li>
              <li>• Income Certificate</li>
              <li>• Tax Returns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="notice-box">
        <div className="notice-icon">⚠️</div>
        <div className="notice-content">
          <h4>Important Notice</h4>
          <ul>
            <li>All information provided must be accurate and truthful.</li>
            <li>False information may result in rejection of membership.</li>
            <li>Document verification is mandatory.</li>
            <li>We reserve the right to conduct additional checks.</li>
            <li>Membership can be revoked if criteria are not met.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h3>Ready to Apply?</h3>
        <p>Make sure you have all required documents and start your application today.</p>
        <button className="btn-apply">Start Application</button>
      </section>
    </div>
  );
};

export default EligibilityCriteria;