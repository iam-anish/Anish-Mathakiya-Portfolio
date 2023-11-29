const AboutPage = () => {
  return (
    <>
      <h2>A Little Bit About Me</h2>
      <br></br>
      <h3>Hellow, I'm Anish Mathakiya</h3>
      <br />
      <p align="justify">Currently, I'm doing B.Tech ỉn Computer Engineering at Charusat University, Gujarat.</p>
      <p align="justify">I have a deep interest in software development and doing an internship in the same.</p>
      <br />

      <p align="justify">My strongest areas lie in Problem Solving & Competitive Programming using JAVA (DSA) and Web Development. I am proficient in multiple programming languages such as JAVA, C++, HTML, Javascript, and Kotlin. Furthermore, I have hands-on experience with various technologies and frameworks such as Spring, Spring-Boot, Node.js, and PHP.</p>
      <br />
      <p align="justify">As a Volunteer of House of Innovation Club at Charusat University, I have developed my leadership and communication skills by collaborating with other members to organize various events and activities. Additionally, as a Tech Coordinator in my first year of college, I gained experience in managing and coordinating events related to technology. I believe I would be an ideal fit for this role.</p>
      <br />
      <p align="justify">In terms of coursework, I have completed Object Oriented Programming, Data Structure & Algorithm, Data-Base Management System, and Data Communication & Networking courses. I have also received a Certificate of Appreciation for sharing valuable knowledge on Git and GitHub as a Resource Person. Additionally, I am a certified volunteer for House of Innovation.</p>
      <br />
      <p align="justify">I take pride in my achievements, including ranking second in "SQL Wars," a college SQL contest, and achieving a GFG Rank of 3 (Institute Wise). I believe my accomplishments showcase my dedication to constantly improving my skills and knowledge.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
