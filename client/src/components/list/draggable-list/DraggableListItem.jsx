import React from 'react'

const DraggableListItem = (props) => {
    return (
        <li className='draggable-list__item'>
            {props.children}
        </li>
    )
}

export default DraggableListItem
