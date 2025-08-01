export async function GET() {
  return new Response(JSON.stringify({ message: "Not implemented" }), {
    status: 404,
    headers: { "Content-Type": "application/json" },
  });
}
