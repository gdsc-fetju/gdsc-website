import Link from "next/link";
import React from "react";

function NavLinks({ name, redirectTo }) {
  return (
    <>
      {redirectTo.startsWith("#") ? (
        <a href={"/" + redirectTo}>
          <div className="flex items-center rounded-xl cursor-pointer md:p-6 p-2 sm:h-6 md:hover:bg-gray-100  group">
            <ul className="group text-gray-500 transition-all duration-300 ease-in-out ">
              <span
                className={`font-light group-hover:text-black bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
              >
                {name}
              </span>
            </ul>
          </div>
        </a>
      ) : (
        <Link href={redirectTo}>
          <div className="flex items-center rounded-xl cursor-pointer md:p-6 p-2 sm:h-6 md:hover:bg-gray-100  group">
            <ul className="group text-gray-500 transition-all duration-300 ease-in-out ">
              <span
                className={`font-light group-hover:text-black bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out`}
              >
                {name}
              </span>
            </ul>
          </div>
        </Link>
      )}
    </>
  );
}

export default NavLinks;
