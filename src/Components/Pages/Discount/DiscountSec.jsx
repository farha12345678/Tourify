import { RiDiscountPercentLine } from "react-icons/ri";


const DiscountSec = () => {
    return (
        <div>
            <div className="text-center my-20">
                <h1 className="text-3xl font-bold">Offers</h1>
                <p>Here is our exciting offers for you..</p>
            </div>
            <div className="lg:flex grid justify-center gap-x-5">
                <div className="bg-orange-400 w-96 h-52 border rounded-xl">
                    <div className="text-4xl font-semibold text-white ml-5 my-10">
                    <div className="flex gap-x-5">
                    <h1>20% <br /> <span className="font-extrabold">off</span></h1>
                    <p><RiDiscountPercentLine className="text-8xl"></RiDiscountPercentLine></p>
                    </div>
                    <p className="text-xl font-medium mt-2 text-white">Get 20% discount using <span className="font-extrabold text-2xl">coupon20</span></p>
                    </div>
                    
                </div>
                <div className="bg-orange-200 w-96 h-52 border rounded-xl">
                <div className="text-4xl font-semibold text-orange-500 ml-5 my-10">
                <div className="flex gap-x-5">
                    <h1>10% <br /> <span className="font-extrabold">off</span></h1>
                    <p><RiDiscountPercentLine className="text-8xl text-orange-500"></RiDiscountPercentLine></p>
                    </div>
                    <p className="text-xl font-medium mt-2 text-orange-500">Get 10% discount using <span className="font-extrabold text-2xl">coupon10</span></p>
                    </div>
                    
                </div>
            </div>
            <div className="flex justify-center lg:my-10">
            <div className="bg-orange-800 w-96 h-52 border rounded-xl">
                <div className="text-4xl font-semibold text-white ml-5 my-10">
                <div className="flex gap-x-5">
                    <h1>30% <br /> <span className="font-extrabold">off</span></h1>
                    <p><RiDiscountPercentLine className="text-8xl"></RiDiscountPercentLine></p>
                    </div>
                    <p className="text-xl font-medium mt-2 text-white">Get 30% discount using <span className="font-extrabold text-2xl">coupon30</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DiscountSec;