import React from 'react'

import { FaBriefcase, FaUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const Card = ({detail}) => {
    const {first_name, last_name, gender, email, domain, available, avatar  } = detail
  return (
    <div className="card">
      <img src={avatar} alt={`${first_name} ${last_name}`} loading='lazy' />
      <div className="card-info">
        <h2>
          {first_name} {last_name}
        </h2>
        <p>
          <FaUser /> {gender}
        </p>
        <p>
          <FiMail/> {email}
        </p>
        <p>
          <FaBriefcase /> {domain}
        </p>
        <p className={`status ${available ? "available" : "unavailable"}`}>
          {available ? "Available" : "Unavailable"}
        </p>
      </div>
    </div>
  );
}

export default Card