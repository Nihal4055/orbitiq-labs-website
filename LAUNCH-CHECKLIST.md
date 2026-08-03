# 🚀 OrbitIQ Labs Launch Checklist

## ✅ Pre-Launch (COMPLETED)

- [x] Website design completed
- [x] All pages functional
- [x] Forms configured
- [x] Logo transparent & sized correctly
- [x] Testimonial images fixed
- [x] Email set to support@orbitiqlabs.space
- [x] Country-based pricing implemented
- [x] Build tested successfully
- [x] Pre-deployment check passed

---

## 📋 Deployment Day Checklist

### 1️⃣ Git Setup (5 minutes)

```bash
cd /Users/nihalshetty/Desktop/orbitiq-insights-main

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "feat: OrbitIQ Labs initial production release

- Complete website with Products, Aethel, Research, Residency
- Transparent logo implementation
- Country-based residency pricing (Tier 1: $150, Tier 2: $65, India: $50)
- Enhanced forms with document submission instructions
- Testimonials with Sahyadri College academics
- Optimized residency hero background
- Professional footer with social links
"
```

### 2️⃣ GitHub Setup (3 minutes)

1. Go to https://github.com/new
2. Create repository: `orbitiq-labs-website`
3. **Do NOT** initialize with README (we have one)
4. Click "Create repository"
5. Run these commands:

```bash
git remote add origin https://github.com/YOUR_USERNAME/orbitiq-labs-website.git
git branch -M main
git push -u origin main
```

### 3️⃣ Vercel Deployment (5 minutes)

1. **Sign up**: https://vercel.com/signup (use GitHub)
2. **Import Project**:
   - Dashboard → "Add New..." → "Project"
   - Select: `orbitiq-labs-website`
3. **Auto-configuration** (Vercel detects everything):
   - Framework: TanStack Start ✓
   - Build: `npm run build` ✓
   - Output: `.output/public` ✓
4. **Click "Deploy"** - Wait 2-3 minutes
5. **Test preview URL**: `https://orbitiq-labs-website-xxxxx.vercel.app`

### 4️⃣ Custom Domain Setup (15 minutes + DNS propagation)

**In Vercel:**
1. Project → Settings → Domains
2. Add: `orbitiqlabs.space`
3. Add: `www.orbitiqlabs.space`

**At Your Domain Registrar:**

Update DNS records (where you bought orbitiqlabs.space):

```
Record 1:
Type: A
Name: @
Value: 76.76.19.19
TTL: 3600

Record 2:
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Wait:** 10-60 minutes for DNS propagation

**Check:** https://dnschecker.org/#A/orbitiqlabs.space

### 5️⃣ SSL Certificate (Automatic)

- Vercel auto-issues Let's Encrypt certificate
- HTTPS works immediately after DNS propagation
- Auto-renews before expiration

---

## 🧪 Post-Deployment Testing (30 minutes)

### Desktop Testing
- [ ] Homepage loads correctly
- [ ] Logo displays properly
- [ ] All navigation links work
- [ ] Products dropdown works
- [ ] Aethel page loads
- [ ] Research section displays
- [ ] Residency page background extends to top
- [ ] All images load
- [ ] Footer displays correctly

### Form Testing
- [ ] Try Morbius Desktop button works
- [ ] Morbius Access Form opens
- [ ] Submit test Morbius request
- [ ] Residency "Submit Application" works
- [ ] Country selector populated
- [ ] Pricing displays with discounts
- [ ] Select India → see $50 with "67% Discount" badge
- [ ] Select Ghana → see $65 with strikethrough
- [ ] Select USA → see $150 (no discount)
- [ ] Phone country code selector works
- [ ] Submit test residency application
- [ ] Newsletter subscription works

### Email Verification
- [ ] Check support@orbitiqlabs.space inbox
- [ ] Verify Morbius request received
- [ ] Verify Residency application received
- [ ] Verify newsletter signup received

### Mobile Testing (Important!)
- [ ] Open site on phone
- [ ] Navigation menu works
- [ ] Forms are readable
- [ ] Buttons are tap-friendly
- [ ] Images scale properly

---

## 📊 Post-Launch Setup (Optional, 20 minutes)

### Google Analytics (Free)
1. Create account: https://analytics.google.com/
2. Get Measurement ID: `G-XXXXXXXXXX`
3. Let me know if you want me to add the tracking code

### Vercel Analytics (Recommended)
1. In Vercel: Project → Analytics tab
2. Click "Enable" (free forever)
3. View real-time visitors, page views, etc.

### Form Backend Upgrade (Recommended)
Current setup uses `mailto:` links (requires user email client)

**Better option - Formspree:**
1. Sign up: https://formspree.io/
2. Create 3 forms:
   - Morbius Access
   - Residency Application
   - Newsletter
3. Let me know if you want me to implement this (30 min work)

**Benefits:**
- Professional form handling
- Email notifications to you
- File uploads for resume/CV
- Submission tracking
- Spam protection
- Works without user email client

---

## 🎉 Launch Announcement

Once everything is tested:

### Social Media Posts

**X (Twitter):**
```
🚀 Excited to announce OrbitIQ Labs is officially live!

Intelligence in orbit around discovery.

Explore our frontier AI systems:
• Morbius - Autonomous literature discovery
• Aethel - Frontier reasoning with MoE
• Residency Program - 21 weeks of real research

Visit: https://www.orbitiqlabs.space

#AI #Research #Science
```

**LinkedIn:**
```
We're thrilled to announce the official launch of OrbitIQ Labs! 🎉

OrbitIQ Labs is advancing the frontier of autonomous discovery, agentic intelligence, and scientific literacy.

What we offer:
🔬 Morbius: Autonomous literature discovery and reasoning
🧠 Aethel: Next-generation frontier reasoning model
📚 21-week AI Residency Program with production infrastructure

Built by scientists, for scientists.

Visit us: https://www.orbitiqlabs.space

#ArtificialIntelligence #Research #Innovation #Scientists
```

---

## 🛟 Troubleshooting

### Domain not working?
- Wait up to 24 hours for DNS propagation
- Check DNS: https://dnschecker.org/#A/orbitiqlabs.space
- Verify DNS records match exactly

### Forms not working?
- Check browser console for errors
- Verify email client is configured
- Consider upgrading to Formspree

### Build failing?
- Check Vercel deployment logs
- Run `npm run build` locally first
- Contact me with error details

### SSL certificate issues?
- Wait 10 minutes after DNS propagation
- Vercel auto-issues certificates
- Check Vercel dashboard for status

---

## 📞 Support

Need help with any step?
- Deployment issues
- DNS configuration
- Form backend setup
- Analytics integration
- Any other concerns

**Just ask - I'm here to help!**

---

## 🎯 Success Criteria

✅ Website accessible at orbitiqlabs.space
✅ HTTPS working (green lock icon)
✅ All forms submitting successfully
✅ Mobile responsive
✅ No broken links
✅ Images loading correctly
✅ Email notifications working

---

**You're ready to launch! 🚀🎉**

**Estimated Total Time: ~1 hour (not including DNS wait)**
