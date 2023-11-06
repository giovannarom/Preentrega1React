import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig.js";

const ItemListContainer = ({ greeting, caption }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products');

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div style={{ textAlign: 'center', fontSize: '18.5px', color: "black", width: '75%', margin: '0 auto'}}>
            <br></br>
            <Alert variant="dark">
                <Alert.Heading>{greeting}</Alert.Heading>
                <p>{caption}</p>
            </Alert>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Container className="d-flex flex-row">
                    <ItemList products={products}></ItemList>
                </Container>
            )}
            <br></br>
        </div>
    );
};

export default ItemListContainer;
