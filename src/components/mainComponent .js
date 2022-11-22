import React, { Component } from "react";
import Person from './Person';
import MapBookList from "./lists/bookMap";
import BookList from '../assets/books'


class MainComponent extends Component {
    state = {
        book: BookList,
        toggleBook: true
    };


    changeWithInputName = (index, even) => {
        let book = { ...this.state.book[index] };
        book.name = even.target.value;
        const books = [...this.state.book];
        books[index] = book;
        this.setState({ book: books });
    }


    toggleBook = () => {
        this.setState({ toggleBook: !this.state.toggleBook })
    };


    deleteBook = (index) => {
        // let books = this.state.book;
        // let books = this.state.book.slice();
        // let books = this.state.book.map(item => item);
        let books = [...this.state.book];
        books.splice(index, 1);
        this.setState({
            book: books
        });

    };   

    render() {
        let books = null
        if (this.state.toggleBook) {
            books = <MapBookList 
                    books={this.state.book} 
                    changeName={this.changeWithInputName} 
                    bookDelete={this.deleteBook} />
        }

        return (
            <div className="App">
                <Person />
                <button onClick={this.toggleBook} >Toggle Book</button>
                {books}
            </div>
        );
    };
}

export default MainComponent;