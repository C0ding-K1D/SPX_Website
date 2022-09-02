import React from "react";
import NavComponent from "../components/NavBar";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./FaqScreen.css";
import Partners from "../components/Partners";

const FaqScreen = () => {
  return (
    <>
      <NavComponent />
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      <Accordion preExpanded={["a", "c"]} className="faq-container">
        <AccordionItem uuid="a">
          <AccordionItemHeading>
            <AccordionItemButton>
              Will my insurance cover the X-Ray, Ultrasound, or EKG if I have
              the exam performed in my home?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes. Medicare covers the cost of your home exam, as do nearly all
              other insurance carriers.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Who qualifies for home exams?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Anyone who would find it physically or psychologically taxing to
              obtain an exam outside of their home.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can home exams be performed upstairs or downstairs?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes! We can easily bring our equipment up and down several flights
              of stairs. No problem.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              When will my doctor recieve my exam results?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Results will be sent to your doctor within hours of your exam.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can exams be performed on contracted patients? It seems
              impossible.
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes. This is very common. Our technologists specialize in
              obtaining great radiographs regardless of the patient's mental
              and/or physical condition by utilizing proven methods and
              techniques. Specialty Portable X-Ray often obtains BETTER images
              with our equipment than what can be achieved at the hospital! Our
              equipment is extremely versatile and allows for exams to be
              completed on even the most difficult patients.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How does SPX deal with confused and uncooperative patients?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Our state-of-the-art digital equipment is extremely fast and
              accomodating.The patient does not have to stay still for the
              entire exam in order for us to obtain an optimal study. In fact,
              most radiographs are obtained using less than one second of
              exposure time.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Are x-rays safe?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, safer than ever! Thanks to our advanced digital technology,
              built-in computer enhancemnets, and the use of our ultra-sensative
              cesium x-ray plates, the exposure needed to acquire a portable
              x-ray is now 40-90% less, while simultaneously delivering higher
              quality images.Remember, if your doctor has ordered an x-ray exam,
              they feel that the benefits far outweigh any potential risk.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              When will my doctor get the results of my x-ray / ultrasound exam?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Today. Your doctor will POSITIVELY get your results the same day
              we perform the exam, even on weekends. In addition, any urgent
              resuts are called in directly to your doctor's office. If needed,
              we will page your doctor and/or contact them through their
              service. Your urgent results will not be delayed.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I, a private individual, request a portable x-ray or
              ultrasound exam?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              No. All medical x-rays and/or ultrasound exams must be ordered by
              a physician with a medically valid reason. All results are sent
              and / or called directly to your physician's office. Have your
              doctor call us if you feel your loved one could use our service.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Arrive within a specific time frame?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes. Our staff will work dilligently around YOUR schedule in order
              to get the exam completed.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Call when you're on your way BEFORE you arrive?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes. We will ALWAYS call you well in advance of our arrival to let
              you know we are on our way.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Wait for the aide to arrive?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Yes.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can you come around and use the back or side door?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Yes.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can the exam be performed with me lying down in bed or sitting in
              a chair?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes. We understand that caring for your loved one can be a
              difficult and all-consuming task. Specialty Portable X-Ray would
              like to help you, not add to your already difficult situation.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What types of exams can Specialty Portable X-Ray provide in my
              home?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              SPX provides x-rays for all body parts for many different reasons.
              Most commonly, we provide chest x-rays to rule out things like
              pneumonia, congestive heart failure, pleural effusions, and other
              ailments.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <p className="disclaimer">
        We X-Ray all body parts to rule out fractures, dislocations,
        osteomyelitis, and lytic/blastic lesions. Ultrasound exams, such as
        Doppler studies, are conducted to rule out things like deep venous
        thrombosis (blood clots), echocardiograms, general ultrasound of the
        liver, spleen, kidneys, bladder, thyroid and pelvis. If you feel that
        you or a loved one is in need of one of these exams, notify your doctor
        and have them call 888-XRAY-NOW.
      </p>
      <Partners />
    </>
  );
};

export default FaqScreen;
