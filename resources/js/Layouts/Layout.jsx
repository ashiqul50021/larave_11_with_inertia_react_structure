import { Link } from '@inertiajs/react'

const Layout = ({ children }) => {
    return (
        <div className='container mx-auto'>
            <div className=' w-full border p-4 columns-2 bg-[#B4B4B4]'>
                <h3>Logo</h3>
                <div className='text-end flex justify-end space-x-3'>
                    <p><i class="fa-regular fa-bell"></i></p>
                    <p><i class="fa-regular fa-comment"></i></p>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='basis-1/6 border h-full bg-[#131B2E] text-white p-3 h-screen'>

                    <ul>
                        <li className='p-2'>
                            <Link href="/dashboard2">Dashboard2</Link>
                        </li>
                        <li className='p-2'>
                            <Link href="/service">Service</Link>
                        </li>
                    </ul>
                </div>

                <div className="main p-3">
                    {children}
                </div>
            </div>


        </div>
    );
};

export default Layout;
