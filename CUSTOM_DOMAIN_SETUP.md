# Custom Domain Setup - Ozee Tech Ventures

## Steps to Connect Your Official Domain

### Step 1: Purchase Domain
1. Go to a domain registrar (e.g., Namecheap, GoDaddy, Google Domains, Name.com)
2. Search for `ozeetechventures.com`
3. Purchase the domain for 1+ years
4. Choose "Privacy Protection" if available

### Step 2: Connect Domain to Vercel

#### Option A: Using Vercel Nameservers (Recommended)
1. Log in to Vercel Dashboard
2. Go to **Settings → Domains**
3. Click **"Add Domain"**
4. Enter: `ozeetechventures.com` (without www)
5. Vercel will provide 4 nameservers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ns3.vercel-dns.com
   ns4.vercel-dns.com
   ```
6. Log into your domain registrar
7. Go to **DNS/Nameserver Settings**
8. Replace all existing nameservers with Vercel's nameservers
9. Save changes (may take 1-24 hours to propagate)
10. Return to Vercel and wait for confirmation (green checkmark)

#### Option B: Using CNAME Records
1. Log into your domain registrar
2. Find your DNS/DNS Management section
3. Add CNAME record:
   - **Type**: CNAME
   - **Name/Host**: `ozeetechventures`
   - **Value**: `cname.vercel-dns.com`
   - **TTL**: 3600 (or default)
4. Save changes
5. Add another CNAME for www:
   - **Type**: CNAME
   - **Name/Host**: `www`
   - **Value**: `cname.vercel-dns.com`

### Step 3: Setup SSL/TLS Certificate
1. Vercel automatically provides a free SSL certificate
2. Once domain is verified, it takes ~24 hours
3. You'll see a green checkmark in Vercel Dashboard

### Step 4: Update Email Records (Optional)
If you want to use email with your domain:

**Add MX Records** in your domain registrar's DNS settings:
```
Priority 10: aspmx.l.google.com
Priority 20: alt1.aspmx.l.google.com
Priority 30: alt2.aspmx.l.google.com
Priority 40: alt3.aspmx.l.google.com
Priority 50: alt4.aspmx.l.google.com
```

### Step 5: Verify Domain Setup

Run these commands in terminal:
```bash
# Check DNS propagation
nslookup ozeetechventures.com
dig ozeetechventures.com

# Check if domain points to Vercel
host ozeetechventures.com
```

### Step 6: Update Environment Variables in Vercel

1. Go to Vercel Project Settings
2. Click **Environment Variables**
3. Verify these are set:
   ```
   NEXT_PUBLIC_ANALYTICS_KEY=G-XXXXXXXXXX (your GA4 ID)
   ```
4. Deploy again (should redeploy automatically)

### Step 7: Test Everything

#### Test in Browser
1. Visit: `https://ozeetechventures.com`
2. Visit: `https://www.ozeetechventures.com`
3. Both should load your site
4. Check for SSL certificate (padlock icon)

#### Test Favicon
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Check favicon appears in browser tab
3. On mobile: Add to home screen and check app icon

#### Test SEO
```bash
# Check robots.txt
curl https://www.ozeetechventures.com/robots.txt

# Check sitemap
curl https://www.ozeetechventures.com/sitemap.xml

# Check JSON-LD schema
curl https://www.ozeetechventures.com/
# Look for <script type="application/ld+json">
```

### Step 8: Register with Search Engines

#### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Add Property"**
3. Enter: `https://www.ozeetechventures.com`
4. Choose verification method:
   - **Google Analytics**: Easiest if you have GA4 setup
   - **HTML file**: Download and upload to `/public/`
   - **HTML tag**: Add to `/app/layout.tsx`
   - **DNS record**: Add CNAME to domain registrar
5. Verify and wait for confirmation
6. Submit sitemap:
   - Go to **Sitemaps** in Search Console
   - Enter: `https://www.ozeetechventures.com/sitemap.xml`
   - Click Submit

#### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Click **"Add Property"**
3. Enter domain: `ozeetechventures.com`
4. Verify using:
   - Automatic verification (via Google Search Console)
   - XML sitemap
   - Meta tag
5. Submit sitemap

### Step 9: Update Analytics

#### In Vercel Environment Variables
```
NEXT_PUBLIC_ANALYTICS_KEY=G-XXXXXXXXXX
```

#### In Google Analytics
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create new property with URL: `https://www.ozeetechventures.com`
3. Get Measurement ID (G-XXXXXXXXXX)
4. Update environment variable in Vercel

### Step 10: Setup Redirects (Optional)

To ensure old links redirect properly:

**Add to `next.config.mjs`:**
```javascript
async redirects() {
  return [
    {
      source: '/:path*',
      destination: 'https://www.ozeetechventures.com/:path*',
      permanent: true,
      basePath: false,
    }
  ]
}
```

---

## Troubleshooting

### Domain Not Connecting
**Check These:**
1. Wait 24-48 hours for DNS propagation
2. Verify nameservers are correctly set in registrar
3. Check Vercel dashboard for verification status
4. Ensure domain registrar allows custom nameservers

**Tools to Check:**
- [DNS Propagation Checker](https://dnschecker.org/)
- [MX Toolbox](https://mxtoolbox.com/)

### SSL Certificate Not Working
1. Clear browser cache
2. Hard refresh: `Ctrl+Shift+R`
3. Check certificate in DevTools (Inspect → Network → HTTPS status)
4. Wait up to 48 hours for automatic certificate

### SSL Shows as Not Secure
1. Ensure all links use `https://`
2. Check for mixed content (http resources in https page)
3. Go to DevTools → Network → check for http requests
4. Wait for certificate to fully propagate

### Emails Not Working
1. Check MX records are properly set
2. Wait 24-48 hours for propagation
3. Use [MX Toolbox](https://mxtoolbox.com/) to verify MX records
4. Test with Google Workspace or similar email service

---

## Important Notes

### WHOIS Privacy
- Consider enabling WHOIS privacy at registrar
- Protects your personal information
- Usually costs $1-3/year

### Domain Auto-Renewal
- Enable auto-renewal to prevent expiration
- Set reminder 30 days before expiration

### Backup DNS Records
- Keep a record of all DNS settings
- Helpful if you need to switch providers

### Monitoring
After setup, regularly check:
- **Vercel Dashboard**: Domain status
- **Google Search Console**: Crawl errors, indexing status
- **Google Analytics**: Traffic and conversions
- **SSL Certificate**: Expiration (auto-renewed by Vercel)

---

## Support

If you encounter issues:
1. Check DNS propagation status
2. Review Vercel logs and deployment
3. Verify all configuration matches guide
4. Contact your domain registrar's support
5. Contact Vercel support if needed

**Ozee Tech Ventures Support:**
- Email: support@ozeetechventures.com
- WhatsApp: +234-906-917-8853
- Website: https://www.ozeetechventures.com

---

**Setup Time**: 30 minutes - 2 hours
**DNS Propagation**: 1-48 hours (usually 2-6 hours)
**SSL Certificate**: 1-24 hours
**Search Engine Indexing**: 1-7 days
