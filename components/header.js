import React from 'react';
import Image from 'next/image'
import logo from '../images/logo1.png'
import HeaderItem from "./header-item";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className={'flex flex-col sm:flex-row justify-between items-center m-5 h-auto'}>
            <div className={'flex justify-evenly max-w-2xl'}>
                <HeaderItem Icon={HomeIcon} title={'HOME'} />
                <HeaderItem Icon={LightningBoltIcon} title={'TRENDING'} />
                <HeaderItem Icon={BadgeCheckIcon} title={'VERIFIED'} />
                <HeaderItem Icon={CollectionIcon} title={'COLLECTIONS'} />
                <HeaderItem Icon={SearchIcon} title={'SEARCH'} />
                <HeaderItem Icon={UserIcon} title={'ACCOUNT'} />
            </div>
            <Image src={logo} className={'object-contain'} width={200} height={80}/>
        </header>
    );
};

export default Header;