"use client";

import React from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
const items = [
  {
    question: "How does FocusPro help increase my productivity?",
    answer:
      "FocusPro organizes your tasks, sends reminders, and allows you to set clear goals, helping you stay focused and manage your time efficiently.",
  },
  {
    question: "Can I use FocusPro on multiple devices?",
    answer:
      "Yes, FocusPro syncs your data automatically across all your devices, allowing you to access your tasks and goals from anywhere.",
  },
  {
    question: "Does FocusPro integrate with other tools?",
    answer:
      "Yes, FocusPro integrates with various productivity tools, such as calendars and task apps, to keep everything centralized in one place.",
  },
  {
    question: "Is there a subscription fee for FocusPro?",
    answer:
      "FocusPro offers both free and premium plans. The premium version unlocks advanced features, including unlimited integrations and additional tracking tools, for a monthly or yearly subscription.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export const FAQs = () => {
  return (
    <div className="bg-black text-white ">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter sm:py-24">
          Frequentely asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
