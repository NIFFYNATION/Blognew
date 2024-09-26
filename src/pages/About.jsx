import { Helmet } from "react-helmet-async";
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - News Metrics</title>
        <meta name="description" content="Learn about News Metrics, your trusted source for comprehensive and unbiased news coverage across various categories." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-red-800">About News Metrics</h1>
        
        <section className="mb-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Our Mission</h2>
          <p className="text-lg mb-4 text-gray-700">
            At News Metrics, we're on a mission to deliver accurate, timely, and comprehensive news coverage across a wide range of topics. We believe in empowering our readers with knowledge, fostering informed discussions, and promoting a well-informed society.
          </p>
        </section>
        
        <section className="mb-12 bg-red-100 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-red-800">What We Offer</h2>
          <ul className="space-y-3">
            {[
              "Comprehensive coverage of local, national, and international news",
              "In-depth reporting on politics, business, technology, and entertainment",
              "Timely updates on breaking news and developing stories",
              
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>
        
       
      </div>
    </>
  );
};

export default About;