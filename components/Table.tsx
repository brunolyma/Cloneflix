import { Product } from "@stripe/firestore-stripe-payments";
import { useState, useEffect } from "react";

interface Props {
  products: Product[];
  plan: Product | null;
}

export function Table({ products, plan }: Props) {
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2]);

  useEffect(() => {
    if (plan) {
      setSelectedPlan(plan);
    }
  }, [plan]);

  console.log(plan);

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
                  selectedPlan?.id === product.id ? "text-netflix" : ""
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
                  selectedPlan?.id === product.id ? "text-netflix" : ""
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
                  selectedPlan?.id === product.id ? "text-netflix" : ""
                }`}
              >
                {product.metadata.resolution}
              </td>
            ))}
        </tr>
      </tbody>
    </table>
  );
}
