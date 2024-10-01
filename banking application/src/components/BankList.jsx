import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/usersSlice';

const BankList = () => {

  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  
  const handleClickRemoveUser = (user) => {
    dispatch(removeUser(user));
  };

  return (
    <>
      <h5>Список пользователей:</h5>
      {users.length > 0 
        ? (
          <div className="container d-flex flex-column mt-3 gap-1">
            {users.map((user, index) => (
              <div
                key={user.id}
                className="d-flex align-items-center justify-content-between border p-2 w-100"
              >
                <h6>
                  {index + 1}. {user.nameUser}
                </h6>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClickRemoveUser(user)}
                >
                  удалить
                </button>
              </div>
            ))}
          </div>
          )
        : (
          <div>
            <h6>список пуст...</h6>
          </div>
        )}
    </>
  )
}

export default BankList;