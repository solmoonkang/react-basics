import React from "react";

export default function Form() {

    return (
        <div className="w-full bg-white p-4">
            <form>
                <div className="flex">
                    <div className="py-4 px-3 flex-1">
                        <label className="block text-orange-400" htmlFor="charge">지출 항목</label>
                        <input className="form-control w-full h-12 border-b border-gray-600 bg-transparent outline-none" type="text" placeholder="예) 렌트비" />
                    </div>

                    <div className="py-4 px-3 flex-1">
                        <label className="block text-orange-400" htmlFor="amount">비용</label>
                        <input className="form-control w-full h-12 border-b border-gray-600 bg-transparent outline-none" placeholder="예) 100" type="number" />
                    </div>
                </div>
                <button className="px-4 py-2 border rounded" type="submit">제출</button>
            </form>
        </div>
    );
}
