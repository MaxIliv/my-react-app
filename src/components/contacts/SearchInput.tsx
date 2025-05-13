import { FC } from 'react'

type SearchProps = {
  value: string;
  onSearch: (e: string) => void;
}
const SearchInput: FC<SearchProps> = ({ value, onSearch }) => {
  return (
    <>
      <label htmlFor="search">Search</label>
      <input value={value} onChange={(e) => onSearch(e.target.value)} type="text" name="search" id="search" />
    </>
  )
}

export default SearchInput;
