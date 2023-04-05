import { BiSearch } from "react-icons/bi";

const SearchBar = ({ Companies, setFilteredResults, setAllCountries }) => {
  const handleSearch = (e) => {
    e.preventDefault();

    // if (filteredResults.length > 0) {
    //   setAllCountries(false);
    // }
  };

  const handleSearchChange = (e) => {
    //
    const filterResults = Companies.filter(
      (company) =>
        company.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        company.niche.toLowerCase().includes(e.target.value.toLowerCase()) ||
        company.country.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredResults(filterResults);

    if (filterResults.length > 0) setAllCountries(false);
  };
  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search by company, sector, country or ticker"
        onChange={handleSearchChange}
      />
      <button type="submit" className="search">
        <BiSearch className="search-icon" />
      </button>
    </form>
  );
};

export default SearchBar;
