import React from "react";
import akm from "../images/akm.png";
import ali from "../images/ali.png";
import anaghha from "../images/anaghha.png";
import anant from "../images/anant.png";
import aradhye from "../images/aradhye.png";
import faculty from "../images/faculty.png";
import facultys from "../images/facultys.png";
import harsh from "../images/harsh.png";
import hema from "../images/hema.png";
import jahnavi from "../images/jahnavi.png";
import keshav from "../images/keshav.png";
import khushiboard from "../images/khushiboard.png";
import kk from "../images/kk.png";
import sameer from "../images/sameer.png";
import tanisha from "../images/tanisha.png";
import urza from "../images/urza.png";
import ved from "../images/ved.png";

const TeamSection = () => {
  const facultyCoordinators = [
    {
      name: "DR. S SASIKUMAR ",
      role: "PROFESSOR, DEPARTMENT OF CHEMISTRY",
      image: facultys,
      size: { height: "271px", width: "300px" },
    },
    {
      name: "DR. AMIT B MAHINDRAKAR",
      role: "EX-DIRECTOR OF STUDENT WELFARE ",
      image: faculty,
    },
  ];

  const organizers1 = [
    {
      name: "ANANT AGRAWAL",
      role: "CHAIRPERSON ",
      image: anant,
    },
    {
      name: "VED KULKARNI",
      role: "VICE CHAIRPERSON ",
      image: ved,
      size: { height: "271px", width: "auto" }, // Custom size
    },
    {
      name: "JAHNAVI MAJUMDER",
      role: "SECRETARY ",
      image: jahnavi,
    },
  ];

  const organizers2 = [
    {
      name: "KESHAV SHARMA",
      role: "CO-SECRETARY",
      image: keshav,
    },
    {
      name: "KHUSHI SIKARIA ",
      role: "EVENTS HEAD",
      image: khushiboard,
      size: { height: "271px", width: "auto" }, // Custom size
    },
    {
      name: "TANISHA PAHWA",
      role: "LOGISTICS HEAD",
      image: tanisha,
      size: { height: "271px", width: "auto" }, // Custom size
    },
    {
      name: "SAMEER PALKAR",
      role: "PUBLICITY HEAD",
      image: sameer,
      size: { height: "350px", width: "219px" }, // Custom size
    },
    {
      name: "URZA RAI",
      role: "OPERATIONS HEAD",
      image: urza,
      size: { height: "271px", width: "219px" }, // Custom size
    },
    {
      name: "GAGAN N BANGARAGIRI",
      role: "DESIGN HEAD",
      image: kk,
      size: { height: "350px", width: "auto" }, // Custom size
    },
    {
      name: "ARADHYE SWARUP",
      role: "MOTION GRAPHICS HEAD",
      image: aradhye,
      size: { height: "300px", width: "auto" }, // Custom size
    },
    {
      name: "ALI RASHID",
      role: "TECHNICAL HEAD",
      image: ali,
      size: { height: "271px", width: "auto" }, // Custom size
    },
    {
      name: "ASHWANI KUMAR MOUDGIL",
      role: "PROJECTS HEAD",
      image: akm,
      size: { height: "290px", width: "auto" }, // Custom size
    },
    {
      name: "HARSH KUMAR SINHA",
      role: "INNOVATIONS HEAD",
      image: harsh,
      size: { height: "290px", width: "auto" }, // Custom size
    },
    {
      name: "ANAGHHASHREE PERUMAL",
      role: "R&D HEAD",
      image: anaghha,
      size: { height: "290px", width: "auto" }, // Custom size
    },
    {
      name: "HEMA HARINI G",
      role: "IOT HEAD",
      image: hema,
      size: { height: "290px", width: "auto" }, // Custom size
    },
  ];

  // Default image style for consistency
  const defaultImageStyle = { height: "271px", width: "219px" };

  return (
    <div className="text-center text-black py-10" style={{ backgroundColor: "#FEFBEC" }}>
      <div
        className="header-box"
        style={{
          backgroundColor: "#ADC3A8",
          padding: "20px",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        <h2 className="text-4xl font-bold mb-8 font-custom">OUR TEAM</h2>
      </div>

      {/* Faculty Coordinators Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-6 font-custom">FACULTY COORDINATORS</h3>
        <div className="flex justify-center gap-8">
          {facultyCoordinators.map((coordinator, index) => (
            <div key={index} className="text-center">
              <img
                src={coordinator.image}
                alt={coordinator.name}
                className="mx-auto mb-4"
                style={defaultImageStyle} // Consistent image size
              />
              <h4 className="font-semibold">{coordinator.name}</h4>
              <p className="text-gray-600">{coordinator.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Organizers Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 font-custom">ORGANIZERS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {organizers1.map((organizer, index) => (
            <div key={index} className="text-center">
              <img
                src={organizer.image}
                alt={organizer.name}
                className="mx-auto mb-2"
                style={organizer.size || defaultImageStyle} // Apply custom size if defined
              />
              <h4 className="font-semibold">{organizer.name}</h4>
              <p className="text-gray-600">{organizer.role}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
          {organizers2.map((organizer, index) => (
            <div key={index} className="text-center">
              <img
                src={organizer.image}
                alt={organizer.name}
                className="mx-auto mb-2"
                style={organizer.size || defaultImageStyle} // Apply custom size if defined
              />
              <h4 className="font-semibold">{organizer.name}</h4>
              <p className="text-gray-600">{organizer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;