import React from "react";
import FormField from "./FormField";
import { connect } from "react-redux";

import * as yup from "yup";

class ThreeDeeModelsSpecs extends React.Component {
  validationSchema = () =>
    yup.object().shape({
      first_name: yup
        .number()
        .positive()
        .required()
    });
  render() {
    if (this.props.mediaType === "2") {
      return (
        <React.Fragment>
          <FormField
            fieldName="first_name"
            label="First Name"
            type="text"
            validate={(name, value) =>
              yup.reach(this.validationSchema(), name).validate(value)
            }
            render={props => <input {...props} />}
          />

          <FormField
            fieldName="materials"
            label="Materials"
            type="checkbox"
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
)(ThreeDeeModelsSpecs);
