import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div id="privacy" className="scroll-mt-24 space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
        <div>
          <h2 className="text-2xl font-display font-bold text-slate-900 uppercase">PRIVACY POLICY</h2>
          <p className="text-sm text-slate-500">SecretEye Telematics Pvt Ltd • Last Updated: 14 May 2026</p>
        </div>
      </div>
      <div className="prose prose-slate prose-lg text-slate-600">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Information Collected</h3>
            <p>
              Personal data may include name, phone number, email address, live GPS location, limited historical GPS location, and device identifiers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Legal Basis for Processing</h3>
            <p>
              Data is processed based on user consent and legitimate business interests related to safety, connectivity, and service delivery.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Location Data Processing</h3>
            <p className="mb-2">
              Location data is collected only with explicit user permission and such permission may be revoked at any time through device or application settings.
            </p>
            <p>
              In addition to live location, Shuttle may store limited GPS location history for safety, operational, troubleshooting, and service improvement purposes. Location history is retained only for a limited duration and is not stored indefinitely.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Data Storage & Security Measures</h3>
            <p>
              The Company employs reasonable administrative, technical, and physical safeguards to protect personal data. However, no system is completely secure and absolute protection cannot be guaranteed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Data Sharing & Disclosure</h3>
            <p>
              The Company does not sell personal data. Data may be disclosed to government or law enforcement authorities when legally required.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Data Retention & Deletion</h3>
            <p>
              Data is retained only as necessary for service provision. Upon account deletion, personal data, including location history, is deleted within up to 30 days unless retention is legally mandated.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Children’s Privacy</h3>
            <p>
              The App is rated 4+. Data of minors is processed solely under parental or legal guardian consent and control.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Limitation of Liability</h3>
            <p>
              The Company shall not be liable for data breaches occurring beyond the scope of reasonable security controls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
