import { FaUsers } from "react-icons/fa";

export function ColumnSection() {
  const items = [
    {
      color: "text-blue-500 border-blue-500",
      text: "Fast, Secure, Affordable and Reliable",
    },
    {
      color: "text-orange-500 border-orange-500",
      text: "Doorstep Delivery Locally and Internationally",
    },
    {
      color: "text-green-500 border-green-500",
      text: "Ship to USA, Canada, & UK.",
    },
  ];

  return (
    <div className="flex flex-col items-start space-y-6 max-w-lg mx-auto mt-5">
      {items.map((item, index) => (
        <div key={index} className={`flex items-center border-l-2 pl-4 ${item.color} py-3`}>
          <FaUsers className={`text-2xl ${item.color}`} />
          <p className="ml-3 text-lg font-medium text-gray-900">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
