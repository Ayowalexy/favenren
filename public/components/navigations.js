import { CgMenuGridR } from 'react-icons/cg';
import { AiFillCreditCard } from 'react-icons/ai';
import { RiHandCoinFill, RiExchangeFill, RiCustomerService2Fill, RiLogoutCircleFill } from 'react-icons/ri';
import { IoNewspaperSharp } from 'react-icons/io5';
import { BsPersonFill } from 'react-icons/bs';


export const navigations = [
    {
        route: '/dashboard',
        icon: CgMenuGridR,
        name: 'Dashboard'
    },
    {
        route: '/trade-giftcard',
        icon: AiFillCreditCard,
        name: 'Trade Giftcard'
    },{
        route: '/trade-crypto',
        icon: RiHandCoinFill,
        name: 'Trade Crypto'
    },{
        route: '/dashboard',
        icon: IoNewspaperSharp,
        name: 'Transactions'
    },{
        route: '/dashboard',
        icon: RiExchangeFill,
        name: 'Rate Checker'
    },{
        route: '/dashboard',
        icon: RiCustomerService2Fill,
        name: 'Help Desk'
    },{
        route: '/dashboard',
        icon: BsPersonFill,
        name: 'Account'
    },{
        route: '/dashboard',
        icon: RiLogoutCircleFill,
        name: 'Logout'
    },
]