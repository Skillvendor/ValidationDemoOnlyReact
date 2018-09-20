import formFieldPresenter from "../utils/formFieldPresenter";

export const CHANGE_INPUT = "CHANGE_INPUT";
export const FORM_SAVE_STARTED = "FORM_SAVE_STARTED";
export const FORM_SAVE_OK = "FORM_SAVE_OK";
export const FORM_SAVE_ERROR = "FORM_SAVE_ERROR";
export const CLEAR_FLASH_MESSAGE = "CLEAR_FLASH_MESSAGE";

export const changeInput = (name, value, errors) => ({
  type: CHANGE_INPUT,
  name,
  value,
  errors
});

function postFormData(formData) {
  return fetch("https://www.google.com/search?q=secret+sauce");
}

export const formSaveStarted = () => ({
  type: FORM_SAVE_STARTED
});

export const formSavedOk = () => ({
  type: FORM_SAVE_OK
});
export const formSaveError = error => ({
  type: FORM_SAVE_ERROR,
  error: error
});

export const submitForm = (publish = true) => {
  return (dispatch, getState) => {
    dispatch(formSaveStarted());
    console.log("la la la ");
    const formData = formFieldPresenter(getState(), publish);
    postFormData(formData)
      .then(response => dispatch(formSavedOk()))
      .catch(error => dispatch(formSaveError(error)));
  };
};

export const clearFlashMessage = () => ({
  type: CLEAR_FLASH_MESSAGE
});
