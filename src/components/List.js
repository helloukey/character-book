// imports
import { Link } from "react-router-dom";

const List = ({ list, pending, error }) => {
  return (
    
    // Wrapper
    <div className="px-4 mx-auto mb-48 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

      {/* Container */}
      <div className="grid max-w-screen-lg gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">

        {/* Show Error if avaiable */}
        {error && <div>{error}</div>}

        {/* Show skeleton if pending */}
        {pending && (
          <>
            <div
              className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm group hover:shadow-xl h-32 animate-pulse pointer-events-none bg-slate-100"
              key="1"
            >
              <div className="relative flex items-center justify-between p-5 rounded-sm">
                <div className="pr-4">
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    <div className="bg-slate-300 w-56 h-4 animate-pulse"></div>
                  </h6>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-3 text-gray-700 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm group hover:shadow-xl h-32 animate-pulse pointer-events-none bg-slate-100"
              key="2"
            >
              <div className="relative flex items-center justify-between p-5 rounded-sm">
                <div className="pr-4">
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    <div className="bg-slate-300 w-56 h-4 animate-pulse"></div>
                  </h6>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-3 text-gray-700 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm group hover:shadow-xl h-32 animate-pulse pointer-events-none bg-slate-100"
              key="3"
            >
              <div className="relative flex items-center justify-between p-5 rounded-sm">
                <div className="pr-4">
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    <div className="bg-slate-300 w-56 h-4 animate-pulse"></div>
                  </h6>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-3 text-gray-700 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm group hover:shadow-xl h-32 animate-pulse pointer-events-none bg-slate-100"
              key="4"
            >
              <div className="relative flex items-center justify-between p-5 rounded-sm">
                <div className="pr-4">
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    <div className="bg-slate-300 w-56 h-4 animate-pulse"></div>
                  </h6>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-3 text-gray-700 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm group hover:shadow-xl h-32 animate-pulse pointer-events-none bg-slate-100"
              key="5"
            >
              <div className="relative flex items-center justify-between p-5 rounded-sm">
                <div className="pr-4">
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    <div className="bg-slate-300 w-56 h-4 animate-pulse"></div>
                  </h6>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-3 text-gray-700 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm group hover:shadow-xl h-32 animate-pulse pointer-events-none bg-slate-100"
              key="6"
            >
              <div className="relative flex items-center justify-between p-5 rounded-sm">
                <div className="pr-4">
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    <div className="bg-slate-300 w-56 h-4 animate-pulse"></div>
                  </h6>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-3 text-gray-700 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm group hover:shadow-xl h-32 animate-pulse pointer-events-none bg-slate-100"
              key="7"
            >
              <div className="relative flex items-center justify-between p-5 rounded-sm">
                <div className="pr-4">
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    <div className="bg-slate-300 w-56 h-4 animate-pulse"></div>
                  </h6>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-3 text-gray-700 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm group hover:shadow-xl h-32 animate-pulse pointer-events-none bg-slate-100"
              key="8"
            >
              <div className="relative flex items-center justify-between p-5 rounded-sm">
                <div className="pr-4">
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    <div className="bg-slate-300 w-56 h-4 animate-pulse"></div>
                  </h6>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-3 text-gray-700 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm group hover:shadow-xl h-32 animate-pulse pointer-events-none bg-slate-100"
              key="9"
            >
              <div className="relative flex items-center justify-between p-5 rounded-sm">
                <div className="pr-4">
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    <div className="bg-slate-300 w-56 h-4 animate-pulse"></div>
                  </h6>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-3 text-gray-700 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm group hover:shadow-xl h-32 animate-pulse pointer-events-none bg-slate-100"
              key="10"
            >
              <div className="relative flex items-center justify-between p-5 rounded-sm">
                <div className="pr-4">
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    <div className="bg-slate-300 w-56 h-4 animate-pulse"></div>
                  </h6>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                  <div className="text-sm text-gray-900 text-left">
                    <p className="bg-slate-300 w-40 h-4 animate-pulse"></p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-3 text-gray-700 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}


        {/* Show list of characters */}
        {list && !pending &&
          list.results.map((data) => (
            <Link
              to={`/people/${data.url.replace(/[^0-9]/g, '')}`}
              aria-label="More Details"
              title="More Details"
              className="relative block p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
              key={data.created}
            >
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-orange-accent-400 group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-orange-accent-400 group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-orange-accent-400 group-hover:scale-x-100" />
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-orange-accent-400 group-hover:scale-y-100" />
              <div className="relative flex items-center justify-between p-5 bg-white rounded-sm">
                <div className="pr-4">
                  <h6 className="mb-2 font-semibold leading-5 text-left">
                    {data.name}
                  </h6>
                  <p className="text-sm text-gray-900 text-left">
                    Gender: {data.gender}
                  </p>
                  <p className="text-sm text-gray-900 text-left">
                    Height (cm): {data.height}
                  </p>
                  <p className="text-sm text-gray-900 text-left">
                    Weight (kg): {data.mass}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-orange-accent-400"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default List;
