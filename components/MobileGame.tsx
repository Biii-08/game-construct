import React from "react";

type Props = {};

const MobileGame = (props: Props) => {
  return (
    <div className="mt-10">
      <div className="flex items-center  p-5 space-x-7 bg-[#120B32] mb-10">
        <img src='/assets/image/mobile1.png' alt="" className="flex justify-center" />
        <div className="flex flex-col justify-start">
          <h1>Golden City</h1>
          <button>Lease Cart</button>
        </div>
      </div>
      <div className="flex items-center justify-between p-5 space-x-7 bg-[#120B32] mb-10">
        <img src="/assets/image/mobile2.png" alt="" className="flex justify-center" />
        <div className="flex justify-start">
          <h1>Golden City</h1>
          <button className="">Lease Cart</button>
        </div>
      </div>
      <div className="flex items-center justify-between p-5 space-x-7 bg-[#120B32] mb-10">
        <img src="/assets/image/mobile3.png" alt="" className="flex justify-center" />
        <div className="flex justify-start">
          <h1>Golden City</h1>
          <button>Lease Cart</button>
        </div>
      </div>
      <div className="flex items-center justify-between p-5 space-x-7 bg-[#120B32] mb-10">
        <img src="/assets/image/mobile4.png" alt="" className="flex justify-center" />
        <div className="flex justify-start">
          <h1>Golden City</h1>
          <button>Lease Cart</button>
        </div>
      </div>
      <div className="flex items-center justify-between p-5 space-x-7 bg-[#120B32] mb-10">
        <img src="/assets/image/mobile5.png" alt="" className="flex justify-center" />
        <div className="flex justify-start">
          <h1>Golden City</h1>
          <button>Lease Cart</button>
        </div>
      </div>
    </div>
  );
};

export default MobileGame;