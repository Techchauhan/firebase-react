import {getDatabase, ref, set} from "firebase/database"
import {app} from "./firebase"


const db = getDatabase(app);


const putData =()=>{
  set(ref(db, 'users/rishab'), {
    id: 1,
    name:"rishab Chauhan",
    emial : "rishabkumarchauhan@gmail.com"
  })
}

function App() {
  return (
   <div className="App">
   <h5>Put the Data into the Datbase RealTime</h5>
    <button onClick={putData}>Put Data</button>



   </div>
  );
}

export default App;
