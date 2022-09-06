import { Label, Col, FormGroup } from "reactstrap";
import { Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateIncallForm } from "../helpers/ValidateIncallForm";

const IncallForm = () => {
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
          mdName: "",
          facility: "",
          roomNum: "",
          phoneNum: "",
          contactType: "By Phone",
          insuranceProviderOne: "",
          insuranceProviderTwo: "",
          policyOne: "",
          policyTwo: "",
          feedback: "",
          comments: "",
          exam: "",
          symptoms: "",
          yourName: "",
          email: "",
          examDate: "",
          intakeDob: "",
        }}
        onSubmit={handleSubmit}
        validator={validateIncallForm}
      >
        <Form style={{ padding: "6rem", marginTop: "-3rem" }}>
          <h1>House Call Order Request</h1>
          <hr />
          <FormGroup row>
            <Label htmlFor="firstName" md="2">
              First Name
            </Label>
            <Col md="10">
              <Field
                name="firstName"
                placeholder="Patient First Name"
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
                placeholder="Patient Last Name"
                className="form-control"
              />
              <ErrorMessage name="lastName">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="facility" md="2">
              Facility
            </Label>
            <Col md="10">
              <Field
                name="facility"
                placeholder="Facility Name"
                className="form-control"
              />
              <ErrorMessage name="facility">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="RoomNum" md="2">
              Room
            </Label>
            <Col md="10">
              <Field
                name="roomNum"
                placeholder="Room Number"
                className="form-control"
              />
              <ErrorMessage name="roomNum">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label check md={{ size: 4, offset: 2 }}>
              Gender
            </Label>
            <Col md="4">
              <Field name="contactType" as="select" className="form-control">
                <option>Male</option>
                <option>Female</option>
                <option>Unknown</option>
              </Field>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="intakeDob" md="2">
              D.O.B
            </Label>
            <Col md="10">
              <Field name="intakeDob" type="date" className="form-control" />
              <ErrorMessage name="intakeDob">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <p>Patient Insurance Information</p>
          <FormGroup row>
            <Label htmlFor="insuranceProviderOne" md="2">
              Insurance Provider (ex. Medicaid)
            </Label>
            <Col md="10">
              <Field
                name="insuranceProviderOne"
                placeholder="Insurance Provider"
                className="form-control"
              />
              <ErrorMessage name="insuranceProviderOne">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="insuranceProviderTwo" md="2">
              Insurance Provider
            </Label>
            <Col md="10">
              <Field
                name="insuranceProviderTwo"
                placeholder="Insurance Provider"
                className="form-control"
              />
              <ErrorMessage name="insuranceProviderTwo">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="policyOne" md="2">
              Policy Number
            </Label>
            <Col md="10">
              <Field
                name="policyOne"
                placeholder="Policy Number"
                className="form-control"
              />
              <ErrorMessage name="policyOne">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="policyTwo" md="2">
              Policy Number
            </Label>
            <Col md="10">
              <Field
                name="policyTwo"
                placeholder="Policy Number"
                className="form-control"
              />
              <ErrorMessage name="policyTwo">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <hr />
          <p>Exam Information</p>
          <FormGroup row>
            <Label htmlFor="exam" md="2">
              Exam
            </Label>
            <Col md="10">
              <Field
                name="exam"
                as="textarea"
                rows="12"
                placeholder={
                  "Enter Requested Exam In This Box. \nExample: X-Ray Left Elbow. \nExample: Venous Doppler Left Leg."
                }
                className="form-control"
              />
              <ErrorMessage name="exam">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="symptoms" md="2">
              Symptoms
            </Label>
            <Col md="10">
              <Field
                name="symptoms"
                as="textarea"
                rows="12"
                placeholder={
                  "Enter Symptoms and / or Reason for This Exam. \nExample: Pain in Left Elbow After Fall. \nExample: Black and Blue and Swelling in Left Leg."
                }
                className="form-control"
              />
              <ErrorMessage name="symptoms">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <hr />
          <p>Required Information</p>
          <FormGroup row>
            <Label htmlFor="comments" md="2">
              Comments
            </Label>
            <Col md="10">
              <Field
                name="comments"
                as="textarea"
                rows="12"
                placeholder={
                  "Example: Please Come after 4:00pm. \nExample: Leave a CD at nursing Station."
                }
                className="form-control"
              />
              <ErrorMessage name="comments">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="mdName" md="2">
              MD
            </Label>
            <Col md="10">
              <Field
                name="mdName"
                placeholder="Ordering Doctor's Name"
                className="form-control"
              />
              <ErrorMessage name="mdName">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="yourName" md="2">
              Your Name
            </Label>
            <Col md="10">
              <Field
                name="yourName"
                placeholder="Name of Person Completing Form"
                className="form-control"
              />
              <ErrorMessage name="yourName">
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
                placeholder="Contact Phone"
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
                placeholder="Contact Email"
                type="email"
                className="form-control"
              />
              <ErrorMessage name="email">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="examDate" md="2">
              Preferred Exam Date
            </Label>
            <Col md="10">
              <Field name="examDate" type="date" className="form-control" />
              <ErrorMessage name="examDate">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col xs={{ size: 10, offset: 2 }}>
              <Button type="submit" variant="flat" size="lg">
                Send Order
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Formik>
    </>
  );
};

export default IncallForm;
