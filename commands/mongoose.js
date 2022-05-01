const Discord = require('discord.js');
const mongoose= require("mongoose");
const cardsSchema = require("./schemas/schema.js");
require('mongoose').set('debug', true);


class Mongoose {

    connect = async () => {
        
        await mongoose.connect(path, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() =>{
            console.log("connected to the db");
        })
        .catch((err) =>{
            console.log(err);
        });
    };

    getCard = async (randomNumber) => {
        try {
            return await cardsSchema.findOne({
                number: randomNumber
            });
        } catch (e) {
            console.log("failed to fetch ticket guild data");
        }
    };

}
module.exports = Mongoose;