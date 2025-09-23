export interface RequestAccessPayload {
  name: string;
  email: string;
  project?: string;
  volume?: string;
  notes?: string;
  source: "hero" | "partnerships";
}

export interface RequestAccessResponse {
  success: boolean;
  message: string;
}

const CONTACT_EMAIL = "admin@quantsedge.ai";
const SUBJECT_BY_SOURCE: Record<RequestAccessPayload["source"], string> = {
  hero: "QuantsEdge Access Request",
  partnerships: "QuantsEdge Partnerships Inquiry",
};

export async function submitRequestAccess(
  payload: RequestAccessPayload
): Promise<RequestAccessResponse> {
  if (typeof window === "undefined") {
    return {
      success: false,
      message: `Please email ${CONTACT_EMAIL} directly.`,
    };
  }

  const { name, email, project, volume, notes, source } = payload;
  const subject = SUBJECT_BY_SOURCE[source] ?? "QuantsEdge Inquiry";

  const bodyLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    project ? `Project: ${project}` : null,
    volume ? `Volume/Reach: ${volume}` : null,
    notes ? `Notes: ${notes}` : null,
    `Source: ${source}`,
  ].filter(Boolean) as string[];

  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

  // Trigger the user's default mail client with the composed draft.
  window.location.href = mailtoUrl;

  return {
    success: true,
    message: `Your email client should now open a draft to ${CONTACT_EMAIL}. If it doesn't, email us directly.`,
  };
}
