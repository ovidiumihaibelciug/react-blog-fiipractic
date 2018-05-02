import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ role, page, ival }) => {
    let output;
    //example: /path/4
    let path = role !== 'home' ? '/' + role + '/' + ival + '/' : '/home/'
    output = page === 1 ? output = [
        <Link key={1} to={path + page} className="page-active">
            {page}
        </Link>,
        <Link key={2} to={path + (page + 1)}>{page + 1}</Link>,
        <Link key={3} to={path + (page + 2)}>{page + 2}</Link>,
        <Link key={4} to={path + (page + 3)}>
            <i className="fa fa-arrow-right" />
        </Link>
    ] : output = [
        <Link key={5} to={path + (page - 1)}>
            <i className="fa fa-arrow-left" />
        </Link>,
        <Link key={6} to={path + (page - 1)}>{page - 1}</Link>,
        <Link key={7} to={path + page} className="page-active">
            {page}
        </Link>,
        <Link key={8} to={path + (page + 1)}>{page + 1}</Link>,
        <Link key={9} to={path + (page + 2)}>
            <i className="fa fa-arrow-right" />
        </Link>
    ];
    return output;
}

export default Pagination;