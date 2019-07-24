import { all, takeLatest } from "redux-saga/effects";

// import { SignupTypes } from '~/stores/ducks/signup';

// import { signup } from './signup';

export default function* rootSaga() {
  return yield all([
    // takeLatest(SignupTypes.SET_SIGNUP_REQUEST, signup),
  ]);
}
