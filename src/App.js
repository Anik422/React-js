import './App.css';
import React, { Component } from 'react';
import Person from './components/Person';
import Book from './components/Book'


// function base Component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <Person />
//     </div>
//   );
//   // return React.createElement('div', { className:'App' }, React.createElement('h1', null, 'Hello World!'), <Person />)
// }


// class base Comment
class App extends Component {
  state = {
    book:[
      {name:'1st Book', price:250},
      {name:'2nd Book', price:2100},
      {name:'3rd Book', price:200},
    ],
    outher:"5 book data added "
  }

  changeBookName= (name) =>{
    this.setState({
      book:[
        {name: name, price:250},
        {name:'Ulysses', price:2100},
        {name:'Don Quixote', price:200},
        {name:'One Hundred Years of Solitude', price:500}
      ]
    })
  }


  inputNameChange = even => {
    this.setState({
      book:[
        {name: even.target.value, price:250},
        {name:'Ulysses', price:2100},
        {name:'Don Quixote', price:200},
        {name:'One Hundred Years of Solitude', price:500}
      ]
    })

  }

  render() {
    const buttonStyle = {
      background: "#3498db",
      borderRadius: "28px",
      boxShadow: "10px 7px 3px #666666",
      fontFamily: "Georgia",
      color: "#ffffff",
      fontSize: "23px",
      padding: "10px 40px 10px 40px"
    }

    const books = this.state.book.map(function(item){
      return(
        <Book name={item.name} price={item.price} />
      )
    })
    console.log(books);
    return (
      <div className="App">
        <Person />
        <input type="text" onChange={this.inputNameChange} />
        {/* <Book name={ this.state.book[0].name } price={ this.state.book[0].price } inputname={ this.inputNameChange }/>
        <Book name={ this.state.book[1].name } price={ this.state.book[1].price }/>
        <Book name={ this.state.book[2].name } price={ this.state.book[2].price }/>
        <Book name={ this.state.book[3].name } price={ this.state.book[3].price } change={this.changeBookName.bind(this, '1st book')}/> */}
        
        { books }
        
        <button style={buttonStyle}  onClick={ this.changeBookName.bind(this, ' In Search of Lost Time') }>Change Book Name</button>
      </div>
    );
  }
}

export default App;
