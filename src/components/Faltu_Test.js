import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [responseData, setResponseData] = useState(null);
  const [postData, setPostData] = useState(
    {
      "name": "morpheus",
      "job": "leader",
      "id": "285",
      "createdAt": "2024-02-13T09:20:07.491Z"
  }
    
  );

  const fetchData = async () => {
    try {
      const response = await axios.post('https://reqres.in/api/users', postData); // Send postData in the request body
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    
    setPostData({
      ...postData
    });
  };

  return (
    <div>
       {/* <label>
        Data Field:
        <input type="text" name="dataField" value={postData.dataField || ''} onChange={handleInputChange} />
      </label> */}
      <button onClick={fetchData}>Fetch Data</button>
      {responseData && (
        <div>
          <h2>Received Data:</h2>
          <p>{JSON.stringify(responseData)}</p>
        </div>
      )}
    </div>
  );
};
export default MyComponent;
