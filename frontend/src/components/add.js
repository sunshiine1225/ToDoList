import React from 'react'

function Add() {
  return (
    <div className="add">
      <br/><br/>
        <form action="/lists"  method='POST'>
            <label > Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <input type="text" name ="title" id ="title"></input>
            <br></br><br/>
            <label > details :&nbsp;&nbsp;&nbsp;&nbsp;</label>
            
            <textarea name ="details" id="details" />
            <br/><br/>
            <button type="submit" onClick={()=>  window.alert("successfully added")}> Add </button>
        </form>
    </div>
  )
}
export default Add;
