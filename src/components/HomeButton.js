import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div className="px-4 mx-auto mt-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid max-w-screen-lg gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
        <div className="flex">
          <Link
          to="/"
            className="flex items-center px-4 py-2 mx-1 transition-colors duration-200 transform rounded-md hover:bg-deep-orange-accent-400 dark:hover:bg-deep-orange-accent-400 border-2 hover:text-white"
          >
            {`< Back To Homepage`}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomeButton;
