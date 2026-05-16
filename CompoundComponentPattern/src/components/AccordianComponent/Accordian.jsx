import  { useState } from "react";
import "./Accordian.css";

const data = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "What is useState?",
    content: "useState is a Hook that lets you add state to functional components.",
  },
  {
    title: "What is JSX?",
    content: "JSX allows you to write HTML inside JavaScript.",
  },
];

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-header ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span
              className={`icon ${
                activeIndex === index ? "rotate" : ""
              }`}
            >
              ▼
            </span>
          </div>

          <div
            className={`accordion-content ${
              activeIndex === index ? "open" : ""
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;