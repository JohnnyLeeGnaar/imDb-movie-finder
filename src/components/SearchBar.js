import React from "react";

import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchBar = (props) => {
  const { onClickToolbarHandler, onChangeHandler, marker } = props;

  return (
    <>
      <Container>
        <Form>
          <Row
            className={`search-wrapper-flex  ${
              marker ? "initial" : "populated"
            }`}
          >
            <Form.Group
              as={Col}
              xs="10"
              lg="6"
              sm="6"
              md="6"
              controlId="formGridEmail"
            >
              <Form.Control
                type="input"
                className="search-series-input"
                placeholder="Find your favourite TV series"
                onChange={(e) => onChangeHandler(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              xs="10"
              lg="2"
              sm="2"
              md="2"
              controlId="submit-bttn"
            >
              <Button
                className="search-button"
                variant="primary"
                type="submit"
                onClick={(e) => onClickToolbarHandler(e)}
              >
                <FaSearch /> Search
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default SearchBar;
