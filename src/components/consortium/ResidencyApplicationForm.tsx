import { useState } from "react";
import { X, DollarSign, Check, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResidencyApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

// Country codes for phone input
const COUNTRY_CODES = [
  { code: "+1", country: "US/CA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "IN" },
  { code: "+86", country: "CN" },
  { code: "+81", country: "JP" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+61", country: "AU" },
  { code: "+7", country: "RU" },
  { code: "+82", country: "KR" },
  { code: "+55", country: "BR" },
  { code: "+27", country: "ZA" },
  { code: "+234", country: "NG" },
  { code: "+20", country: "EG" },
  { code: "+92", country: "PK" },
  { code: "+880", country: "BD" },
  { code: "+977", country: "NP" },
  { code: "+93", country: "AF" },
  { code: "+233", country: "GH" },
  { code: "+254", country: "KE" },
];

// Country pricing tiers based on economic status
const COUNTRY_PRICING = {
  tier1: { // Well-to-do countries - $150
    price: 150,
    originalPrice: 150,
    countries: [
      "United States", "United Kingdom", "Canada", "Australia", "Germany", 
      "France", "Switzerland", "Norway", "Sweden", "Denmark", "Netherlands", 
      "Belgium", "Austria", "Finland", "Iceland", "Ireland", "Luxembourg", 
      "New Zealand", "Singapore", "Japan", "South Korea", "Israel", 
      "United Arab Emirates", "Qatar", "Kuwait", "Saudi Arabia", "Bahrain"
    ]
  },
  tier2: { // Developing countries - $65 (discounted from $150)
    price: 65,
    originalPrice: 150,
    countries: [
      "Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", 
      "Azerbaijan", "Bangladesh", "Belarus", "Benin", "Bhutan", "Bolivia", 
      "Bosnia and Herzegovina", "Botswana", "Brazil", "Bulgaria", "Burkina Faso", 
      "Burundi", "Cambodia", "Cameroon", "Central African Republic", "Chad", 
      "China", "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", 
      "Czech Republic", "Democratic Republic of Congo", "Dominican Republic", 
      "Ecuador", "Egypt", "El Salvador", "Eritrea", "Estonia", "Eswatini", 
      "Ethiopia", "Fiji", "Gabon", "Gambia", "Georgia", "Ghana", "Greece", 
      "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", 
      "Hungary", "Indonesia", "Iran", "Iraq", "Ivory Coast", "Jamaica", "Jordan", 
      "Kazakhstan", "Kenya", "Kosovo", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", 
      "Lesotho", "Liberia", "Libya", "Lithuania", "Madagascar", "Malawi", 
      "Malaysia", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", 
      "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", 
      "Nepal", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Pakistan", 
      "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", 
      "Poland", "Portugal", "Romania", "Russia", "Rwanda", "Senegal", "Serbia", 
      "Sierra Leone", "Slovakia", "Slovenia", "Somalia", "South Africa", 
      "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Syria", 
      "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tunisia", 
      "Turkey", "Turkmenistan", "Uganda", "Ukraine", "Uruguay", "Uzbekistan", 
      "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
  },
  tier3: { // India - $50 (special pricing)
    price: 50,
    originalPrice: 150,
    countries: ["India"]
  }
};

// Flatten all countries for the dropdown
const ALL_COUNTRIES = [
  ...COUNTRY_PRICING.tier3.countries,
  ...COUNTRY_PRICING.tier1.countries.sort(),
  ...COUNTRY_PRICING.tier2.countries.sort(),
].sort();

function getPricingForCountry(country: string): { price: number; originalPrice: number; isDiscounted: boolean } {
  if (COUNTRY_PRICING.tier3.countries.includes(country)) {
    return { price: COUNTRY_PRICING.tier3.price, originalPrice: COUNTRY_PRICING.tier3.originalPrice, isDiscounted: true };
  }
  if (COUNTRY_PRICING.tier1.countries.includes(country)) {
    return { price: COUNTRY_PRICING.tier1.price, originalPrice: COUNTRY_PRICING.tier1.originalPrice, isDiscounted: false };
  }
  if (COUNTRY_PRICING.tier2.countries.includes(country)) {
    return { price: COUNTRY_PRICING.tier2.price, originalPrice: COUNTRY_PRICING.tier2.originalPrice, isDiscounted: true };
  }
  return { price: COUNTRY_PRICING.tier2.price, originalPrice: COUNTRY_PRICING.tier2.originalPrice, isDiscounted: true };
}

export function ResidencyApplicationForm({ isOpen, onClose }: ResidencyApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    country: "",
    education: "",
    position: "",
    scholarshipReason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) return null;

  const pricing = formData.country ? getPricingForCountry(formData.country) : null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const pricingInfo = getPricingForCountry(formData.country);
    
    const subject = `Residency Application - ${formData.fullName}`;
    const body = `
OrbitIQ Labs Residency Application

APPLICANT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.countryCode} ${formData.phone}
Country: ${formData.country}

ACADEMIC & PROFESSIONAL:
━━━━━━━━━━━━━━━━━━━━━━━━━
Educational Qualification: ${formData.education}
Current Position: ${formData.position}

PRICING:
━━━━━━━━━━━━━━━━━━━━━━━━━
Program Fee: $${pricingInfo.price} USD${pricingInfo.isDiscounted ? ` (Standard: $${pricingInfo.originalPrice})` : ''}
${formData.scholarshipReason ? `\nScholarship Request:\n${formData.scholarshipReason}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━
Note: This is a paid commitment as intensive cloud credits will be utilized. 
Tool usage charges are waived for residency participants.

DOCUMENTS REQUIRED:
Please send your Resume and Research CV (optional) to support@orbitiqlabs.space
    `.trim();

    const mailtoLink = `mailto:support@orbitiqlabs.space?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    try {
      window.location.href = mailtoLink;
      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
        setFormData({
          fullName: "",
          email: "",
          countryCode: "+1",
          phone: "",
          country: "",
          education: "",
          position: "",
          scholarshipReason: "",
        });
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" 
         style={{ backgroundColor: "oklch(0.08 0.002 265 / 0.95)", backdropFilter: "blur(12px)" }}>
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl shadow-[0_0_80px_-12px_oklch(0.6_0.16_265/0.25)]"
           style={{ 
             background: "linear-gradient(135deg, oklch(0.12 0.01 265) 0%, oklch(0.10 0.01 265) 100%)",
             border: "1px solid oklch(0.25 0.02 265 / 0.4)"
           }}>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-20"
               style={{ background: "radial-gradient(ellipse, oklch(0.65 0.18 265), transparent 70%)" }} />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 rounded-full p-2.5 transition-all hover:scale-110"
          style={{ 
            background: "oklch(0.15 0.01 265)",
            border: "1px solid oklch(0.25 0.02 265 / 0.5)"
          }}
          aria-label="Close"
        >
          <X className="h-4 w-4" style={{ color: "oklch(0.7 0.05 265)" }} />
        </button>

        <div className="relative p-10">
          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2.5 mb-4">
              <Sparkles className="h-4 w-4" style={{ color: "oklch(0.7 0.18 265)" }} />
              <span className="mono text-xs uppercase tracking-[0.2em]" style={{ color: "oklch(0.7 0.18 265)" }}>
                Residency Program Application
              </span>
            </div>
            <h2 className="display text-4xl font-light tracking-tight mb-5" style={{ color: "oklch(0.95 0.01 265)" }}>
              Join the Next Cohort
            </h2>
            
            {/* Important Notice */}
            <div className="rounded-2xl p-5"
                 style={{ 
                   background: "linear-gradient(135deg, oklch(0.25 0.15 88 / 0.08), oklch(0.22 0.12 88 / 0.05))",
                   border: "1px solid oklch(0.45 0.14 88 / 0.25)"
                 }}>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center"
                       style={{ background: "oklch(0.6 0.16 88 / 0.15)" }}>
                    <Check className="h-3 w-3" style={{ color: "oklch(0.75 0.15 88)" }} />
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.75 0.05 265)" }}>
                  <strong style={{ color: "oklch(0.75 0.15 88)" }}>Paid Commitment:</strong> This program requires intensive cloud compute resources. 
                  Pricing varies by country for global accessibility. Tool charges are waived. Scholarships available for exceptional cases.
                </p>
              </div>
            </div>
          </div>

          {submitStatus === "success" ? (
            <div className="py-16 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
                   style={{ 
                     background: "oklch(0.7 0.18 265 / 0.15)",
                     border: "2px solid oklch(0.7 0.18 265 / 0.4)"
                   }}>
                <Check className="h-10 w-10" style={{ color: "oklch(0.7 0.18 265)" }} />
              </div>
              <h3 className="display text-2xl font-light mb-3" style={{ color: "oklch(0.95 0.01 265)" }}>
                Application Submitted!
              </h3>
              <p className="text-sm" style={{ color: "oklch(0.6 0.03 265)" }}>
                We'll review your application and contact you within 3-5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-[1px] flex-1" style={{ background: "linear-gradient(90deg, transparent, oklch(0.3 0.02 265), transparent)" }} />
                  <h3 className="mono text-xs uppercase tracking-[0.2em]" style={{ color: "oklch(0.55 0.04 265)" }}>
                    Personal Information
                  </h3>
                  <div className="h-[1px] flex-1" style={{ background: "linear-gradient(90deg, transparent, oklch(0.3 0.02 265), transparent)" }} />
                </div>

                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium mb-2.5 uppercase tracking-wider" style={{ color: "oklch(0.6 0.04 265)" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-5 py-3.5 text-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none"
                    style={{ 
                      background: "oklch(0.15 0.01 265)",
                      border: "1px solid oklch(0.25 0.02 265 / 0.4)",
                      color: "oklch(0.9 0.02 265)"
                    }}
                    placeholder="Dr. Jane Smith"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium mb-2.5 uppercase tracking-wider" style={{ color: "oklch(0.6 0.04 265)" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl px-5 py-3.5 text-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none"
                      style={{ 
                        background: "oklch(0.15 0.01 265)",
                        border: "1px solid oklch(0.25 0.02 265 / 0.4)",
                        color: "oklch(0.9 0.02 265)"
                      }}
                      placeholder="jane@university.edu"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium mb-2.5 uppercase tracking-wider" style={{ color: "oklch(0.6 0.04 265)" }}>
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="rounded-xl px-3 py-3.5 text-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none"
                        style={{ 
                          background: "oklch(0.15 0.01 265)",
                          border: "1px solid oklch(0.25 0.02 265 / 0.4)",
                          color: "oklch(0.9 0.02 265)"
                        }}
                      >
                        {COUNTRY_CODES.map((item) => (
                          <option key={item.code} value={item.code}>
                            {item.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="flex-1 rounded-xl px-5 py-3.5 text-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none"
                        style={{ 
                          background: "oklch(0.15 0.01 265)",
                          border: "1px solid oklch(0.25 0.02 265 / 0.4)",
                          color: "oklch(0.9 0.02 265)"
                        }}
                        placeholder="555 123 4567"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-xs font-medium mb-2.5 uppercase tracking-wider" style={{ color: "oklch(0.6 0.04 265)" }}>
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-5 py-3.5 text-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none"
                    style={{ 
                      background: "oklch(0.15 0.01 265)",
                      border: "1px solid oklch(0.25 0.02 265 / 0.4)",
                      color: "oklch(0.9 0.02 265)"
                    }}
                  >
                    <option value="">Select your country</option>
                    {ALL_COUNTRIES.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Fancy Pricing Display */}
                {pricing && (
                  <div className="relative overflow-hidden rounded-2xl p-6"
                       style={{ 
                         background: "linear-gradient(135deg, oklch(0.18 0.08 265) 0%, oklch(0.15 0.06 265) 100%)",
                         border: "1px solid oklch(0.35 0.12 265 / 0.5)",
                         boxShadow: "0 0 40px -8px oklch(0.6 0.18 265 / 0.2)"
                       }}>
                    <div className="absolute top-0 right-0 w-40 h-40 opacity-20"
                         style={{ background: "radial-gradient(circle, oklch(0.7 0.18 265), transparent 70%)" }} />
                    
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="h-4 w-4" style={{ color: "oklch(0.75 0.16 265)" }} />
                          <span className="mono text-xs uppercase tracking-[0.15em]" style={{ color: "oklch(0.65 0.08 265)" }}>
                            Program Fee
                          </span>
                        </div>
                        <div className="flex items-baseline gap-3">
                          {pricing.isDiscounted && (
                            <div className="relative">
                              <span className="text-2xl font-light" style={{ color: "oklch(0.45 0.04 265)" }}>
                                ${pricing.originalPrice}
                              </span>
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full h-[2px]" 
                                     style={{ background: "oklch(0.6 0.15 0 / 0.7)", transform: "rotate(-8deg)" }} />
                              </div>
                            </div>
                          )}
                          <span className="display text-4xl font-light" style={{ color: "oklch(0.95 0.02 265)" }}>
                            ${pricing.price}
                          </span>
                          <span className="text-sm" style={{ color: "oklch(0.6 0.04 265)" }}>USD</span>
                        </div>
                        {pricing.isDiscounted && (
                          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                               style={{ background: "oklch(0.6 0.16 88 / 0.15)", border: "1px solid oklch(0.65 0.14 88 / 0.3)" }}>
                            <Sparkles className="h-3 w-3" style={{ color: "oklch(0.75 0.15 88)" }} />
                            <span className="mono text-[10px] uppercase tracking-wider font-medium" style={{ color: "oklch(0.75 0.15 88)" }}>
                              {Math.round(((pricing.originalPrice - pricing.price) / pricing.originalPrice) * 100)}% Discount
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {formData.country === "India" && (
                        <div className="text-right">
                          <div className="inline-flex flex-col items-end gap-1 rounded-xl px-4 py-2"
                               style={{ background: "oklch(0.25 0.08 265 / 0.4)" }}>
                            <span className="mono text-[9px] uppercase tracking-wider" style={{ color: "oklch(0.55 0.04 265)" }}>
                              Special Pricing
                            </span>
                            <span className="text-xs font-medium" style={{ color: "oklch(0.8 0.06 265)" }}>
                              India Rate
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Academic & Professional */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-[1px] flex-1" style={{ background: "linear-gradient(90deg, transparent, oklch(0.3 0.02 265), transparent)" }} />
                  <h3 className="mono text-xs uppercase tracking-[0.2em]" style={{ color: "oklch(0.55 0.04 265)" }}>
                    Academic & Professional
                  </h3>
                  <div className="h-[1px] flex-1" style={{ background: "linear-gradient(90deg, transparent, oklch(0.3 0.02 265), transparent)" }} />
                </div>

                <div>
                  <label htmlFor="education" className="block text-xs font-medium mb-2.5 uppercase tracking-wider" style={{ color: "oklch(0.6 0.04 265)" }}>
                    Educational Qualification *
                  </label>
                  <select
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-5 py-3.5 text-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none"
                    style={{ 
                      background: "oklch(0.15 0.01 265)",
                      border: "1px solid oklch(0.25 0.02 265 / 0.4)",
                      color: "oklch(0.9 0.02 265)"
                    }}
                  >
                    <option value="">Select qualification</option>
                    <option value="PhD">PhD / Doctorate</option>
                    <option value="Masters">Master's Degree</option>
                    <option value="Bachelors">Bachelor's Degree</option>
                    <option value="Undergraduate">Undergraduate (In Progress)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="position" className="block text-xs font-medium mb-2.5 uppercase tracking-wider" style={{ color: "oklch(0.6 0.04 265)" }}>
                    Current Professional Position *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-5 py-3.5 text-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none"
                    style={{ 
                      background: "oklch(0.15 0.01 265)",
                      border: "1px solid oklch(0.25 0.02 265 / 0.4)",
                      color: "oklch(0.9 0.02 265)"
                    }}
                    placeholder="e.g., Postdoctoral Researcher, PhD Candidate, Research Scientist"
                  />
                </div>
              </div>

              {/* Scholarship */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-[1px] flex-1" style={{ background: "linear-gradient(90deg, transparent, oklch(0.3 0.02 265), transparent)" }} />
                  <h3 className="mono text-xs uppercase tracking-[0.2em]" style={{ color: "oklch(0.55 0.04 265)" }}>
                    Scholarship (Optional)
                  </h3>
                  <div className="h-[1px] flex-1" style={{ background: "linear-gradient(90deg, transparent, oklch(0.3 0.02 265), transparent)" }} />
                </div>

                <div>
                  <label htmlFor="scholarshipReason" className="block text-xs font-medium mb-2.5 uppercase tracking-wider" style={{ color: "oklch(0.6 0.04 265)" }}>
                    Request Financial Assistance
                  </label>
                  <textarea
                    id="scholarshipReason"
                    name="scholarshipReason"
                    value={formData.scholarshipReason}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-xl px-5 py-3.5 text-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none resize-none"
                    style={{ 
                      background: "oklch(0.15 0.01 265)",
                      border: "1px solid oklch(0.25 0.02 265 / 0.4)",
                      color: "oklch(0.9 0.02 265)"
                    }}
                    placeholder="Briefly describe your circumstances if you require financial assistance. Scholarships are available for exceptional cases demonstrating need."
                  />
                  <p className="mt-2 text-xs" style={{ color: "oklch(0.5 0.03 265)" }}>
                    Leave blank if not applicable. All scholarship requests are reviewed confidentially.
                  </p>
                </div>
              </div>

              {/* Document Submission Section */}
              <div className="rounded-2xl p-6"
                   style={{ 
                     background: "linear-gradient(135deg, oklch(0.15 0.06 200) 0%, oklch(0.13 0.04 200) 100%)",
                     border: "1px solid oklch(0.3 0.08 200 / 0.4)"
                   }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center"
                         style={{ background: "oklch(0.5 0.12 200 / 0.15)" }}>
                      <Mail className="h-5 w-5" style={{ color: "oklch(0.6 0.12 200)" }} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2" style={{ color: "oklch(0.85 0.03 265)" }}>
                      Document Submission Required
                    </h4>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "oklch(0.65 0.03 265)" }}>
                      After submitting this application, please email the following documents to{" "}
                      <a href="mailto:support@orbitiqlabs.space" 
                         className="font-medium hover:underline transition-colors"
                         style={{ color: "oklch(0.7 0.12 200)" }}>
                        support@orbitiqlabs.space
                      </a>
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.7 0.03 265)" }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.6 0.12 200)" }} />
                        <span><strong>Resume/CV</strong> (Required) - Your professional background and experience</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.7 0.03 265)" }}>
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.6 0.12 200)" }} />
                        <span><strong>Research CV</strong> (Optional) - Publications, projects, and research contributions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-6">
                <Button
                  type="submit"
                  variant="solid"
                  size="lg"
                  className="flex-1"
                  disabled={isSubmitting || !pricing}
                >
                  {isSubmitting ? "Submitting..." : `Submit Application${pricing ? ` ($${pricing.price})` : ""}`}
                </Button>
                <Button
                  type="button"
                  variant="wire"
                  size="lg"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </div>

              <p className="text-center text-xs" style={{ color: "oklch(0.5 0.03 265)" }}>
                By submitting, you acknowledge the program fee commitment and agree to our terms of participation.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
