import { Sequelize } from 'sequelize';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    define: {
        freezeTableName: true
    },
    logging: false
});

export default sequelize;

sequelize.sync();