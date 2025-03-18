import sequelize from '../sequelize';
import { DataTypes, Model } from 'sequelize';

export default class Url extends Model {
    declare id: number;
    declare originalUrl: string;
    declare shortUrl: string;
    declare hits: number;
}

Url.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    originalUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shortUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hits: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, { sequelize })
