import React from 'react';

const Services = () => {
  const serviceCard = [
    {
      id: 1, 
      title: "Clip-In Extensions",
      description: "Achieve a natural and seamless look with our tape-in extensions. Ideal for adding length and fullness.",
      image: "https://files.cdn-files-a.com/uploads/9376397/800_gi-668ebe1010cd7.jpg",
    },
    {
      id: 2,
      title: "Tape-In Extensions",
      description: "Easy-to-use clip-in extensions for instant length and volume that can be applied at home or by our professionals.",
      image: "https://files.cdn-files-a.com/uploads/9376397/800_gi-668ebe4d74e99.jpg",
    },
    {
      id: 3,
      title: "Custom Color Matching",
      description: "Our experts will match your extension color precisely to your natural hair, ensuring a flawless blend.",
      image: "https://files.cdn-files-a.com/uploads/9376397/800_gi-668ebe82cbd60.jpg",
    },
  ];

  return (
    <>
    <div id='services' className='p-20 justify-center bg-[#f4f4f4]'>
    <h1 className='relative text-center text-3xl'>Services</h1>
    <hr className="border-t-4 border-[#d0ae81] w-[10%] mx-auto md: mt-4" />
    <div className='flex flex-row gap-4 justify-center px-52 mt-8'>
      {serviceCard.map((Services, index) => (
        <div
          key = {Services.id}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-col" : "lg:flex-col-reverse"
          } bg-[#f2ece4] rounded shadow-md`}
        >

          <div
            className="flex h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url(${Services.image})`,
            }}
          ></div>

          <div className="flex-1 px-4 my-32">
            <h2 className="text-xl font-bold p-4">{Services.title}</h2>
            <p className="text-sm px-4 font-normal">{Services.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Services;