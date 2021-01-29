import React, { useEffect, useState } from "react";
import moment from "moment";

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

const Clock = ({ location, offset }) => {
  const [counter, setCounter] = useState(moment(getTimeWithOffset(offset)).format('LTS'));

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter(moment(getTimeWithOffset(offset)).format('LTS')), 1000});

    return () => {
      clearInterval(interval);
    }
  });

  return (
    <div className="clock">
      <div className="clock__location">
        {location}
      </div>
      <div className="clock__time">
        {counter}
      </div>
    </div>
  );
};

export default Clock;