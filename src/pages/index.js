import React from "react"

export default () => (
  <div
    style={{
      display: "flex",
      alignContent: "center",
      margin: "3rem auto",
      justifyContent: "space-around",
      
    }}
  >
    <div>
      <iframe src="/test.html" title="dummy" style={{width:'800px',height:'600px'}}></iframe>
    </div>
    <div>this is content for the page</div>
  </div>
)
