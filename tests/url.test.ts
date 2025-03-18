import sequelize from '../src/sequelize';
import Url from '../src/models/url';

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

describe('Url Model', () => {
    it('should be defined', () => {
        expect(Url).toBeDefined();
    });

    it('should create a new Url record', async () => {
        const url = await Url.create({
            originalUrl: 'https://example.com',
            shortUrl: 'exmpl',
            hits: 0
        });
        expect(url.id).toBeDefined();
        expect(url.originalUrl).toBe('https://example.com');
        expect(url.shortUrl).toBe('exmpl');
        expect(url.hits).toBe(0);
    });

    it('should update a Url record', async () => {
        const url = await Url.create({
            originalUrl: 'https://example.com',
            shortUrl: 'exmpl',
            hits: 0
        });
        url.hits = 1;
        await url.save();
        const updatedUrl = await Url.findByPk(url.id);
        expect(updatedUrl?.hits).toBe(1);
    });

    it('should delete a Url record', async () => {
        const url = await Url.create({
            originalUrl: 'https://example.com',
            shortUrl: 'exmpl',
            hits: 0
        });
        await url.destroy();
        const deletedUrl = await Url.findByPk(url.id);
        expect(deletedUrl).toBeNull();
    });
});