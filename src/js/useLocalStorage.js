import { useState, useEffect } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sincrnize, setSincronize] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      try {
        const itemLocalStorage = localStorage.getItem(itemName);
        let itemParsed;

        if (!itemLocalStorage) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          itemParsed = initialValue;
        } else {
          itemParsed = JSON.parse(itemLocalStorage);
        }
        setItem(itemParsed);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  }, []);

  useEffect(() => {
    window.addEventListener('storage', (e) => {

      if(e.key == 'TODOS_V1'){
        console.log(e.key, JSON.parse(e.oldValue), JSON.parse(e.newValue));
        
      }
      else {
        console.log("cambio pero no me afecta");
      }
    })
  }, [])

  const saveItem = (newArray) => {
    setLoading(true);
    // setTimeout(() => {
      try {
        const newArrayStringified = JSON.stringify(newArray);
        localStorage.setItem(itemName, newArrayStringified);
        setItem(newArray);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    // }, 0);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
};
export { useLocalStorage };
