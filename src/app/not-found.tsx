import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number Display */}
          <div className="mb-8">
            <h1 className="text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-none mb-4">
              404
            </h1>
          </div>

          {/* Error Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Message */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Page Not Found
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 mb-4 leading-relaxed">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-xl mx-auto">
            It might have been moved, deleted, or the URL might be incorrect. Let&apos;s get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              href="/" 
              variant="primary" 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white shadow-lg shadow-indigo-500/50 border-0"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go to Homepage
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg" 
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-slate-200 pt-8">
            <p className="text-sm text-slate-500 mb-4">You might also be looking for:</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link 
                href="/services" 
                className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline transition-colors"
              >
                Services
              </Link>
              <span className="text-slate-300">•</span>
              <Link 
                href="/about" 
                className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline transition-colors"
              >
                About Us
              </Link>
              <span className="text-slate-300">•</span>
              <Link 
                href="/blog" 
                className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline transition-colors"
              >
                Blog
              </Link>
              <span className="text-slate-300">•</span>
              <Link 
                href="/case-studies" 
                className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline transition-colors"
              >
                Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

