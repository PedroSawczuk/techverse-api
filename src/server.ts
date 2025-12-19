import { app } from "./app";

app.get('/', () => {
    return 'Hello World!'
})

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log(`🔥 API rodando em http://localhost:3333`)
})