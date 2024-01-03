//data send to child Component

import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [receivedData, setReceivedData] = useState('');

  const receiveDataFromChild = (data) => {
    setReceivedData(data);
  };

  return (
    <div>
      <h2>Data from Child: {receivedData}</h2>
      <ChildComponent sendDataToParent={receiveDataFromChild} />
    </div>
  );
};

export default ParentComponent;
