import { Typewriter } from "react-simple-typewriter";



const Question = () => {
    return (
        <div>
             <div className="text-center">
             
      <h1 className="text-center my-10 font-semibold text-4xl"><Typewriter words={["Accordion Innovations"]} loop={1000} cursor cursorStyle="_" typeSpeed={70}  delaySpeed={1000}/></h1>
      
    </div>
            
           <div className="lg:flex grid lg:justify-center">
           <div className="lg:flex grid lg:gap-x-10 justify-center">
                <div>
                    <img className="w-96 mx-16 lg:mx-0 lg:w-auto"  src="https://i.ibb.co/rMrXrHR/Whats-App-Image-2024-04-30-at-01-13-53-8b771924.jpg" alt="" />
                </div>
            <div className="lg:w-[600px] w-96">
            <div className="collapse collapse-plus bg-base-200 ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                How can I book a trip with your agency?
                </div>
                <div className="collapse-content">
                    <p>Booking with us is easy! You can either visit our website and book online through our user-friendly interface, or you can give us a call and speak with one of our travel experts who will guide you through the booking process step by step.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                What safety measures are in place for travel ?
                </div>
                <div className="collapse-content">
                    <p>Your safety is our top priority. We closely follow the guidelines and recommendations of health authorities and implement rigorous safety protocols for all our trips. These include enhanced cleaning procedures, social distancing measures, and requirements for masks and sanitization.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Can I customize my travel itinerary?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! We understand that every traveler has unique preferences and interests. That is why we offer customizable travel itineraries tailored to your needs. Whether you want to explore specific destinations, engage in certain activities, or have dietary preferences, we all work with you to create the perfect itinerary.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                What happens if I need to cancel or reschedule my trip?
                </div>
                <div className="collapse-content">
                    <p>We understand that circumstances can change, and we strive to provide flexibility to our customers. Depending on the terms of your booking and the type of trip, we may offer options for cancellations or rescheduling. We recommend reaching out to our customer service team as soon as possible to discuss your options and any applicable policies.</p>
                </div>
            </div>
            </div>
            </div>
           </div>
        </div>
    );
};

export default Question;