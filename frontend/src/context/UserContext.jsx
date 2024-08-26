/* eslint-disable react/prop-types */

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../url";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the user data and token from local storage
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/refetch", {
        withCredentials: true,
      });
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const login = async (credentials) => {
    try {
      const res = await axios.post(URL + "/api/auth/login", credentials, {
        withCredentials: true,
      });
      // Store the token in local storage
      localStorage.setItem("token", res.data.token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token}`;
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
