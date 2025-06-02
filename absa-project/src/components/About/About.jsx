import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <div className="mx-8  my-16 px-16 leading-normal">
      <h1 className="text-3xl">About us</h1>
      <div className="flex flex-col gap-6 my-9 text-gray-700">
        <p>
          Minana Services, founded in 2014, is a palm oil production company
          engaged in cultivating oil palm and processing palm fruits into crude
          palm oil (CPO). The company offers a variety of products including
          palm oil, coconut oil, palm kernel oil, palm stearin, and by-products
          like palm kernel shells and fiber. With a strong focus on
          sustainability, Minana Services supports over 150 farmers in the
          Ashanti, Eastern, and Central regions by providing a reliable market
          for their palm and coconut harvests.
        </p>
        <p>
          Minana Services empowers rural women by supporting their processing
          work and helping them earn sustainable incomes. The company also plans
          to expand into value-added products like soaps and biofuels to serve
          multiple industries while promoting environmentally friendly
          solutions.
        </p>
      </div>

      <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer w-[170px] mt-4">
        {" "}
        <FaArrowRight /> Learn more
      </button>
    </div>
  );
}
