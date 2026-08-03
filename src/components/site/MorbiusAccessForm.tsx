import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MorbiusAccessFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType?: "individual" | "institutional";
}

export function MorbiusAccessForm({ isOpen, onClose, formType = "individual" }: MorbiusAccessFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    designation: "",
    useCase: "",
    researchArea: "",
    teamSize: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = formType === "institutional" 
      ? `Institutional Demo Request - ${formData.organization}`
      : `Morbius Desktop Access Request - ${formData.name}`;

    const body = formType === "institutional"
      ? `
Institutional Demo Request

Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
Designation: ${formData.designation}
Research Area: ${formData.researchArea}
Team Size: ${formData.teamSize}
Timeline: ${formData.timeline}
Use Case: ${formData.useCase}
      `.trim()
      : `
Morbius Desktop Access Request

Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
Designation: ${formData.designation}
Use Case: ${formData.useCase}
      `.trim();

    const mailtoLink = `mailto:support@orbitiqlabs.space?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    try {
      window.location.href = mailtoLink;
      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
        setFormData({
          name: "",
          email: "",
          organization: "",
          designation: "",
          useCase: "",
          researchArea: "",
          teamSize: "",
          timeline: "",
        });
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border/60 bg-background p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full border border-border/60 p-2 transition-colors hover:bg-surface/50"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            <span className="label-mono text-violet-400">
              {formType === "institutional" ? "Institutional Demo" : "Early Access"}
            </span>
          </div>
          <h2 className="font-display text-3xl font-light tracking-tight">
            {formType === "institutional" 
              ? "Request an Institutional Demo"
              : "Get Morbius Desktop"
            }
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {formType === "institutional"
              ? "Schedule a personalized demo for your research team or institution"
              : "Morbius Desktop is currently in early access. Fill out the form below and we'll get back to you."
            }
          </p>
        </div>

        {submitStatus === "success" ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-violet-400/50 bg-violet-400/10">
              <svg className="h-8 w-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-light">Request Sent!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We'll review your request and get back to you within 24-48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border/60 bg-surface/20 px-4 py-2.5 text-sm transition-colors focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400"
                placeholder="Dr. Jane Smith"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border/60 bg-surface/20 px-4 py-2.5 text-sm transition-colors focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400"
                placeholder="jane.smith@university.edu"
              />
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium mb-2">
                Organization / Institution *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border/60 bg-surface/20 px-4 py-2.5 text-sm transition-colors focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400"
                placeholder="Stanford University"
              />
            </div>

            {/* Designation */}
            <div>
              <label htmlFor="designation" className="block text-sm font-medium mb-2">
                Role / Designation *
              </label>
              <select
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border/60 bg-surface/20 px-4 py-2.5 text-sm transition-colors focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400"
              >
                <option value="">Select your role</option>
                <option value="Professor / Faculty">Professor / Faculty</option>
                <option value="Postdoctoral Researcher">Postdoctoral Researcher</option>
                <option value="PhD Student">PhD Student</option>
                <option value="Graduate Student">Graduate Student</option>
                <option value="Research Scientist">Research Scientist</option>
                <option value="Principal Investigator">Principal Investigator</option>
                <option value="Lab Manager">Lab Manager</option>
                <option value="Industry Researcher">Industry Researcher</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Quantitative Analyst">Quantitative Analyst</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Institutional-specific fields */}
            {formType === "institutional" && (
              <>
                <div>
                  <label htmlFor="researchArea" className="block text-sm font-medium mb-2">
                    Primary Research Area *
                  </label>
                  <select
                    id="researchArea"
                    name="researchArea"
                    value={formData.researchArea}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border/60 bg-surface/20 px-4 py-2.5 text-sm transition-colors focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400"
                  >
                    <option value="">Select research area</option>
                    <option value="Drug Discovery">Drug Discovery</option>
                    <option value="Materials Science">Materials Science</option>
                    <option value="Computational Biology">Computational Biology</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Physics">Physics</option>
                    <option value="Genomics">Genomics</option>
                    <option value="Proteomics">Proteomics</option>
                    <option value="Quantitative Finance">Quantitative Finance</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="teamSize" className="block text-sm font-medium mb-2">
                    Expected Team Size *
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border/60 bg-surface/20 px-4 py-2.5 text-sm transition-colors focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400"
                  >
                    <option value="">Select team size</option>
                    <option value="1-5">1-5 researchers</option>
                    <option value="6-10">6-10 researchers</option>
                    <option value="11-25">11-25 researchers</option>
                    <option value="26-50">26-50 researchers</option>
                    <option value="51+">51+ researchers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                    Implementation Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border/60 bg-surface/20 px-4 py-2.5 text-sm transition-colors focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400"
                  >
                    <option value="">Select timeline</option>
                    <option value="Immediate (within 1 month)">Immediate (within 1 month)</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Exploring options">Exploring options</option>
                  </select>
                </div>
              </>
            )}

            {/* Use Case */}
            <div>
              <label htmlFor="useCase" className="block text-sm font-medium mb-2">
                {formType === "institutional" ? "Primary Use Case" : "What will you use Morbius for?"} *
              </label>
              <textarea
                id="useCase"
                name="useCase"
                value={formData.useCase}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-lg border border-border/60 bg-surface/20 px-4 py-2.5 text-sm transition-colors focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400 resize-none"
                placeholder={formType === "institutional" 
                  ? "Describe how your team would use Morbius and what research challenges you're looking to solve..."
                  : "e.g., Literature review for drug discovery project, hypothesis generation for materials research..."
                }
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                variant="solid"
                size="lg"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : formType === "institutional" ? "Request Demo" : "Request Access"}
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

            <p className="text-center text-xs text-muted-foreground">
              By submitting, you agree to receive emails from OrbitIQ Labs about Morbius Desktop and related products.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
