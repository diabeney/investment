export default function Quote() {
  return (
    <div className=" bg-secondary">
      <div className=" p-10 max-w-screen-2xl mx-auto">
        <p className="max-w-screen-md">
          "We are entrusted to manage the pension of millions of people in the
          UK. This responsibility drives us every day to deliver the very best
          outcomes we can for our clients."
        </p>
        <section className=" flex flex-col mt-3 ">
          <span className=" font-bold">Mrs. Smith</span>
          <span className="text-stone-800">CEO, Investico Inc.</span>
        </section>
        <section className=" mt-10">
          <div>
            <iframe
              className="mx-auto w-full h-[300px] lg:h-[600px]"
              height="600"
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
    </div>
  );
}
