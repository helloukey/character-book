// hooks
import { useContext } from "react";
// context
import { PageContext } from "../context/PageContext";

const usePage = () => {
  // Use Context
  const pageContext = useContext(PageContext);

  // Throw error if page context is undefined
  if (pageContext === undefined) {
    throw new Error("usePage() must be used inside PageContext Provider.");
  }

  return pageContext;
};
export default usePage;
