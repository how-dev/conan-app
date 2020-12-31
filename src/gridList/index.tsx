import React from 'react';
import "./index.css"
import { result, Conan } from "../images";
import { CompleteCard } from "../components/card"

const CoverList: () => JSX.Element =  function (): JSX.Element {
    return (
        <div className="coverBox">
            {result.map((data: Conan, index: number) => (
                <CompleteCard
                    key={index}
                    title={data.title}
                    cover={data.cover}
                    description={data.description}
                    year={data.year}
                />
            ))}
        </div>
    );
}

export default CoverList;
