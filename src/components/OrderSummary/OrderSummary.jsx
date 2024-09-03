import { OrderSummaryContainer, OrderSummaryTable } from "./OrderSummaryStyles";
import { getTotalItems, getItemSubtotal } from "../../utils/cart";

const OrderSummary = ({cart}) => {
  const totalItems = getTotalItems(cart);
  const itemSubtotal = getItemSubtotal(cart);
  const shipping = itemSubtotal > 90 ? 0 : 15;
  const subTotalAfterShipping = itemSubtotal + shipping;
  const taxes = subTotalAfterShipping * 0.08875;
  const orderTotal = itemSubtotal + shipping + taxes;

  return (
    <OrderSummaryContainer>
      <OrderSummaryTable>
        <tbody>
          <tr>
            <th>
              <h4>Order summary</h4>
            </th>
            <td>
              <h4>{totalItems} item(s)</h4>
            </td>
          </tr>
          <tr>
            <th>Item(s) subtotal:</th>
            <td>${itemSubtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Shipping:</th>
            <td>{itemSubtotal > 90 ? "Free" : `${shipping.toFixed(2)}`}</td>
          </tr>
          <tr>
            <th>Subtotal:</th>
            <td>${subTotalAfterShipping.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Estimated tax:</th>
            <td>${taxes.toFixed(2)}</td>
          </tr>
          <tr>
            <th>
              <h4>Order total:</h4>
            </th>
            <td>
              <h4>${orderTotal.toFixed(2)}</h4>
            </td>
          </tr>
        </tbody>
      </OrderSummaryTable>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
