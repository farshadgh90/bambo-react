import { useState } from "react";
import SearchIcon from "../../assets/search-icon.png";

function SearchBar() {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="container mx-auto px-2">
      <div className="mx-auto flex items-center gap-5">
        <img src={SearchIcon} alt="search icon" className="w-5 lg:w-9" />
        <input
          type="search"
          name="search"
          className=" w-full bg-transparent placeholder:text-white text-lg lg:text-3xl px-2 py-5 lg:py-7 outline-none"
          placeholder="جستجو..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
