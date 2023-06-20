import Image from "next/image";
import MoneroIcon from "./components/icons/Monero";
import BitcoinIcon from "./components/icons/Bitcoin";
import { formatPrice, formatFeeString } from "./utils/misc";
import * as cheerio from "cheerio";
import Chart from "./components/Chart";
import Content from "./components/Content";

// :hover {
//   background: padding-box rgb(246, 147, 26) border-box linear-gradient(145deg, rgb(var(--light-purple)) 0%, rgb(var(--light-purple) / 0.3) 33.33%, rgb(var(--light-purple) / 0.14) 66.67%, rgb(var(--light-purple) / 0.1) 100%);
// }

const selector =
  "#main_body > table > tbody > tr:nth-child(11) > td:nth-child(2)";

export default async function Home() {
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

  return (
    <main className="relative min-h-screen flex flex-col justify-center">
      <div className="absolute bg-grid inset-0 noise-underlay "></div>

      <div className="my-48">
        <div className=" flex items-center justify-center flex-wrap gap-10">
          <Card fee={xmrFee} coin="monero" />
          <Card fee={btcFee} coin="bitcoin" />
        </div>
      </div>
      <div>
        <h2 className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300 bg-clip-text font-display text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight text-center">
          {/* Low Fees, Maximum Privacy—
          <br />
        Transact Safely and Affordably. */}
          Average Transaction Fees
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

function Card({ fee, coin }: { coin: "bitcoin" | "monero"; fee: string }) {
  const backgroundColor = coin === "bitcoin" ? "#f6931a" : "#fa6800";

  return (
    <div>
      <div
        className="w-[400px] h-64 noise-panel flex flex-col min-w-0 relative text-astro-gray-200 drop-shadow-[0_0_15px_rgba(246,147,26,.5)] bg-[linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))]"
        style={{
          backgroundColor,
        }}
      >
        <div
          className="flex flex-col items-center justify-center noise-panel flex-1 gap-4 m-6 text-left shadow-[inset_0_0_6px_rgba(255,255,255,.3)] border-0 text-white p-2"
          style={{
            backgroundColor,
          }}
        >
          {coin === "bitcoin" ? (
            <BitcoinIcon className="h-16 w-16 " />
          ) : (
            <MoneroIcon className="h-16 w-16 " />
          )}
          <span className="font-bold font-display text-xl">
            Average Fee {fee}
          </span>
        </div>
      </div>
    </div>
  );
}
