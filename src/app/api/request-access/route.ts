import { NextResponse } from "next/server";

type RequestAccessBody = {
  name?: string;
  email?: string;
  project?: string;
  volume?: string;
  notes?: string;
  source?: string;
};

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as RequestAccessBody | null;

  if (!body) {
    return NextResponse.json({ success: false, message: "Invalid JSON payload" }, { status: 400 });
  }

  const { name, email, project, volume, notes, source } = body;

  if (!name || !email) {
    return NextResponse.json(
      { success: false, message: "Name and email are required" },
      { status: 400 }
    );
  }

  if (typeof name !== "string" || typeof email !== "string") {
    return NextResponse.json({ success: false, message: "Invalid payload" }, { status: 400 });
  }

  const payload = {
    name,
    email,
    project: typeof project === "string" ? project : undefined,
    volume: typeof volume === "string" ? volume : undefined,
    notes: typeof notes === "string" ? notes : undefined,
    source: source === "hero" || source === "partnerships" ? source : "unknown",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.REQUEST_ACCESS_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: `🚀 New QuantsEdge access request\n• Name: ${payload.name}\n• Email: ${payload.email}\n• Source: ${payload.source}\n• Project: ${payload.project ?? "—"}\n• Volume/Reach: ${payload.volume ?? "—"}\n• Notes: ${payload.notes ?? "—"}`,
        }),
      });
    } catch (error) {
      console.error("Failed to forward request access payload", error);
      return NextResponse.json(
        { success: false, message: "Unable to forward request. Please try again." },
        { status: 502 }
      );
    }
  } else {
    console.warn("Request access submission", payload);
  }

  return NextResponse.json({ success: true, message: "Request received" });
}
