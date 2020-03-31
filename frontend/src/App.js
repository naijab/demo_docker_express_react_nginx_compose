import React, { useEffect, useState } from "react";
import axios from "./config/base_axios";

const App = () => {
  const [profile, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const result = await axios.get("/users");
      console.log(result);
      setUser(result.data.user);
    } catch (error) {
      setError(error);
      console.error(`Fetch User Error : ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>
        {error
          ? "Something Wrong!"
          : loading
          ? "Loading"
          : profile && profile.name}{" "}
      </h1>{" "}
    </div>
  );
};

export default App;
