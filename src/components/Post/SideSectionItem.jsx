import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Chip from "material-ui/Chip";
import Avatar from "material-ui/Avatar";

const styles = {
    chip: {
        margin: 5
    },
    bcolor: "#7957D5"
};

const SideSectionItem = ({ role, item }) => {
    return (
        <div className={['item', role].join(' ')}>
            <Link to={'/' + role + '/' + item._id}>
                <Chip
                    backgroundColor={styles.bcolor}
                    style={styles.chip}
                    labelColor="#fff"
                >
                    <Avatar
                        size={32}
                        color="#fff"
                        backgroundColor="#8c67ef"
                    >
                        {item.name.substr(0, 2).toUpperCase()}
                    </Avatar>
                    {item.name}
                </Chip>
            </Link>
        </div>
    );
}

export default SideSectionItem;