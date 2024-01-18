import { useState } from "react";
import BookTable from "./BookTable";
import HeroSection from "./Header/HeroSection";
import SearchBar from "./Header/SearchBar";
import SortSection from "./Header/SortSection";

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  function handleSearch(searchTerm) {
    setSearchTerm(searchTerm);
  }
  function handleSortChange(selectedSortOption) {
    setSortOption(selectedSortOption);
  }
  return (
    <div className="my-10 lg:my-14">
      <div className="mx-auto my-5 flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <div>
          <HeroSection />
          <SearchBar onSearch={handleSearch} />
        </div>
        <SortSection onSortChange={handleSortChange} />
      </div>
      <BookTable searchTerm={searchTerm} sortOption={sortOption} />
    </div>
  );
}
