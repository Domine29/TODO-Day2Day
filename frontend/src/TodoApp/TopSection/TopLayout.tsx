import React from 'react';

export default function TopLayout() {
  return (
    <section className="bg-background bg-cover h-[13.313rem]">
      <img
        src="/images/logo.svg"
        alt="logo"
        className="mx-auto pt-2.5 mix-blend-lighten"
      />
      <div className="flex flex-row items-center ml-5 mt-5 gap-5">
        <img src="/images/Profile.svg" alt="" className="" />
        <p className="text-white text-xl">Good Morning Eric</p>
      </div>
    </section>
  );
}
