const fs = require('fs');
const { URL } = require('url');
const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const { makeBadge } = require('badge-maker');

(async () => {

    const dataVals = [];
    const url = 'https://topcoded.netlify.app/';

    const browser = await puppeteer.launch({
        headless: true,
    });

    const { lhr } = await lighthouse(url, {
        port: (new URL(browser.wsEndpoint())).port,
        output: 'json',
        logLevel: 'info',
    });

    Object.values(lhr.categories).map(c => {

        dataVals.push({
            'indicator': c.id,
            'score': c.score
        });

    });

    await browser.close();

    createBadge(dataVals)

})();

const createBadge = (dataVals) => {

    dataVals.map((data) => {

        const format = {
            label: `${data.indicator.charAt(0).toUpperCase() + data.indicator.slice(1)}`,
            message: `${Math.ceil(data.score * 100)}%`,
            color: 'green',
        }

        const svg = makeBadge(format);

        fs.writeFile(`./static/${data.indicator}.svg`, svg, function (err) {
            if (err) throw err; console.log('SVG created successfully!');
        });

    });

}
