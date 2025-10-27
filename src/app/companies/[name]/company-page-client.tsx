'use client';

import dynamic from 'next/dynamic';
import { Company } from '@/data/companies';

const CompanyClient = dynamic(
  () => import('./company-client'),
  { 
    ssr: false, 
    loading: () => (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading company information...</p>
        </div>
      </div>
    )
  }
);

export default function CompanyPageClient({ company }: { company: Company }) {
  return <CompanyClient company={company} />;
}
