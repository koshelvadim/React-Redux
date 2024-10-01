import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCash, getCash } from '../redux/bankSlice';
import { addUser } from '../redux/usersSlice';
import MyButton from "./UI/MyButton";

const BankForm = () => {

  const [valueAdd, setValueAdd] = useState("");
  const [valueGet, setValueGet] = useState("");
  const [nameUser, setNameUser] = useState("");

  const dispatch = useDispatch();
  const userNameInput = useRef();
  const cash = useSelector((state) => state.bank.cash);

  const handleAddCash = () => {
    if (valueAdd !== undefined) {
      dispatch(addCash(valueAdd));
      setValueAdd("");
    }
  };

  const handleGetCash = () => {
    if (valueGet !== undefined) {
      dispatch(getCash(valueGet));
      setValueGet("");
    }
  };

  const handleAddUser = () => {
    if (nameUser.trim() !== "") {
      const user = {
        nameUser,
        id: Date.now(),
      };
      userNameInput.current.classList.remove("border-danger");
      dispatch(addUser(user));
      setNameUser("");
    } else {
      userNameInput.current.classList.add("border-danger");
    }
  };

  return (
    <>
      <h5 className="text-start">Состояние счета: {cash} $</h5>
      <div className="d-flex flex-column justify-content-center gap-1">
          <div className="d-flex justify-content-between border m-2 p-2">
            <input
              type="number"
              value={valueAdd}
              onChange={(e) => setValueAdd(e.target.value)}
              placeholder="enter number"
            />
            <button onClick={handleAddCash} className="btn btn-info">
              Внести
            </button>
            {/* <MyButton onClick={handleAddCash} className="btn btn-info">
              Внести
            </MyButton> */}
          </div>

          <div className="d-flex justify-content-between border m-2 p-2">
            <input
              type="number"
              value={valueGet}
              onChange={(e) => setValueGet(e.target.value)}
              placeholder="enter number"
            />
            <button onClick={handleGetCash} className="btn btn-info">
              Снять
            </button>
          </div>

          <div className="d-flex justify-content-between border m-2 p-2">
            <input
              ref={userNameInput}
              type="text"
              value={nameUser}
              onChange={(e) => setNameUser(e.target.value)}
              placeholder="enter name"
            />
            <button onClick={handleAddUser} className="btn btn-info">
              Добавить пользователя
            </button>
          </div>
      </div>
    </>
  )
}

export default BankForm;