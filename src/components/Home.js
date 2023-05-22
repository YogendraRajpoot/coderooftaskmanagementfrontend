import React, { useState } from "react";
import Login from "./Login";
import Tasks from "./Tasks";

const Home = () => {
  const [alertMessage, setAlertMessage] = useState({});
  if (!localStorage.getItem("token")) {
    return <Login />;
  }
  const alertTag = ["success", "danger"];

  return (
    <div className="container">
      {Object.entries(alertMessage).length !== 0 && (
        <div
          className={`p-1 position-fixed start-0 alert alert-${alertTag[1]}`}
          role="alert"
          style={{
            top: "60px",
            width: "100%",
            // height:"2%"
          }}
        >
          {/* {alertMessage.message} */}
        </div>
      )}
      <div className="my-5">
        <Tasks />
      </div>
    </div>
  );
};

export default Home;
