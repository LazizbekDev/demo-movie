import React from 'react';

const HeaderItem = ({ Icon, title }) => {
    return (
        <div className={'group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white'}>
            <Icon className={'h-8 mb-50 group-hover:animate-bounce sm:h-5'} />
            <p className={'tracking-widest opacity-0 group-hover:opacity-100 transition-all'}>{title}</p>
        </div>
    );
};

export default HeaderItem;