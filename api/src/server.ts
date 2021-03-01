import 'reflect-metadata'
import express from 'express';
import "./database"

const app = express();



//http://localhost:3333/users
app.get("/", (request, response) => {
    return response.json({ message: "Hello Word - NLW#4" });
});

app.post("/", (request, response) => {
    // Recebeu os dados para salvar
    return response.json({ message: "Os dados foram salvos com sucesso" })
})

app.listen(3333, () => console.log("Server running!"))

