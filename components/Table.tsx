import { CheckIcon } from "@heroicons/react/outline";
import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
  products: Product[];
  selectedPlan: Product | null;
}

export function Table({ products, selectedPlan }: Props) {
  return (
    <table>
      <tbody className=" divide-y divide-gray">
        <tr className="tableRow">
          <td className="tableDataTitle">Montly Price</td>
          {products &&
            products.map((product) => (
              <td
                key={product.id}
                className={`tableDataFeature ${
                  selectedPlan?.id === product.id ? "text-netflix" : "text-gray"
                }`}
              >
                R${product.prices[0].unit_amount! / 100},90
              </td>
            ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video Quality</td>
          {products &&
            products.map((product) => (
              <td
                key={product.id}
                className={`tableDataFeature ${
                  selectedPlan?.id === product.id ? "text-netflix" : "text-gray"
                }`}
              >
                {product.metadata.videoQuality}
              </td>
            ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products &&
            products.map((product) => (
              <td
                key={product.id}
                className={`tableDataFeature ${
                  selectedPlan?.id === product.id ? "text-netflix" : "text-gray"
                }`}
              >
                {product.metadata.resolution}
              </td>
            ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id ? "text-netflix" : "text-gray"
              }`}
              key={product.id}
            >
              {product.metadata.portability === "true" && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
