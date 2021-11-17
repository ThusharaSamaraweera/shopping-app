import React from "react";
import {Row, Col} from 'react-bootstrap';
import Select from "react-select";
import { styleSelect, themeSelect } from "./SearchBarConstants";
import {BsSearch} from 'react-icons/bs';


const SearchBar: React.FC = () => {
  const IndicatorsContainer = () => {
    return (
        <div><BsSearch className='search-icon ' size='1.3em'/></div>
    );
  }
  return (
    <Row className='search-bar'> 
        <Col xs={12} md={{offset: 2, span: 8}} lg={{offset: 4, span: 4}}>
        <Select   theme={themeSelect}
                  styles={styleSelect}
                  placeholder="Search...."
                  openMenuOnClick={false}
                  components={{IndicatorsContainer}}
                  isClearable
                  isSearchable
          />
      </Col>
    </Row>
  )

}

export default SearchBar;