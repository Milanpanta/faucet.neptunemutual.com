import OpenInNewIcon from "@/components/icons/open-in-new";
import AddCircleIcon from "@/components/icons/add-circle";

import { useFakeToken } from "@/src/hooks/useFakeToken";
import { convertFromUnits, hasValue } from "@/src/utils/bn";

const addresses = {
  3: "0x098ce63391B60933a49bD9584A9b3106176e263F",
  97: "0x8fA804291374c5D5f7d875a69287F7572e5ed928",
  80001: "0x8fA804291374c5D5f7d875a69287F7572e5ed928",
};

export const NPMToken = () => {
  const { loading, balance, request, explorerUrl } = useFakeToken(addresses);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <tr className="border-t-default border-gray-300">
      <td>
        <td className="font-inter text-gray-800 text-sm">
          {hasValue(balance) ? convertFromUnits(balance).toString() : "0"} NPM
        </td>
      </td>
      <div className="text-right flex justify-end items-center">
        <td>
          <button
            className="text-36309D hover:text-red-600 text-sm"
            onClick={request}
          >
            Request
          </button>
        </td>
        <td className="px-2 py-0">
          <a href={explorerUrl} rel="noreferrer" target="_blank">
            <span className="sr-only">Open in Explorer</span>
            <OpenInNewIcon
              fill="#9B9B9B"
              width={20}
              height={18}
              viewBox="0 0 24 24"
            />
          </a>
        </td>
        <td>
          <button className="flex">
            <span className="sr-only">Add to Wallet</span>
            <AddCircleIcon
              fill="#9B9B9B"
              width={20}
              height={18}
              viewBox="0 0 22 22"
            />
          </button>
        </td>
      </div>
    </tr>
  );
};
