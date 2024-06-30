import Image from 'next/image';
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const WhoIsBoxCar = () => {
  const renderStars = (rating:number) => {
    let starCount = 0;
    if (rating > 4) {
      starCount = 5;
    } else if (rating > 3) {
      starCount = 4;
    } else if (rating > 2) {
      starCount = 3;
    } else if (rating > 1) {
      starCount = 2;
    } else {
      starCount = 1;
    }

    return (
      <div className="flex items-center">
        {Array(starCount)
          .fill(0)
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-400" />
          ))}
        {Array(5 - starCount)
          .fill(0)
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
          ))}
      </div>
    );
  };

  const reviews = [
    {
      name: "Trustpilot",
      rating: 4.8,
      reviews: "Based on 1,234 reviews",
      logo: "/trustpilot-1.svg",
    },
    {
      name: "Google",
      rating: 4.9,
      reviews: "Based on 2,345 reviews",
      logo: "/google-1-1.svg",
    },
    {
      name: "Birdeye",
      rating: 4.7,
      reviews: "Based on 1,567 reviews",
      logo: "/birdeye-vector-logo.svg",
    },
  ];

  return (
    <section className="p-8 md:p-20 mx-4 md:mx-40 bg-blue-500 text-center rounded-lg flex flex-col md:flex-row items-center">
      <div className="md:w-1/3 mb-8 md:mb-0 md:mr-8">
        <h3 className="text-2xl font-bold text-white">Who is BoxCar</h3>
        <p className="mt-4 text-white">
          Everyone can buy and sell vehicles more easily, contact us via our offline channel, mobile service, and more.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-4 w-full md:w-2/3">
        {reviews.map((review) => (
          <div key={review.name} className="p-4 bg-white rounded-lg flex flex-col items-center mb-4 md:mb-0 md:flex-1">
            <h4 className="text-lg font-bold mt-4 flex flex-col items-center">
              {review.rating.toFixed(1)}
              <span className="ml-2">{renderStars(review.rating)}</span>
            </h4>
            <p className="text-muted-foreground">{review.reviews}</p>
            <div className="h-20 w-20 relative">
              <Image src={review.logo} alt={review.name} layout="fill" objectFit="contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoIsBoxCar;
