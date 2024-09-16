import { useEffect, useState } from 'react';

import { RenderTextInput } from '../FormField';
import { Wrapper } from './style';
import { Button } from '../Button';

interface IProps {
  children?: React.ReactNode;
  handleSearch: (value: string) => void;
  onChange: (arg: any) => void;
  name?: string;
  value?: string;
}

export const ContentSearchBar: React.FC<IProps> = ({
  children,
  handleSearch,
  onChange,
  name,
  value,
}) => {
  const [input, setInput] = useState(value ?? '');
  useEffect(() => {
    if (value) {
      setInput(value);
    }
  }, [value]);
  return (
    <Wrapper>
      <div className="shadow-paper d-flex align-content-center justify-content-between flex-nowrap">
        <div className="searchBarContainer">
          <RenderTextInput
            name={name ?? 'search'}
            type="search"
            size="small"
            allowClear={true}
            className="searchInput"
            placeholder="Search Here"
            value={input}
            onChange={(e) => {
              onChange(e.target.value?.trim());
              setInput(e.target.value?.trim());
            }}
          />
          <Button
            type="primary"
            size="small"
            onClick={() => {
              handleSearch(input);
            }}
          >
            Search
          </Button>
        </div>
        {children}
      </div>
    </Wrapper>
  );
};
