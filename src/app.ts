import { Elysia } from "elysia";
// import staticPlugin dari @elysiajs/static 
// import userRoutes dari user.route.ts

export const app = new Elysia()
 .use( // agar css dapat dipanggil lewat SSR 
    staticPlugin({
      assets: "public",
      prefix: "/"
    })
  )
  .use(userRoutes);
