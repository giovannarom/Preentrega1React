import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, image, category, description, price, stock}) => {
  return (
    <div style={{ textAlign: 'center', fontSize: '18.5px', color: "black", width: '75%', margin: '0 auto'}}>
      <br />
      <Card style={{ display: "flex", justifyContent: 'center', fontSize: '12pt', color: "black", width: '75%', margin: '0 auto', paddingTop:"10px"}} border='Primary'>
        <Card.Body>
            <Card.Text>
                <h3>{name}</h3>
                <Badge bg="dark">{category}</Badge>
                <p>{description}</p>
                <h2>{price}</h2>
                <p>{stock} in Stock</p>
            </Card.Text>
            <ItemCount initial={1} stock={20} onAdd={(quantity)=>console.log("Cantidad agregada ", quantity)}/>
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






