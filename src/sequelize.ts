import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://username:password@localhost:5432/dbname', {
    dialect: 'postgres',
    define: {
        freezeTableName: true
    },
    logging: false
});

export default sequelize;
