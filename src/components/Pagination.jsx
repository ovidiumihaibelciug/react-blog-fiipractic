import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ role, page, ival }) => {
    let output;
    //example: /path/4
    let path = role !== 'home' ? '/' + role + '/' + ival + '/' : '/home/'
    output = page === 1 ? output = [
        <Link to={path + page} className="page-active">
            {page}
        </Link>,
        <Link to={path + (page + 1)}>{page + 1}</Link>,
        <Link to={path + (page + 2)}>{page + 2}</Link>,
        <Link to={path + (page + 3)}>
            <i className="fa fa-arrow-right" />
        </Link>
    ] : output = [
        <Link to={path + (page - 1)}>
            <i className="fa fa-arrow-left" />
        </Link>,
        <Link to={path + (page - 1)}>{page - 1}</Link>,
        <Link to={path + page} className="page-active">
            {page}
        </Link>,
        <Link to={path + (page + 1)}>{page + 1}</Link>,
        <Link to={path + (page + 2)}>
            <i className="fa fa-arrow-right" />
        </Link>
    ];
    return output;
}

export default Pagination;