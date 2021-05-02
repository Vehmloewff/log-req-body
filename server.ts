import { Application } from "https://deno.land/x/oak/mod.ts"
import { oakCors } from 'https://deno.land/x/cors/mod.ts

const app = new Application();

app.use(oakCors({ origin: '*' ))

app.use(async (ctx) => {
	console.log(ctx.request.url.pathname + ctx.request.url.searchParams)
	console.log(await ctx.request.body.value)
	ctx.response.body = "Thanks!"
});

await app.listen({ port: 8000 })
