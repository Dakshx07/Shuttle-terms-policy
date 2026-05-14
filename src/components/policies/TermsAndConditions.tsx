import React from 'react';

export default function TermsAndConditions() {
  return (
    <section className="space-y-12">
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-display font-extrabold text-black sm:text-5xl uppercase">
          TERMS AND CONDITIONS
        </h1>
        <p className="text-lg text-black max-w-2xl">
          SecretEye Telematics Pvt Ltd • Last Updated: 14 May 2026
        </p>
      </header>

      <div className="prose prose-slate prose-lg text-black">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-black mb-2">Definitions</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>"App"</strong> refers to the Shuttle mobile application.</li>
              <li><strong>"Company"</strong> refers to SecretEye Telematics Pvt Ltd.</li>
              <li><strong>"User"</strong> refers to any individual accessing or using the App.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Eligibility & Age Requirements</h3>
            <p>The App is rated 4+ and may be accessed by minors solely under parental or legal guardian supervision.</p>
            <p>Account creation, consent management, and payments must be conducted by individuals aged 18 years or above.</p>
            <p>Parents or legal guardians accept full legal responsibility for minors added to their accounts.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Scope of Services</h3>
            <p>Shuttle is a connectivity and location-based safety assistance tool.</p>
            <p>Services include live location sharing, SOS alerts, family tracking, and in-app messaging.</p>
            <p>The Company does not guarantee uninterrupted service, accuracy, or safety outcomes.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Emergency & No-Assumption Disclaimer</h3>
            <p>Shuttle is not a law-enforcement, emergency response, medical, or rescue service.</p>
            <p>Users acknowledge that reliance on the App does not replace contacting local emergency services.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">User Consent & Lawful Use</h3>
            <p>Users must obtain explicit, informed consent before tracking any individual.</p>
            <p>Use of the App for harassment, stalking, surveillance, or unlawful activity is strictly prohibited.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Location Accuracy & Technical Limitations</h3>
            <p>Location data accuracy depends on GPS, device hardware, operating systems, network connectivity, and third-party services.</p>
            <p>Delays, inaccuracies, or service interruptions may occur and are outside the Company’s control.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Third-Party Services & Dependencies</h3>
            <p>The App integrates with third-party services such as mapping providers, telecom networks, and app marketplaces.</p>
            <p>The Company disclaims liability arising from failures or interruptions of such third-party services.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Subscriptions, Billing & Taxes</h3>
            <p>Shuttle operates on a freemium model with optional paid yearly subscriptions denominated in INR.</p>
            <p>Subscriptions auto-renew unless cancelled before the billing period ends.</p>
            <p>Applicable taxes may be charged as per Indian law.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">No Refund Policy</h3>
            <p>All subscription fees are non-refundable once activated, irrespective of usage.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Indemnification</h3>
            <p>Users agree to indemnify and hold harmless the Company, its directors, officers, and employees from claims arising from misuse, violation of laws, or breach of these Terms.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Force Majeure</h3>
            <p>The Company shall not be liable for delays or failures caused by events beyond reasonable control including natural disasters, governmental actions, internet outages, or system failures.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Limitation of Liability</h3>
            <p>To the fullest extent permitted by law, the Company’s total liability shall not exceed the subscription fees paid by the User in the preceding twelve months.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Suspension & Termination</h3>
            <p>The Company may suspend or terminate access without notice to protect legal, operational, or security interests.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Arbitration & Dispute Resolution</h3>
            <p>Disputes shall be resolved through arbitration seated in Jaipur, Rajasthan, in accordance with Indian arbitration laws.</p>
            <p>Courts shall have jurisdiction solely for enforcement of arbitral awards.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-2">Governing Law & Jurisdiction</h3>
            <p>These Terms shall be governed by Indian law.</p>
            <p>Exclusive jurisdiction lies with courts of Jaipur, Rajasthan, India.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
