import { useContext } from "react";
import { PageContext } from "../context/PageContext";

const usePage = () => {
  const pageContext = useContext(PageContext);

  if (pageContext === undefined) {
    throw new Error("usePage() must be used inside PageContext Provider.");
  }

  return pageContext;
};
export default usePage;
