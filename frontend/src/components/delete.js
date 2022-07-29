//import React from 'react'

function Dlt(id) {
  fetch(`/lists/${id}`,{method : "DELETE"})
  .then(()=> {console.log("del done")
        })
  
    
}
export default Dlt;