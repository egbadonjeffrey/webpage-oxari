import { useState } from "react";
import * as data from "../../Data";
import { BsFillHexagonFill } from "react-icons/bs";

const AllCompanies = () => {
  const [pagination, setPagination] = useState(5);

  const handleLoadCompanies = () => {
    if (pagination < data.Companies.length) {
      setPagination(pagination + 5);
    } else {
      setPagination(pagination - 5);
    }
  };

  const isSelected = () => {};
  return (
    <>
      <table>
        <tbody>
          {data.Companies.slice(0, pagination).map((company) => (
            <tr key={company.id}>
              <td>
                <span>
                  <BsFillHexagonFill className="list-icon" />
                  {company.name}
                </span>
              </td>
              <td>{company.niche}</td>
              <td>
                <img src={company.countryFlag} alt="USA" />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleLoadCompanies}>
        {pagination < data.Companies.length
          ? "Load more companies"
          : "Load less companies"}
      </button>
    </>
  );
};

export default AllCompanies;
