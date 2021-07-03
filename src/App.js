import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
const player = ['David Warner', 'Tamim Iqbal', 'Martin Gubtil', 'Virat Kohli'];
const products = [
  {name: "photoshop", price: "$99.99"},
  {name: "Illustaror", price: "$40.99"},
  {name: "PDF Reader", price: "$6.99"}
];
// const productsName = products.map(pd => pd.name);
// console.log(productsName);
// const playerName = player.map(nam => nam);
// console.log(playerName);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul style ={{color:"#6B69D6"}}>
          {player.map(nam => <li>{nam}</li>)}
          {
            products.map(nam =><li>{nam.name}</li>)
          }
        </ul>
        <Counter></Counter>
        <User></User>
        {
          products.map(pd => <Product productt ={pd}></Product>)
        }
        <Product productt={products[0]}></Product>
        <Product productt={products[1]}></Product>
        <Product productt={products[2]}></Product>
        <Person name = "Steven Smith" jobs = "Batting"></Person>
        <Person name = "Shakib Al Hasan" jobs = "all rounder"></Person>
        <Person name = "Mohammad Amir" jobs = "Bowling"></Person>
        <Person name = {player[0]} jobs = "This is come from an array"></Person>
      </header>
    </div>
  );
}
function User () {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic user: {users.length}</h3>
      <ul>
        {
          users.map(person => <li>{person.name}</li>)
        }
      </ul>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10)
  const increaseHandler = () => {
    //console.log("clicked");
    // const newCount = count + 1;
    setCount(count + 1);
  }
  return (
    <div>
      <h1>count: {count}</h1>
      <button style={{cursor:"pointer"}} onClick = { () => setCount(count - 1)}>Decrease</button>
      <button style={{cursor:"pointer"}} onClick={increaseHandler}>Increase</button>
    </div>
  )
}
function Product(props) {
  //console.log(props)
  const productStyle = {
    backgroundColor: "#7E735F",
    borderRadius: "10px",
    color: "#FFB900",
    height: "200px",
    width: "300px",
    float: "left",
    margin: "10px"
  }
  const {name, price} = props.productt;
  return (
    <div style={productStyle}>
      <h2>Name: {name}</h2>
      <h3>{price}</h3>
      <button>Buy now</button>
    </div>
  )
}
function Person(props) {
  const personStyle = {
    color:"#8E8CD8",
    border:"2px solid #EA005E",
    margin:"10px"
  }
  //console.log(props);
  return (
    <div style={personStyle}>
      <h2 style={{color:"#847545",backgroundColor:"#00B294"}}>Name: {props.name}</h2>
      <p>No 1 {props.jobs} in the world</p>
    </div>
  )
}

export default App;
