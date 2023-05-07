
const { gotScraping } = require("got-scraping");
const cheerio = require("cheerio");

async function getVatanGameGBPrice(){
    const response = await gotScraping.get("https://www.vatangame.com/oyun-parasi/rise-online-gold-bar");
    const html = response.body;

    const $ = cheerio.load(html);

    let  gbPrice = $(".gm-product-price").text().trim();
    gbPrice = gbPrice.replace(/\s/g, '');

    const vatanGameSellPrice = " " + gbPrice.slice(0, 6);
    const vatanGameBuyPrice = " " + gbPrice.slice(10, 16);
    
    return {vatanGameSellPrice, vatanGameBuyPrice};
    
};

async function getOyuneksGBPrice(){
    const response = await gotScraping.get("https://oyuneks.com/game-gold/rise-online-gold");
    const html = response.body;

    const $ = cheerio.load(html);

    let sellGBPrice = $(".satinal").text().trim();
    sellGBPrice = sellGBPrice.replace(/\s/g, '');
    
    let buyGBPrice = $(".satis").text().trim();
    buyGBPrice = buyGBPrice.replace(/\s/g, '');

    const oyuneksSellPrice = " " + sellGBPrice.slice(6, 10) + "TL";
    const oyuneksBuyPrice = " " + buyGBPrice.slice(7, 11) + "TL";
    
    return {oyuneksSellPrice, oyuneksBuyPrice}
}

async function getOyunForGBPrice(){
    const response = await gotScraping.get("https://www.oyunfor.com/rise-online-world/rise-online-world-gb")
    const html = response.body;

    const $ = cheerio.load(html);

    let buyGBPrice = $(".sellToUsBtn").attr("data-price");
    let sellGBPrice = $(".addToCart").attr("data-price");

    const oyunForSellPrice = " " + sellGBPrice + "TL";
    const oyunForBuyPrice = " " + buyGBPrice + "TL";

    return {oyunForSellPrice, oyunForBuyPrice}

}

getOyunForGBPrice();
module.exports = {getVatanGameGBPrice,getOyuneksGBPrice,getOyunForGBPrice};



