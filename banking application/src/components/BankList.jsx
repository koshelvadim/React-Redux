import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/usersSlice';

// Пагинация
function pagination(array, pageSize, pageNumber) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

const BankList = () => {

  // Состояние для текущей страницы
  const [currentPage, setCurrentPage] = useState(1);
  // Количество карточек на одной странице
  const pageSize = 2;
  // Обращение к state.users
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  // Удаление пользователя
  const handleClickRemoveUser = (user) => {
    dispatch(removeUser(user));
  };
  // Функция установки текущей страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Формирование набора карточек для отображения на текущей странице
  const displayedProducts = pagination(users, pageSize, currentPage);
  // Определение количества отображаемых страниц
  const totalPages = Math.ceil(users.length / pageSize);

  return (
    <>
      <h5>Список пользователей:</h5>
      {users.length > 0 
        ? (
          <>
            <div className="container d-flex flex-wrap mt-3 gap-2">
              {displayedProducts.map((user, index) => (
                <div key={user.id} class="card" style={{width: '18rem'}}>
                  <div class="card-body">
                    <h5 class="card-title">{index + 1}. {user.nameUser}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button
                    className="btn btn-primary"
                    onClick={() => handleClickRemoveUser(user)}
                    >
                      удалить
                    </button>
                  </div>
                </div>
              ))}
              
            </div>
            <nav aria-label="Page navigation example" className='d-flex justify-content-center m-2'>
              <ul className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li className="page-item">
                    <a 
                      style={{cursor: 'pointer'}}
                      href
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className="page-link"
                    >
                      {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </>
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