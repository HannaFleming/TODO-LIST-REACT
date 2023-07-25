import image from './2216.jpg'
import { Todo } from './Todo'
import './App.css';

function App() {
  return (
    <div>
   <div className="heading">
      <img className="heading__img"  src={ image } width="180px" alt="ipod"/>
      <h1 className="heading__title">To-Do List</h1>
      
</div>
<div className="heading">
      <Todo />
      </div>
      </div>
 )
}

export default App;
