import SideNav from '@/component/SideNav';
import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <SideNav/>
            {children}
        </div>
    );
};

export default Layout;