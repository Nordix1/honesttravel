import { notFound } from 'next/navigation';
import { getCompanyBySlug, companies as allCompanies } from '@/data/companies';
import CompanyPageClient from './company-page-client';

// This function tells Next.js which dynamic routes to pre-render
export async function generateStaticParams() {
  return allCompanies.map(company => ({
    name: company.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  }));
}

export default function CompanyPage({ params }: { params: { name: string } }) {
  // Decode URL-encoded characters
  const decodedName = decodeURIComponent(params.name);
  
  // Find company by slug using the imported function
  const company = getCompanyBySlug(decodedName);
  
  if (!company) {
    notFound();
    return null;
  }
  
  return <CompanyPageClient company={company} />;
}
