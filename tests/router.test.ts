import request from 'supertest';
import { generateUniqueShortUrl } from '../src/router';
import app from '../src/app';
import Url from '../src/models/url';

describe('generateUniqueShortUrl', () => {
    it('should generate a unique short URL', async () => {
        const shortUrl1 = await generateUniqueShortUrl();
        const shortUrl2 = await generateUniqueShortUrl();
        expect(shortUrl1).not.toBe(shortUrl2);
    });
});

describe('POST /', () => {
    it('should create a new short URL', async () => {
        const response = await request(app)
            .post('/')
            .send({ url: 'https://example.com' });
        expect(response.status).toBe(200);
        expect(response.body.shortUrl).toBeDefined();
    });

    it('should return 400 if URL is not provided', async () => {
        const response = await request(app)
            .post('/')
            .send({});
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('URL is required');
    });
});

describe('GET /:id', () => {
    it('should redirect to the original URL', async () => {
        const url = await Url.create({
            originalUrl: 'https://example.com',
            shortUrl: 'exmpl',
            hits: 0
        });
        const response = await request(app).get(`/${url.shortUrl}`);
        expect(response.status).toBe(302);
        expect(response.header.location).toBe(url.originalUrl);
    });

    it('should return 404 if short URL is not found', async () => {
        const response = await request(app).get('/nonexistent');
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Short URL not found');
    });
});

describe('GET /:id/stats', () => {
    it('should return the stats for the short URL', async () => {
        const url = await Url.create({
            originalUrl: 'https://example.com',
            shortUrl: 'exmpl',
            hits: 0
        });
        const response = await request(app).get(`/${url.shortUrl}/stats`);
        expect(response.status).toBe(200);
        expect(response.body.originalUrl).toBe(url.originalUrl);
        expect(response.body.shortUrl).toBe(url.shortUrl);
        expect(response.body.hits).toBe(url.hits);
    });

    it('should return 404 if short URL is not found', async () => {
        const response = await request(app).get('/nonexistent/stats');
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Short URL not found');
    });
});