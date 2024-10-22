export default function WhatWeThink() {
  return (
    <div className=" bg-secondary p-12 grid grid-cols-2">
      <section className=" grid place-content-center ">
        <h2 className=" text-3xl mb-6 font-semibold">
          Listen to what our experts have to say about investment planning
        </h2>
        <p className=" text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          facere vero ad ducimus consequuntur, placeat eum provident praesentium
          sequi blanditiis.
        </p>
      </section>
      <section>
        <div className="container overflow-hidden w-full max-w-[890px] mx-auto space-y-2">
          {/* <iframe
            className="mx-auto w-full h-[300px] lg:h-[300px]"
            src="https://youtu.be/C0DPdy98e4c?si=r3dhg4cPzM0F-1Bl"
            title="WHAT WE DO AT CAMPUS ORACLE"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/C0DPdy98e4c?si=NgoDcEfhdy4w08bD"
            title="Interview with our experts"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
