import React from "react";
import tailwind from 'tailwindcss/tailwind.css';
import getPremiumStore from "getPremiumApp/getPremiumStore";

const Form = () => {
    const premium = getPremiumStore((state) => state.premium);

    return (
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
            <div><b>Pay Premium</b></div>
            <form className="mt-5">
                Amount: <input type="text" className="border border-gray-400 rounded-md p-1" placeholder={premium} />
                <button className="bg-green-500 text-white rounded-md p-1 ml-2">Pay</button>
            </form>
        </div>
    );
}

export default Form;