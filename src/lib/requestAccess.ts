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

export async function submitRequestAccess(
  payload: RequestAccessPayload
): Promise<RequestAccessResponse> {
  try {
    const response = await fetch("/api/request-access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: "Request failed" }));
      return {
        success: false,
        message: error.message ?? "Unable to submit request",
      };
    }

    const result = (await response.json()) as RequestAccessResponse;
    return result;
  } catch (error) {
    console.error("Failed to submit request access form", error);
    return {
      success: false,
      message: "Network error. Please try again soon.",
    };
  }
}
