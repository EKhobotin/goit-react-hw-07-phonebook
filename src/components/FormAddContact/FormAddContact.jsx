import React, { useState } from 'react';
import { Form, Container, Label, Button, Input } from './FormAddContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'store/contactsSlice';

export const FormAddContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleChangeContact = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Contact Name:
          <Input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={handleChangeContact}
          />
        </Label>
        <Label>
          Phone number:
          <Input
            type="tel"
            name="number"
            id="phone"
            required
            value={number}
            onChange={handleChangeContact}
          />
        </Label>
        <Button type="submit">Додати контакт</Button>
      </Form>
    </Container>
  );
};
