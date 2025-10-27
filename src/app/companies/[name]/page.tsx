import { notFound } from 'next/navigation';
import { getCompanyBySlug, companies as allCompanies } from '@/data/companies';
import CompanyPageClient from './company-page-client';

// Import the shared generateSlug function
import { generateSlug } from '../page';

// This function tells Next.js which dynamic routes to pre-render
export async function generateStaticParams() {
  return allCompanies.map(company => ({
    name: generateSlug(company.name)
  }));
}

export default async function CompanyPage({ params }: { params: { name: string } }) {
  // In Next.js 16, params is a Promise that needs to be awaited
  const resolvedParams = await Promise.resolve(params);
  console.log('URL Params:', resolvedParams);
  
  // Decode URL-encoded characters
  const decodedName = decodeURIComponent(resolvedParams.name);
  console.log('Decoded name:', decodedName);
  
  // Find company by slug using the imported function
  const company = getCompanyBySlug(decodedName);
  console.log('Found company:', company?.name || 'Not found');
  
  if (!company) {
    console.log('Company not found, showing 404');
    notFound();
    return null;
  }
  
  return <CompanyPageClient company={company} />;
}
