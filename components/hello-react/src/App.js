import './App.css';

import User from './components/User';

const friends = [
  {id:1, name:"Özlem"},
  {id:2, name:"Gözde"},
  {id:3, name:"İsmail"}
];
function App() {
  return (
    <>
      <User 
      name="Hacı Doğan" 
      surname="İlbars" 
      isLoggedIn={true} 
      age={"35"} 
      friends={friends}
      address={
        {
          title:"Etimesgut/Ankara",
          zipCode:6790
        }
      }
      /> 
    </>
  );
}

export default App;
