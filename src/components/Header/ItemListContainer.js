import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({ greeting, caption }) => {
  return (
    <div style={{ textAlign: 'center', fontSize: '18.5px', color: "black", width: '75%', margin: '0 auto'}}>
        <br></br>
        <Alert variant="dark">
            <Alert.Heading>{ greeting } </Alert.Heading>
            <p>{caption}</p>
        </Alert>
        <Container className="d-flex flex-row">
            <Card style={{ width: '18rem' }} className="mx-2">
                <Card.Img variant="top" src="https://cnnespanol.cnn.com/wp-content/uploads/2018/12/181205153626-robot-plant-full-169.jpg?quality=100&strip=info" />
                <Card.Body>
                    <Card.Title>Elowan</Card.Title>
                    <Card.Text>
                        La planta robot puede ser guiada hacía la luz
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="mx-2">
                <Card.Img variant="top" src="https://controlpublicidad.com/uploads/2016/01/yourshoesarerubbish-051332.png" />
                <Card.Body>
                    <Card.Title>Your Shoes are Rubbish</Card.Title>
                    <Card.Text>
                        Zapatillas a partir de la basura recogida en las costas de Gran Bretaña 
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="mx-2">
                <Card.Img variant="top" src="https://controlpublicidad.com/uploads/2016/01/bici-055053.png" />
                <Card.Body>
                    <Card.Title> Lightfog Creative Bike</Card.Title>
                    <Card.Text>
                        Bicicleta eléctrica con un purificador de aire para evitar que el usuario respire sustancias nocivas
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
        <br></br>
    </div>
  )
}

export default ItemListContainer