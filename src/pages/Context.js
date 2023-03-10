import React, { useContext, useReducer } from "react";
import Reducer from "../pages/Reducer";

const Context = React.createContext();

const initialState = {
  header: false,
  menu: [
    { id: 1, url: "home", name: "HOME" },
    { id: 2, url: "rooms", name: "ROOMS" },
    { id: 3, url: "service", name: "SERVICE" },
    { id: 4, url: "about", name: "ABOUT" },
    { id: 5, url: "restaurant", name: "RESTAURANT & BAR" },
    { id: 6, url: "contact", name: "CONTACT" },
  ],
  menu_url: undefined,
  sidebar: false,
  toggle: false,
  search_value: "",
  cat_id: 0,
  productList: [],
};

export const useSealState = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useState нь ContextProvider дотор ашиглагдах ёстой.");
  }
  return context;
};

const ContextProvider = ({ children }) => {
  const [state, setState] = useReducer(Reducer, initialState);

  return (
    <Context.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default React.memo(ContextProvider);
