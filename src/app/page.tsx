import TermsAndConditions from "@/components/policies/TermsAndConditions";
import PrivacyPolicy from "@/components/policies/PrivacyPolicy";
import SubscriptionPolicy from "@/components/policies/SubscriptionPolicy";
import ShippingPolicy from "@/components/policies/ShippingPolicy";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black">
      <main className="max-w-4xl mx-auto p-6 md:p-12 w-full">
        <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <TermsAndConditions />
          <hr className="border-slate-200" />
          <section className="space-y-12">
            <header className="space-y-4 border-b border-slate-200 pb-8">
              <h1 className="text-4xl font-display font-extrabold text-black sm:text-5xl">
                Policies
              </h1>
              <p className="text-lg text-black max-w-2xl">
                Please read our policies carefully. These documents govern your relationship with SecretEye Telematics Pvt Ltd and the Shuttle application.
              </p>
            </header>
            <PrivacyPolicy />
            <SubscriptionPolicy />
            <ShippingPolicy />
          </section>
        </div>
      </main>
    </div>
  );
}
