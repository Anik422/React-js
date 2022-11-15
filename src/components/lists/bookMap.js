import Book from "../representational/Book";


const MapBookList = (props) =>{
    return(
        props.books.map((item, index) => {
            return (
                <Book
                    name={item.name}
                    price={item.price}
                    delete={() => props.bookDelete(index)}
                    key={item.id}
                    changeName={(even) => props.changeName(index, even)}
                />
            );
        })
    );
};

export default MapBookList;