import React from "react";

const Layout = ({ children, className = "" }) => {
    return (
        <>
            <div className={` w-full h-full inline-block p-8 xl:p-20 lg:p-16 md:p-12 sm:p-8 ${className}`}>{children}</div>
        </>
    );
};

export default Layout;
