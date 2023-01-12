import React, { useEffect } from "react";

import { FaBriefcase, FaUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
const Card = ({ detail, addBtn }) => {
  const dispatch = useDispatch();

  const { team } = useSelector((state) => state);
  const {
    first_name,
    last_name,
    gender,
    email,
    domain,
    available,
    avatar,
    id,
  } = detail;
  const addToTeam = (detail) => {
    dispatch({ type: "ADD_TO_TEAM", payload: detail });
  };
  const removeMember = (id) => {
    dispatch({ type: "REMOVE_MEMBER", payload: id });
  };
  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team, id]);

  return (
    <div className="card">
      <img src={avatar} alt={`${first_name} ${last_name}`} loading="lazy" />
      <div className="card-info">
        <h2>
          {first_name} {last_name}
        </h2>
        <p>
          <FaUser /> {gender}
        </p>
        <p>
          <FiMail /> {email}
        </p>
        <p>
          <FaBriefcase /> {domain}
        </p>
        <p className={`status ${available ? "available" : "unavailable"}`}>
          {available ? "Available" : "Unavailable"}
        </p>

        {available === true && addBtn && !team.find((d) => d.id === id) && (
          <button onClick={() => addToTeam(detail)}>Add To Team</button>
        )}
        {available === true && addBtn && team.find((d) => d.id === id) && (
          <button onClick={() => removeMember(id)}>Remove From Team</button>
        )}
        {available === true && !addBtn && (
          <button onClick={() => removeMember(id)}>Remove From Team</button>
        )}
        {available === false && (
          <button className="disable" disabled>
            Not Available
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
