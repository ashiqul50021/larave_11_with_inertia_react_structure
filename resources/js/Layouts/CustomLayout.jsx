import { Link } from '@inertiajs/react';
import React from 'react';

const CustomLayout = ({ children }) => {
    return (
        <>
            <main>
                <header>
                    <Link href="/custom-home">Home</Link>
                    <Link href="/custom-about">About</Link>
                    <Link href="/custom-contact">Contact</Link>
                </header>
                <article>{children}</article>
            </main>
        </>
    );
};

export default CustomLayout;
