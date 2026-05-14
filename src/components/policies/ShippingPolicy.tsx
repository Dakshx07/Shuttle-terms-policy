import React from 'react';

export default function ShippingPolicy() {
  return (
    <div id="shipping" className="scroll-mt-24 space-y-6 pt-8 border-t border-slate-100">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
        <div>
          <h2 className="text-2xl font-display font-bold text-slate-900 uppercase">SHIPPING POLICY</h2>
          <p className="text-sm text-slate-500">SecretEye Telematics Pvt Ltd • Last Updated: 14 May 2026</p>
        </div>
      </div>
      <div className="prose prose-slate prose-lg text-slate-600">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Current Offering</h3>
            <p>
              Shuttle does not sell or ship physical products at present.
            </p>
            <p className="mt-2">
              Any future hardware offerings will be governed by updated policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
