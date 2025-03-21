import { FaUsers } from "react-icons/fa";

export default function LocalColumnSection() {
  const items = [
    {
      color: "text-blue-500 border-blue-500",
      text: "Take control of your shipments. Request a pickup or delivery from your location or directly from the seller. Easy, efficient, and designed to fit your schedule"
    },
    {
      color: "text-orange-500 border-orange-500",
      text: "Enjoy the convenience of door-to-door delivery. Your packages are in safe hands, reaching their destination securely and on time, every time.",
    },
    // {
    //   color: "text-green-500 border-green-500",
    //   text: "Ship to USA, Canada, & UK.",
    // },
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
