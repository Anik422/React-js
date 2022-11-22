import Book from "../representational/Book";
import React from "react";


class MapBookList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            this.props.books.map((item, index) => {
                return (
                    <Book
                        name={item.name}
                        price={item.price}
                        delete={() => this.props.bookDelete(index)}
                        key={item.id}
                        changeName={(even) => this.props.changeName(index, even)}
                    />
                );
            })
        );
    }
};

export default MapBookList;