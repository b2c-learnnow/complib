import React, { useState, useEffect } from "react";
import { Font } from "../config/Font";
import { Colors } from "../config/Colors";
import styled from "styled-components";

const TimerText = styled.span`
  font-size: 22px;
`;

export default function Timer({ time }) {
  const [timer, setTimer] = useState("00:00:00:00");
  useEffect(() => {
    const interval = setInterval(() => {
      const newTime =
        time.diff(new Date(), "days") +
        ":" +
        (time.diff(new Date(), "hours") % 24) +
        ":" +
        (time.diff(new Date(), "minutes") % 60) +
        ":" +
        (time.diff(new Date(), "seconds") % 60);
      setTimer(newTime);
    }, 500);
    return () => clearInterval(interval);
  });
  const timeSplit = timer.split(":");
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ fontSize: Font.ExtraLarge, color: Colors.Grey }}
      >
        <div className="text-center">
          <TimerText>{timeSplit[0]}</TimerText>
          <br />
          <span style={{ fontSize: Font.Small }}>Days</span>
        </div>
        <div className="text-center">
          <TimerText>{timeSplit[1]}</TimerText>
          <br />
          <span style={{ fontSize: Font.Small }}>Hours</span>
        </div>
        <div className="text-center">
          <TimerText>{timeSplit[2]}</TimerText>
          <br />
          <span style={{ fontSize: Font.Small }}>Minutes</span>
        </div>
        <div className="text-center">
          <TimerText style={{ color: Colors.TertiaryDark }}>
            {timeSplit[3]}
          </TimerText>
          <br />
          <span style={{ fontSize: Font.Small, color: Colors.TertiaryDark }}>
            Seconds
          </span>
        </div>
      </div>
    </>
  );
}
