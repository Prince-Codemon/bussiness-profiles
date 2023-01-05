import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const { domains } = useSelector((state) => state);

  const [filters, setFilters] = useState({
    domain: "",
    gender: "",
    availability: "",
  });
  const handleSearch = (e) => {
    dispatch({ type: "FILTER", payload: filters }); 
    dispatch({ type: "SEARCH", payload: e.target.value });
  };
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  useEffect(() => {
    dispatch({ type: "FILTER", payload: filters });
  }, [filters, dispatch]);
  useEffect(() => {
    dispatch({ type: "DOMAINS" });
  }, [dispatch]);

  return (
    <header>
      <div className="container">
        <div className="control">
          <input
            type="text"
            placeholder="Search..."
            required
            onChange={handleSearch}
            name="search"
          />
          <button>Search</button>
        </div>
        <div className="control option">
          <div>
            <label htmlFor="">Gender</label>
            <select onChange={handleChange} name="gender">
              <option value="">All</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Availabilty </label>
            <select onChange={handleChange} name="availability">
              <option value="">All</option>
              <option value="true">Available</option>
              <option value="false">Unavailable</option>
            </select>
          </div>

          <div>
            <label htmlFor="">Domain</label>
            <select onChange={handleChange} name="domain">
              <option value="">All</option>
              {domains?.map((domains) => (
                <option value={domains} key={domains}>
                  {domains}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
