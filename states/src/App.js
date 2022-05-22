
import { useState } from 'react';
function App() {
  const [name, setName] = useState("Doğan");
  const [age, setAge] = useState(34);
  const [friends, setFriends] = useState(["Mustafa", "Buket", "Murat"]);
  const [address,setAddress] = useState({title:"Adana",zip:111111});
  return (
    <div>
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Özlem")}>Change name</button>
      <button onClick={() => setAge(28)}>Change age</button>
      <hr />
      <br /><br />
      <h2>Friends</h2>
      {friends.map((friend,index)=>(<div key={index}>{friend}</div>
      ))};
      <br />
      <button onClick={() => setFriends([...friends, "Ayşe"])}>Add Friend</button>
      <hr />
      <br /><br />
      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <button onClick={() => setAddress({...address, title:"Ankara", zip:666666})}>Change the Address</button>
    </div>
  );
}

export default App;
