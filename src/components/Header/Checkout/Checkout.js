import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useContext } from 'react';
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../services/firebase/firebaseConfig.js";
import PurchaseToast from '../PurchaseToast/PurchaseToast.js';
import { ContextCart } from "../../../context/CartContext";
import "./Checkout.css";


const initialState = {
    name: "",
    email: "",
    phone: "",
};

const Checkout = () => {
    const { clearCart } = useContext(ContextCart);
    const [purchaseID, setPurchaseID] = useState("");
    const [values, setValues]=useState(initialState);
    const handleOnChange = (e) => {
        const { value, name} = e.target
        setValues({...values, [name]: value});
    };
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection (db, "purchasesCollection"), {
            values,
        });
        setValues(initialState);
        setPurchaseID(docRef.id);
        console.log("Document written with ID: ", docRef.id);
    };

  return (
    <div className='containerforms'>
        
        <h3>Checkout</h3>
        <form onSubmit={handleOnSubmit}>
            <>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                    <Form.Control
                        required
                        placeholder="Username"
                        name="name"
                        onChange={handleOnChange}
                        value={values.name}
                        aria-label="Username"
                        aria-describedby="basic-addon1" />
                </InputGroup>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control required value={values.email} onChange={handleOnChange} name="email" type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel label="Phone">
                    <Form.Control value={values.phone} onChange={handleOnChange} name="phone" required type="phone number" placeholder="Phone number" />
                </FloatingLabel>
            </>
            <hr></hr>
            <button onClick={() => clearCart()} className='button-submit'>Create order</button>
        </form>
        {purchaseID && <PurchaseToast purchaseID={purchaseID}/>}
    </div>

  )
}

export default Checkout