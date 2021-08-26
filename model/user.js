const { DataTypes } = require("sequelize");
const { connection } = require("../db");

const User = connection.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    indexes: [{unique: true, fields: ['name']}]
});

module.exports = User;