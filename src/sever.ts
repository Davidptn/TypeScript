import express from "express";
import postRouter from "./Post/router";

const app = express();

app.use(express.json());
app.use("/posts", postRouter);

const PORT = 2232;
app.listen(PORT, () => {
    console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});