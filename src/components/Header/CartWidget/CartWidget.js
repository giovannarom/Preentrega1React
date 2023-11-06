import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import { ContextCart } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const CartWidget = () => {
  const { totalQuantity } = useContext(ContextCart)

  return (
    <Link to="/cart" style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
      <div>
        <Button className='button-dark' variant="contained" color='inherit'>
          <Badge className='custom-badge' badgeContent={totalQuantity} color="error">
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </div>
    </Link>
  )
}

export default CartWidget