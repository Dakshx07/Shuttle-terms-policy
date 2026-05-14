import React from 'react';

export default function SubscriptionPolicy() {
  return (
    <div id="subscription-refund" className="scroll-mt-24 space-y-6 pt-8 border-t border-slate-100">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-emerald-600 rounded-full"></div>
        <div>
          <h2 className="text-2xl font-display font-bold text-slate-900 uppercase">SUBSCRIPTION & REFUND POLICY</h2>
          <p className="text-sm text-slate-500">Shuttle – by SecretEye Telematics Pvt Ltd • Last Updated: 14 May 2026</p>
        </div>
      </div>
      <div className="prose prose-slate prose-lg text-slate-600">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Subscription Plans</h3>
            <p>
              Shuttle offers free and paid subscription plans. Paid subscriptions provide access to premium features for a specified duration, as displayed within the application.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Billing & Payments</h3>
            <p>
              Subscription fees are charged in advance through authorized app marketplaces or payment gateways. All prices are displayed within the app and may be subject to applicable taxes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Auto-Renewal</h3>
            <p>
              Subscriptions may automatically renew at the end of the billing period unless cancelled by the user before the renewal date. Users are responsible for managing auto-renewal through their respective app store.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Cancellation of Subscription</h3>
            <p>
              Users may cancel their subscription at any time via the app marketplace from which the subscription was purchased. Cancellation will stop future billing, but access to subscribed features will continue until the end of the current paid period.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Refund Policy</h3>
            <p>
              All subscription payments are final and non-refundable once a subscription is activated. No refunds or credits will be provided for partial usage, unused subscription time, early cancellation, or failure to use the service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Suspension or Termination</h3>
            <p>
              Shuttle reserves the right to suspend or terminate access to subscription services without refund in case of misuse, violation of terms, or unlawful activity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Policy Updates</h3>
            <p>
              This policy may be updated from time to time. Continued use of Shuttle after any updates constitutes acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Contact Information</h3>
            <p>
              For subscription-related questions, please contact: <a href="mailto:teams@secreteye.co.in" className="text-indigo-600 hover:underline">teams@secreteye.co.in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
