import { Router } from "express";
import Url from "./models/url";

async function generateUniqueShortUrl(): Promise<string> {
    let shortUrl;
    let exists;

    do {
        shortUrl = Math.random().toString(36).substring(2, 6);
        exists = await Url.findOne({ where: { shortUrl } });
    } while (exists !== null);

    return shortUrl;
}

const router = Router();

router.post("/", async (req, res) => {
    const { url } = req.body;
    if (!url) {
        res.status(400).json({ error: "URL is required" });
        return;
    }
    const shortUrl = await generateUniqueShortUrl();
    await Url.create({ originalUrl: url, shortUrl });
    res.json({ shortUrl });
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const url = await Url.findOne({ where: { shortUrl: id } });
    if (url === null) {
        res.status(404).json({ error: "Short URL not found" });
    } else {
        url.hits += 1;
        await url.save();
        res.redirect(url.originalUrl);
    }
});

router.get("/:id/stats", async (req, res) => {
    const { id } = req.params;
    const url = await Url.findOne({ where: { shortUrl: id } });
    if (url === null) {
        res.status(404).json({ error: "Short URL not found" });
    } else {
        const { id: _, ...data } = url.dataValues;
        res.json(data);
    }
});

export default router;
