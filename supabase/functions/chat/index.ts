import { corsHeaders } from "@supabase/supabase-js/cors";

const SYSTEM_PROMPT = `You are a helpful AI assistant for Ratthika's portfolio website. You answer questions about her skills, projects, education, and experience. Keep responses concise and friendly.

Ratthika is a fresher software developer skilled in:
- Frontend: HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS
- Backend: Node.js, Python
- Tools: Git, GitHub, VS Code
- Projects: Habit Tracking (HTML/CSS/JS), Artika Gallery, Codebind Tech responsive website
- Education: Computer Science background
- Internship experience at Codebind Tech

If asked about something unrelated to Ratthika's portfolio, politely redirect the conversation.`;

interface ChatMessage {
  role: string;
  content: string;
}

function validateMessages(raw: unknown): ChatMessage[] {
  if (!Array.isArray(raw)) {
    throw new Error("messages must be an array");
  }

  const validRoles = new Set(["user", "assistant"]);

  const validated = raw
    .filter(
      (msg): msg is { role: string; content: string } =>
        msg != null &&
        typeof msg === "object" &&
        typeof msg.role === "string" &&
        validRoles.has(msg.role) &&
        typeof msg.content === "string" &&
        msg.content.trim().length > 0
    )
    .map((msg) => ({
      role: msg.role as "user" | "assistant",
      content: msg.content.trim().slice(0, 500),
    }))
    .slice(-10);

  if (validated.length === 0) {
    throw new Error("No valid messages provided");
  }

  return validated;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Reject oversized payloads (50KB max)
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 50000) {
      return new Response(
        JSON.stringify({ error: "Payload too large" }),
        { status: 413, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    const messages = validateMessages(body.messages);

    const apiMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages,
    ];

    const response = await fetch(
      "https://agentic.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Deno.env.get("LOVABLE_API_KEY")}`,
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: apiMessages,
          stream: true,
        }),
      }
    );

    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
