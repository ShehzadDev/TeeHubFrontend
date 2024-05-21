import React, { useState, useRef } from "react";
import Logo from "./Logo";
import Link from "./Link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm("service_5rh203d", "template_u8rgmno", form.current, {
        publicKey: "OE0SD-WANcV3_9uFl",
      })
      .then(
        () => {
          toast.success("SUCCESS!");
          console.log("SUCCESS!");
        },
        error => {
          toast.error("FAILED...");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container mx-auto px-24 py-12">
      <div className="grid grid-cols-3">
        <div className="flex item-start justify-center flex-col gap-5">
          <Logo />
          <a href="whatsapp://send?phone=+923166974919">+92 (301) 2345678</a>
          <a href="mailto:support@teehub.shop">support@teehub.shop</a>
        </div>
        <div className="flex flex-col gap-7 ">
          <h1 className="text-xl font-semibold">Quick Links</h1>
          <div className="flex ">
            <Link href="#" text="Home" />
            <Link href="#" text="Services" />
            <Link href="#" text="About us" />
            <Link href="#" text="Contact" />
          </div>
        </div>
        <div className="flex item-start justify-center flex-col gap-5">
          <h2 className="text-xl font-semibold">Subscribe</h2>
          <form onSubmit={sendEmail} ref={form} className="flex items-center">
            <input
              type="email"
              name="to_name"
              placeholder="Get product updates"
              className="flex-1 py-2 px-4 rounded-l border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-basic hover:bg-basic-100 text-white py-2 px-4 border-gray-500 border rounded-r flex items-center justify-center"
            >
              <span className="sr-only">Subscribe</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="border-t-2 border-gray-300 mt-10 pt-10 flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <a href="https://www.linkedin.com" target="_blank">
            <svg
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.4046 41.1431C32.5999 41.1431 41.6755 32.3007 41.6755 21.3931C41.6755 10.4854 32.5999 1.64307 21.4046 1.64307C10.2094 1.64307 1.13379 10.4854 1.13379 21.3931C1.13379 32.3007 10.2094 41.1431 21.4046 41.1431Z"
                stroke="#0A142F"
                stroke-width="1.5"
              />
              <path
                d="M16.7526 17.4057C17.7017 17.4057 18.4711 16.6561 18.4711 15.7314C18.4711 14.8067 17.7017 14.0571 16.7526 14.0571C15.8036 14.0571 15.0342 14.8067 15.0342 15.7314C15.0342 16.6561 15.8036 17.4057 16.7526 17.4057Z"
                fill="#0A142F"
              />
              <path
                d="M18.1847 18.5239H15.3206C15.1625 18.5239 15.0342 18.6489 15.0342 18.803V27.1744C15.0342 27.3285 15.1625 27.4535 15.3206 27.4535H18.1847C18.3428 27.4535 18.4711 27.3285 18.4711 27.1744V18.803C18.4711 18.6489 18.3428 18.5239 18.1847 18.5239Z"
                fill="#0A142F"
              />
              <path
                d="M26.7194 18.0598C25.4952 17.6513 23.9641 18.0102 23.0459 18.6536C23.0144 18.5337 22.9021 18.4444 22.7686 18.4444H19.9046C19.7465 18.4444 19.6182 18.5694 19.6182 18.7234V27.0949C19.6182 27.2489 19.7465 27.3739 19.9046 27.3739H22.7686C22.9267 27.3739 23.0551 27.2489 23.0551 27.0949V21.0786C23.5179 20.6901 24.1142 20.5662 24.6022 20.7683C25.0754 20.9631 25.3463 21.4386 25.3463 22.072V27.0949C25.3463 27.2489 25.4746 27.3739 25.6327 27.3739H28.4968C28.6549 27.3739 28.7832 27.2489 28.7832 27.0949V21.51C28.7506 19.2168 27.6433 18.3679 26.7194 18.0598Z"
                fill="#0A142F"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <svg
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.3216 41.1431C32.5169 41.1431 41.5924 32.3007 41.5924 21.3931C41.5924 10.4854 32.5169 1.64307 21.3216 1.64307C10.1263 1.64307 1.05078 10.4854 1.05078 21.3931C1.05078 32.3007 10.1263 41.1431 21.3216 41.1431Z"
                stroke="#0A142F"
                stroke-width="1.5"
              />
              <path
                d="M23.1672 16.3377H25.0302C25.2016 16.3377 25.3407 16.21 25.3407 16.0527V14.3422C25.3407 14.1848 25.2016 14.0571 25.0302 14.0571H23.1672C21.2843 14.0571 19.7516 15.4637 19.7516 17.193V19.1885H17.5781C17.4067 19.1885 17.2676 19.3162 17.2676 19.4735V21.184C17.2676 21.3414 17.4067 21.4691 17.5781 21.4691H19.7516V27.4556C19.7516 27.613 19.8907 27.7407 20.0621 27.7407H21.9252C22.0966 27.7407 22.2357 27.613 22.2357 27.4556V21.4691H24.4092C24.5427 21.4691 24.6614 21.3904 24.7042 21.2741L25.3252 19.5636C25.3569 19.477 25.3407 19.3812 25.2824 19.3065C25.2234 19.2324 25.1302 19.1885 25.0302 19.1885H22.2357V17.193C22.2357 16.7214 22.6536 16.3377 23.1672 16.3377Z"
                fill="#0A142F"
              />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank">
            <svg
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.2376 41.1431C32.4329 41.1431 41.5085 32.3007 41.5085 21.3931C41.5085 10.4854 32.4329 1.64307 21.2376 1.64307C10.0424 1.64307 0.966797 10.4854 0.966797 21.3931C0.966797 32.3007 10.0424 41.1431 21.2376 41.1431Z"
                stroke="#0A142F"
                stroke-width="1.5"
              />
              <path
                d="M27.8631 17.7417C27.769 17.6381 27.6174 17.6121 27.4929 17.676C27.4156 17.7157 27.2701 17.7678 27.0974 17.8193C27.3153 17.529 27.4905 17.204 27.5678 16.9118C27.6013 16.7859 27.5524 16.6532 27.4459 16.5781C27.3395 16.5037 27.1977 16.5037 27.0913 16.5781C26.9235 16.6953 26.1139 17.0476 25.6021 17.1618C24.4453 16.1464 23.0991 16.0409 21.6996 16.8597C20.562 17.5253 20.3144 18.8787 20.3627 19.7037C17.7588 19.4524 16.1403 18.0742 15.2292 16.9335C15.1654 16.8535 15.0627 16.8113 14.9661 16.8175C14.8646 16.825 14.773 16.8814 14.721 16.9689C14.2902 17.6977 14.1708 18.5034 14.3769 19.2992C14.4895 19.7334 14.6864 20.1161 14.9147 20.4263C14.8052 20.3723 14.6994 20.3047 14.5997 20.2241C14.5081 20.1484 14.38 20.1341 14.2717 20.1844C14.164 20.2358 14.0953 20.345 14.0953 20.4647C14.0953 21.8312 14.9482 22.743 15.7448 23.2194C15.616 23.2038 15.4817 23.1753 15.3462 23.1338C15.2298 23.0984 15.1035 23.1338 15.0231 23.2256C14.9426 23.3167 14.9234 23.447 14.9735 23.558C15.421 24.5498 16.269 25.2321 17.3181 25.4796C16.4021 26.0186 15.1759 26.2829 14.0532 26.1532C13.9077 26.1328 13.7691 26.2252 13.7233 26.3654C13.6775 26.5056 13.7375 26.6594 13.8656 26.7313C15.569 27.6897 17.1089 28.032 18.4396 28.032C20.3763 28.032 21.8711 27.3076 22.7809 26.7016C25.2338 25.0702 26.7626 22.1413 26.5497 19.5207C26.9427 19.2298 27.5307 18.6926 27.8953 18.1151C27.9708 17.9985 27.9572 17.8447 27.8631 17.7417Z"
                fill="#0A142F"
              />
            </svg>
          </a>
        </div>
        <p className="text-sm ">&copy; 2024 TeeHub. All Rights Reserved</p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Footer;
