import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useRef, useState} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
import "./SearchBar.scss";

interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
  const [ queryInput, setQueryInput ] = useState('');
  const { query, onSearch } = props;

  useEffect(() => setQueryInput(query), [query]);

  let inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
      <Form
          className={'pf-search-bar'}
          onSubmit={event => {
            onSearch(queryInput);
            event.preventDefault();
      }}>
        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </InputGroup.Text>
          <Form.Control
              ref={inputRef}
              value={queryInput}
              onChange={event => setQueryInput(event.target.value)}
              placeholder={'Search'} />
          <Button type={'submit'} variant={'primary'}>Search</Button>
        </InputGroup>
      </Form>
  );
}