import Card from 'react-bootstrap/Card';
import "./Item.css";

const Item = ({id, name, image, price, description}) => {
  return (
    <Card className="custom-card" mx-2>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <h4>${price}</h4>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Item