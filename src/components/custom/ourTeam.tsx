import Image from 'next/image';
import React from 'react';

const OurTeam = () => {
  const members = [
    {
      name: "Jerome Bell",
      position: "Software Engineer",
      img: "/woman-1.jpg",
      bg: "bg-[#FFDAB9]"
    },
    {
      name: "Courtney Henry",
      position: "Development Manager",
      img: "/men-1.jpg",
      bg: "bg-[#F7EEDD]"
    },
    {
      name: "Arlene McCoy",
      position: "Software Engineer",
      img: "/woman-2.jpg",
      bg: "bg-[#FFF9D0]"
    },
    {
      name: "Arlene McCoy",
      position: "Software Developer",
      img: "/men-2.jpg",
      bg: "bg-[#E1FFEE]"
    },
    {
      name: "Jenny Wilson",
      position: "UI/UX Designer",
      img: "/woman-3.jpg",
      bg: "bg-[#fdf5e2]"
    },
  ];

  return (
    <section className="py-20 px-4 lg:mx-16 text-center">
      <h3 className="text-2xl font-bold">Our Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
        {members.map((member) => (
          <div key={member.name} className={`text-center p-5 rounded-lg ${member.bg}`}>
            <Image src={member.img} alt={member.name} width={192} height={200} className="w-48 h-48 mx-auto rounded-lg object-cover" />
            <h4 className="text-lg font-bold mt-8">{member.name}</h4>
            <p className="text-muted-foreground">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
