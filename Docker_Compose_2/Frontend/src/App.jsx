import React , {useState , useEffect} from 'react'
import axios from 'axios'

const App = () => {

    const [users, setUsers] = useState([])
    const [greet, setGreet] = useState('')


    useEffect(() => {
       
      axios.get('/api/users')
      .then(res => {
           setUsers(res.data)
      })
      .catch(err => {
          console.log(err)
      })


      axios.get('/api/greet')
      .then(res => {
           setGreet(res.data)
      })
     
    }, [])
    
    
  




  return (
    <div>
       <h2>Users</h2>
       <h3>{greet}</h3>
      
        {
          users.map((user) =>(
            <div>{user.id} {user.name}</div>
          ))
        }

     



    </div>
  )
}

export default App
