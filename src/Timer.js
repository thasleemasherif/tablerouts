import React, {useEffect, useState} from 'react';

const Timer = () => {
  const colors = [
    "white",
    "pink",
    "yellow",
    "blue",
    "red",
    "purple",
    "gray",
    "green"
  ];
  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setValue((v) => (v === 7 ? 0 : v + 1));
    }, 5000);
    document.body.style.backgroundColor = colors[value];
  });

  return <></>;
};

export default Timer;