import { useState } from 'react';
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

function Contacts() {
  const [contact, setContacts] = useState(contacts);
  return (

      <div className='container'>
        {contact.map((contact, index) => (
          <div key={index} className='content'>
            <p>{contact.firstName} {contact.lastName}</p>
            <p>{contact.phone}</p>
            <p>{contact.gender}</p>
          </div>
        ))}
      </div>

  );
}

function Contracts (){
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
  
    const filterContacts = (contacts, searchTerm) => {
      return contacts.filter((item) => {
        const { firstName, lastName, phone } = item;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        
        return (
          firstName.toLowerCase().includes(lowerCaseSearchTerm) ||
          lastName.toLowerCase().includes(lowerCaseSearchTerm) ||
          phone.toLowerCase().includes(lowerCaseSearchTerm)
        );
      });
    };
  
    const handleSearch = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
      setFilteredData(filterContacts(contacts, value));
    };
  
    return (
      <div className="contacts">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
        />
        <div className='container'>
          {filteredData.map(({ firstName, lastName, phone, gender }, index) => (
            <div key={index} className="content">
              <p>{firstName} {lastName}</p>
              <p>{phone}</p>
              <p>{gender}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Contracts;
