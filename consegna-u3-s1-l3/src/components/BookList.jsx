import { Component } from "react";
import SingleBook from "./SingleBook";

import { Row, Col, Container, Form } from "react-bootstrap";

class BookList extends Component {
    state = {
        bookTitle: "",
    };
    handleChange = (propertyValue) => {
        this.setState({ bookTitle: propertyValue });
    };
    render() {
        return (
            <Container>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Find your {this.props.stuffToSearch}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search a book"
                        value={this.state.bookTitle}
                        onChange={(event) => this.handleChange(event.target.value)}
                    />
                </Form.Group>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-4">
                    {this.props.array
                        .filter((book) => book.title.toLowerCase().includes(this.state.bookTitle.toLowerCase()))
                        .map((book, index) => (
                            <Col key={`book-${index}`}>
                                <SingleBook
                                    img={book.img}
                                    title={book.title}
                                    category={book.category}
                                    price={book.price}
                                />
                            </Col>
                        ))}
                </Row>
            </Container>
        );
    }
}

export default BookList;
