//Data recieved from parent Component

import React from 'react';

const ChildComponent = ({ sendDataToParent }) => {
  const data = 'Hello from child!';

  const sendData = () => {
    sendDataToParent(data);
  };

  return (
    <div>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
