import "~/config/ReactotronConfig";

import React from "react";
import { Provider } from "react-redux";

import store from "~/stores";

import "~/config/StatusBarConfig";

const App = () => (
  <Provider store={store}>
    <VerifyUser />
  </Provider>
);

export default App;
