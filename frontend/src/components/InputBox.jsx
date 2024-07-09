import React from "react";
const InputBox = ({ label, onChange }) => {
    return (
        <div>
            <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">
                {label}
            </label>
            <input
                type="number"
                className="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 text-white"
                onChange={(e) => onChange(parseInt(e.target.value))}
            />
        </div>
    );
};
export default InputBox;
