addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request) {
	console.log(request.url)
	console.log(await request.text())
	
	return new Response('Thanks!')
}
