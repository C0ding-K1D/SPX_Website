export const validateOutcallForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Must be atleast 2 characters";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Must be atleast 2 characters";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Must be 15 characters or less";
  }

  if (!values.mdName) {
    errors.mdName = "Required";
  } else if (values.mdName.length < 2) {
    errors.mdName = "Must be atleast 2 characters";
  } else if (values.mdName.length > 15) {
    errors.mdName = "Must be 15 characters or less";
  }

  if (!values.facility) {
    errors.facility = "Required";
  } else if (values.facility.length < 2) {
    errors.facility = "Must be atleast 2 characters";
  } else if (values.facility.length > 15) {
    errors.facility = "Must be 15 characters or less";
  }

  if (!values.insuranceProviderOne) {
    errors.insuranceProviderOne = "Required";
  } else if (values.insuranceProviderOne.length < 2) {
    errors.insuranceProviderOne = "Must be atleast 2 characters";
  } else if (values.insuranceProviderOne.length > 15) {
    errors.insuranceProviderOne = "Must be 15 characters or less";
  }
  if (!values.insuranceProviderTwo) {
    errors.insuranceProviderTwo = "Required";
  } else if (values.insuranceProviderTwo.length < 2) {
    errors.insuranceProviderTwo = "Must be atleast 2 characters";
  } else if (values.insuranceProviderTwo.length > 15) {
    errors.insuranceProviderTwo = "Must be 15 characters or less";
  }

  if (!values.feedback) {
    errors.feedback = "Required";
  } else if (values.feedback.length < 2) {
    errors.feedback = "Must be atleast 2 characters";
  } else if (values.feedback.length > 150) {
    errors.feedback = "Must be 150 characters or less";
  }

  if (!values.comments) {
    errors.comments = "Required";
  } else if (values.comments.length < 2) {
    errors.comments = "Must be atleast 2 characters";
  } else if (values.comments.length > 150) {
    errors.comments = "Must be 150 characters or less";
  }

  if (!values.exam) {
    errors.exam = "Required";
  } else if (values.exam.length < 2) {
    errors.exam = "Must be atleast 2 characters";
  } else if (values.exam.length > 150) {
    errors.exam = "Must be 150 characters or less";
  }

  if (!values.symptoms) {
    errors.symptoms = "Required";
  } else if (values.symptoms.length < 2) {
    errors.symptoms = "Must be atleast 2 characters";
  } else if (values.symptoms.length > 150) {
    errors.symptoms = "Must be 150 characters or less";
  }

  if (!values.roomNum) {
    errors.roomNum = "Required";
  }

  if (!values.intakeDob) {
    errors.intakeDob = "Required";
  }

  if (!values.examDate) {
    errors.examDate = "Required";
  }

  if (!values.policyOne) {
    errors.policyOne = "Required";
  }

  if (!values.policyTwo) {
    errors.policyTwo = "Required";
  }

  if (!values.yourName) {
    errors.yourName = "Required";
  } else if (values.yourName.length < 2) {
    errors.yourName = "Must be atleast 2 characters";
  } else if (values.yourName.length > 30) {
    errors.yourName = "Must be 30 characters or less";
  }

  const reg = /^\d+$/;
  if (!reg.test(values.phoneNum)) {
    errors.phoneNum = "The phone number should contain only numbers.";
  }

  if (!values.email.includes("@")) {
    errors.email = "Email should contain a @";
  }

  return errors;
};
