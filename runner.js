import puppeteer from "puppeteer-core";

const ws = process.env.BROWSER_WS;

if (!ws) {
  throw new Error("BROWSER_WS is missing");
}

const browser = await puppeteer.connect({
  browserWSEndpoint: ws
});

const page = await browser.newPage();

await page.goto("https://www.quora.com", {
  waitUntil: "domcontentloaded",
  timeout: 30000
});

console.log("Quora opened:", await page.title());

await browser.close();
