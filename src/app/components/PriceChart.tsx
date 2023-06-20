import MoneroIcon from "./icons/Monero";
import BitcoinIcon from "./icons/Bitcoin";

export default function PriceCard({
  fee,
  coin,
}: {
  coin: "bitcoin" | "monero";
  fee: string;
}) {
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
