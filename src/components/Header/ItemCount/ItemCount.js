import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import {useState} from "react"

const ItemCount = ({stock, initial, onAdd}) => {
  const[quantity, setQuantity]=useState(initial)
  const increment = () =>{
    if (quantity < stock){
        setQuantity(prev=> prev+1)}
  }
  const decrement =()=>{
    if(quantity>0){
        setQuantity(prev=>prev - 1);
    }
  }
  return (
    <div>
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={decrement}>-</Button>
            <span style={{ display: "flex", justifyContent: 'center', fontSize: '12pt', color: "black", width: '70px', margin: '0 auto', paddingTop:"10px"}}><p> {quantity} </p></span>
            <Button variant="secondary" onClick={increment}>+</Button>
        </ButtonGroup>
        <Container>
             <br></br>
            <Button variant="dark" onClick={()=>onAdd(quantity)} disabled={!stock}>Add to Cart</Button>
        </Container>
    </div>
  )
}

export default ItemCount