import { Typewriter } from "react-simple-typewriter";



const Question = () => {
    return (
        <div>
             <div className="text-center">
             
      <h1 className="text-center my-10 font-semibold text-4xl"><Typewriter words={["Accordion Innovations"]} loop={1000} cursor cursorStyle="_" typeSpeed={70}  delaySpeed={1000}/></h1>
      
    </div>
            
            <div className="lg:flex grid gap-x-10 justify-center">
                <div className="w-1/3">
                    <h1><img  src="https://i.ibb.co/rMrXrHR/Whats-App-Image-2024-04-30-at-01-13-53-8b771924.jpg" alt="" /></h1>
                </div>
            <div className="2/3">
            <div className="collapse collapse-plus bg-base-200 ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Question;