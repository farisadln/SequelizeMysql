const db = require('../models');
const models = require('../models');
// const Tutorial = require('./tutorial');

const Tutorial =models.tutorials ;
const User = db.users;
const Op = db.sequelize.Op;

exports.create = (req,res)=>{

    if (!req.body.name ){
        res.status(400).send({
            message: "User can not be empty"
        });
        return;
    }
    let user = {
        name: req.body.name,
        tutorialId: req.body.tutorialId
    };
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });

};


exports.findAll = (req,res)=>{
    const user = req.query.user;
    let condition = user ? { user: { [Op.like]: `%${user}%` } } : null;

    User.findAll({ where: condition  })
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user."
            });
        });
};