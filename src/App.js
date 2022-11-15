import './App.css';
import React, { Component } from 'react';
import Person from './components/Person';
import Book from './components/Book'




// class base Comment
class App extends Component {
  state = {
    book: [
      { id:1, name: '1st Book', price: 250 },
      { id:2, name: '2nd Book', price: 2100 },
      { id:3, name: '3rd Book', price: 200 },
      { id:4, name: '4th Book', price: 250 },
    ],
    toggleBook:true
  };


  changeWithInputName = (index, even) =>{
    let book = {...this.state.book[index]};
    book.name = even.target.value;
    const books = [...this.state.book];
    books[index] = book;
    this.setState({book:books});
    console.log(even.target.value);
  }


  toggleBook = () => {
    this.setState({toggleBook: !this.state.toggleBook})
  };


  deleteBook = (index) => {
    // let books = this.state.book;
    // let books = this.state.book.slice();
    // let books = this.state.book.map(item => item);
    let books = [...this.state.book];
    books.splice(index, 1);
    this.setState({
      book:books
    });

  };

  render() {
    let books = null
    if (this.state.toggleBook){
      books = this.state.book.map((item, index) => {
        return (
          <Book 
          name={item.name} 
          price={item.price} 
          delete={() => this.deleteBook(index)} 
          key={item.id}
          changeName = {(even) => this.changeWithInputName(index, even)}
          />
          );
        });
      }
 
    return (
      <div className="App">
        <Person />
        <button onClick={this.toggleBook} >Toggle Book</button>
        { books }
      </div>
    );
  };
};

export default App;
