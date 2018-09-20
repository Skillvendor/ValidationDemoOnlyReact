import React from "react";
import * as yup from "yup";
import FormField from "./FormField";
import ThreeDeeModelsSpecs from "./ThreeDeeModelsSpecs";
import MaterialSpecs from "./MaterialSpecs";

const MainForm = props => {
  const schema = yup.object().shape({
    media_type: yup.string().required()
  });
  return (
    <React.Fragment>
      <FormField
        fieldName="media_type"
        label="Media Type"
        options={[
          { id: 2, name: "3D Models" },
          { id: 3, name: "Textures" },
          { id: 5, name: "Motion Capture" }
        ]}
        validate={(name, value) => yup.reach(schema, name).validate(value)}
        render={props => (
          <select {...props}>
            {props.options.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        )}
      />

      <ThreeDeeModelsSpecs />
      <MaterialSpecs />
    </React.Fragment>
  );
};

export default MainForm;
