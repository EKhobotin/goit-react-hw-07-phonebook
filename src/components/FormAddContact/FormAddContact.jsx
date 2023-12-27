import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Container, Label, Button, Input } from './FormAddContact.styled';
// import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { addContactThunk } from 'store/contactsThunk';

export const FormAddContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.contacts.items);
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
      // id: nanoid(),
      name,
      phone: number,
    };
    if (contacts.some(el => el.name === name)) {
      Notiflix.Notify.warning('is already in contacts');
    } else {
      dispatch(addContactThunk(newContact));
      setName('');
      setNumber('');
    }
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
        <Button type="submit">New Contact</Button>
      </Form>
    </Container>
  );
};
