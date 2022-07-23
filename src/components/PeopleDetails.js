// imports
import { Link } from "react-router-dom";

const PeopleDetails = ({ list, error, pending }) => {
  return (
    // Content Wrapper
    <div className="px-4 pb-16 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">

      {/* Error if available */}
      {error && <div>Error: Something Went Wrong!</div>}

      {/* Pending if available */}
      {pending && !list && (
        <div key="loading">

          {/* Skeleton 1 */}
          <div className="mb-10 border-t border-b divide-y bg-slate-100 animate-pulse">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 w-48 h-5">
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Skeleton 2 */}
          <div className="mb-10 border-t border-b divide-y bg-slate-100 animate-pulse">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 w-48 h-5">
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Skeleton 3 */}
          <div className="mb-10 border-t border-b divide-y bg-slate-100 animate-pulse">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 w-48 h-5">
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Skeleton 4 */}
          <div className="mb-10 border-t border-b divide-y bg-slate-100 animate-pulse">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 w-48 h-5">
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Skeleton 5 */}
          <div className="mb-10 border-t border-b divide-y bg-slate-100 animate-pulse">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 w-48 h-5">
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Skeleton 6 */}
          <div className="mb-10 border-t border-b divide-y bg-slate-100 animate-pulse">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 w-48 h-5">
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Skeleton 7 */}
          <div className="mb-10 border-t border-b divide-y bg-slate-100 animate-pulse">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 w-48 h-5">
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Skeleton 8 */}
          <div className="mb-10 border-t border-b divide-y bg-slate-100 animate-pulse">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 w-48 h-5">
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Skeleton 9 */}
          <div className="mb-10 border-t border-b divide-y bg-slate-100 animate-pulse">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 w-48 h-5">
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Homepage */}
          <div className="text-center">
            <Link
              to="/"
              aria-label="Home"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-orange-accent-400 hover:text-deep-orange-accent-700"
            >
              Goto Homepage
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
      )}

      {/* Character */}
      {list && !pending && (
        <div key={list.created}>

          {/* Birth Year */}
          <div className="mb-10 border-t border-b divide-y">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 text-deep-orange-accent-400 hover:text-deep-orange-accent-700">
                    Birth Year
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <p className="text-gray-700">
                  {list.birth_year ? list.birth_year : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Created at */}
          <div className="mb-10 border-t border-b divide-y">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 text-deep-orange-accent-400 hover:text-deep-orange-accent-700">
                    Created
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <p className="text-gray-700">
                  {list.created ? list.created : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Edited at */}
          <div className="mb-10 border-t border-b divide-y">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 text-deep-orange-accent-400 hover:text-deep-orange-accent-700">
                    Edited
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <p className="text-gray-700">
                  {list.edited ? list.edited : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Eye Color */}
          <div className="mb-10 border-t border-b divide-y">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 text-deep-orange-accent-400 hover:text-deep-orange-accent-700">
                    Eye Color
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <p className="text-gray-700">
                  {list.eye_color ? list.eye_color : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Gender */}
          <div className="mb-10 border-t border-b divide-y">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 text-deep-orange-accent-400 hover:text-deep-orange-accent-700">
                    Gender
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <p className="text-gray-700">
                  {list.gender ? list.gender : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Hair Color */}
          <div className="mb-10 border-t border-b divide-y">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 text-deep-orange-accent-400 hover:text-deep-orange-accent-700">
                    Hair Color
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <p className="text-gray-700">
                  {list.hair_color ? list.hair_color : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Height (cm) */}
          <div className="mb-10 border-t border-b divide-y">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 text-deep-orange-accent-400 hover:text-deep-orange-accent-700">
                    Height (cm)
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <p className="text-gray-700">
                  {list.height ? list.height : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Weight (kg) */}
          <div className="mb-10 border-t border-b divide-y">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 text-deep-orange-accent-400 hover:text-deep-orange-accent-700">
                    Weight (kg)
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <p className="text-gray-700">{list.mass ? list.mass : "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Skin Color */}
          <div className="mb-10 border-t border-b divide-y">
            <div className="grid py-8 sm:grid-cols-4">
              <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                  <p className="transition-colors duration-200 text-deep-orange-accent-400 hover:text-deep-orange-accent-700">
                    Skin Color
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-2">
                <p className="text-gray-700">
                  {list.skin_color ? list.skin_color : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Back to Homepage */}
          <div className="text-center">
            <Link
              to="/"
              aria-label="Home"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-orange-accent-400 hover:text-deep-orange-accent-700"
            >
              Goto Homepage
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleDetails