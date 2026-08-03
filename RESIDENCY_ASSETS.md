# OrbitIQ Residency — Required Image Assets

## Overview
The Residency page uses neomorphic design overlaid on the Victorian-Greek aesthetic. All images should maintain the same painterly, classical quality as the existing interludes.

---

## 1. Hero Background — Greek Faded Background
**Filename:** `greek-hero-bg.jpg`  
**Location:** `/public/paintings/`  
**Dimensions:** 2560×1440px minimum (16:9 ratio)  
**Usage:** Large parallax background for hero section, shown at 20% opacity

### Prompt:
```
A grand neoclassical Greek academy interior, painted in the style of 18th-century European masters. 
Tall marble columns with Corinthian capitals recede into atmospheric perspective. Shafts of 
golden afternoon light pour through tall arched windows, illuminating floating dust motes. 
In the middle distance, marble busts of ancient philosophers line the walls. The floor is 
polished marble with geometric inlays. The color palette is warm ochres, deep umbers, and 
soft slate blues. Oil painting technique with visible brushwork. Chiaroscuro lighting. 
Romantic academic realism in the tradition of Hubert Robert or Thomas Cole. The scene should 
feel timeless, contemplative, and institutional — a place where serious inquiry happens.
```

**Post-processing notes:**
- Will be displayed at 20% opacity behind dark gradient overlays
- Should have good tonal contrast but soft detail (not hyper-sharp)
- Desaturate slightly if colors compete with UI text

---

## 2. "Who's Behind It" Section Background
**Filename:** `greek-scholar-bg.jpg`  
**Location:** `/public/paintings/`  
**Dimensions:** 2560×1440px minimum (16:9 ratio)  
**Usage:** Large faded background for the credibility section, shown at 10% opacity

### Prompt:
```
A solitary scholar in classical robes studying ancient texts in a vast library, painted in the 
style of Rembrandt's Scholar series. The figure sits at a heavy wooden table covered with 
open manuscripts, astronomical instruments, and geometric diagrams. Behind them, towering 
shelves of leather-bound books disappear into shadow. A single oil lamp casts warm, dramatic 
light across the scene. The walls are stone, with a single tall window showing deep twilight 
blue. Rich browns, deep blacks, and warm golden highlights. Oil painting with impasto texture. 
Strong chiaroscuro — most of the scene in shadow, with focused light on the scholar's hands 
and the open book. Dutch Golden Age realism. The mood is intimate, focused, solitary — the 
image of deep intellectual work done without audience.
```

**Post-processing notes:**
- Will be displayed at 10% opacity as a section background
- Should have strong darks and dramatic light to read well even at low opacity
- Warmer tones preferred (amber/sepia range)

---

## 3. Additional Interlude Painting (Optional)
**Filename:** `interlude-ariadne.jpg`  
**Location:** `/public/paintings/` (already exists)  
**Usage:** Currently showing Ariadne's thread, can be used for additional breaks if needed

**Note:** We're already using three interludes from your existing set:
- `interlude-athenaeum.jpg` (after problem/solution)
- `interlude-prometheus.jpg` (after credibility)
- `interlude-aegis.jpg` (before final CTA)

If you want a fourth break or want to replace any of these, you can commission a new painting with a similar prompt structure to the existing ones.

---

## Asset Checklist

- [ ] `greek-hero-bg.jpg` → `/public/paintings/`
- [ ] `greek-scholar-bg.jpg` → `/public/paintings/`
- [ ] Verify existing interludes are in place:
  - [ ] `interlude-athenaeum.jpg`
  - [ ] `interlude-prometheus.jpg`
  - [ ] `interlude-aegis.jpg`

---

## Technical Specs for All Images

**Format:** JPG (for photographs/paintings with gradients)  
**Color space:** sRGB  
**Compression:** 80–85% quality (balance between file size and detail)  
**Max file size:** 500KB per image (for fast page load)

**Optimization command (if needed):**
```bash
# Using ImageMagick
convert input.jpg -resize 2560x1440^ -quality 82 -strip output.jpg
```

---

## Naming Convention

All painting assets follow this pattern:
- **Backgrounds:** `greek-[purpose]-bg.jpg`
- **Interludes:** `interlude-[theme].jpg`
- **Location:** `/public/paintings/`

This keeps them organized alongside your existing Victorian-Greek visual library.
