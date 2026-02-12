// import React , {createContext, useContext , useState} from 'react'



// export const StoreDataContext = createContext();

// const StoreContext = ({children}) => {

//     const [store, setStore] = useState({});
//     const [ isLoading , setIsLoading] = useState(true);
//     const [error, setError] = useState(null);


//     const updateStore = (storeData) => {
//         setStore(storeData);
//     }

//     const value = {
//       store,
//       setStore,
//       updateStore,
//       isLoading,
//       setIsLoading,
//       error,
//       setError
//     };

//   return (
//     <StoreDataContext.Provider value={value}>
//       {children}
//     </StoreDataContext.Provider>
//   )
// }

// export default StoreContext




















// optimizing loading on each navigation

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StoreDataContext = createContext();

const StoreContext = ({ children }) => {

  const [store, setStore] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoading(false);
      return;
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}stores/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      if (res.status === 200) {
        setStore(res.data.store);
      }
    })
    .catch(() => {
      localStorage.removeItem("token");
      setStore({});
    })
    .finally(() => {
      setIsLoading(false);
    });

  }, []);

  const value = {
    store,
    setStore,
    isLoading,
    error,
    setError
  };

  return (
    <StoreDataContext.Provider value={value}>
      {children}
    </StoreDataContext.Provider>
  );
};

export default StoreContext;
