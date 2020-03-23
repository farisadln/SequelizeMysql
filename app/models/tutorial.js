module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        idTutorial: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },

    }
    , { timestamps: false, tableName: "tutorials" });

    return Tutorial;
};