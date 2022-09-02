import nyfsha from "../assets/nyfsha.png";
import intercounty from "../assets/intercounty.png";
import hippa from "../assets/hippa.png";
import esaal from "../assets/esaal.png";
import arrt from "../assets/arrt.png";
import apdaLogo from "../assets/apdaLogo.png";
import "./Partners.css";

const Partners = () => {
  return (
    <>
      <h1 className="partner-heading">A Proud Member</h1>
      <p className="partner-subheading">of</p>
      <img className="apda-image" src={apdaLogo} alt="" />
      <div className="partner-container">
        <img
          className="logos"
          style={{ marginRight: "2rem" }}
          src={hippa}
          alt=""
        />
        <img
          className="logos"
          style={{ marginRight: "2rem" }}
          src={intercounty}
          alt=""
        />
        <img className="logos" src={esaal} alt="" />
      </div>
      <div className="partner-container" style={{ marginTop: "-5rem" }}>
        <img className="logos" src={nyfsha} alt="" />
        <img className="logos" src={arrt} alt="" />
      </div>
      <h1 className="partner-heading">
        Proudly Providing Professional X-Ray Services to
      </h1>
    </>
  );
};

export default Partners;
