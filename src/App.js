
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
       
      
       <Counter startValue={100} />
       <Counter  />
       <Counter increase={10} />
    </div>
  );
}

export default App;
