import React from "react";
import "./OurTeams.css";
import { FaLinkedin } from "react-icons/fa";

const teams = {
  Employee: [
    {
      name: "Eduardo Harari",
      title: "President and CEO",
      photo: "OurTeams/eduardo.jpg",
      linkedin: "https://www.linkedin.com/in/edharari/",
    },
    {
      name: "Geoff Parsons",
      title: "VP Consulting Services",
      photo: "OurTeams/geoff.jpg",
      linkedin: "https://www.linkedin.com/in/geoff-parsons-18a66682/",
    },
    {
      name: "Jose Alejandro Bolivar",
      title: "VP Latin America",
      photo: "OurTeams/jose.jpg",
      linkedin: "https://www.linkedin.com/in/jbolivar99/",
    },
    {
      name: "Rebecca Sarfatti",
      title: "VP Human Resources",
      photo: "OurTeams/rebecca.jpg",
      linkedin: "https://www.linkedin.com/in/rsarfatti/",
    },
  ],
  "Management Teams": [
    {
      name: "Camila Ramirez",
      title: "Director Cyber Analysis",
      photo: "OurTeams/camila.jpg",
      linkedin: "https://www.linkedin.com/in/ckrtramirez/",
    },
    {
      name: "Felipe Rolon",
      title: "Director Cyber Security",
      photo: "OurTeams/felipe.jpg",
      linkedin: "https://www.linkedin.com/in/alvaro-rolon/",
    },
    {
      name: "Hugo Dardon",
      title: "Director of IT & IS",
      photo: "OurTeams/hugo.jpg",
      linkedin: "https://www.linkedin.com/in/hugo-dardon-5b7926288/",
    },
    {
      name: "Jeff Bromstein",
      title: "Director Business Development Asia",
      photo: "OurTeams/jeff.jpg",
      linkedin: "https://www.linkedin.com/in/jeff-bromstein-55057a89/",
    },
    {
      name: "Lizbeth Torres",
      title: "Director Web & Social Media",
      photo: "OurTeams/lizbeth.jpg",
      linkedin: "https://www.linkedin.com/in/lizbeth-torres8/",
    },
    {
      name: "Lucia Delgado",
      title: "Director Operations",
      photo: "OurTeams/lucia.jpg",
      linkedin: "https://www.linkedin.com/in/lucia-delgado-meraz/",
    },
    {
      name: "Sharon Fuks",
      title: "Director European & Middle East Operations",
      photo: "OurTeams/sharon.jpg",
      linkedin: "https://www.linkedin.com/in/sharon-fuks-42a8524b/",
    },
    {
      name: "Susan Guaman",
      title: "Director Financial Planning",
      photo: "OurTeams/susan.jpg",
      linkedin: "#",
    },
  ],
  "Cyber Security Team": [
    {
      name: "Alasana Camara",
      title: "Cyber Security Analyst",
      photo: "OurTeams/alasana.jpg",
      linkedin: "https://www.linkedin.com/in/alasana-camara-4b5415291/",
    },
    {
      name: "Ali Mohammed",
      title: "Cyber Security Analyst",
      photo: "OurTeams/ali.jpg",
      linkedin: "https://www.linkedin.com/in/ali-mohammed-b3033127a/",
    },
    {
      name: "Boakai Kamara",
      title: "Cyber Security Analyst",
      photo: "OurTeams/boakai.jpg",
      linkedin: "https://www.linkedin.com/in/boakai-kamara/",
    },
    {
      name: "Clement Eleke",
      title: "Cyber Security Analyst",
      photo: "OurTeams/clement.jpg",
      linkedin: "https://www.linkedin.com/in/clement-eleke/",
    },
    {
      name: "Emmanuel Nkachukwu",
      title: "Cyber Security Analyst",
      photo: "OurTeams/emmanuel.jpg",
      linkedin: "https://www.linkedin.com/in/emmanuel-nkachukwu-4b253826a/",
    },
    {
      name: "Fernando Vidal",
      title: "Cyber Security Analyst",
      photo: "OurTeams/fernando.jpg",
      linkedin: "https://www.linkedin.com/in/luisfvidal/",
    },
    {
      name: "Gabriel M.",
      title: "Cyber Security Analyst",
      photo: "OurTeams/gabriel.jpg",
      linkedin: "https://www.linkedin.com/in/gabrielmanfre/",
    },
    {
      name: "Ibrahim Adeniji",
      title: "Cyber Security Analyst",
      photo: "OurTeams/ibrahim.jpg",
      linkedin: "https://www.linkedin.com/in/ibrahim-adeniji-72885918b/",
    },
    {
      name: "Junaid Syed",
      title: "Cyber Security Analyst",
      photo: "OurTeams/junaid.jpg",
      linkedin: "https://www.linkedin.com/in/junaid-syed-2b9468263/",
    },
    {
      name: "Menbere Kibret",
      title: "Cyber Security Analyst",
      photo: "OurTeams/menbere.jpg",
      linkedin: "https://www.linkedin.com/in/menbere-a-kibret-94ba63a7/",
    },
    {
      name: "Patrick Alimo",
      title: "Cyber Security Analyst",
      photo: "OurTeams/patrick.jpg",
      linkedin: "https://www.linkedin.com/in/patrick-alimo-5b837a276/",
    },
    {
      name: "Parth Srivastav",
      title: "Cyber Security Analyst",
      photo: "OurTeams/parth.jpg",
      linkedin: "https://www.linkedin.com/404/",
    },
    {
      name: "Runkai (Michael) Bai",
      title: "Cyber Security Analyst",
      photo: "OurTeams/runkai.jpg",
      linkedin: "https://www.linkedin.com/in/bairunkai/",
    },
    {
      name: "Shohely Akkas",
      title: "Cyber Security Analyst",
      photo: "OurTeams/shohely.jpg",
      linkedin: "https://www.linkedin.com/feed/",
    },
    {
      name: "Steve Ejoh",
      title: "Cyber Security Analyst",
      photo: "OurTeams/steve.jpg",
      linkedin: "#",
    },
    {
      name: "Wanghsiang (Mark) Pan",
      title: "Cyber Security Analyst",
      photo: "OurTeams/wanghsiang.jpg",
      linkedin: "https://www.linkedin.com/in/wanghsiangpan/",
    },
    {
      name: "Yaroslav Leskiv",
      title: "Cyber Security Analyst",
      photo: "OurTeams/yaroslav.jpg",
      linkedin: "https://www.linkedin.com/in/yaroslav-leskiv/",
    },
  ],
  "Operations Team": [
    {
      name: "Alejandro Alcala",
      title: "Sr. Consultant",
      photo: "OurTeams/alejandro.jpg",
      linkedin: "#",
    },
    {
      name: "Jean Pierre Jurado",
      title: "Sr. Consultant",
      photo: "OurTeams/jean.jpg",
      linkedin: "#",
    },
    {
      name: "Juan Pablo Florez",
      title: "Sr. Consultant",
      photo: "OurTeams/juan.jpg",
      linkedin: "#",
    },
    {
      name: "Luciano Molteni",
      title: "Sr. Consultant",
      photo: "OurTeams/luciano.jpg",
      linkedin: "#",
    },
  ],
};

const OurTeams = () => {
  return (
    <div className="teams-container">
      {Object.keys(teams).map((team) => (
        <div key={team} className="team-section">
          <h2 className="team-title">{team}</h2>
          <div className="team-members">
            {teams[team].map((employee, index) => (
              <div className="team-member" key={index}>
                <img
                  src={employee.photo}
                  alt={`${employee.name}`}
                  className="photo"
                />
                <div className="info">
                  <h3>{employee.name}</h3>
                  <p>{employee.title}</p>
                  <a
                    href={employee.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="linkedin-logo" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurTeams;
