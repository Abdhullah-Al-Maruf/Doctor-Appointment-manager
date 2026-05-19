
import Footer from '@/components/common/Footer';

import React from 'react';

const CommonLayout = ({children}) => {
    return (
        <div>
           {children}
     <Footer/>
        </div>
    );
};

export default CommonLayout;