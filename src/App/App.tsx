import React, { useState, useEffect} from 'react'
import ItemOfTheList from '../Item/ItemOfTheList'
import {IPost} from '../types/post.interface'
import '../css/index.scss';

const App = (): JSX.Element => {
  const [list, setList] = useState<IPost[]>([])
  const [title, setTitle] = useState<string>('')

  const AddPost = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault()
   const post: IPost = {
    id: Date.now(),
    title
    
   }
   title.length >= 2 ? setList([...list, post]) : (alert('The value must have 2 or more symbols'))
   setTitle('')
  }

  const createPost = (e: React.ChangeEvent<HTMLInputElement>): void => {
   setTitle(e.target.value)
  }
 
  const deletePost = (post: IPost): void => {
  setList(list.filter((p: IPost)  => p.id !== post.id))
  }

  const changePost = (post: IPost, e: React.ChangeEvent<HTMLInputElement>): void =>{
      
      const updatedList = list.map(item => {
        if (item.id === post.id) {
          item.title = e.target.value
        }
        return item
        })
        setList([...updatedList])
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  },[list])

  return(
  <div className='main'>
    <form>
      <input type='text' placeholder='Type here' onChange={createPost} id="add-input" value={title}></input>
      <button onClick={AddPost} id = "button-add">Add your Plan</button>
    </form>
      {list.map((item) =>
            <ItemOfTheList key = {item.id}
              item = {item}
              deletting={deletePost}
              change={changePost}
            />
          )}
      </div>
  )
}

export default App
