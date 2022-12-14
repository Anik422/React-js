import React, { Component } from "react";
import '../../stylesheets/book.css'

const Book = props => {
    return (
        <div className="book-list">
            <h3 onClick={ props.delete }>Book Name : { props.name }</h3>
            <h3>{ props.name } price : { props.price }</h3>
            <input onChange={props.changeName} value={props.name} />
        </div>
    );
}

export default Book