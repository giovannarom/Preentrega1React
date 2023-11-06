import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const CartItem = ({ id, name, quantity, price, removeItem }) => {
    return (
        <div style={{ textAlign: 'center', fontSize: '18.5px', color: "black", width: '70%', margin: '0 auto'}}>
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td>${price}</td>
                    <td><Button style={{width:'45px'}} variant="outline-danger" onClick={() => removeItem(id)}> X </Button></td>
                </tr>
            </tbody>
        </Table>
    </div>
    );
  };

export default CartItem


