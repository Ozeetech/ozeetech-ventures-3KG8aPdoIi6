# SEO Verification Checklist - Ozee Tech Ventures

Use this checklist to verify all SEO implementations are working correctly.

## Pre-Launch Verification

### Domain Setup
- [ ] Domain purchased: `ozeetechventures.com`
- [ ] Domain connected to Vercel
- [ ] DNS propagation confirmed (use dnschecker.org)
- [ ] SSL certificate active (green padlock in browser)
- [ ] Both `ozeetechventures.com` and `www.ozeetechventures.com` work
- [ ] Redirect `ozeetechventures.com` → `www.ozeetechventures.com` (or vice versa)

### Metadata Verification
Test with browser DevTools:

1. **Open Inspector (F12) → Elements → Head**
   - [ ] Find `<title>` tag with "Ozee Tech Ventures"
   - [ ] Find `<meta name="description">` (160 chars)
   - [ ] Find `<meta property="og:title">`
   - [ ] Find `<meta property="og:image">`
   - [ ] Find `<meta name="robots" content="index, follow">`
   - [ ] Find `<link rel="canonical">`

2. **Check Specific Meta Tags**
   ```html
   <!-- Should exist -->
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta property="og:type" content="website">
   <meta property="og:locale" content="en_NG">
   <meta name="twitter:card" content="summary_large_image">
   <meta name="theme-color" content="#ef4444">
   ```

### Favicon Verification

#### Desktop Browsers:
1. **Chrome/Edge**: 
   - [ ] Favicon visible in browser tab
   - [ ] Right-click tab → "Check page" shows `/favicon.ico`

2. **Firefox**:
   - [ ] Favicon visible in tab
   - [ ] Bookmark shows favicon

3. **Safari**:
   - [ ] Favicon visible in tab
   - [ ] Bookmarks show favicon

#### Mobile Browsers:
1. **Android Chrome**:
   - [ ] Long-press website → "Install app" available
   - [ ] App icon visible on home screen
   - [ ] Icon matches `/icon-192.png` or `/icon-512.png`

2. **iOS Safari**:
   - [ ] Share → "Add to Home Screen" available
   - [ ] App icon is `/apple-touch-icon.png` (180x180)
   - [ ] Saved app launches properly

#### Windows:
1. **Task Bar Pin**:
   - [ ] Can pin site to Windows task bar
   - [ ] Shows brand red tile color (`#ef4444`)

### JSON-LD Schema Verification

1. **Open DevTools → Elements**
2. **Search for** `<script type="application/ld+json">`
3. **Should find 3+ schema blocks:**
   - [ ] Organization schema
   - [ ] LocalBusiness schema
   - [ ] OnlineStore schema

4. **Validate Schemas**:
   - Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Paste your homepage URL
   - [ ] No errors shown
   - [ ] Shows "Organization", "LocalBusiness", "OnlineStore" detected

### Robots.txt Verification

1. **Visit**: `https://www.ozeetechventures.com/robots.txt`
2. **Should see**:
   - [ ] `User-agent: *` (applies to all bots)
   - [ ] `Allow: /` (allows crawling)
   - [ ] `Disallow: /admin/` (blocks admin)
   - [ ] `Sitemap: https://www.ozeetechventures.com/sitemap.xml`

3. **Test in Search Console**:
   - Go to Google Search Console
   - Tools → "Robots.txt tester"
   - [ ] Paths show as "Allowed" (green)
   - [ ] `/admin/` shows as "Blocked" (red)

### Sitemap.xml Verification

1. **Visit**: `https://www.ozeetechventures.com/sitemap.xml`
2. **Should see XML with**:
   - [ ] Root `<urlset>` element
   - [ ] Multiple `<url>` entries
   - [ ] Each URL has `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`
   - [ ] All URLs start with `https://www.ozeetechventures.com`
   - [ ] No Vercel URLs (ozeetech.vercel.app)

3. **Validate**:
   - Go to [Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
   - Upload sitemap
   - [ ] No errors shown
   - [ ] All URLs accessible

### Page Metadata Verification

**Test multiple pages** using [Metatags.io](https://metatags.io/):

1. **Homepage** (`https://www.ozeetechventures.com/`)
   - [ ] Title: "Ozee Tech Ventures - Nigeria's Premier Technology Retailer..."
   - [ ] Description: "Nigeria's most trusted technology retailer since 2009..."
   - [ ] Image: Shows `ozeetech-official-logo.jpg`
   - [ ] Type: "website"

2. **Products Page** (`/products`)
   - [ ] Title contains "Products"
   - [ ] Description mentions tech products
   - [ ] Image present

3. **Contact Page** (`/contact`)
   - [ ] Title contains "Contact"
   - [ ] Description mentions customer support
   - [ ] Address metadata visible

### Mobile Responsiveness

1. **Open DevTools → Toggle Device Toolbar (Ctrl+Shift+M)**
2. **Test on Different Sizes**:
   - [ ] iPhone SE (375px) - responsive
   - [ ] iPhone 12 (390px) - responsive
   - [ ] iPad (768px) - responsive
   - [ ] iPad Pro (1024px) - responsive
   - [ ] Desktop (1920px) - responsive

3. **Mobile Page Speed**:
   - Go to [PageSpeed Insights](https://pagespeed.web.dev/)
   - Enter your URL
   - [ ] Performance score > 70
   - [ ] Mobile-friendly: Yes
   - [ ] No critical issues

### Google Analytics Setup

1. **Create GA4 Property**:
   - [ ] Go to [Google Analytics](https://analytics.google.com/)
   - [ ] Create new property
   - [ ] Set website URL to `https://www.ozeetechventures.com`
   - [ ] Get Measurement ID (should start with `G-`)

2. **Add to Vercel Environment Variables**:
   - [ ] Go to Vercel Project Settings
   - [ ] Add: `NEXT_PUBLIC_ANALYTICS_KEY=G-XXXXXXXXXX`
   - [ ] Redeploy project

3. **Verify Tracking**:
   - [ ] Visit your website in incognito/private mode
   - [ ] Open DevTools → Console
   - [ ] Should NOT see GA errors
   - [ ] Wait 1-2 minutes
   - [ ] Check Google Analytics → Real Time
   - [ ] Should show your session active
   - [ ] Page views recording

## Post-Launch Verification (Search Engines)

### Google Search Console

1. **Add Property**:
   - [ ] Go to [Google Search Console](https://search.google.com/search-console)
   - [ ] Click "Add property"
   - [ ] Enter: `https://www.ozeetechventures.com`
   - [ ] Verify domain

2. **Submit Sitemap**:
   - [ ] Go to "Sitemaps"
   - [ ] Click "Add/test sitemap"
   - [ ] Enter: `https://www.ozeetechventures.com/sitemap.xml`
   - [ ] Click Submit
   - [ ] Wait 1-2 minutes
   - [ ] Should show "Sitemaps" with status

3. **Monitor Indexing**:
   - [ ] Go to "Pages" in left menu
   - [ ] Should see pages starting to index
   - [ ] Check "Coverage" tab for errors
   - [ ] [ ] "Excluded" count should be minimal
   - [ ] [ ] "Error" count should be 0

4. **Check Mobile Usability**:
   - [ ] Go to "Mobile Usability"
   - [ ] Should show "No issues detected"

5. **Inspect URL**:
   - [ ] Go to URL Inspection tool
   - [ ] Enter: `https://www.ozeetechventures.com`
   - [ ] Click "Request indexing"
   - [ ] Should show as "Discoverable"

### Bing Webmaster Tools

1. **Add Property**:
   - [ ] Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
   - [ ] Click "Add site"
   - [ ] Enter: `https://www.ozeetechventures.com`
   - [ ] Verify

2. **Submit Sitemap**:
   - [ ] Go to "Sitemaps"
   - [ ] Click "Submit sitemap"
   - [ ] Enter: `https://www.ozeetechventures.com/sitemap.xml`
   - [ ] Submit

3. **Monitor**:
   - [ ] Check "Crawl information"
   - [ ] Should show recent crawls
   - [ ] No crawl errors

## Content Verification

### Homepage
- [ ] Title: Clear, includes main keyword
- [ ] Description: 150-160 characters, compelling
- [ ] H1: Single, clear headline
- [ ] Images: All have alt text
- [ ] Internal links: Use descriptive anchor text
- [ ] Buttons: Touch-friendly (44x44px+)
- [ ] Mobile: Fully responsive

### Product Pages
- [ ] Product name in title
- [ ] Description includes key features
- [ ] Price clearly displayed in NGN
- [ ] Product image(s) present
- [ ] Ratings/reviews visible
- [ ] Add to cart button accessible
- [ ] Breadcrumb navigation present
- [ ] Related products shown

### Category Pages
- [ ] Category name in title
- [ ] Products displayed in grid
- [ ] Filters working (if applicable)
- [ ] Pagination working
- [ ] Mobile layout responsive

## Performance Verification

### Page Speed
1. **Desktop Speed**:
   - [ ] Homepage: < 3 seconds
   - [ ] Product pages: < 2.5 seconds
   - [ ] Category pages: < 2.5 seconds

2. **Mobile Speed**:
   - [ ] Homepage: < 4 seconds
   - [ ] Product pages: < 3.5 seconds
   - [ ] Category pages: < 3.5 seconds

3. **Lighthouse Scores**:
   - [ ] Performance: > 70
   - [ ] Accessibility: > 90
   - [ ] Best Practices: > 90
   - [ ] SEO: 90-100

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): < 2.5 seconds
- [ ] FID (First Input Delay): < 100 milliseconds
- [ ] CLS (Cumulative Layout Shift): < 0.1

## Link Verification

### Internal Links
1. **Click through site navigation**:
   - [ ] All internal links work
   - [ ] No 404 errors
   - [ ] Breadcrumbs are clickable
   - [ ] Footer links work

2. **Check for Broken Links**:
   - Use [Broken Link Checker](https://www.deadlinkchecker.com/)
   - [ ] No broken internal links
   - [ ] No redirect chains

### External Links
- [ ] WhatsApp link works: `https://wa.me/2349069178853`
- [ ] Social media links work (if present)
- [ ] Email links functional

## SSL/Security Verification

1. **Check Certificate**:
   - [ ] HTTPS active (green padlock)
   - [ ] Certificate valid (click padlock → Details)
   - [ ] No mixed content warnings
   - [ ] SSL Labs grade: A or higher

2. **Security Headers**:
   - Go to [Security Headers](https://securityheaders.com/)
   - Enter your URL
   - [ ] Check headers configuration

## Final Quality Assurance

### Browser Testing
- [ ] Chrome: All features work
- [ ] Firefox: All features work
- [ ] Safari: All features work
- [ ] Edge: All features work

### Mobile Testing
- [ ] Android: All features work
- [ ] iOS: All features work
- [ ] Tablet: Layout responsive

### Functionality Testing
- [ ] Search works (if implemented)
- [ ] Cart functions (if e-commerce)
- [ ] Forms submit properly
- [ ] Buttons are clickable
- [ ] Images load correctly
- [ ] Videos play (if applicable)
- [ ] Contact form works
- [ ] No console errors

## Post-Launch Monitoring

### Week 1
- [ ] Monitor Google Search Console daily
- [ ] Check Google Analytics for traffic
- [ ] Monitor crawl errors
- [ ] Check for indexing progress

### Week 2-4
- [ ] Watch for ranking changes
- [ ] Monitor bounce rate
- [ ] Check time on page
- [ ] Review user behavior
- [ ] Fix any issues found

### Month 1+
- [ ] Monitor organic traffic growth
- [ ] Track keyword rankings
- [ ] Monitor conversion rate
- [ ] Build backlinks
- [ ] Create new content

## Sign-Off

- [ ] All items verified
- [ ] No critical issues
- [ ] Ready for launch
- [ ] Analytics tracking confirmed
- [ ] Search engine submission complete

**Verified By**: _______________
**Date**: _______________
**Notes**: _______________

---

## Troubleshooting Guide

**Favicon not showing?**
- Hard refresh (Ctrl+Shift+R)
- Clear browser cache
- Check `/public/` folder exists
- Wait 24-48 hours

**Google not indexing?**
- Submit sitemap to Search Console
- Request indexing for homepage
- Check robots.txt allows pages
- Verify SSL certificate active

**Analytics not tracking?**
- Verify GA4 ID in environment variables
- Check browser console for errors
- Wait 24-48 hours for data
- Verify GA4 property configured

**Schema validation errors?**
- Use [Google Rich Results Test](https://search.google.com/test/rich-results)
- Fix JSON-LD syntax errors
- Ensure all required fields present
- Re-test after fixes

---

For detailed setup instructions, see:
- `/SEO_SETUP_GUIDE.md`
- `/CUSTOM_DOMAIN_SETUP.md`
- `/SEO_IMPLEMENTATION_COMPLETE.md`
