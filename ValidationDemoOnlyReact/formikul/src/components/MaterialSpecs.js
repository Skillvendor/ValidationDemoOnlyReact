import React from "react";
import FormField from "./FormField";
import { connect } from "react-redux";

import * as yup from "yup";

class MaterialSpecs extends React.Component {
  validationSchema = () =>
    yup.object().shape({
      last_name: yup
        .string()
        .min(5)
        .max(10)
        .required()
    });
  render() {
    if (this.props.mediaType === "3") {
      return (
        <React.Fragment>
          <FormField
            fieldName="last_name"
            label="Last Name"
            type="text"
            validate={(name, value) =>
              yup.reach(this.validationSchema(), name).validate(value)
            }
            render={props => <input {...props} />}
          />

          <FormField
            fieldName="middle_name"
            label="Middle Name"
            type="text"
            render={props => <input {...props} />}
          />
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  mediaType: state.values["media_type"]
});

export default connect(
  mapStateToProps,
  null
)(MaterialSpecs);
