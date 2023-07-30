import React from "react";
import TeamMember from "./TeamMember";
import Author1 from "./image/author1.jpeg";
import Author2 from "./image/author2.jpeg";
import Author3 from "./image/author3.png";
import Author4 from "./image/author4.jpeg";
import Author5 from "./image/author5.jpeg";

function Team() {
  return (
    <div className="w-full sm:p-20 p-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="block">
          <p className="text-[54px] font-bold text-[#333962]">Team</p>
          <p className="text-[32px] font-bold text-white -mt-4">
            With The Contribution of
          </p>
        </div>
        <div className="grid sm:grid-cols-5 grid-cols-2 sm:mx-auto mt-6 sm:map-6 gap-4">
          <TeamMember
            imgUrl={Author1.src}
            name="Sophia Munn"
            job="FrontEnd Developer"
          />

          <TeamMember
            imgUrl={Author4.src}
            name="Sophia Munn"
            job="FrontEnd Developer"
          />

          <TeamMember
            imgUrl={Author2.src}
            name="Sophia Munn"
            job="FrontEnd Developer"
          />

          <TeamMember
            imgUrl={Author3.src}
            name="Sophia Munn"
            job="FrontEnd Developer"
          />

          <TeamMember
            imgUrl={Author5.src}
            name="Sophia Munn"
            job="FrontEnd Developer"
          />

          <TeamMember
            imgUrl={Author2.src}
            name="Sophia Munn"
            job="FrontEnd Developer"
          />

          <TeamMember
            imgUrl={Author3.src}
            name="Sophia Munn"
            job="FrontEnd Developer"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
