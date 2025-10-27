import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { companies, getCompanyBySlug } from '@/data/companies';

// Function to generate URL-friendly slugs - must match the one in [name]/page.tsx
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function CompaniesPage() {
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Featured Companies</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Discover trusted businesses in Tromsø that we've personally vetted for quality and reliability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <Link 
                href={`/companies/${generateSlug(company.name)}`} 
                key={company.id} 
                className="block hover:no-underline group"
              >
                <div className="h-full bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {company.displayName || company.name}
                      </h2>
                      {company.verified && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{company.description}</p>
                      <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-600">{company.rating}</span>
                        <span className="mx-1 text-gray-400">•</span>
                        <span className="text-gray-500 text-sm">{company.reviews} reviews</span>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {company.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
