import { Link } from '@inertiajs/react'

const Layout = ({ children }) => {
    return (
        <div className='container mx-auto'>
            <div className=' w-full border p-4 columns-2'>
                <h3>left</h3>
                <h3>right</h3>
            </div>
            <div className='flex flex-row'>
                <div className='basis-1/4 border h-full'>
                    <h3>sidebar</h3>
                    <ul>
                        <li>
                            <Link href="/dashboard2">Dashboard2</Link>
                        </li>
                        <li>
                            <Link href="/service">Service</Link>
                        </li>
                    </ul>
                </div>

                <div className="main">
                    {children}
                </div>
            </div>


        </div>
    );
};

export default Layout;
