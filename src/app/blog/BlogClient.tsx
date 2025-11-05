"use client";

import { useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { StructuredData } from "@/components/common/StructuredData";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/utils/constants";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  image: string;
}

interface BlogClientProps {
  blogPosts: BlogPost[];
  postsPerPage: number;
}

export default function BlogClient({ blogPosts, postsPerPage }: BlogClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = useMemo(() => {
    return Number(searchParams.get("page")) || 1;
  }, [searchParams]);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  let validPage = currentPage;
  
  // Validate page number
  if (validPage < 1) validPage = 1;
  if (validPage > totalPages) validPage = totalPages;
  
  const startIndex = (validPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const url = page > 1 ? `/blog?page=${page}` : "/blog";
      router.push(url);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <Section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-purple-200 text-sm font-semibold uppercase tracking-wider">
              Our Blog
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Insights, news, and updates from the world of technology
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <Card key={post.id} hover className="flex flex-col overflow-hidden group">
                <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <Image
                    src={post.image}
                    alt={`${post.title} - ${post.category} article by ${companyInfo.fullName}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white text-xs font-semibold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-700 font-medium">
                        {post.author}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-indigo-600 font-semibold hover:text-indigo-700 inline-flex items-center group/link transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              {validPage > 1 ? (
                <button
                  onClick={() => handlePageChange(validPage - 1)}
                  className="px-4 py-2 rounded-lg font-medium transition-colors text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  Previous
                </button>
              ) : (
                <span className="px-4 py-2 rounded-lg font-medium text-gray-400 cursor-not-allowed">
                  Previous
                </span>
              )}
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= validPage - 1 && page <= validPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          validPage === page
                            ? "bg-indigo-600 text-white"
                            : "text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === validPage - 2 ||
                    page === validPage + 2
                  ) {
                    return (
                      <span key={page} className="px-2 text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              {validPage < totalPages ? (
                <button
                  onClick={() => handlePageChange(validPage + 1)}
                  className="px-4 py-2 rounded-lg font-medium transition-colors text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  Next
                </button>
              ) : (
                <span className="px-4 py-2 rounded-lg font-medium text-gray-400 cursor-not-allowed">
                  Next
                </span>
              )}
            </div>
          )}
        </div>
      </Section>
    </>
  );
}

