import { LiquidityToken } from "@/components/Balances/LiquidityToken";
import { NPMToken } from "@/components/Balances/NPMToken";
import { useWeb3React } from "@web3-react/core";

export const Balances = ({ addresses }) => {
  const { account } = useWeb3React();

  if (!account) {
    return null;
  }

  return (
    <div className="mt-2">
      <h3 className="font-inter font-bold text-xs text-gray-800">
        Your Balances
      </h3>
      <table className="table-auto w-full mt-2">
        <thead></thead>
        <LiquidityToken address={addresses.LiquidityToken} />
        <NPMToken address={addresses.NPMToken} />
      </table>
    </div>
  );
};
