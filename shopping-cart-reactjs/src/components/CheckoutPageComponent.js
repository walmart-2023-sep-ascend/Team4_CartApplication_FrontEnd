import React, { useState,useEffect } from 'react';
import SearchComponent from './SearchComponent';

function CheckoutPageComponent({ searchCourse, courseSearchUserFunction }) {
    useEffect(() => {
      window.location.reload();
    }, []);

    
          

      return (
      
       
        <div>
        <p className="offer-new6"> Your Order has been Successfully Placed   </p>
          
        </div>
      
  );
}

      

      
export default CheckoutPageComponent;