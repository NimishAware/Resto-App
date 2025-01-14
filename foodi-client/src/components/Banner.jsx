import React from 'react'
import bannerImg from "/images/home/chef.png";
import tandoor from "../../public/images/recipes/nawabi_tandoori.webp"
import muttonthali from "../../public/images/recipes/mutton-thali (1).jpg"

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            

            {/*images*/}
            <div className="md:w-1/2">
          <img src={bannerImg} alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-5 gap-4">
            <div className="bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64">
              <img src={tandoor} alt=""  className="rounded-2xl"/>
              <div className="space-y-1">
                <h5>Nawabi Tandoori</h5>
                <div className="rating rating-sm">
              
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                
                </div>
                <p className="text-red">₹540</p>
              </div>
            </div>
            <div className="bg-white px-3 py-2 rounded-2xl md:flex items-center gap-3 shadow-sm w-64 hidden">
              <img src={muttonthali} alt=""  className="rounded-2xl"/>
              <div className="space-y-1">
                <h5>Spl. Mutton Thali</h5>
                <div className="rating rating-sm">
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                
                </div>
                <p className="text-red">₹380</p>
              </div>
            </div>
          </div>
        </div>

        {/*texts*/}
        <div className='md:w-1/2 space-y-7 px-4'>
                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug '>Dive into Delights of Delectable <span className='text-green'>Food</span></h2>
                <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <button className='btn bg-red px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
            </div>

        </div>
        </div>
  )
}

export default Banner