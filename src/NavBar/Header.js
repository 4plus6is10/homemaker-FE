import React from 'react'
import './Header.css'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import {Link} from 'react-router-dom'
import { useStateValue } from '../StateProvider'

function Header() {
  const [{basket}, dispatch] = useStateValue(); 

  return (
    <div className='header'>
        <Link to="/">
        <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        />
        </Link>

        <div className='header_search'>
            <a href="/search">Search</a>
        </div>

        <Link to = '/cart'>
            <div className='header_optionBasket'>
                <ShoppingBasket />
                <span className='header_optionLineTwoheader_basketCount'>
                    {basket?.length}
                </span>
            </div>
        </Link>

    </div>
  )
}

export default Header