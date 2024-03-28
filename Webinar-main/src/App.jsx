import { useState, useEffect } from "react";
import "./App.css";
import Heading from "./Component/Heading";
import Features from "./Component/Features";
import FAQ from "./Component/FAQ";
import Disclaimer from "./Component/Disclaimer";
import Register from "./Component/Register";
import { useSpring, animated } from "@react-spring/web";

function App() {
  const [faqs, setFaqs] = useState([
    {
      question: 'How will I get the link to join the webinar ?',
      answer: 'You can the webinar using the link sent via email or WhatsApp after registration',
      open: true
    },
    {
      question: 'I have zero knowledge about trading. Can I join ?',
      answer: 'Yes, all levels of experience are welcome to join the webinar.',
      open: false
    },
    {
      question: 'Can I ask my questions during the live sessions ?',
      answer: 'Absolutely, feel free to engage actively by asking your questions during our live sessions! ',
      open: false
    },
    {
      question: 'In which language will the webinar be conducted ?',
      answer: 'The webinar will be conducted in both English and Tamil languages.',
      open: false
    }
  ]);

  const toggleFAQ = (index) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }));
  };

  // Animation configuration for FAQ section
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' }, // Initial state: invisible, slightly down
    to: { opacity: 1, transform: 'translateY(0px)' }, // Final state: visible, normal position
    config: {duration: 1000}
  });

  // useEffect hook to run animation on component mount
  useEffect(() => {
    // Trigger animation on component mount
  }, []); // Empty dependency array ensures animation runs only once

  return (
    <animated.div style={animation}>
      <Heading />
      <Register />
      <Features />
      <div className="faqsection_main2div">
        <h1>FAQ</h1>
        <div className="faqs">
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
      <Disclaimer />
    </animated.div>
  );
}

export default App;
