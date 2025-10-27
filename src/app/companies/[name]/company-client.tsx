'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaGlobe, FaPhone, FaEnvelope, FaStar, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import { Company } from '@/data/companies';

export default function CompanyClient({ company }: { company: Company }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/companies" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <FaArrowLeft className="mr-2" /> Back to Companies
          </Link>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96 md:h-[32rem] bg-gray-100 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10"></div>
                <Image
                  src={company.image}
                  alt={company.displayName}
                  fill
                  className={`${company.name === 'fpv-experience' ? 'object-contain p-12' : 'object-cover'}`}
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700';
                    fallback.innerHTML = `
                      <div class="text-center p-8">
                        <div class="text-4xl font-bold text-white mb-2">${company.displayName}</div>
                        <div class="text-xl text-blue-100">${company.category}</div>
                      </div>
                    `;
                    target.parentNode?.replaceChild(fallback, target);
                  }}
                />
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{company.displayName}</h1>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center text-yellow-500 mr-4">
                      <FaStar className="mr-1" />
                      <span className="font-semibold">{company.rating}</span>
                      <span className="text-gray-500 ml-1">({company.reviews} reviews)</span>
                    </div>
                    {company.verified && (
                      <div className="flex items-center text-green-600">
                        <FaCheckCircle className="mr-1" />
                        <span className="text-sm">Verified</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="inline-flex flex-wrap gap-2">
                    <a 
                      href={company.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <FaGlobe className="mr-2" /> Visit Website
                    </a>
                    <a 
                      href={`tel:${company.phone}`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <FaPhone className="mr-2" /> Call
                    </a>
                    <a 
                      href={`mailto:${company.email}`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <FaEnvelope className="mr-2" /> Email
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
                    <p className="text-gray-700 mb-6">{company.longDescription || company.description}</p>
                    
                    <div className="mt-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Amenities</h3>
                      <div className="flex flex-wrap gap-2">
                        {company.amenities.map((amenity, index) => (
                          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Business Details</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Address</h4>
                          <div className="mt-1 flex items-center text-gray-700">
                            <FaMapMarkerAlt className="flex-shrink-0 mr-2 text-gray-400" />
                            <span>{company.address}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Hours</h4>
                          <p className="mt-1 text-gray-700">{company.hours}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Category</h4>
                          <p className="mt-1 text-gray-700">{company.category}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Price Range</h4>
                          <p className="mt-1 text-gray-700">{company.priceRange}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
