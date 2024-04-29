

const DiscountSec = () => {
    return (
        <div>
            <div className="text-center my-20">
                <h1 className="text-3xl font-bold">Offers</h1>
                <p>Here is our exciting offers for you..</p>
            </div>
            <div className="flex justify-center gap-x-5">
                <div className="bg-orange-400 w-96 h-52 border rounded-xl">
                    <div className="text-4xl font-semibold text-white ml-5 my-10">
                    <h1>20% <br /> <span className="font-extrabold">off</span></h1>
                    <p className="text-xl font-medium mt-2 text-white">Get 20% discount using <span className="font-extrabold text-2xl">coupon20</span></p>
                    </div>
                    
                </div>
                <div className="bg-orange-200 w-96 h-52 border rounded-xl">
                <div className="text-4xl font-semibold text-orange-500 ml-5 my-10">
                    <h1>10% <br /> <span className="font-extrabold">off</span></h1>
                    <p className="text-xl font-medium mt-2 text-orange-500">Get 10% discount using <span className="font-extrabold text-2xl">coupon10</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DiscountSec;