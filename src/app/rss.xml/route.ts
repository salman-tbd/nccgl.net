import { NextResponse } from 'next/server';
import { companyInfo } from '@/utils/constants';
import { blogPosts } from '../blog/page';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  const baseUrl = `https://${companyInfo.domain}`;
  const currentDate = new Date().toUTCString();

  // Get blog posts with dates (assuming recent posts)
  const postsWithDates = blogPosts.map((post, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index * 7); // Space posts a week apart
    return {
      ...post,
      date: date.toISOString(),
    };
  });

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${companyInfo.fullName} - Blog</title>
    <link>${baseUrl}</link>
    <description>${companyInfo.description}</description>
    <language>en-US</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>60</ttl>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/assets/logo/NccglLogo-02.png</url>
      <title>${companyInfo.fullName}</title>
      <link>${baseUrl}</link>
      <width>1200</width>
      <height>630</height>
    </image>
    ${postsWithDates
      .map(
        (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.id}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.id}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <author>${companyInfo.primaryContact} (${post.author})</author>
      <enclosure url="${baseUrl}${post.image}" type="image/jpeg" />
    </item>`
      )
      .join('\n')}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

