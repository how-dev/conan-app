import React from "react";
import { useState, useRef } from "react";

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (name: string) => string;
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
    const [count, setCount] = useState<TextNode>({ text: "hello"});
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLInputElement>(null);

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    );
};
