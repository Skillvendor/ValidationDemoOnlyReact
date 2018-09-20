import React from "react";

const FieldErrors = ({ errors }) => (
  <div className="errors">
    {errors &&
      errors.map((error, index) => {
        return <p key={index}>{error}</p>;
      })}
  </div>
);

export default FieldErrors;
