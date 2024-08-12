
import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers Say About Us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              “Awesome Tasty Delicious food..everything is delicious especially special mutton thali And Chicken Nawabi Tandoor in starter must visit once and enjoy the food..The owner takes good care of the food that is being served to you, the behavior of the waiter is also good, I liked it and clean Cleanliness is also good, this is a complete family restaurant, you can go to Easy... thank you very much..!!”
            </blockquote>
           

           <div className="flex items-center gap-4 flex-wrap">
           
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/images/home/testimonials/testimonial1.png" />
                </div>
              
            </div>
            
            <div className="space-y-1">
              <h5 className="text-lg font-semibold">Customer Feedback</h5>
              <div className="flex items-center gap-2"><FaStar className="text-yellow-400"/> <span className="font-medium">4.9</span></div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;