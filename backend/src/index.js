import app from "./app"
const PORT = process.env.PORT || 3525;

app.listen(PORT, ()=> console.log(`Server running in http://localhost:${PORT}`));
