// components/AboutComponents/TeamMemberCard.tsx
import React from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, image }) => {
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
