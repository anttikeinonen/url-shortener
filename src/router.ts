import { Router } from "express";

const router = Router();

router.post("/shorten", async (req, res) => {
    const { url } = req.body;
    const shortUrl = "http://localhost:3000/short/1234";
    res.json({ shortUrl });
});

router.get("/short/:id", async (req, res) => {
    const { id } = req.params;
    res.redirect("https://www.google.com");
});

router.get("/short/:id/stats", async (req, res) => {
    const { id } = req.params;
    res.json({ id, hits: 100 });
});

export default router;