import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
const Team = () => {
  const [team, setTeam] = useState([]);
  const dispatch = useDispatch();
  const { originalData, domains } = useSelector((state) => state);

  useEffect(() => {
    let temp = [];
    domains?.forEach((domain) => {
      const members = originalData.filter(
        (item) => item.domain === domain && item.available === true
      );
      if (members.length > 0) {
        temp.push(members[0]);
      }
    });
    setTeam(temp);
  }, [domains,dispatch,originalData]);
  useEffect(() => {
    dispatch({ type: "DOMAINS" });
    }, [dispatch])

  return (
    <div>
      <h1>My Team</h1>
      <div className="cardlist">
        {team?.map((d, i) => (
          <Card detail={d} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Team;
