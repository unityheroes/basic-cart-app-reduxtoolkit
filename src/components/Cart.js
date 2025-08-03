import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Button, Image } from "react-bootstrap";
import {
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../store/slices/cart-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleDelete = (id) => {
    dispatch(removeItemFromCart(id));
    toast.success("Item removed from cart!");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.info("Cart cleared!");
  };

  const handleIncrease = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item.id));
  };

  return (
    <Container className="mt-5 pt-4">
      <h2 className="mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p className="text-muted">No items in cart.</p>
      ) : (
        <>
          <Table
            striped
            bordered
            hover
            responsive
            className="shadow-sm"
            style={{ borderRadius: "8px", overflow: "hidden" }}
          >
            <thead className="table-primary">
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={item.id}
                  className="table-row"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <td style={{ width: "80px" }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      thumbnail
                      style={{ maxHeight: "60px", objectFit: "contain" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price} $</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleDecrease(item)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td>{(item.price * item.quantity).toFixed(2)} $</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="cart-footer d-flex justify-content-between align-items-center mt-4">
            <div>
              <h4>Total: {totalPrice.toFixed(2)} $</h4>
              <p className="text-muted total-note">
                * Total price is before taxes and shipping fees.
              </p>
            </div>
            <div className="d-flex gap-3">
              <Button
                variant="outline-danger"
                size="lg"
                onClick={handleClearCart}
              >
                Clear All
              </Button>
              <Button variant="success" size="lg" style={{ minWidth: "150px" }}>
                Checkout
              </Button>
            </div>
          </div>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
          />
        </>
      )}
    </Container>
  );
}

export default Cart;