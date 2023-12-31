import tw from "tailwind-styled-components";
import * as ContainerListItem from "@/components/List/components/ListItem/style";
import * as ContainerList from "@/components/List/style";
export const Nav = tw.nav`
    hidden
    lg:flex 
    items-center 
    justify-between
    `;
export const NavItem = tw.ul`
    flex 
    gap-4
`;

export const NavItemLink = tw.li`
    text-md 
    transition-colors 
    duration-300 
    ease-in-out 
    hover:text-link
`;


export const Content = tw.div`
    z-50
    flex
    transition-colors
    duration-300
    hover:text-link
    lg:hidden
`;

export const ContainerMobile = tw.div`
fixed left-0 top-0 z-30 min-h-screen w-full overflow-hidden bg-primary/80 lg:hidden pt-[4rem]
`;

export const NavMobile = tw.nav`
    mx-auto
    flex
    max-w-[80%]
    items-center
    justify-center
    rounded-2xl
    border
    border-gray-600
    bg-secondary
    py-3
    shadow-2xl
`;

export const NavMobileItem = tw(ContainerList.Container)`
    w-full
    flex-col
    px-4
`;

export const NavMobileItemLink = tw(ContainerListItem.Container)`
    border-b
    border-gray-600
    py-3
`;



