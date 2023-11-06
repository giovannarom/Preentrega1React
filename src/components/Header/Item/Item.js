import Card from 'react-bootstrap/Card';
import "./Item.css";

const Item = ({id, name, image, price, description}) => {
  return (
    <Card style={{ width: '18rem', fontSize:'12pt'}} className="mx-2">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{description}</p>
          <h4>${price}</h4>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Item