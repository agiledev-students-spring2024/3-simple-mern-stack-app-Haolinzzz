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
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const AboutUs = props => {
    const [aboutData, setAboutData] = useState({ title: '', content: [], imageUrl: '' });
    const [error, setError] = useState('');
    const [loaded, setLoaded] = useState(false);

    const fetchAboutUs = () => {
        axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
        .then(response => {
    
          const aboutData = response.data;
          setAboutData(aboutData);
        })
        .catch(err => {
          // Convert error object to a string to display it
          // Note: In a real app, you might want to handle errors more gracefully
          const errMsg = JSON.stringify(err, null, 2);
          setError(errMsg);
        })
        .finally(() => {
          // Indicate that loading is complete
          setLoaded(true);
        });
    }

    useEffect(() => {
        fetchAboutUs();
    }, []);

    return (
        <div>
          {!loaded && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {loaded && !error && (
            <div>
              <h1>{aboutData.title}</h1>
              {aboutData.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <img src={aboutData.imageUrl} alt="About Us" />
            </div>
          )}
        </div>
      );
};





export default AboutUs;