import Greeting from './components/Greeting'
import Message from './components/Message'
import Button from './components/Button'
import './App.css'

const text = "Ivan";

function App() {
  const handleButton = () => {
    console.log('Click');
  }
  
  return (
    <>
      <Greeting name={text} />
      <Message text={"Hi"}/>
      <Button onClick={handleButton}/>
    </>
  )
}

export default App
