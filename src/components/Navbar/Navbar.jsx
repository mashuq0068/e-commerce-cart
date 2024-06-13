import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { getSearchedText } from "../../Redux/slices/searchSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  // handle search
  const handleSearch = (e) => {
    e.preventDefault();
    const searchedText = e.target.search.value;
    dispatch(getSearchedText(searchedText));
  };
  return (
    <div className=" w-full flex md:flex-row flex-col items-center justify-between bg-gray-300 shadow-lg drop-shadow-md px-[3%] py-[4%] md:px-[1%] md:py-[1%]">
      {/* logo text */}
      <h3 className="uppercase   text-green-600 font-bold text-base md:text-xl">
        E-commerce
      </h3>
      {/* search bar */}
      <form
        onSubmit={handleSearch}
        className="flex  md:mt-0 mt-3  md:w-auto w-full"
      >
        <input
          name="search"
          type="text"
          placeholder="Search by Product Name"
          className="input h-[40px]  rounded-r-none focus:outline-none focus:border-green-600   drop-shadow-xl w-full h- md:w-[30vw]"
        />
        <button
          className="middle none cursor-pointer  rounded-l-none   center rounded-lg bg-green-600 md:py-2 py-2 px-6 font-sans  font-semibold capitalize shadow-md shadow-orange-500/20 transition-all hover:shadow-lg n focus:opacity-[0.85] flex items-center gap-1 text-white text-[14px] md:text-base focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          <IoSearchOutline />
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;
