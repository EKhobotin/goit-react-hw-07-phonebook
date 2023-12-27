import React from 'react';
import { nanoid } from 'nanoid';
import { List, ListItem, Span } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';

export const ContactsList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteContact(id));
  }
  function filteredContacts() {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return (
    <List>
      {filteredContacts().map(el => (
        <ListItem key={nanoid()}>
          {el.name}: <Span>{el.number}</Span>
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
