import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

function formatFeeString(input: string) {
  const regExp = /\(([^)]+)\)/;
  const matches = regExp.exec(input);

  if (!matches) throw new Error(" input isn't valid ");

  return matches[1];
}

// * I hate scraping tables
const selector =
  "#main_body > table > tbody > tr:nth-child(11) > td:nth-child(2)";

export async function GET() {
  try {
    const response = await Promise.all([
      fetch("https://bitinfocharts.com/monero/").then((r) => r.text()),
      fetch("https://bitinfocharts.com/bitcoin/").then((r) => r.text()),
    ]);

    const t = response.map((htmlString) => {
      const $ = cheerio.load(htmlString);

      const priceString = $(selector).text();
      return priceString;
    });

    const [xmrFee, btcFee] = t.map((fee) => formatFeeString(fee));

    return NextResponse.json({
      xmrFee,
      btcFee,
    });
  } catch (e) {
    console.log(e);
  }
}
