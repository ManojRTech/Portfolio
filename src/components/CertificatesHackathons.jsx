import React from "react";

const achievements = [
  {
    type: "Certificate",
    title: "NPTEL Certification - Programming, Data Structures and Algorithms Using Python",
    year: "2023",
    description: "Certified in Programming, Data Structures, and Algorithms using Python (NPTEL), with strong foundations in problem-solving and algorithm design.",
    logo: "/images/nptel.png", // replace with your logo path
    link: "/Programming, Data Structures And Algorithms Using Python.pdf",
  },
  {
    type: "Hackathon",
    title: "Finalist - Cyber Crimes Conclave Hackathon",
    year: "2024",
    description: "Developed a data privacy and security system that tokenizes, encrypts, and securely stores sensitive data, reinforced by firewall protection.",
    logo: "/images/cyber.png", // replace with your logo path
    link: "/CERTIFICATE.pdf",
  },
  {
    type: "Hackathon",
    title: "Participant - Smart India Hackathon",
    year: "2024",
    description: "Participated in Smart India Hackathon (SIH) 2024 - Selected for Round 1 with a problem statement in predictive modeling.",
    logo: "/images/sih.jpeg", // replace with your logo path
    link: "/SIH.pdf",
  },
  // add more items here
];

const CertificatesHackathons = () => {
  return (
    <section id="achievements" className="container pt-16 mt-16 scroll-mt-24 relative z-10 pb-24">
      <h2 className="text-3xl font-bold mb-8 text-center text-glow">
        Certificates & Hackathons
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-card rounded-lg card-hover shadow-md flex flex-col items-start"
          >
            <img
              src={item.logo}
              alt={`${item.type} Logo`}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-foreground mb-2">{item.year}</p>
            <p className="text-sm mb-4">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesHackathons;
