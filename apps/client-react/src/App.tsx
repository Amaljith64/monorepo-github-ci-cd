
import './App.css'
import {Button} from 'ui'
import { UserInputType } from 'common/src'

function App() {


  return (
    <>
     <Button></Button>
     <button onClick={() =>{
      let userDetails: UserInputType ={
        email:"sada",
        password:"dssd"
      }
      console.log(userDetails,'its the details')
     }}>

     </button>
    </>
  )
}

export default App
