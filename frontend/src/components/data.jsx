import React, {useEffect, useState } from 'react';

function Data() {

  const [atomicassets, setAtomicassets] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoader] = useState(true);

  // const url = "https://eos.api.atomicassets.io/docs/#/assets/get_atomicassets_v1_assets";
  let url = 'https://eos.api.atomicassets.io/atomicassets/v1/assets?collection_name=womplayextra&page=1&limit=100&order=desc&sort=asset_id';
  
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
      
      return response.json();

  }).then(data => {

       console.log(data, 'request?')
        setAtomicassets(data)
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
