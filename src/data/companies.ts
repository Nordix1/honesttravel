export interface Company {
  id: number;
  name: string;
  displayName: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  verified: boolean;
  rating: number;
  reviews: number;
  website: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  priceRange: string;
  amenities: string[];
}

export const companies: Company[] = [
  {
    id: 1,
    name: 'bussring',
    displayName: 'Bussring',
    description: 'Reliable bus transportation services in Tromsø with comfortable coaches and professional drivers.',
    longDescription: 'Bussring has been providing top-quality bus transportation services in Tromsø for over 15 years. Our fleet of modern, comfortable coaches and professional drivers ensure a safe and pleasant journey through the beautiful Norwegian landscape. We offer scheduled routes, private charters, and airport transfers.',
    category: 'Transportation',
    image: '/images/bussring.jpg',
    verified: true,
    rating: 4.8,
    reviews: 124,
    website: 'https://bussring.no',
    phone: '+47 77 64 60 00',
    email: 'post@bussring.no',
    address: 'Kjellmyrvegen 12, 9010 Tromsø, Norway',
    hours: 'Mon-Fri: 6:00 AM - 10:00 PM, Sat-Sun: 8:00 AM - 8:00 PM',
    priceRange: '$$',
    amenities: ['Free WiFi', 'Air Conditioning', 'Wheelchair Accessible', 'Luggage Storage']
  },
  {
    id: 2,
    name: 'fpv-experience',
    displayName: 'FPV Experience',
    description: 'Experience Tromsø from above with our professional FPV drone tours.',
    longDescription: 'FPV Experience offers unique first-person view drone tours that let you experience Tromsø like never before. Our professional pilots will guide you through the stunning Arctic landscape while you control the drone in real-time.',
    category: 'Tours',
    image: '/images/fpv-experience.png',
    verified: true,
    rating: 4.9,
    reviews: 89,
    website: 'https://www.fpvexperience.no',
    phone: '+47 987 65 432',
    email: 'Fly@fpvexperience.no',
    address: 'Sjøgata 15, 9008 Tromsø, Norway',
    hours: 'Daily: 10:00 AM - 6:00 PM',
    priceRange: '$$$',
    amenities: ['Guided Tours', 'All Equipment Provided', 'Photo Package Available']
  },
  {
    id: 3,
    name: 'lotus-mat-vinhus',
    displayName: 'Lotus Mat & Vinhus',
    description: 'Cozy restaurant offering authentic Norwegian cuisine with a modern twist, featuring locally sourced ingredients.',
    longDescription: 'Lotus Mat & Vinhus is a cozy restaurant in the heart of Tromsø, offering authentic Norwegian cuisine with a modern twist. Our chefs use only the freshest locally sourced ingredients to create delicious dishes that showcase the best of Arctic flavors. Whether you\'re looking for a romantic dinner or a casual meal with friends, our warm and inviting atmosphere is perfect for any occasion.',
    category: 'Restaurant',
    image: '/images/Lotus.png',
    verified: true,
    rating: 4.7,
    reviews: 156,
    website: 'https://lotusmatogvinhus.no',
    phone: '+47 77 60 30 20',
    email: 'booking@lotusmatogvinhus.no',
    address: 'Storgata 55, 9008 Tromsø, Norway',
    hours: 'Mon-Sat: 4:00 PM - 11:00 PM, Sun: 2:00 PM - 10:00 PM',
    priceRange: '$$$',
    amenities: ['Outdoor Seating', 'Wine Bar', 'Vegetarian Options', 'Reservations Recommended']
  }
];

// Function to normalize slugs for comparison
function normalizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')  // Replace non-alphanumeric with -
    .replace(/^-+|-+$/g, '');     // Remove leading/trailing -
}

export function getCompanyBySlug(slug: string): Company | undefined {
  console.log('getCompanyBySlug - Input slug:', slug);
  
  const normalizedSlug = normalizeSlug(slug);
  console.log('Normalized slug:', normalizedSlug);
  
  const foundCompany = companies.find(company => {
    // Try exact match first
    if (company.name.toLowerCase() === normalizedSlug) {
      console.log(`Exact match found for: ${company.name}`);
      return true;
    }
    
    // Try with generated slug
    const companySlug = company.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
      
    const isMatch = companySlug === normalizedSlug;
    if (isMatch) {
      console.log(`Slug match found for: ${company.name} (${companySlug})`);
    }
    
    return isMatch;
  });
  
  if (!foundCompany) {
    console.log('No company found for slug:', normalizedSlug);
    console.log('Available companies:', companies.map(c => c.name).join(', '));
  }
  
  return foundCompany;
}
