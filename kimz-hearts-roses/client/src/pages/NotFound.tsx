/* NotFound — 404 page matching the Kimz brand */
import { Heart, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <svg width="60" height="75" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <path d="M15 30 L25 10 L35 25 L40 5 L45 25 L55 10 L65 30 Z" fill="#C0002A" />
            <rect x="15" y="28" width="50" height="6" rx="1" fill="#C9A96E" />
            <path d="M30 45 L30 85 M30 65 L50 45 M35 65 L55 85" stroke="#C0002A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="font-serif text-7xl text-[#C0002A] mb-4">404</h1>
        <h2 className="font-serif text-2xl mb-4">Page Not Found</h2>
        <p className="text-gray-500 font-light leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back to creating beautiful moments.
        </p>
        <Link href="/">
          <span className="inline-flex items-center gap-2 bg-[#C0002A] text-white px-8 py-3 text-sm tracking-wider hover:bg-[#8B001E] transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
