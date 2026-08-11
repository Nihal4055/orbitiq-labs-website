// Error reporting stub - no external telemetry
export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  // Only log to console for debugging, no external tracking
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    console.error("Error caught:", error, context);
  }
}
