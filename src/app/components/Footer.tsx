import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Honest Traveler. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">
            Your trusted guide to responsible travel and ethical tourism.
          </p>
        </div>
      </div>
    </footer>
  );
}
