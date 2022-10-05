import { useAccount, useBalance } from "wagmi";

export function AccountBoard() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const balance = useBalance({
    addressOrName: address
  });

  return (
    <div>
      <h2>AccountInfo</h2>;<h4>account:{address}</h4>;
      <pre>{JSON.stringify(balance, null, 2)}</pre>
      <h4>
        {balance.data.formatted} {balance.data.symbol}
      </h4>
    </div>
  );
}
