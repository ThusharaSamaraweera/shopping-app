import React from "react";
import {Row, Col} from 'react-bootstrap';
import Select from "react-select";

const SearchBar: React.FC = () => {

  return (
    <Row className='search-bar'> 
        <Col xs={12} md={{offset: 2, span: 8}} lg={{offset: 4, span: 4}}>
        <Select   placeholder="Search...."
                  openMenuOnClick={false}
                  isClearable
                  isSearchable
          />
      </Col>
    </Row>
  )

}

export default SearchBar;