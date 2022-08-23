import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

//internal import
import { UserContext } from "@context/UserContext";

const Footer = () => {
  const {
    state: { userInfo },
  } = useContext(UserContext);

  return (
    <div
      className="z-50 pb-16 lg:pb-0 xl:pb-0 bg-white Acme"
      style={{ backgroundColor: `#FDE8A6` }}
    >
      <div className="mx-auto max-w-screen-2xl px-2 sm:px-10">
        <div className="justify-items-center grid grid-cols-4 md:grid-cols-4 xl:grid-cols-4 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">


          <div className="pb-3.5 sm:pb-0 col-span-4 md:col-span-4 lg:col-span-1 mt-6">
            <Link href="/">
              <a className="mr-3 lg:mr-12 xl:mr-12" rel="noreferrer">
                <Image
                  width={128}
                  height={71}
                  src="/logo/logo.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>

          <div className="pb-3.5 sm:pb-0 col-span-2 md:col-span-2 lg:col-span-1 mt-6">
            <div className="flex flex-col justify-center text-center">
              <h3 className="lg:leading-7 font-bold mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                Company
              </h3>

              <ul className=" flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <Link href="/about-us">
                    <a className="text-black inline-block w-full hover:new-text-600">
                      About Us
                    </a>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link href="/contact-us">
                    <a className="text-black inline-block w-full hover:new-text-600">
                      Contact us
                    </a>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link href="#">
                    <a className="text-black inline-block w-full hover:new-text-600">
                      Careers
                    </a>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link href="#">
                    <a className="text-black inline-block w-full hover:new-text-600">
                      Latest news
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pb-3.5 sm:pb-0 col-span-2 md:col-span-2 lg:col-span-1 mt-6">
            <div className="flex flex-col justify-center text-center">
              <h3 className="text-md lg:leading-7 font-bold mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                My Account
              </h3>
              <ul className=" lg:text-15px flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <Link href={`${userInfo?.email ? "/user/dashboard" : "#"}`}>
                    <a className="text-black inline-block w-full hover:new-text-600">
                      Dashboard
                    </a>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link href={`${userInfo?.email ? "/user/my-orders" : "#"}`}>
                    <a className="text-black inline-block w-full hover:new-text-600">
                      My Orders
                    </a>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link href={`${userInfo?.email ? "/user/dashboard" : "#"}`}>
                    <a className="text-black inline-block w-full hover:new-text-600">
                      Recent Orders
                    </a>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link
                    href={`${userInfo?.email ? "/user/update-profile" : "#"}`}
                  >
                    <a className="text-black inline-block w-full hover:new-text-600">
                      Updated Profile
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pb-3.5 sm:pb-0 col-span-4 md:col-span-4 lg:col-span-1 mt-6">
            <h3 className="text-md lg:leading-7 font-bold">
              Follow Us
            </h3>
            <ul className=" flex">
              <li className="flex items-center mr-3 transition ease-in-out duration-500">
                <Link href="https://www.facebook.com">
                  <a
                    aria-label="Social Link"
                    rel="noreferrer"
                    target="_blank"
                    className="block text-center mx-auto text-black-500 hover:text-white"
                  >
                    <FacebookIcon size={34} round />
                  </a>
                </Link>
              </li>
              <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                <Link href="https://twitter.com">
                  <a
                    aria-label="Social Link"
                    rel="noreferrer"
                    target="_blank"
                    className="block text-center mx-auto text-gray-500 hover:text-white"
                  >
                    <TwitterIcon size={34} round />
                  </a>
                </Link>
              </li>
              {/* <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.pinterest.com">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      <PinterestIcon size={34} round />
                    </a>
                  </Link>
                </li> */}
              <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                <Link href="https://www.linkedin.com">
                  <a
                    aria-label="Social Link"
                    rel="noreferrer"
                    target="_blank"
                    className="block text-center mx-auto text-black-500 hover:text-white"
                  >
                    <LinkedinIcon size={34} round />
                  </a>
                </Link>
              </li>
              {/* <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                  <Link href="https://www.whatsapp.com">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                    >
                      <WhatsappIcon size={34} round />
                    </a>
                  </Link>
                </li> */}
            </ul>

          </div>

        </div>

      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
