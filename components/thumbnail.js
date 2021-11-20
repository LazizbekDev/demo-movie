import React from 'react';
import Image from "next/image";
import {ThumbUpIcon} from "@heroicons/react/outline";

const Thumbnail = ({ result }, ref) => {
    const myLoader = ({ src, width, quality }) => {
        return `https://themoviedb.org/t/p/original/${src}?w=${width}&q=${quality || 75}`
    }
    return (
        <div ref={ref} className={'p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-205 hover:z-50'}>
            <Image
                loader={myLoader}
                src={
                    `${result.backdrop_path || result.poster_path}` ||
                    `${result.poster_path}`
                }
                alt={'yeah'}
                height={756}
                width={1200}
                layout={'responsive'}
            />
            <div className={'p-2'}>
                <p className={'truncate max-w-md prose lg:prose-xl'}>{result.overview}</p>
                <h2 className={'transition-all mt-1 text-2xl text-white duration-100 ease-in-out group-hover:font-bold group-hover:text-red-500'}>{result.title || result.original_name}</h2>
                <p className={'flex items-center opacity-0 group-hover:opacity-100 transition-all'}>{result.media_type && `${result.media_type} °`}{" "}
                    {result.release_date || result.first_air_date} •{" "}
                    <ThumbUpIcon className={'h-5 mx-2'} /> {result.vote_count}
                </p>
            </div>
        </div>
    );
};

export default Thumbnail;