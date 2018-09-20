import React from "react";
import connect from "react-redux/lib/connect/connect";
import { changeInput } from "../actions/formActions";
import FieldErrors from "./FieldErrors";

class FormField extends React.Component {
  constructor(props) {
    super(props);
  }

  handleValidation = e => {
    const elem = e.target;
    let value = elem.type === "checkbox" ? elem.checked : elem.value;

    if (typeof this.props.validate === "function") {
      this.props
        .validate(elem.name, elem.value)
        .then(valid => {
          this.props.changeInput(elem.name, valid);
        })
        .catch(err => this.props.changeInput(elem.name, value, err));
    } else {
      this.props.changeInput(elem.name, value);
    }
  };

  onChange = e => {
    this.handleValidation(e);
  };
  onBlur = e => {
    this.handleValidation(e);
  };

  render() {
    return (
      <div>
        <label htmlFor={this.props.fieldName}>{this.props.label}</label>
        {this.props.render({
          options: this.props.options,
          type: this.props.type,
          value: this.props.value || "",
          name: this.props.fieldName,
          id: this.props.fieldName,
          onChange: this.onChange,
          onBlur: this.onBlur
        })}
        <FieldErrors errors={this.props.errors.errors} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  value: state.values[ownProps.fieldName],
  errors: state.errors[ownProps.fieldName] || [],
  touched: state.touched[ownProps.fieldName] || false
});

const mapDispatchToProps = dispatch => ({
  changeInput: (name, value, errors) =>
    dispatch(changeInput(name, value, errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormField);
