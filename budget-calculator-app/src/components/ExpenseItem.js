import React, { useState } from "react";

const ExpenseItem = React.memo(() => {

    return (
        <div>
            <li className="bg-white leading-6 px-5 py-2.5 mb-4 border border-gray-300 flex justify-between transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-between w-3/5">
                    <span className="mr-8"></span>
                    <span className="font-light text-base py-0.5 px-0.5">원</span>
                </div>
                <div>
                    <button className="bg-transparent border-none text-x1 focus:outline-none cursor-pointer text-green-500">수정</button>
                    <button className="bg-transparent border-none text-x1 focus:outline-none cursor-pointer text-red-500">삭제</button>
                </div>
            </li>
        </div>
    );
})

export default ExpenseItem;