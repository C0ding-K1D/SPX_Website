import Counter from "./Counter";
import "./Announcements.css";

const Announcements = () => {
  return (
    <div className="container">
      <h2 className="sub-heading">spx announcements</h2>
      <p className="counter">Over +{<Counter />} exams and counting !!!</p>
      <p className="counter">
        The First 100% All Digital X-Ray / Ultrasound Provider !!!
      </p>
      <p className="announcement-text">
        Specialty Portable X-Ray specializes in delivering the best In-Home care
        for those looking to find X-Rays and Ultrasounds in the convenience and
        privacy of one's home.
      </p>
      <p className="counter">
        Avoid Unnecessary Trips To The Hospital Use Specialty Portable X-Ray
      </p>
      <p className="announcement-text">
        At Specialty Portable X-Ray we provide the very best in Portable X-Ray
        and Ultrasound service on Long Island and the Metropolitan Area.
      </p>
    </div>
  );
};

export default Announcements;
