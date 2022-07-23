// assets
import MainContent from "../assets/main-content.svg";

const Main = () => {
  return (
    // Wrapper
    <div className="px-4 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-48 lg:h-screen">

      {/* Container */}
      <div className="flex flex-col items-center justify-between lg:flex-row">

        {/* Headline Text Container*/}
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h1 className="max-w-lg mb-6 font-sans md:text-6xl text-4xl font-bold tracking-tight text-gray-900 sm:leading-none mx-auto lg:text-left">
              The Best Platform To Find Your{" "}
              <span className="inline-block text-deep-orange-accent-400">
                Favorite Character
              </span>
            </h1>
            <h2 className="text-base text-gray-700 md:text-lg lg:text-left">
              Search through dozens of profiles that suit your needs.
              <br />
              Fast, Secure & FREE.
            </h2>
          </div>
        </div>

        {/* Image Asset */}
        <div className="relative lg:w-1/2">
          <img
            className="object-contain w-full h-56 rounded sm:h-96"
            src={MainContent}
            alt="main-content"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
