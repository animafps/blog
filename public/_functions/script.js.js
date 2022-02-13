export async function onRequest(request) {
  var url = new URL(request.url);
  url.hostname = "static.cloudflareinsights.com";
  url.pathname = "/beacon.min.js";
  let response = await fetch(url, request);
  const newResponse = new Response(response.body, response);
  return newResponse;
}
