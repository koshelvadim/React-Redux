import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../redux/usersApiReduser';

const UserList = () => {

  const { usersApi, loading, error} = useSelector((state) => state.usersApi);
  
  
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchUsersRequest()) }, [dispatch]);

  return (
    <div className="App">
      <h1>Пользователи</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка {error}</p>}
      {usersApi.length ? <ul>{
        usersApi.map(user => (
          <li key={user.id}>{user.name}</li>
        ))
      }
      </ul> : null}
    </div>
  )
}

export default UserList