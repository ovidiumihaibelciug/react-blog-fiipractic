import React from 'react';

const SideSection = ({ title, children }) => {
    return (
        <div className="box side-section">
            <div className="title">{title}</div>
            <div className="chidren">{children}</div>
        </div>
    );
}

export default SideSection;