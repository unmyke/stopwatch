import React from "react";
import StoreContext from "./store-context";


const Provider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}

export default Provider;
