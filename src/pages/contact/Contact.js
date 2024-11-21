import { useState, useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields");
    } else {
      alert("Form is submitted: " + name + " " + email + " " + message);
    }
  };

  // useEffect(() => {
  //   const initMap = () => {
  //     const map = new window.google.maps.Map(document.getElementById("map"), {
  //       center: { lat: -34.397, lng: 150.644 },
  //       zoom: 8,
  //     });

  //     new window.google.maps.Marker({
  //       position: { lat: -34.397, lng: 150.644 },
  //       map,
  //     });
  //   };

  //   window.initMap = initMap;
  // }, []);

  return (
    <>
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg">Or reach us at:</p>
          <p className="text-gray-600">Email: joypaltaid20019@gmail.com</p>
          <p className="text-gray-600">Phone: 6913538406</p>
        </div>

        {/* Map Integration*/}
        {/* <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Location</h2>
          <div id="map" className="w-full h-64 bg-gray-300"></div>
        </div> */}
      </main>
      {/* Google Maps Script */}
      {/* <script
        async
        defer
        src={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`}
      ></script> */}
    </>
  );
};

export default Contact;
