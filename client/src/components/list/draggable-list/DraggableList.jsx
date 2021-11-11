import React, { useState } from 'react';
import './draggable-list.css';
import DraggableListItem from './DraggableListItem';

const DraggableList = (props) => {
    const [data, setData] = useState(props.data)
    return (
        <ul className='draggable-list'>
            {
                data.map((item, index) => (
                    <DraggableListItem key={index}>
                        {item.title}
                    </DraggableListItem>
                ))
            }
        </ul>
    )
}

export default DraggableList;
