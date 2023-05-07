const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { getVatanGameGBPrice,getOyuneksGBPrice,getOyunForGBPrice } = require('../../utils/scrapingGbPrice.js');


const gbPriceEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
    .setAuthor({ name: 'erayatesdev', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    .setTitle('Rise Online Gold Bar Fiyatları')
    .setDescription(`Rise Online'da Gold Bar alınabilecek ve satılabilecek güncel Rise Online Gold Bar fiyatları.`)

	.setThumbnail('https://www.riseonlineworld.com/theme/default/assets/img/logo.png')
	.setImage('https://www.dnzgame.com/assets/images/rise-online-goldbar.jpg')
    
	.setTimestamp()
	.setFooter({ text: 'Daha fazlası için diğer komutları kullan.'});


module.exports = {
    data: new SlashCommandBuilder()
        .setName('gb')
        .setDescription('Rise Online Gold Bar alış ve satış fiyatlarını gösterir.'),
    async execute(interaction){
        const { vatanGameSellPrice, vatanGameBuyPrice } = await getVatanGameGBPrice();
        const { oyuneksSellPrice, oyuneksBuyPrice} = await getOyuneksGBPrice();
        const { oyunForSellPrice,oyunForBuyPrice } = await getOyunForGBPrice();

        const updatedGBPriceEmbed = gbPriceEmbed

            .addFields(
                { name: "❗️ NOT: ", value:"Satış fiyatı siteye satılan fiyat, alış fiyatı sitenin size sattığı fiyattır."},

                { name: 'Vatan Game', value: 'https://www.vatangame.com/oyun-parasi/rise-online-gold-bar'},
                { name: '⬆️ Satış Fiyatı', value: "💵 " + vatanGameSellPrice, inline: true },
                { name: '⬇️ Alış Fiyatı', value: "💵 " + vatanGameBuyPrice, inline: true },

                { name: '\u200B', value: '\u200B' },
                { name: 'Oyuneks', value: 'https://oyuneks.com/game-gold/rise-online-gold'},
                { name: '⬆️ Satış Fiyatı', value: "💵 " + oyuneksSellPrice, inline: true },
                { name: '⬇️ Alış Fiyatı', value: "💵 " + oyuneksBuyPrice, inline: true },

                { name: '\u200B', value: '\u200B' },
                { name: 'Oyunfor', value: 'https://www.oyunfor.com/rise-online-world/rise-online-world-gb'},
                { name: '⬆️ Satış Fiyatı', value: "💵 " + oyunForBuyPrice, inline: true },
                { name: '⬇️ Alış Fiyatı', value: "💵 " + oyunForSellPrice, inline: true },
                
            )
            .setTimestamp();

        await interaction.reply({ embeds: [updatedGBPriceEmbed] });
      
    }
}