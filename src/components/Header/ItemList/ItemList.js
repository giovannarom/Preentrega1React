import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <Row className="mb-3">
        {products.map(product => (
          <Col key={product.id} sm={4}>
            <Link style={{textDecoration: "none"}} to={`/item/${product.id}`}>
              <Item {...product} />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemList;
