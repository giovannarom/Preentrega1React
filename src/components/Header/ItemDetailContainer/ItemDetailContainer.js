import {useState, useEffect} from "react"
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"
import { getDoc, doc} from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig.js";


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()
    
  useEffect(()=>{
    setLoading(true);
    const docRef = doc(db, 'products', itemId)

    getDoc(docRef)
      .then(response =>{
        const data = response.data()
        const productAdapted ={ id: response.id, ...data }
        setProduct(productAdapted)
      })
      .catch(error=>{
        console.log('Error getting document: ', error)
      })
      .finally(()=> {
        setLoading(false)
      })
    },[itemId]
  )
  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        ) : (
          <ItemDetail {...product} />
        )
      }
    </div>
  )
}

export default ItemDetailContainer