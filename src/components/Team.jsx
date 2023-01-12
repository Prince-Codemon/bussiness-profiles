import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
const Team = () => {
  const { team } = useSelector((state) => state);

  

  return (
    <div>
      <h1>My Team</h1>
      <div className="cardlist">
        {
        team.length === 0 && <h2>No member in team</h2>
      }
        {team?.map((d, i) => (
          <Card detail={d} key={i} addBtn={false} />
        ))}
      </div>
    </div>
  );
};

export default Team;
