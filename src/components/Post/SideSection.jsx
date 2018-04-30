import React, { Component } from 'react';

const SideSection = ({ title, children }) => {
    return (
        <div class="box side-section">
            <div class="title">{title}</div>
            <div class="chidren">{children}</div>
        </div>
    );
}

export default SideSection;