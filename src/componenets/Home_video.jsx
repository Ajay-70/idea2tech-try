import React from "react";

function Home_video() {
  return (
    <div>
      <section className=" relative   text-center text-white">
        <div className="overflow-hidden m-3 ">
          <video
            className="object-cover w-full"
            src="/videos/promo.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
            style={{
              width: "100% ",
              height: "100%",
              objectFit: "contain",
            }}
          ></video>
        </div>
      </section>
    </div>
  );
}

export default Home_video;
