const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const {getVatanGameItems} = require('../../utils/scrapingItems.js');

const command = new SlashCommandBuilder()
    .setName('itemal')
    .setDescription('Rise Online üzerinde farklı sitelerde satılan eşyaları gösterir.')
    .addStringOption(option =>
        option.setName('site')
            .setDescription('Vatan Game üzerinde satılan eşyaları gösterir.')
            .setRequired(true)
            .addChoices(
                { name: 'Vatan Game', value: 'vatan-game' },
				{ name: 'Oyuneks', value: 'oyuneks' }
            ));

module.exports = {
    data: command,
    async execute(interaction) {
		await interaction.deferReply();

		const vatanGameItemsArray = await getVatanGameItems();
  

        const choice = interaction.options.getString('site');
        switch (choice) {
            case 'vatan-game':
                const vatanGameItemsEmbed = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setAuthor({ name: 'erayatesdev'})
                    .setTitle('Vatan Game Üzerinde Satılan Eşyalar')
					.setURL('https://www.vatangame.com/ilanlar/rise-online-world/rise-online-world-item/')
                    .setDescription(`Rise Online'da Vatan Game üzerinde satılan eşyaları bir listesidir. Tüm ürünler gözükmemektedir. Tamamı için ilgili siteye gidiniz.`)
                    .setThumbnail('https://www.riseonlineworld.com/theme/default/assets/img/logo.png')
                    .setImage('https://www.vatangame.com/public/vatangame-ikinci-yil.png?aaaaaa')
                    .setTimestamp();

				const updatedGBPriceEmbed = vatanGameItemsEmbed
					.addFields(vatanGameItemsArray.map(item => {
						return {
							name: item.itemTitle + " "+ `\n*${item.itemPrice}*`,
							value: item.itemURL + " " + `\n*${item.itemCreatedDate}*`,
							
						};
					}));
                await interaction.editReply({ embeds: [updatedGBPriceEmbed] });
                break;

			case 'oyuneks':

            default:
                break;
        }
    },
};
