const ListHead = () => {
  return (

    // Wrapper
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">

      {/* Container */}
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">

        {/* Design */}
        <div
          aria-label="View"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-deep-orange-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </div>

        {/* Leading Text */}
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Explore Characters
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          Get the most popular characters from the list given below.
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
  );
};

export default ListHead;
