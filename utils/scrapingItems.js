const puppeteer = require('puppeteer');
const { gotScraping } = require("got-scraping");
const cheerio = require("cheerio");
const axios = require('axios');

const baseURL = "https://www.vatangame.com"

async function getVatanGameItems(){
    // const browser = await puppeteer.launch({ headless: "new" });
    // const page = await browser.newPage();
    // await page.goto('https://www.vatangame.com/ilanlar/rise-online-world/rise-online-world-item');

    // const html = await page.content();


    // await browser.close();
    const html = await axios.get(baseURL + "/ilanlar/rise-online-world/rise-online-world-item").then((response) => response.data);
 
    const $ = cheerio.load(html);
    const items = Array.from($('.vtn-product'));
    const vatanGameItemsArray = []

    items.map((item) => {
        const itemURL = baseURL + ($(item).parentsUntil('a').children('a').attr('href'))
        const itemCreatedDate = ($(item).children('.desc-section').children('.product-created-date').text().trim());
        const itemTitle = ($(item).children('.desc-section').children('.product-caption').text().trim());
        const itemPrice = ($(item).children('.desc-section').children('.product-price').text().trim());

        const newItem = {itemURL, itemCreatedDate, itemTitle, itemPrice};
        vatanGameItemsArray.push(newItem);
    })

 

    
    return vatanGameItemsArray;

}

async function getOyuneksItems(){
    const response = await axios.get("https://oyuneks.com/item/rise-online-item-satis").then((response) => response.data);
    const body = JSON.stringify(response)
   
    const $ = cheerio.load(body);
 
    
    let data = Array.from($('.item-ajax'));
    console.log(data)

    const oyuneksItemsArray = []

    data.map((item) => {
        const itemURL = ($(item).children('.item-image').children('a').attr('href'))
        const itemRemainingDate =  ($(item).children('.sure1 .sure2').text().trim());
        const itemTitle = ($(item).children('.card-body').children('.card-title').children('a').text().trim());

    })
    console.log(data.length)
}


getOyuneksItems();

module.exports = {getVatanGameItems};
    