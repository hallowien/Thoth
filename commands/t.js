const Discord = require('discord.js');
const cardsSchema = require("./schemas/schema.js");

module.exports = {
    name: 't',
    description: "this is a tarot command",

    async execute(message, args){
        const randomNumber = Math.floor(Math.random() * 78) + 1;
        console.log('Number', "1");
        var result = await cardsSchema.findOne({
            Number: randomNumber
        });
        console.log(result);
        var title = result.Title;
        const embed = new Discord.MessageEmbed()
            .setColor('#340034')
            .setTitle("\:crystal_ball: " + result.Title)
            .addFields(
                { name: 'Represented by:', value: result.Element },
                { name: '\:dizzy: Keywords:', value: result.Keywords }
        
            )
            .addField('\:sparkles: Indications:', result.Indications, true)
            .setImage(result.url)
            .setTimestamp();
        console.log(embed)
        message.channel.send({ embeds: [embed] });
    }
}