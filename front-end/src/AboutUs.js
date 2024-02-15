// import { useState, useEffect } from 'react'

// import './AboutUs.css'

// function AboutUs() {
//     const [aboutUsContent, setAboutUsContent] = useState({ title: '', content: '', imageUrl: '' });
  
//     useEffect(() => {
//       fetch('/api/about-us')
//         .then(response => response.json())
//         .then(data => setAboutUsContent(data))
//         .catch(error => console.log('Error fetching about us content:', error));
//     }, []);
  
//     return (
//       <div>
//         <h1>{aboutUsContent.title}</h1>
//         <p>{aboutUsContent.content}</p>
//         <img src={aboutUsContent.imageUrl} alt="About Us" />
//       </div>
//     );
//   }
  
//   export default AboutUs;

import './AboutUs.css'

const AboutUs = props => {
  return (
    <>
      {/* <h1>About Us Page</h1> */}
      <p>This is my new page</p>
      <p>
        Hi, my name is Haolin, a current senior student in NYU, joint major in Computer Science and Math.
      </p>
    </>
  )
}


export default AboutUs