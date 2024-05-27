import { app } from "./app"

const PORT = process.env || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})