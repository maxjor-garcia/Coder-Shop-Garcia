import React from 'react'
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <div className='iconocart'>
            <FontAwesomeIcon icon={faCartPlus} />
        </div>
    )
}

export { CartWidget }