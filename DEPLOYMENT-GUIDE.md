# 🚀 OrbitIQ Labs Production Deployment Guide

## ✅ Pre-Launch Checklist (COMPLETED)

- ✅ Build successful (no errors)
- ✅ Logo transparent and properly sized
- ✅ All forms configured with `support@orbitiqlabs.space`
- ✅ Testimonial images fixed (shamanth & rithesh)
- ✅ Residency page hero background extends to top
- ✅ All social links point to @orbitiqlabs
- ✅ Newsletter subscription configured
- ✅ Country-based pricing implemented (Tier 1: $150, Tier 2: $65, India: $50)
- ✅ Fancy pricing display with strikethrough discounts
- ✅ Phone input with country codes
- ✅ Resume/CV submission instructions added

---

## 📊 Deployment Platform Comparison

### **RECOMMENDED: Vercel** ⭐

**Why Vercel is Best for You:**
1. **Zero Configuration** - Detects TanStack Start automatically
2. **Free Tier** - Generous limits (100GB bandwidth, unlimited requests)
3. **Custom Domain** - Super easy setup for orbitiqlabs.space
4. **Edge Functions** - Lightning fast global performance
5. **Automatic HTTPS** - SSL certificate included
6. **GitHub Integration** - Auto-deploy on push
7. **Perfect for React/Vite** - Built by the creators of Next.js

**Pricing:**
- **Hobby (Free)**: Perfect for launch - Unlimited projects, 100GB bandwidth/month
- **Pro ($20/mo)**: When you scale - 1TB bandwidth, team features

### Alternative: AWS Amplify

**Pros:**
- More control over infrastructure
- Better for complex backends later
- AWS ecosystem integration

**Cons:**
- More complex setup
- Higher costs ($0.01/build min + $0.15/GB)
- Requires AWS account management
- Steeper learning curve

**Verdict: Start with Vercel, migrate to AWS only if you need advanced features later.**

---

## 🚀 Deployment Steps (Vercel)

### Step 1: Prepare Repository

```bash
cd /Users/nihalshetty/Desktop/orbitiq-insights-main

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "feat: OrbitIQ Labs initial production release

- Transparent logo with proper sizing
- Country-based residency pricing
- Enhanced form designs with document submission
- Fixed testimonial images
- Residency hero background optimization
"
```

### Step 2: Push to GitHub

```bash
# Create new repo on GitHub: https://github.com/new
# Name it: orbitiq-labs-website

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/orbitiq-labs-website.git

# Push
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. **Sign up**: https://vercel.com/signup
2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repo: `orbitiq-labs-website`
   - Vercel auto-detects TanStack Start
3. **Configure**:
   - **Framework Preset**: TanStack Start (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.output/public`
   - **Install Command**: `npm install`
4. **Deploy**: Click "Deploy" (takes 2-3 minutes)

### Step 4: Connect Custom Domain

1. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Add domain: `orbitiqlabs.space` and `www.orbitiqlabs.space`

2. **Configure DNS** (at your domain registrar):
   ```
   Type: A Record
   Name: @
   Value: 76.76.19.19
   TTL: 3600

   Type: CNAME Record
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

3. **Wait 10-60 minutes** for DNS propagation
4. **Vercel auto-issues SSL certificate** (free, automatic renewal)

---

## 📧 Form Data Collection Strategy

### Current Setup (mailto links)
✅ All forms currently use `mailto:support@orbitiqlabs.space`
- ✅ Morbius Access Form
- ✅ Residency Application Form  
- ✅ Newsletter subscription

**How it works:**
- User clicks Submit → Opens their email client
- Pre-filled subject and body with form data
- User sends email → You receive at support@orbitiqlabs.space

### ⚠️ Limitations of mailto:
- Requires user to have email client configured
- User can see/modify data before sending
- No submission tracking
- No form analytics

### 🎯 RECOMMENDED: Upgrade to Form Backend Service

Since you want professional form handling, here are the best options:

---

## 🔥 Recommended Form Backend: Formspree

**Why Formspree:**
- ✅ **Free tier**: 50 submissions/month
- ✅ **Zero backend code** needed
- ✅ **Email notifications** to support@orbitiqlabs.space
- ✅ **File uploads** (for resume/CV)
- ✅ **Spam protection** built-in
- ✅ **Form analytics** dashboard
- ✅ **GDPR compliant**

**Setup (10 minutes):**

1. **Sign up**: https://formspree.io/
2. **Create forms** (you need 3):
   - Morbius Access Form
   - Residency Application Form
   - Newsletter Form

3. **Get form endpoints** (example):
   ```
   Morbius: https://formspree.io/f/xyzabc123
   Residency: https://formspree.io/f/xyzdef456
   Newsletter: https://formspree.io/f/xyzghi789
   ```

**Pricing:**
- **Free**: 50 submissions/month, 1 form
- **Gold ($10/mo)**: 1000 submissions/month, unlimited forms
- **Platinum ($40/mo)**: 10,000 submissions/month

---

### Alternative: Tally Forms (100% Free)

**Best if you want unlimited submissions:**
- ✅ **Completely free** forever
- ✅ Unlimited forms
- ✅ Unlimited submissions
- ✅ Email notifications
- ✅ Beautiful UI
- ✅ CSV export

**Setup**: https://tally.so/

---

## 🛠️ Implementation: Upgrade Forms (If using Formspree)

I can help you implement this! Just let me know and I'll:

1. Update `MorbiusAccessForm.tsx` to POST to Formspree
2. Update `ResidencyApplicationForm.tsx` to POST to Formspree
3. Add file upload for resume/CV
4. Add success/error states
5. Add form validation
6. Add loading spinners

**Code changes needed:**
- Replace `mailto:` with `fetch()` POST requests
- Add file upload input for CV/resume
- Handle submission states (loading, success, error)
- Show user-friendly success messages

---

## 📊 Analytics Setup (Optional but Recommended)

### Google Analytics 4 (Free)

1. Create GA4 property: https://analytics.google.com/
2. Get Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add to your site (I can help with this)

### Vercel Analytics (Recommended)

- **Built-in** to Vercel
- **Privacy-friendly** (no cookies)
- **Real-time** visitor data
- **Free** on all plans

Enable in: Project Settings → Analytics

---

## 🔒 Security Checklist

- ✅ HTTPS (automatic with Vercel)
- ✅ Email validation in forms
- ✅ No API keys in frontend code
- ⚠️ **TODO**: Add rate limiting (once you switch to form backend)
- ⚠️ **TODO**: Add CAPTCHA to prevent spam (Formspree includes this)

---

## 📝 Environment Variables (If needed later)

```bash
# In Vercel Dashboard → Settings → Environment Variables
FORMSPREE_MORBIUS_ID=xyzabc123
FORMSPREE_RESIDENCY_ID=xyzdef456
FORMSPREE_NEWSLETTER_ID=xyzghi789
```

---

## 🎯 Launch Day Checklist

### Before Deploy:
- [ ] Test all forms on localhost
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Verify all images load
- [ ] Test residency application flow
- [ ] Verify pricing displays correctly for all countries
- [ ] Check logo on all pages

### After Deploy:
- [ ] Test live site on desktop
- [ ] Test live site on mobile
- [ ] Submit test forms to support@orbitiqlabs.space
- [ ] Verify DNS propagation: https://dnschecker.org/
- [ ] Check SSL certificate (https should work)
- [ ] Share with team for feedback
- [ ] Monitor Vercel Analytics for first visitors

---

## 📞 Post-Launch Support

**Monitor email**: `support@orbitiqlabs.space`
- Morbius access requests
- Residency applications (with CV/resume attachments)
- Newsletter subscriptions
- General inquiries

**Response time target**: Within 24 hours for applications

---

## 🚀 Quick Deploy Commands

```bash
# Deploy to production
git add .
git commit -m "Update: [describe changes]"
git push

# Vercel auto-deploys within 2 minutes
```

---

## 💡 Next Steps

1. **Deploy to Vercel** (30 minutes)
2. **Connect custom domain** (10 minutes + DNS wait time)
3. **Test live site** (30 minutes)
4. **Upgrade forms to Formspree** (optional, 30 minutes)
5. **Set up analytics** (optional, 10 minutes)
6. **Announce launch!** 🎉

---

## Questions or Issues?

Let me know if you need help with:
- Git/GitHub setup
- Vercel deployment
- DNS configuration
- Form backend implementation
- Analytics setup
- Any other deployment concerns

**Ready to go live? Let's do this! 🚀**
