
import { useLocation } from "react-router-dom";
import React, { useState ,useEffect} from 'react';
import V from './v2'
export default function View({ to, ...props }){
    let location = useLocation();
    console.log(location.pathname);
    const [data, setData] = useState({
        DataisLoaded: false,
        items: null,
      });
    
      useEffect(() => {
        setData({ DataisLoaded: true });
        const apiUrl = `https://harshitiim.pythonanywhere.com/content${location.pathname}`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((json) => {
            setData({ DataisLoaded: false, items: json });
          });
      }, [setData]);

      
     
      return (
        <>
          <div className="container">
            <V {...data} />
          </div>
        </>
      );
}


