import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const now = new Date().toLocaleTimeString("en-US", { hour12: false });
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date().toLocaleDateString("en-US", options);

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setTime(newTime);
  }
  setInterval(updateTime, 1000);

  return (
    <div>
      <header>
        <h1>
          <FontAwesomeIcon icon={faFilePen} /> MemoPad
        </h1>
        <h3 className="date">
          {today}
          <br />
          {time}
        </h3>
      </header>
    </div>
  );
}
