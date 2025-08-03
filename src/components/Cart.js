import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { removeItemFromCart } from "../store/slices/cart-slice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <Container className="mt-5 pt-4">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <Row className="g-4">
          {items.map((item) => (
            <Col md={3} key={item.id}>
              <Card className="h-100">
                <Card.Img variant="top" src={item.image} style={{ height: "200px", objectFit: "contain" }} />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price} $</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeItemFromCart(item.id))}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Cart;