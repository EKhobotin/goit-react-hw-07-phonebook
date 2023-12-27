import React, { useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { Audio } from 'react-loader-spinner';
import { List, ListItem, Span } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, fetchContactsThunk } from 'store/contactsThunk';

export const ContactsList = () => {
  // const { contacts, filter } = useSelector(state => state.contacts);
  console.log(Audio);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteContactThunk(id));
  }

  const { items, error, isLoading } = useSelector(
    state => state.contacts.contacts
  );
  // console.log(items);
  const { filter } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  function filteredContacts() {
    return items.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return (
    <List>
      {error && <p>{error}</p>}
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      {filteredContacts().map(el => (
        <ListItem key={el.id}>
          {el.name}: <Span>{el.phone}</Span>
          <button type="button" onClick={() => handleDelete(el.id)}>
            X
          </button>
        </ListItem>
      ))}
    </List>
  );
};

// export class ContactsList extends Component {
//   render() {
//     const { contacts } = this.props;
//     return (
//       <List>
//         {contacts.map(
//           el => (
//             <ListItem key={nanoid()}>
//               {el.name}: <Span>{el.number}</Span>
//               <button type="button" onClick={() => this.props.delete(el.id)}>
//                 X
//               </button>
//             </ListItem>
//           )
//         )}
//       </List>
//     );
//   }
// }
