import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextCart } from '../../../context/CartContext';

import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({id, name, image, category, description, price, stock}) => {
  const [quantityBuy, setQuantityBuy] = useState(0)

  const {addItem}=useContext(ContextCart)

  const handleOnAdd = (quantity) => {
    setQuantityBuy(quantity)
    const item={
      id, name, price
    }

    addItem(item, quantity)
  }

  return (
    <div style={{ textAlign: 'center', fontSize: '18.5px', color: "black", width: '75%', margin: '0 auto'}}>
      <br />
      <Card className='custom-detailcard' border='Primary'>
        <Card.Body>
            <Card.Text>
                <h3>{name}</h3>
                <Badge bg="dark">{category}</Badge>
                <p>{description}</p>
                <h2>{price}</h2>
                <p>{stock} in Stock</p>
            </Card.Text>
            {
              quantityBuy > 0 ?(<Link to="/cart"><Button className='finish-button'>Finish purchase</Button></Link>
              ) : (<ItemCount initial={0} stock={stock} onAdd={handleOnAdd}/>)
            }
            <br></br>
            <Container>
                <Image  src={image} rounded className="img-fluid img-max-height" />
            </Container>
            <br></br>
        </Card.Body>
      </Card>
      <br></br>
    </div>
  )
}

export default ItemDetail






