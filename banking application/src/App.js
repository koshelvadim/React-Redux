import "./App.css";
import BankList from "./components/BankList";
import BankForm from "./components/BankForm";
// import UserList from "./components/UserList";

function App() {
  return (
    <div className="container">
      <h3 className="text-center">Банковское приложение</h3>
      <BankForm />
      <BankList />
      {/* <UserList /> */}  
    </div>
  );
}

export default App;
