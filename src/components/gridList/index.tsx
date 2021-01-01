import React from 'react';
import "./index.css"
import { result, Conan } from "../../images";
import { CompleteCard } from "../card"
import { useSelector } from "react-redux";

const CoverList: React.FC = () => {
    const searchInput = useSelector((state: { searching: string }) => state.searching)
    return (
        <div className="coverBox">
            {searchInput ? result.filter(cover => cover.title?.toLowerCase().includes(searchInput) || String(cover.year)?.includes(searchInput)).map((data: Conan, index: number) => (
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
            )) : result.map((data: Conan, index: number) => (
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
