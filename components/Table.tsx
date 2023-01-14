import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
  products: Product[];
}

export function Table({ products }: Props) {
  return (
    <table>
      <tbody className=" divide-y divide-gray">
        <tr className="tableRow">
          <td className="tableDataTitle">Montly Price</td>
          {products &&
            products.map((product) => (
              <td key={product.id} className="tableDataFeature">
                R${product.prices[0].unit_amount! / 100},90
              </td>
            ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video Quality</td>
          {products &&
            products.map((product) => (
              <td key={product.id} className="tableDataFeature text-netflix">
                {product.metadata.videoQuality}
              </td>
            ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products &&
            products.map((product) => (
              <td key={product.id} className="tableDataFeature">
                {product.metadata.resolution}
              </td>
            ))}
        </tr>
      </tbody>
    </table>
  );
}
