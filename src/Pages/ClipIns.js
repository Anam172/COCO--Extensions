import React from 'react';

const ClipIns = () => {
  const card = [
    {
      id: 1,
      title: "16' Remy Human Hair Clip-In Extensions",
      description: "£85",
      image: "https://files.cdn-files-a.com/uploads/9376397/800_gi-668eb9f864da6.jpg",
    },
  ];

  return (
    <div className="bg-[#f2ece4] px-12 pt-8 pb-28">
      <p className="text-gray-600">
        <span className="text-[#d0ae81]">Home</span> /
        <span className="text-[#d0ae81]"> Store</span> /
        Clip Ins
      </p>
      <h1 className="text-4xl font-semibold mt-12 text-center">CLIP INS</h1>
      <hr className="border-t-4 border-[#d0ae81] w-40 mx-auto my-8" />

      <div className="flex flex-auto gap-6 mx-28 mt-8">
        {card.map((ClipIns) => (
          <div
            key={ClipIns.id}
            className="bg-white w-80 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={ClipIns.image}
              alt={ClipIns.title}
              className="h-60 w-full object-cover rounded-t-lg"
            />
            <div className="text-center my-4">
              <h3 className="text-md text-left font-bold mx-4 py-4">
                {ClipIns.title}
              </h3>
              <p className="text-left mx-4 font-semibold mb-4 text-[#d0ae81]">
                {ClipIns.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClipIns;
