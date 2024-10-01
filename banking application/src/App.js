import "./App.css";
import BankList from "./components/BankList";
import BankForm from "./components/BankForm";

function App(props) {
  return (
    <div className="container">
      <h3 className="text-center">Банковское приложение</h3>
      <BankForm />
      <BankList />
    </div>
  );
}

export default App;
