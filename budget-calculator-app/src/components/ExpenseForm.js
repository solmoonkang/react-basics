import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Form({ handleSubmit, expense, setExpense }) {

    const handleChange = (event) => {
        setExpense({ ...expense, [event.target.name]: event.target.value });
    }

    return (
        <div className="w-full bg-white p-4">
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <div className="py-4 px-3 flex-1">
                        <label className="block text-orange-400" htmlFor="charge">지출 항목</label>
                        <input id="charge" name="category" className="form-control w-full h-12 border-b border-gray-600 bg-transparent outline-none" type="text" placeholder="예) 렌트비" value={expense.category} onChange={handleChange} />
                    </div>
                    <div className="py-4 px-3 flex-1">
                        <label className="block text-orange-400" htmlFor="amount">비용</label>
                        <input id="amount" name="amount" className="form-control w-full h-12 border-b border-gray-600 bg-transparent outline-none" type="number" placeholder="예) 100" value={expense.amount} onChange={handleChange} />
                    </div>
                </div>
                <button className="px-4 py-2 border rounded" type="submit">제출 <FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
        </div>
    );
}
