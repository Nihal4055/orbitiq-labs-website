#!/bin/bash

echo "🔍 OrbitIQ Labs Pre-Deployment Check"
echo "====================================="
echo ""

# Colors
GREEN='\033[0.32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check 1: Build
echo "1️⃣  Testing build..."
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi

# Check 2: Email references
echo ""
echo "2️⃣  Checking email configuration..."
EMAIL_COUNT=$(grep -r "support@orbitiqlabs.space" src/ | wc -l)
if [ "$EMAIL_COUNT" -gt 0 ]; then
    echo -e "${GREEN}✓ Email found in $EMAIL_COUNT locations${NC}"
else
    echo -e "${RED}✗ Email not configured${NC}"
fi

# Check 3: Logo exists
echo ""
echo "3️⃣  Checking logo files..."
if [ -f "public/paintings/company-logo-transparent.png" ]; then
    echo -e "${GREEN}✓ Transparent logo exists${NC}"
else
    echo -e "${RED}✗ Transparent logo missing${NC}"
fi

# Check 4: Testimonial images
echo ""
echo "4️⃣  Checking testimonial images..."
MISSING=0
for img in testimonial-shamanth.jpg testimonial-rithesh.jpg; do
    if [ ! -f "public/paintings/$img" ]; then
        echo -e "${RED}✗ Missing: $img${NC}"
        MISSING=$((MISSING + 1))
    fi
done
if [ $MISSING -eq 0 ]; then
    echo -e "${GREEN}✓ All testimonial images present${NC}"
fi

# Check 5: No console.log in production
echo ""
echo "5️⃣  Checking for debug statements..."
LOG_COUNT=$(grep -r "console.log" src/ --include="*.tsx" --include="*.ts" | grep -v "node_modules" | grep -v "error" | wc -l)
if [ "$LOG_COUNT" -eq 0 ]; then
    echo -e "${GREEN}✓ No console.log statements${NC}"
else
    echo -e "${YELLOW}⚠ Found $LOG_COUNT console.log statements (review recommended)${NC}"
fi

# Check 6: Forms configured
echo ""
echo "6️⃣  Checking forms..."
if grep -q "ResidencyApplicationForm" src/components/consortium/ResidencyApplicationForm.tsx; then
    echo -e "${GREEN}✓ Residency form exists${NC}"
fi
if grep -q "MorbiusAccessForm" src/components/site/MorbiusAccessForm.tsx; then
    echo -e "${GREEN}✓ Morbius access form exists${NC}"
fi

# Summary
echo ""
echo "====================================="
echo -e "${GREEN}✅ Pre-deployment check complete!${NC}"
echo ""
echo "📋 Next steps:"
echo "  1. Review DEPLOYMENT-GUIDE.md"
echo "  2. Initialize git: git init"
echo "  3. Commit changes: git add . && git commit -m 'feat: initial release'"
echo "  4. Push to GitHub"
echo "  5. Deploy on Vercel"
echo ""
echo "🚀 Ready to launch OrbitIQ Labs!"
