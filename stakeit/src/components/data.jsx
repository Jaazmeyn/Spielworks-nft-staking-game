import React, {useEffect, useState } from 'react';

function Data() {

const [error, setError] = useState(false);
  const [loading, setLoader] = useState(true);
  // const [useState, setState] = useState(setLoader);

  const url = "https://eos.api.atomicassets.io/docs/#/assets/get_atomicassets_v1_assets";
  
  var requestOptions = {
    method: 'GET',
};
let data;
const loadData = () => {        
  setLoader(true);

  fetch(url, requestOptions)
    .then(response => {
              
      if (!response.ok){
          throw Error('ERROR')
      };
      
      return response.text();

  }).then(data => {

       console.log(data, 'request?')
       data = data;
      //  setState(data)
      setLoader(false);

  }).catch(error => {
      setError(true);
      // setAlbum();
      console.log('error', error);
  })// catch

}; //loaddata

    useEffect(() => {
        loadData(data);
    },[]);


    return data;
}

export default Data
