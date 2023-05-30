import React, { useState } from 'react';
import './Contracts.css';

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }
];

function Contact({ firstName, lastName, phone, gender }) {
  return (
    <div className='contact'>
      <p>{firstName} {lastName}</p>
      <p>{phone}</p>
      {gender && <p>{gender}</p>}
    </div>
  );
}

function Contacts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGender, setFilterGender] = useState('all');
  
  const filterContacts = (contacts, searchTerm, filterGender) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return contacts.filter(({ firstName, lastName, phone, gender }) => {
      const lowerCaseGender = gender ? gender.toLowerCase() : '';
      const isMatchingSearchTerm =
        firstName.toLowerCase().includes(lowerCaseSearchTerm) ||
        lastName.toLowerCase().includes(lowerCaseSearchTerm) ||
        phone.toLowerCase().includes(lowerCaseSearchTerm);
      const isMatchingGender = filterGender === 'all' || lowerCaseGender === filterGender;
      return isMatchingSearchTerm && isMatchingGender;
    });
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleFilterGenderChange = (event) => {
    const value = event.target.value;
    setFilterGender(value);
  };

  const filteredContacts = filterContacts(contacts, searchTerm, filterGender);

  return (
    <div className="contacts">
      <div className="filters">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
        />
        <div className="gender-filter">
          <label>
            <input
              type="radio"
              value="all"
              checked={filterGender === 'all'}
              onChange={handleFilterGenderChange}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              value="male"
              checked={filterGender === 'male'}
              onChange={handleFilterGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={filterGender === 'female'}
              onChange={handleFilterGenderChange}
            />
            Female
          </label>
        </div>
      </div>
      <div className='container'>
        {filteredContacts.map((contact, index) => (
          <Contact
            key={index}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phone={contact.phone}
            gender={contact.gender}
          />
        ))}
      </div>
    </div>
  );
}

export default Contacts;
