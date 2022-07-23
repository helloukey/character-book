// hooks
import { useParams } from "react-router-dom";
import useList from "../hooks/useList.js";

// components
import Navbar from "../components/Navbar.js";
import PeopleHead from "../components/PeopleHead.js";
import { Footer } from "../components/Footer.js";
import PeopleDetails from "../components/PeopleDetails.js";
import HomeButton from "../components/HomeButton.js";

const Details = () => {
  // id Parameter
  const { id } = useParams();
  // Fetched Data
  const { list, pending, error } = useList(
    `https://swapi.dev/api/people/${id}`
  );
  return (
    <div>
      <Navbar />
      <PeopleHead list={list} />
      <HomeButton />
      <PeopleDetails list={list} pending={pending} error={error} />
      <Footer />
    </div>
  );
};
export default Details;
