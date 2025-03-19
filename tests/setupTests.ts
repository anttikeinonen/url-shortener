import sequelize from "../src/sequelize";

beforeEach(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});