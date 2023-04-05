import React, { useEffect } from "react";
import { useState } from "react";
import { BsFillHexagonFill } from "react-icons/bs";

const NewCompanies = ({ filteredResults }) => {
  const [pagination, setPagination] = useState(5);

  const handleLoadCompanies = () => {
    if (pagination < filteredResults.length) {
      setPagination(pagination + 5);
    } else {
      setPagination(pagination - 5);
    }
  };

  return (
    <>
      <table>
        <tbody>
          {filteredResults.slice(0, pagination).map((company) => (
            <tr>
              <td>
                <span>
                  <BsFillHexagonFill className="list-icon" />
                  {company.name}
                </span>
              </td>
              <td>{company.niche}</td>
              <td>
                {" "}
                <img src={company.countryFlag} alt="USA" />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleLoadCompanies}>
        {pagination < filteredResults.length
          ? "Load more companies"
          : "Load less companies"}
      </button>
    </>
  );
};

export default NewCompanies;
