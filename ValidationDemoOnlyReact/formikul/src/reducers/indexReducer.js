import {
  CHANGE_INPUT,
  FORM_SAVE_OK,
  FORM_SAVE_STARTED,
  FORM_SAVE_ERROR,
  CLEAR_FLASH_MESSAGE
} from "../actions/formActions";

const indexReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        values: { ...state.values, [action.name]: action.value },
        touched: { ...state.touched, [action.name]: true },
        errors: { ...state.errors, [action.name]: action.errors || [] }
      };
    case FORM_SAVE_STARTED:
      return {
        ...state,
        save_in_progress: true,
        flash_message: "save started"
      };
    case FORM_SAVE_OK:
      return { ...state, save_in_progress: false, save_success: true };
    case FORM_SAVE_ERROR:
      return {
        ...state,
        save_in_progress: false,
        save_error: action.error,
        flash_message: action.error.message
      };
    case CLEAR_FLASH_MESSAGE:
      return { ...state, save_error: false, flash_message: "" };
  }
  return state;
};

export default indexReducer;
