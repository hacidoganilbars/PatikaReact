import {useState, useEffect} from 'react'
import List from './List'
import Form from './Form';
import "./styles.css"
function Contacts() {
  const [contacts,setContacts] = useState([
    {
      fullname:"Doğan",
      phone_number:"123123"
    },
    {
      fullname:"Özlem",
      phone_number:"457457"
    },
    {
      fullname:"Gözde",
      phone_number:"987659"
    }
  ]);

  useEffect(()=>{
    console.log(contacts);
  },[contacts])
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;