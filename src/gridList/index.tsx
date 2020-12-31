import React from 'react';
import { result, Conan } from "../images";

const CoverList: () => JSX.Element =  function (): JSX.Element {

    return (
        <div>
            <div>
                {result.map((data: Conan, index: number) => (
                    <div key={index}>
                        <img src={data.cover} alt={data.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoverList;
