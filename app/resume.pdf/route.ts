const RESUME_SOURCE_URL =
  "https://raw.githubusercontent.com/Rakshitha1427/portfolio/main/public/resume.pdf";

export const runtime = "nodejs";

export async function GET() {
  try {
    const response = await fetch(RESUME_SOURCE_URL, {
      cache: "no-store",
      headers: {
        Accept: "application/pdf",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch resume PDF: ${response.status}`);
    }

    const pdfBuffer = await response.arrayBuffer();

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="D-Rakshitha-Resume.pdf"',
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch (error) {
    console.error("Serving resume.pdf failed", error);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/resume.txt",
      },
    });
  }
}
