import React, { useState, useEffect} from 'react'
import { ItemOfTheList } from '../ItemOfTheList/ItemOfTheList'


export default function App() {

  const [list, setList] = useState([])
  const [title, setTitle] = useState('')

  const AddPost = (e) => {
    e.preventDefault()
   const post = {
    id: Date.now(),
    title
   }
   title.length >= 2 ? setList([...list, post]) : (alert('The value must have 2 or more symbols'))
   setTitle('')
  }

  const createPost = (e) => {
   setTitle(e.target.value)
  }
 
  const deletePost = (post) => {
  setList(list.filter(p => p.id !== post.id))
  }

  const changePost = (post, e) =>{
      const filter = list.filter(p => p.id !== post.id) 
      const find = list.find(p => p.id === post.id)
      find.title = e.target.value
      const sortArray = [...filter, find]
      sortArray.sort((a, b) => a.id > b.id ? 1 : -1)
      setList(sortArray)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  })

  return(
  <div className='main'>
    <form>
      <input type='text' placeholder='Type here' onChange={createPost} id="add-input" value={title}></input>
      <button onClick={AddPost} id = "button-add">Add your Plan</button>
    </form>
      {list.map((item, k) =>
            <ItemOfTheList key = {k}
              item = {item}
              list={list}
              setTitle={setTitle}
              deletting={deletePost}
              change={changePost}
            />
          )}
      </div>
  )
}
