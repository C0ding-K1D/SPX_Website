import { Label, Col, FormGroup } from "reactstrap";
import { Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../helpers/ValidateContactForm";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values:", values);
    console.log("in JSON format:", JSON.stringify(values));
    resetForm();
  };
  return (
    <>
      <style type="text/css">
        {`.btn-flat {
          color: #fff;
          background-color: #172a51f1 !important;
          border-color: #172a51f1 !important;
        }
        .btn-flat:hover{
          color: #172a51f1;
          background-color: #fff !important;
          border-color: #172a51f1;
        }`}
      </style>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNum: "",
          email: "",
          agree: false,
          contactType: "By Phone",
          feedback: "",
        }}
        onSubmit={handleSubmit}
        validate={validateContactForm}
      >
        <Form style={{ padding: "6rem", marginTop: "-3rem" }}>
          <FormGroup row>
            <Label htmlFor="firstName" md="2">
              First Name
            </Label>
            <Col md="10">
              <Field
                name="firstName"
                placeholder="First Name"
                className="form-control"
              />
              <ErrorMessage name="firstName">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="lastName" md="2">
              Last Name
            </Label>
            <Col md="10">
              <Field
                name="lastName"
                placeholder="Last Name"
                className="form-control"
              />
              <ErrorMessage name="lastName">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="phoneNum" md="2">
              Phone
            </Label>
            <Col md="10">
              <Field
                name="phoneNum"
                placeholder="Phone"
                className="form-control"
              />
              <ErrorMessage name="phoneNum">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email" md="2">
              Email
            </Label>
            <Col md="10">
              <Field
                name="email"
                placeholder="Email"
                type="email"
                className="form-control"
              />
              <ErrorMessage name="email">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label check md={{ size: 4, offset: 2 }}>
              <Field
                name="agree"
                type="checkbox"
                className="form-check-input"
              />{" "}
              May we contact you?
            </Label>
            <Col md="4">
              <Field name="contactType" as="select" className="form-control">
                <option>By Phone</option>
                <option>By Email</option>
              </Field>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="feedback" md="2">
              Your Feedback
            </Label>
            <Col md="10">
              <Field
                name="feedback"
                as="textarea"
                rows="12"
                placeholder="Feedback"
                className="form-control"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col xs={{ size: 10, offset: 2 }}>
              <Button type="submit" variant="flat" size="lg">
                Send Feedback
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
