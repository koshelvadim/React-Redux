import { put, takeEvery, call } from "redux-saga/effects";
import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "../redux/usersApiReduser";

//функция запроса на рест-апи
async function fetchUsersFromApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Something go wrong");
  }
  return await response.json();
}

function* fetchUserWorker() {
  try {
    const data = yield call(fetchUsersFromApi);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* userWatcher() {
  yield takeEvery(fetchUsersRequest.type, fetchUserWorker);
}

export default userWatcher;
