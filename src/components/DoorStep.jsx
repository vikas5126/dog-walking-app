import React, { useState } from 'react';
import dogTraining from "../assets/images/dog-training-service.svg";
import dogGrooming from "../assets/images/grooming-service.svg";
import dogWalking from "../assets/images/walking-service.svg";
import dogVacation from "../assets/images/vaccination-service.svg";
import { Link } from 'react-router-dom';

const DoorStep = () => {
  const [showPopup, setShowPopup] = useState(false);

  const card = [
    {
      title: "Dog Training",
      image: dogTraining,
      color: 'rgb(255, 164 ,164)'
    },
    {
      title: "Dog Grooming",
      image: dogGrooming,
      color: 'rgb(153, 222 ,128)',
      nav: '/grooming'
    },
    {
      title: "Dog Walking",
      image: dogWalking,
      color: 'rgb(128, 222 ,255)',
      nav: '/walking'
    },
    {
      title: "Dog Vaccination",
      image: dogVacation,
      color: 'rgb(255, 128 ,255)'
    }
  ];

  const handleCardClick = (navExists) => {
    if (!navExists) {
      setShowPopup(true);
    }
  };

  return (
    <div>
      <h1 className='text-[2.5rem] font-semibold text-center m-12'>
        Our Services at your Doorstep
      </h1>
      
      <div className='flex justify-around items-center w-full flex-wrap gap-6'>
        {card.map((item, index) =>
          item.nav ? (
            <Link to={item.nav} key={index}>
              <div
                className='flex flex-col justify-center items-center gap-4 w-[12rem] h-[13rem] rounded-xl shadow-[0px_20px_30px_-10px_rgb(82_82_82)] cursor-pointer'
                // style={{ backgroundColor: item.color }}
              >
                <img src={item.image} alt={item.title} className='w-[9rem] h-[9rem]' />
                <p className='text-lg font-semibold text-center'>{item.title}</p>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              onClick={() => handleCardClick(false)}
              className='flex flex-col justify-center items-center gap-4 w-[12rem] h-[13rem] rounded-xl shadow-[0px_20px_30px_-10px_rgb(82_82_82)] cursor-pointer'
            //   style={{ backgroundColor: item.color }}
            >
              <img src={item.image} alt={item.title} className='w-[9rem] h-[9rem]' />
              <p className='text-lg font-semibold text-center'>{item.title}</p>
            </div>
          )
        )}
      </div>

      {/* Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center w-[300px]">
            <p className="text-xl font-semibold mb-4">This service is not available right now.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoorStep;
