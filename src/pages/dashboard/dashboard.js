import "./dashboard.css";
import AllCompanies from "../../components/allCompanies/AllCompanies";
import NewCompanies from "../../components/newCompanies/NewCompanies";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import * as data from "../../Data";
import { useEffect } from "react";

const Dashboard = () => {
  const [selectedCountries, setSelectedCountries] = useState("All");
  const [filteredResults, setFilteredResults] = useState([]);
  const [countries, setCountries] = useState([]);
  const [sectors, setSectors] = useState(["All Sectors"]);

  const Companies = data.Companies;

  // console.log(filteredResults);

  useEffect(() => {
    const getValues = () => {
      const allCountries = ["All Countries"];
      const allSectors = ["All Sectors"];
      Companies.forEach((company) => {
        if (!allCountries.includes(company.country)) {
          allCountries.push(company.country);
          setCountries(allCountries);
          console.log(countries);
        }
        if (!allSectors.includes(company.niche)) {
          allSectors.push(company.niche);
          setSectors(allSectors);
          console.log(sectors);
        }
      });
    };

    return () => {
      getValues();
    };
  }, [Companies]);

  const handleAllCountries = () => {
    setSelectedCountries("All");
  };

  console.log(countries);

  const handleChangeCountries = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="dashboard-container">
      <div className="dashboard-statement">
        Gain insights about the environmental impact of companies such as carbon
        emission estimations, temperature score, decoupling indicators, and
        position within the global market. Using our expertise this information
        can be seamlessly integrated in order to influence the next important
        investment decisions.
      </div>
      <div>
        <SearchBar
          Companies={Companies}
          setFilteredResults={setFilteredResults}
          setSelectedCountries={setSelectedCountries}
        />
      </div>

      <div className="products-display">
        <div className="filter-selection">
          <div className="selected-filters">No Selected filters</div>
          <div className="filter-parameter">
            <h1>Filter By</h1>
            <form>
              <div className="sectors-choice">
                {/* <label htmlFor="sectors">Sectors</label> */}
                <select
                  name="sectors"
                  id="sectors"
                  className="sectors-selector"
                >
                  {sectors.map((sector, index) => (
                    <option key={index} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </div>
              <div className="countries-choice">
                {/* <label htmlFor="countries">Sectors</label> */}
                <select
                  name="countries"
                  id="countries"
                  className="countries-selector"
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </form>

            <button onClick={handleAllCountries}>Load all countries</button>
          </div>
        </div>
        <div className="products-list">
          <h1>Most Popular Searches</h1>
          <div className="companies">
            {selectedCountries === "All" ? (
              <AllCompanies data={data} />
            ) : (
              <NewCompanies filteredResults={filteredResults} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
