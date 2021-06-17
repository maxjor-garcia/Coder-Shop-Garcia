import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {

    return (
        <div className='parrafo'>
            <p>{props.greeting}</p>
        </div>
    )
}

export { ItemListContainer }