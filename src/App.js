import logo from './logo.svg';
import './App.css';
const player = ['David Warner', 'Tamim Iqbal', 'Martin Gubtil']
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name = "Steven Smith" jobs = "Batting"></Person>
        <Person name = "Shakib Al Hasan" jobs = "all rounder"></Person>
        <Person name = "Mohammad Amir" jobs = "Bowling"></Person>
        <Person name = {player[0]} jobs = "This is come from an array"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    color:"#8E8CD8",
    border:"2px solid #EA005E",
    margin:"10px"
  }
  console.log(props);
  return (
    <div style={personStyle}>
      <h2 style={{color:"#847545",backgroundColor:"#00B294"}}>Name: {props.name}</h2>
      <p>No 1 {props.jobs} in the world</p>
    </div>
  )
}

export default App;
