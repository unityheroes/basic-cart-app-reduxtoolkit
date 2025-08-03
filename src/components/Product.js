import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/slices/products-slice";
import "./Product.css"; 
import { addItemToCart } from "../store/slices/cart-slice";

function Product() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <Row className="g-4 py-5">
        {products.map((product) => (
          <Col key={product.id} md={3} sm={6} className="d-flex">
 <Card className="product-card shadow-sm w-100 h-100 d-flex flex-column">
  <div className="image-container">
    <Card.Img
      variant="top"
      src={product.image}
      className="product-image"
    />
  </div>
  <Card.Body className="d-flex flex-column justify-content-between">
    <div>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text className="text-truncate-2">
        {product.description}
      </Card.Text>
      <Card.Text className="fw-bold">
        {product.price} $
      </Card.Text>
    </div>
   <Button
  onClick={() => dispatch(addItemToCart(product))}
  variant="primary"
  className="w-100 mt-2"
>
  Add to cart
</Button>
  </Card.Body>
</Card>
</Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;