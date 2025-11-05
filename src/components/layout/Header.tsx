"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { companyInfo, navigationLinks } from "@/utils/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown) {
        const ref = dropdownRefs.current[openDropdown];
        if (ref && !ref.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    // Check if any dropdown item is active for parent links
    if (href === "/about" || href === "/services" || href === "/resources") {
      const link = navigationLinks.find(l => l.href === href);
      if (link && 'hasDropdown' in link && link.hasDropdown && link.dropdownItems) {
        return link.dropdownItems.some(item => {
          if (item.href === "/") {
            return pathname === "/";
          }
          return pathname.startsWith(item.href);
        });
      }
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 w-full z-50 border-b border-slate-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center"
          >
            <Image
              src="/assets/logo/NccglLogo-02.png"
              alt={`${companyInfo.fullName} - IT & Software Solutions Logo`}
              width={150}
              height={50}
              className="h-12 sm:h-16 w-auto"
              priority
              sizes="(max-width: 768px) 120px, 150px"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 ml-8 lg:ml-12">
            {navigationLinks.map((link) => {
              const hasDropdown = 'hasDropdown' in link && link.hasDropdown;
              const isDropdownOpen = openDropdown === link.href;
              
              if (hasDropdown) {
                return (
                  <div
                    key={link.href}
                    ref={(el) => {
                      if (el) dropdownRefs.current[link.href] = el;
                    }}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={link.href === "/resources" && link.dropdownItems && link.dropdownItems.length > 0 
                        ? link.dropdownItems[0].href 
                        : link.href}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-md hover:bg-slate-50 flex items-center ${
                        isActive(link.href)
                          ? "text-indigo-600"
                          : "text-black hover:text-indigo-600"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                      {isActive(link.href) && (
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full"></span>
                      )}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                    </Link>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && link.dropdownItems && (
                      <div 
                        className="absolute top-full left-0 pt-2 w-64 z-50"
                        onMouseEnter={() => setOpenDropdown(link.href)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2">
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block px-4 py-3 text-sm transition-all duration-200 ${
                                isActive(item.href)
                                  ? "text-indigo-600 bg-indigo-50 font-medium"
                                  : "text-slate-700 hover:text-indigo-600 hover:bg-indigo-50"
                              }`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="font-medium">{item.label}</div>
                            </Link>
                          ))}
                          {link.href === "/services" && (
                            <div className="border-t border-slate-200 mt-2 pt-2">
                              <Link
                                href="/services"
                                className="block px-4 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
                                onClick={() => setOpenDropdown(null)}
                              >
                                View All Services →
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-md hover:bg-slate-50 ${
                    isActive(link.href)
                      ? "text-indigo-600"
                      : "text-black hover:text-indigo-600"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full"></span>
                  )}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                </Link>
              );
            })}
          </div>

          {/* Spacer for mobile button positioning */}
          <div className="flex-grow lg:hidden"></div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black hover:text-indigo-600 hover:bg-slate-50 rounded-md transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 space-y-1 max-h-[calc(100vh-6rem)] overflow-y-auto">
            {navigationLinks.map((link) => {
              const hasDropdown = 'hasDropdown' in link && link.hasDropdown;
              const isMobileDropdownOpen = openMobileDropdown === link.href;
              
              if (hasDropdown && link.dropdownItems) {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setOpenMobileDropdown(isMobileDropdownOpen ? null : link.href)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md transition-all duration-300 ${
                        isActive(link.href)
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-black hover:text-indigo-600 hover:bg-indigo-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isMobileDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isMobileDropdownOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-2 text-sm rounded-md transition-all duration-300 ${
                              isActive(item.href)
                                ? "text-indigo-600 bg-indigo-50 font-medium"
                                : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
                            }`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenMobileDropdown(null);
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                        {link.href === "/services" && (
                          <Link
                            href="/services"
                            className="block px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-md transition-all duration-300"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenMobileDropdown(null);
                            }}
                          >
                            View All →
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-medium rounded-md transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-black hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}

