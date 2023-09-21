import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div>
      <Button className='button-dark' variant="contained" color='inherit'>
        <Badge className='custom-badge' badgeContent={9} color="error">
          <ShoppingCartIcon />
        </Badge>
      </Button>
    </div>
  )
}

export default CartWidget