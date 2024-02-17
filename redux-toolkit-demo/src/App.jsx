import "./App.css";
import Cake from "./features/cake/Cake";
import IceCream from "./features/iceCream/IceCream";
import Users from "./features/user/Users";

function App() {
  return (
    <main className="App">
      <Cake />
      <IceCream />
      <Users />
    </main>
  );
}

export default App;
