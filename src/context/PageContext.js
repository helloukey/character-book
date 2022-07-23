// imports
import { createContext, useReducer } from "react";

// create context
export const PageContext = createContext();

// reducer function
const PageReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return { ...state, page: action.payload };
    case "PREVIOUS_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

// context provider wrapper
const PageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PageReducer, {
    page: 1,
  });

  // dispatch functions
  const nextPage = () => {
    dispatch({ type: "NEXT_PAGE", payload: state.page + 1 });
  };
  const previousPage = () => {
    dispatch({ type: "NEXT_PAGE", payload: state.page - 1 });
  };

  // wrapper
  return (
    <PageContext.Provider value={{ ...state, nextPage, previousPage }}>
      {children}
    </PageContext.Provider>
  );
};
export default PageProvider;
