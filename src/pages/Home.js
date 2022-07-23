import { Footer } from "../components/Footer";
import List from "../components/List";
import ListHead from "../components/ListHead";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

import useList from "../hooks/useList";
import usePage from "../hooks/usePage";

const Home = () => {
  const { page } = usePage();
  const { list, pending, error } = useList(`https://swapi.dev/api/people/?page=${page}`);
  return (
    <div>
        <Navbar />
        <Main />
        <ListHead />
        <Pagination list={list} pending={pending}/>
        <List list={list} pending={pending} error={error} />
        <Footer />
    </div>
  )
}
export default Home