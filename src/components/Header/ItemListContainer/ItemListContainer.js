import {useState, useEffect} from "react"
import {getProducts, getProductsByCategory} from "../../../asyncMocks"
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting, caption }) => {
    const [products, setProducts] = useState([])
    const {categoryId}=useParams()

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])


  return (
    <div style={{ textAlign: 'center', fontSize: '18.5px', color: "black", width: '75%', margin: '0 auto'}}>
        <br></br>
        <Alert variant="dark">
            <Alert.Heading>{ greeting } </Alert.Heading>
            <p>{caption}</p>
        </Alert>
        <Container className="d-flex flex-row">
            <ItemList products={products}></ItemList>
        </Container>
        <br></br>
    </div>
  )
}

export default ItemListContainer