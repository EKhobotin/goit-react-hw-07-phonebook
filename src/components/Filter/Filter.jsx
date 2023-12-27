import React from 'react';
import { FilterWrap, SearchTitle, SearchInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { searchContact } from 'store/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSearch = e => {
    dispatch(searchContact(e.target.value));
  };

  return (
    <FilterWrap>
      <SearchTitle>Search Contact</SearchTitle>
      <SearchInput name="filter" type="text" onChange={handleSearch} />
    </FilterWrap>
  );
};

// export class Filter extends Component {
//   handleSearch = e => {
//     this.props.inputSearch(e.target.value);
//   };

//   render() {
//     return (
//       <FilterWrap>
//         <SearchTitle>Search Contact</SearchTitle>
//         <SearchInput
//           name="filter"
//           type="text"
//           onChange={this.handleSearch}
//           value={this.props.value}
//         />
//       </FilterWrap>
//     );
//   }
// }
