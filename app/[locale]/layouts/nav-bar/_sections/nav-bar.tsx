'use client';

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { Metadata } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Navigation Bar',
};

export default function NavBar() {
  const pathName = usePathname();

  return (
    <Navbar isBordered>
      <NavbarContent justify='start'>
        <NavbarBrand>
          <Link href='/en/layouts/nav-bar'>
            <p className='hidden font-bold text-inherit sm:block'>LOGO</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className='hidden gap-4 sm:flex'>
          <NavbarItem isActive={pathName == '/en/layouts/nav-bar/features'}>
            <Link href='/en/layouts/nav-bar/features'>Features</Link>
          </NavbarItem>
          <NavbarItem isActive={pathName == '/en/layouts/nav-bar/customers'}>
            <Link href='/en/layouts/nav-bar/customers'>Customers</Link>
          </NavbarItem>
          <NavbarItem isActive={pathName == '/en/layouts/nav-bar/integrations'}>
            <Link href='/en/layouts/nav-bar/integrations'>Integrations</Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent className='items-center' justify='end'>
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder='Type to search...'
          size='sm'
          type='search'
        />
        <Dropdown placement='bottom-end'>
          <DropdownTrigger>
            <Avatar
              as='button'
              className='transition-transform'
              color='secondary'
              name='Jason Hughes'
              size='sm'
              src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
            />
          </DropdownTrigger>
          <DropdownMenu aria-label='Profile Actions' variant='flat'>
            <DropdownItem className='h-14 gap-2'>
              <p className='font-semibold'>Signed in as</p>
              <p className='font-semibold'>zoey@example.com</p>
            </DropdownItem>
            <DropdownItem>My Settings</DropdownItem>
            <DropdownItem>Team Settings</DropdownItem>
            <DropdownItem>Analytics</DropdownItem>
            <DropdownItem>System</DropdownItem>
            <DropdownItem>Configurations</DropdownItem>
            <DropdownItem>Help & Feedback</DropdownItem>
            <DropdownItem color='danger'>Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
