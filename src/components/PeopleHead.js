const PeopleHead = ({ list }) => {
  return (
    <div className="bg-deep-orange-accent-400 text-left">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight text-white sm:text-5xl">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>
                {list ? list.name : "Loading..."}
              </h2>
      </div>
    </div>
  );
};
export default PeopleHead;
