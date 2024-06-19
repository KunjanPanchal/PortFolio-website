import React from "react";

function About() {
  return (
    <div
      name="About"
      className=" max-w-screen-2xl  mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-5xl font-bold mb-5">About</h1>
        <p className="text-2xl">
          
             I'm a passionate and creative web developer with a knack for building beautiful and functional user interfaces. I'm currently honing my skills as a MERN Stack intern, and I'm excited to showcase some of the projects I've been working on! <br /><br/>This portfolio is a glimpse into my journey as a web developer. Here, you'll find: <br /><br/> <b>Projects</b>: A collection of my personal and collaborative projects, showcasing my ability to design, develop, and deploy full-stack MERN <br/>
             <b>Skills</b>: An overview of my technical skills, including proficiency in MongoDB, Express.js, React.js, Node.js, and other relevant technologies.<br/>
              <b>About Me</b>: A little bit about me, my interests, and my passion for web development.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-5xl">
          Education & Training
        </h1>
        <div className="text-2xl">
        <ul>
          <li>SIGMA INSTITUE OF ENGINEERRING</li>
          <li>Bachelor in IT</li>
          <li>CGPA : 7.78 </li>
          <li>Undergraduate</li>
          <li>2021 - 2025</li>
        </ul>
        <br/>
        <ul>
          <li>H S Shah High School
          </li>
          <li>HSC</li>
          <li>Percentage: 72.7/100 %
          </li>
          <li>Percentile: 47.2/100 PR</li>
          <li>2020 - 2021
          </li>
        </ul>
        <br/>
        <ul>
          <li>Shree K T Patel High School

          </li>
          <li>SSC
          </li>
          <li>Percentage: 73.8/100 %

          </li>
          <li>Percentile: 90.8/100 PR
          </li>
          <li>2018 - 2019
          </li>
        </ul>
        </div>
        
        <br/>
        
      
        
        
        
      
        <h1 className="text-green-600 font-semibold text-5xl">
          Achievements & Awards
        </h1>
        <div className="text-2xl mt-3">
          <ul className="flex flex-col gap-6 list-disc">
          <li>Participated in Code Unnati Innovation Marathon, in which
          we have made IOT Project</li>
          <li>I have completed course Getting Started with Enterprise Data
          Science with IBM</li>
          <li>Participated in Tech Quiz in Eminence and secured 2nd place
          at Sigma Institute of Engineering</li>
          <li>Certified by Future Skills Prime for learning the latest skills in
          Artificial intelligence, Machine Learning, Data Science</li>
          </ul>
        </div>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-5xl">
          Mission Statement
        </h1>
        <p className="text-2xl mt-5">
          My mission is to leverage my skills and creativity to deliver
          innovative Web solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
