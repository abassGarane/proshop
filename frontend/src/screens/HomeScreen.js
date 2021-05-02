import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, errors, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  // const products = [];
  return (
    <>
      <h1>Latest products</h1>
      {loading ? (
        <Loader />
      ) : errors ? (
        <Message variant='danger'>{errors}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
