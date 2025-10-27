'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { companies } from '@/data/companies';

export default function TestPage() {
  const router = useRouter();

  useEffect(() => {
    // Test each company link
    companies.forEach(company => {
      const slug = company.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      console.log(`Testing company: ${company.name} (${slug})`);
      
      // Programmatically navigate to test the route
      setTimeout(() => {
        console.log(`Navigating to: /companies/${slug}`);
        router.push(`/companies/${slug}`);
      }, 1000);
    });
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Testing Company Routes</h1>
      <div className="space-y-4">
        {companies.map(company => {
          const slug = company.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          return (
            <div key={company.id} className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold">{company.displayName}</h2>
              <p className="text-gray-600">ID: {company.id}</p>
              <p className="text-gray-600">Slug: {slug}</p>
              <a 
                href={`/companies/${slug}`}
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                Test Link: {company.displayName}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
