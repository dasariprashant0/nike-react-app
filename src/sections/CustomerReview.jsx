import React from "react";
import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-bold font-palanquin text-center">
        What Our
        <span className="text-coral-red"> Cusomers </span>
        Say?
      </h3>
      <p className="text-center m-auto mt-4 max-w-lg info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
