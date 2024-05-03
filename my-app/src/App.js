import Header from "./Component/Header";
// import Body from "./Component/Body";
import { Outlet } from "react-router-dom";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <div className="app-container">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
