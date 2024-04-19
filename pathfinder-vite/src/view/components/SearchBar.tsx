import React, {useEffect, useState} from "react";
import "./SearchBar.scss";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {Button, Form, InputGroup} from "react-bootstrap";

interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
  const [ queryInput, setQueryInput ] = useState('');
  const { query, onSearch } = props;

  useEffect(() => setQueryInput(query), [query]);

  return (
      // <div>
      //   <FaMagnifyingGlass />
      //   <TextInput value={queryInput}
      //              placeholder='Search'
      //              autoFocus={true}
      //              onEnter={onSearch}
      //              onChange={setQueryInput} />
      // </div>
      <Form
          className={'pf-search-bar'}
          onSubmit={event => {
            onSearch(queryInput);
            event.preventDefault();
      }}>
        <InputGroup>
          <InputGroup.Text>
            {/*<FontAwesomeIcon icon={faMagnifyingGlass} />*/}
            <FaMagnifyingGlass />
          </InputGroup.Text>
          <Form.Control
              value={queryInput}
              onChange={event => setQueryInput(event.target.value)}
              placeholder={'Search'}
              autoFocus={true} />
          <Button type={'submit'} variant={'primary'}>Search</Button>
        </InputGroup>
      </Form>
  );
}