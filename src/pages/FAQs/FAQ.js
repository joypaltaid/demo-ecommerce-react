import { useState, useEffect } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [faqs] = useState([
    {
      category: "Shipping",
      questions: [
        {
          question: "How do I track my order?",
          answer: "Once your order has shipped, you will receive a confirmation email with tracking details.",
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we offer international shipping to select countries. Shipping costs will be calculated at checkout.",
        },
      ],
    },
    {
      category: "Returns",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We accept returns within 30 days of purchase. Items must be in original condition.",
        },
      ],
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFaqs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter((q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <>
      {/* <!-- FAQ Section --> */}
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

        {/* <!-- Search FAQ --> */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search FAQs"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 space-y-8">
          {filteredFaqs.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((q, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold">{q.question}</h3>
                    <p className="text-gray-700 mt-2">{q.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default FAQ;
