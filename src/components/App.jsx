import React from 'react';
// import { nanoid } from 'nanoid';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { loadFromLs, saveToLs } from 'helper/localStorage';

export const App = () => {
  return (
    <>
      <FormAddContact />
      <Filter />
      <ContactsList />
    </>
  );
};
