import CardReview from "./CardReview";

export default function CardsReview({reviews}) {
   console.log("reviews en cardsReview: ",reviews);
   return(
      <div className="flex flex-col">
         {
            reviews.map((review)=>{
                const dateAndHour = review.createdAt.substring(0, 10) +" "+ review.createdAt.substring(11, 19);
               return(
                  <CardReview
                     key={review.id}
                     clientName={review.clientName}
                     clientImage={review.clientImage}
                     rating={review.rating}
                     comment={review.comment}
                     dateAndHour={dateAndHour}
                     
                  />
               );
            })
         }
      </div>
   );
}
