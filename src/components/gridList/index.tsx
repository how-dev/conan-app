import React from 'react';
import "./index.css"
import { result, Conan } from "../../images";
import { CompleteCard } from "../card"

const CoverList: React.FC = () => {
    return (
        <div className="coverBox">
            {result.map((data: Conan, index: number) => (
                <CompleteCard
                    key={index}
                    title={data.title}
                    cover={data.cover}
                    description={data.description}
                    year={data.year}
                    persons={data.persons}
                    totalPages={data.totalPages}
                    coverPrice={data.coverPrice}
                    company={data.company}
                    id={data.id}
                />
            ))}
        </div>
    );
}

export default CoverList;
