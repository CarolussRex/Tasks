import React, { useState,} from 'react';

export function ItemOfTheList(props) {
    const { item, change, deletting } = props;
    const [edit, setEdit] = useState(true)

    const handleEdit = () => {
        setEdit(!edit)
    }

    return (
        <div className="contant">
            <input value={item.title} type="text" onChange={(e) => change(item, e)} disabled={edit}/>
            <button onClick={()=> deletting(props.item)} id = "button-delete">Delete</button>
            <button onClick={handleEdit} id = "button-edit">Edit</button>  
        </div>
    )
}
