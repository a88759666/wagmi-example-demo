import { useBalance } from "wagmi";

export function Balance(address) {
  const balance = useBalance({
    addressOrName: address;
  });

  return {
    balance: data
  }
}
