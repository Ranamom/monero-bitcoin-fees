export default function Content() {
  return (
    <section className="my-10">
      <div className="my-5">
        <h2 className="py-3 font-semibold text-xl">
          What Is a Transaction Fee?
        </h2>
        <p>
          Transaction fees are payments made when transferring cryptocurrency
          between wallets. These fees can vary based on the {"blockchain's"}
          activity and serve as an incentive for miners to verify transactions.
          Users can choose to pay higher fees to prioritize their transactions
          and expedite the process. Transaction fees play a crucial role in
          maintaining the integrity and efficiency of blockchain networks by
          preventing network overload and incentivizing miners to validate
          transactions.
        </p>
      </div>
      <div className="my-5">
        <h2 className="py-3 font-semibold text-xl">
          Why are Bitcoin transaction fees much higher than monero?
        </h2>
        <p>
          Bitcoin transaction fees are generally higher than Monero due to the
          fixed block size limit in Bitcoin. When the number of transactions
          exceeds the block size limit, users have to compete by offering higher
          fees to prioritize their transactions. This bidding war for limited
          space in blocks drives up the fees. In contrast, Monero has a dynamic
          block size, allowing for more transactions to be included when the
          queue is long, resulting in lower fees as there is less competition
          for block space.
        </p>
      </div>
      <div className="my-5">
        <h2 className="py-3 font-semibold text-xl">
          Is it easier to maintain privacy when using Monero compared to
          Bitcoin?
        </h2>
        <p>
          Achieving full privacy in Monero is generally easier than in Bitcoin.
          In Monero, sending a transaction provides maximum privacy by default.
          On the other hand, Bitcoin requires users to navigate through numerous
          steps and techniques to attain only moderate levels of privacy.
          Therefore, Monero offers a more straightforward and efficient means of
          maintaining privacy compared to Bitcoin.
        </p>
      </div>
    </section>
  );
}
