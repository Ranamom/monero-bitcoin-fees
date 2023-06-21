import * as cheerio from "cheerio";
import Chart from "./components/Chart";
import Content from "./components/Content";
import PriceCard from "./components/PriceChart";
import { formatFeeString, formatPrice } from "./utils/misc";

// :hover {
//   background: padding-box rgb(246, 147, 26) border-box linear-gradient(145deg, rgb(var(--light-purple)) 0%, rgb(var(--light-purple) / 0.3) 33.33%, rgb(var(--light-purple) / 0.14) 66.67%, rgb(var(--light-purple) / 0.1) 100%);
// }

const selector =
  "#main_body > table > tbody > tr:nth-child(11) > td:nth-child(2)";

const SIX_HOURS = 21_600_000;

export default async function Home() {
  // const response = await Promise.all([
  //   fetch("https://bitinfocharts.com/monero/", {
  //     next: {
  //       revalidate: SIX_HOURS,
  //     },
  //   }).then((r) => r.text()),
  //   fetch("https://bitinfocharts.com/bitcoin/", {
  //     next: {
  //       revalidate: SIX_HOURS,
  //     },
  //   }).then((r) => r.text()),
  // ]);

  // const t = response.map((htmlString) => {
  //   const $ = cheerio.load(htmlString);

  //   const priceString = $(selector).text();
  //   return priceString;
  // });

  // const [xmrFee, btcFee] = t.map((fee) => formatFeeString(fee));

  const response = await fetch("https://www.monero.how/transactionFees.json", {
    next: {
      revalidate: SIX_HOURS,
    },
  });
  const { medianBtcUsd: btcFee, medianXmrUsd: xmrFee } = await response.json();

  return (
    <main className="relative min-h-screen flex flex-col justify-center">
      <div className="absolute bg-grid inset-0 noise-underlay "></div>

      <div className="my-48">
        <div className=" flex items-center justify-center flex-wrap gap-10">
          <PriceCard fee={formatPrice(xmrFee)} coin="monero" />
          <PriceCard fee={formatPrice(btcFee)} coin="bitcoin" />
        </div>
      </div>
      <div>
        <h2 className="bg-gradient-to-r from-orange-700 via-orange-400 to-orange-700 bg-clip-text font-display text-2xl font-extrabold leading-tight text-transparent sm:text-4xl sm:leading-tight text-center mb-12">
          {/* Low Fees, Maximum Privacy—
          <br />
        Transact Safely and Affordably. */}
          Historical Average Transaction Fees
        </h2>
        <div className="max-w-screen-lg w-full mx-auto min-h-[500px]">
          <Chart />
        </div>
        <div className="max-w-screen-lg w-full mx-auto relative px-2">
          <div className="dreamy-background_content"></div>
          <Content />
        </div>
      </div>
    </main>
  );
}
