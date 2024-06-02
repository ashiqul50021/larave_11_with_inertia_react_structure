
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CustomLayout from '@/Layouts/CustomLayout';

const Index =() =>{
    return (
        <>
            <h1>Welcome</h1>
            <p>Hello , welcome to your first Inertia app!</p>
            <CustomLayout/>
        </>



    );
};
Index.CustomLayout = page => <CustomLayout children={page} title="Welcome" />
export default Index;
