import React from "react";
import Image from "next/image";
import spinner from "../public/images/spinner.gif";

function Loading() {
  return (
    <div>
      <div className=" w-full h-screen bg-white z-50 flex items-center justify-center">
        <div className=" loading w-1/2 h-28 relative ">
          <Image src={spinner} alt="" layout={"fill"} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
