const models = require('.');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
            idUser: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            tutorialId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'tutorials',
                    key: 'idTutorial'
                }
            }
        },
        { timestamps: false, tableName: "users"});


    // User.associate = function(models) {
    //     User.belongsTo(models.tutorials, {foreignKey: 'tutorialId', as: 'tutorials'})
    // };

    return User;
};