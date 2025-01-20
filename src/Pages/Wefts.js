import React from 'react';

const Wefts = () => {
  const card = [
    {
      id: 1,
      title: "18' Wefted Remy Human Hair",
      description: "£95",
      image: "https://files.cdn-files-a.com/uploads/9376397/800_gi-668eba935fad5.jpg",
    },
  ];

  return (
    <div className="bg-[#f2ece4] px-12 pt-8 pb-28">
      <p className="text-gray-600">
        <span className="text-[#d0ae81]">Home</span> /
        <span className="text-[#d0ae81]"> Store</span> /
        Wefts
      </p>
      <h1 className="text-4xl font-semibold mt-12 text-center">Wefts</h1>
      <hr className="border-t-4 border-[#d0ae81] w-40 mx-auto my-8" />

      <div className="flex flex-auto gap-6 mx-28 mt-8">
        {card.map((Wefts) => (
          <div
            key={Wefts.id}
            className="bg-white w-80 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={Wefts.image}
              alt={Wefts.title}
              className="h-60 w-full object-cover rounded-t-lg"
            />
            <div className="text-center my-4">
              <h3 className="text-md text-left font-bold mx-4 py-4">
                {Wefts.title}
              </h3>
              <p className="text-left mx-4 font-semibold mb-4 text-[#d0ae81]">
                {Wefts.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wefts;
