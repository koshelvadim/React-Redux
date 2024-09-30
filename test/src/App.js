import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addCash, getCash } from "./redux/bankSlice";
import { addUser, removeUser } from "./redux/usersSlice";


function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.bank.cash);
  const users = useSelector((state) => state.users.users);

  const handleClickAddUser = (name) => {
    const user = {
      name,
      id: Date.now(),
    };
    dispatch(addUser(user));
  };

  const handleClickRemoveUser = (user) => {
    dispatch(removeUser(user));
  };

  return (
    <div className="container">
      <h2 className="text-center">Всего на счету: {cash}</h2>
      <div className="d-flex justify-content-center gap-1">
        <button
        className="btn btn-info"
        onClick={(cash) => dispatch(addCash(Number(prompt(cash))))}
      >
        Пополнить счет
      </button>

      <button
        className="btn btn-info"
        onClick={(cash) => dispatch(getCash(Number(prompt(cash))))}
      >
        Снять со счета
      </button>

      <button
        className="btn btn-info"
        onClick={(name) => handleClickAddUser(prompt(name))}
      >
        Добавить пользователя
      </button>

      </div>
      
      {users.length > 0 ? (
        <div className="container d-flex flex-column mt-3 gap-1">
          <h2>Пользователи:</h2>
          {users.map((user, index) => (
            <div
              key={user.id}
              className="d-flex align-items-center justify-content-between border p-2 w-100"
            >
              <h3>{index + 1}. {user.name}</h3>
              <button
                className="btn btn-primary"
                onClick={() => handleClickRemoveUser(user)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>Пользователей нет</h2>
        </div>
      )}
    </div>
  );
}

export default App;
