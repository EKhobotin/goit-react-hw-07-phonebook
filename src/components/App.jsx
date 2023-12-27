import React from 'react';
// import { nanoid } from 'nanoid';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { loadFromLs, saveToLs } from 'helper/localStorage';

export const App = () => {
  //   const [contacts, setContacts] = useState(() =>
  //     loadFromLs('contacts')?.length
  //       ? loadFromLs('contacts')
  //       : [
  //           { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //           { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //           { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //           { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //         ]
  //   );
  //   const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   saveToLs(contacts);
  // }, [contacts]);

  // useEffect(() => {
  //   setContacts(prevState =>
  //     prevState.filter(el =>
  //       el.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   );
  // }, [filter]);

  // const handleAddContact = (name, number) => {
  //   if (contacts.find(el => el.name === name)) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   setContacts(prevState => [...prevState, { id: nanoid, name, number }]);
  //   console.log('click add');
  // };
  // const deleteContact = id =>
  //   setContacts(prevState => prevState.filter(el => el.id !== id));
  // const getSearch = search => setFilter(search);
  // const getFilteredContacts = () =>
  //   contacts.filter(el =>
  //     el.name.toLowerCase().includes(filter.toLocaleLowerCase())
  //   );

  // console.log('render');
  return (
    <>
      <FormAddContact />
      <Filter />
      <ContactsList />
    </>
  );
};

// export class App extends Component {
//   state = {
//     contacts: loadFromLs('contacts') ? loadFromLs('contacts') : [],

//     filter: '',
//   };

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts.length !== prevState.contacts.length) {
//       saveToLs(this.state.contacts);
//     }
//     // console.log('up');
//     // console.log(prevState);
//     // console.log(this.state);
//   }

//   handleAddContact = (name, number) => {
//     if (this.state.contacts.find(el => el.name === name)) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { id: nanoid(), name, number }],
//     }));
//   };

//   getSearch = search => this.setState({ filter: search });

//   getFilteredContacts = () =>
//     this.state.contacts.filter(el =>
//       el.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
//     );

//   deleteContact = id =>
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(el => el.id !== id),
//     }));

//   render() {
//     return (
//       <>
//         <FormAddContact onSubmit={this.handleAddContact} />
//         <Filter inputSearch={this.getSearch} value={this.state.filter} />
//         <ContactsList
//           contacts={this.getFilteredContacts()}
//           deleteContact={this.deleteContact}
//         />
//       </>
//     );
//   }
// }
