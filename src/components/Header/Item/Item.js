import Card from 'react-bootstrap/Card';
import "./Item.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

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
        <Link to={`/item/${id}`} className="Option">
          <Button variant="outline-dark">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item