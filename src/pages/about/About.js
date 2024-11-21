import { useState, useEffect } from "react";

const About = () => {
  const [history, setHistory] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const historyResponse = await fetch('/api/history');
        const testimonialsResponse = await fetch('/api/testimonials');
        const teamResponse = await fetch('/api/team');

        const historyData = await historyResponse.json();
        const testimonialsData = await testimonialsResponse.json();
        const teamData = await teamResponse.json();

        setHistory(historyData);
        setTestimonials(testimonialsData);
        setTeam(teamData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to our store! We are committed to providing you with the best products and customer service. Our journey started in [Year], and since then, we have been dedicated to offering quality items and a seamless shopping experience.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to bring you the latest trends at affordable prices. We carefully curate our collection to ensure that every item meets our high standards.
          </p>
          <p className="text-lg text-gray-700">
            Thank you for choosing us as your go-to store. We hope you enjoy shopping with us!
          </p>
        </div>

        {/* History Timeline */}
        {history.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our History</h2>
            <ul className="border-l-2 border-indigo-600">
              {history.map((event, index) => (
                <li key={index} className="mb-8 ml-4">
                  <div className="flex items-center">
                    <div className="bg-indigo-600 w-4 h-4 rounded-full -ml-2 mr-4"></div>
                    <h3 className="text-lg font-semibold">{event.year}</h3>
                  </div>
                  <p className="mt-2 text-gray-600">{event.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Customer Testimonials */}
        {testimonials.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Customer Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="bg-white shadow-md rounded-lg p-4">
                  <p className="text-gray-700 italic">"{testimonial.message}"</p>
                  <footer className="mt-4 text-gray-600">- {testimonial.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        )}

        {/* Our Team */}
        {team.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
                  <img className="w-24 h-24 mx-auto rounded-full" src={member.photo} alt={member.name} />
                  <h3 className="text-lg font-bold mt-4">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default About;
