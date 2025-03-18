import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite',
    define: {
        freezeTableName: true
    },
});

export default sequelize

sequelize.sync();
