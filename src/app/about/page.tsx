import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{
      backgroundImage: 'url(/images/hero-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      <Navbar />
      <div className="absolute inset-0 bg-black/30 -z-10" />
      <div className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/90 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About Honest Traveler</h1>
              
              <div className="prose max-w-none text-gray-700 space-y-6">
                <p>We started Honest Traveler in Tromsø with a simple goal. Help visitors choose serious, reliable companies so every Arctic experience is safe, fair, and worth the money.</p>
                
                <p>Tromsø is stunning but remote. Weather changes fast. Daylight comes and goes. In a place like this, the company you book matters. We saw travelers lose time and money to vague promises, unclear insurance, or operators that cut corners. We built a filter instead of a brochure.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Our Verification Process</h2>
                <p>We verify every partner. Licenses checked. Safety records reviewed. Insurance confirmed. Guides trained. Equipment maintained. Clear prices and clear policies. If a company won't meet these standards, we don't list it. If something changes, we update or remove it.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Your Protection</h2>
                <p>Your booking stays protected. We point you to operators with the right coverage, fair cancellation terms, and transparent refunds. No fine-print surprises. Just clear choices you can trust.</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Community Focused</h2>
                <p>We listen to locals and travelers. We collect feedback, audit tours in season, and publish what we learn. Northern lights, whales, fjords, reindeer, Sámi culture—these deserve respect. So do you.</p>
                
                <p className="text-lg font-medium mt-8">Choose Honest Traveler to cut noise, avoid risk, and spend your time on real experiences. Serious companies. Safer bookings. Better trips in Tromsø.</p>
                
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <p className="text-lg">Have a great visit! and feel free to reach out!</p>
                  <p className="mt-4 font-medium">Best Regards,</p>
                  <p className="font-medium">Tom and the rest of the team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
