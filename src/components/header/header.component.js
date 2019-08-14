import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'
import CardIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CurrentUserContext
  from '../../contexts/current-user/current-user.context'
import { CartContext } from '../../providers/cart/cart.provider'

const Header = () => {
  const currentUser = useContext(CurrentUserContext)
  const { hidden } = useContext(CartContext)
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {
          currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGN
              OUT</div>
            :
            <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CardIcon/>

      </div>
      {
        hidden ? null : <CartDropdown/>
      }
    </div>
  )
}


export default Header
