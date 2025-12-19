import { app } from "@/app";

app.get('/', () => {
    return 'Hello World!'
})

app.listen({ port: 3333 })