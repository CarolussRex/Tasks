import React, { useState,} from 'react';
import { IProps } from '../types/item-props.interface';

const ItemOfTheList: React.FC<IProps> = ({item, change, deletting}): JSX.Element => {

    const [edit, setEdit] = useState<boolean>(true)

    const handleEdit = () => {
        setEdit(!edit)
    }

    return (
        <div className="content">
            <input value={item.title} type="text" onChange={(e) => change(item, e)} disabled={edit}/>
            <button onClick={()=> deletting(item)} id = "button-delete">Delete</button>
            <button onClick={handleEdit} id = "button-edit">Edit</button>  
        </div>
    )
   
}

export default ItemOfTheList
