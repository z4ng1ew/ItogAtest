import React from 'react';
import { useDispatch, useSelector } from "react-redux";
const History = () => {
  const historyList = useSelector((state) => state.history.list);
  return (
    <div>
      <h2>History</h2>
      <ul>
        {historyList.map((e) => (
          <li key={e.index}>{e.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;