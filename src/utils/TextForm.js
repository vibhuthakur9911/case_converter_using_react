import { React, useState } from "react";
export default function TextForm() {
  const [text, setText] = useState("Enter Something Here");
  const convertToUpper = () => {
    let convertedText = text.toUpperCase();
    setText(convertedText);
  };
  const handletoOnchange = (event) => {
    setText(event.target.value);
  };
  const convertToLowercase = () => {
    let lowerCasedText = text.toLowerCase();
    setText(lowerCasedText);
  };
  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handletoOnchange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={convertToUpper}>
          Convert to Uppercase{" "}
        </button>
        <button className="btn btn-primary mx-2" onClick={convertToLowercase}>
          Convert to Lower Case{" "}
        </button>
      </div>
    </>
  );
}
