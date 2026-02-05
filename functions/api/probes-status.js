export async function onRequestPost(context) {
  const token = context.env.MEDUX_TOKEN;

  const response = await fetch(
    "https://medux-ids.caseonit.com/api/profile/probes/status",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: "{}",
    }
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=5",
    },
  });
}
