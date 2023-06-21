import MoneroIcon from "./icons/Monero";
import { default as XmrImage } from "../../../public/assets/xmr.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center my-4 border-t border-t-10 ">
      <div className="my-2 flex flex-col items-center justify-center">
        <div className="flex gap-2 items-center my-2">
          xmr tip:
          <a
            href="/assets/monero_address_qr.png"
            target="_blank"
            className="text-monero hover:text-monero/90"
          >
            [QR]
          </a>
        </div>
        <div className="break-all text-[12px] p-1 bg-black/40 w-fit rounded">
          88FyWSxg2ZF3hZHLUwgEkS7Dutqtaf2X9BrTUEZgf8acYLgF9qMDFBEdF6uW8fCT8eHXpAhnewEQ9LgQxWnf1xi8KGJF9Ty
        </div>
      </div>
      <div className="text-sm text-astro-gray-300 text-center">
        <span>site in development. May contain errors or incomplete data.</span>
        <a
          className="block  underline underline-offset-2 hover:text-astro-gray-200"
          target="_blank"
          href="https://github.com/lmssiehdev/monero-bitcoin-fees"
        >
          source code ↗︎
        </a>
      </div>
    </footer>
  );
}
