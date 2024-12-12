import { Feature } from "./Feature";
const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Supercharge your productivity by seamlessly connecting all your tools and keeping everything you need in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Set your focus, break down your goals, and track your progress step by step, keeping you on target.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "Your data is fully protected with end-to-end encryption, ensuring it's stored securely and safe from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24  ">
      <div className="container">
        <h2 className="text-center font-bold  text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable task lists, focus-enhancing tools, and smart
            tracking. Organize tasks, receive reminders, and track your progress
            effortlessly.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row  gap-4">
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
