import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <Row className="mb-3">
        {products.map(product => (
          <Col key={product.id} sm={4}>
            <Item {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemList;
