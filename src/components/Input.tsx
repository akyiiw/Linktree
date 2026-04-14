import type React from "react";

interface InputProps {
    name: string;
    id: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {
    return (
        <div className="flex flex-col mb-2"> 
            <label htmlFor={props.id} className=" font-medium text-gray-700">
                {props.name}
            </label>
            <input 
                className="border border-gray-400 p-2 rounded w-full outline-none transition-colors focus:border-violet-900"
                type={props.type || "text"}
                id={props.id}
                name={props.name} 
                placeholder={props.placeholder || ""}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}