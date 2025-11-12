import React from "react";
import faqs from '../../services/customer/faqs';

function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
        Câu hỏi thường gặp (FAQ)
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm p-4 hover:bg-gray-50 transition"
          >
            <h2 className="font-semibold text-lg text-gray-800">
              {faq.question}
            </h2>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportPage;
