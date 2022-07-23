// hooks
import { useEffect, useState } from "react";

const useList = (url) => {
  // states
  const [list, setList] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  // fetch data on url change
  useEffect(() => {
    setPending(true);
    setError(null);
    const fetchList = async () => {
      try {
        const fetchRequest = await fetch(url);
        const response = await fetchRequest.json();
        setList(response);
        setPending(false);
        setError(null);
      } catch (error) {
        setError("Could not fetch the list :(");
        setPending(false);
      }
    };
    fetchList();
  }, [url]);

  return { list, pending, error };
};
export default useList;
