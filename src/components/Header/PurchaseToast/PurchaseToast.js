import Toast from 'react-bootstrap/Toast';

const PurchaseToast = ({ purchaseID }) => {
  return (
    <div>
        <Toast>
            <Toast.Body> Thaks for your purchase! Your ID is: {purchaseID} </Toast.Body>
        </Toast>
    </div>
  )
}

export default PurchaseToast