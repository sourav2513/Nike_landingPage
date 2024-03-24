import { ReviewCard } from "../components";
import { reviews } from "../constants";
const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div>
        {
          reviews.map((review,index) =>(
            <ReviewCard key={index} {...review} />
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews
