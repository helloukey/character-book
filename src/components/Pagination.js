import usePage from "../hooks/usePage";

const Pagination = ({ list, pending }) => {
  const { previousPage, nextPage } = usePage();
  const handlePrevious = () => {
    previousPage();
  };
  const handleNext = () => {
    nextPage();
  };

  return (
    <div className="px-4 mx-auto mb-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid max-w-screen-lg gap-8 row-gap-6 sm:mx-auto lg:grid-cols-2">
        {pending && (
          <div className="flex">
            <button
              className="flex items-center px-4 py-2 mx-1 transition-colors duration-200 transform rounded-md border-2 bg-slate-100"
              disabled={true}
            >
              {`< Previous`}
            </button>

            <button
              className="flex items-center px-4 py-2 mx-1 transition-colors duration-200 transform rounded-md border-2 bg-slate-100"
              disabled={true}
            >
              {`Next >`}
            </button>
          </div>
        )}

        {list && !pending && (
          <div className="flex">
            <button
              className={`flex items-center px-4 py-2 mx-1 transition-colors duration-200 transform rounded-md hover:bg-deep-orange-accent-400 dark:hover:bg-deep-orange-accent-400 border-2 hover:text-white ${!list.previous ? "pointer-events-none bg-slate-100" : ""}`}
              onClick={handlePrevious}
            >
              {`< Previous`}
            </button>

            <button
              className={`flex items-center px-4 py-2 mx-1 transition-colors duration-200 transform rounded-md hover:bg-deep-orange-accent-400 dark:hover:bg-deep-orange-accent-400 border-2 hover:text-white ${!list.next ? "pointer-events-none bg-slate-100" : ""}`}
              onClick={handleNext}
            >
              {`Next >`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Pagination;
