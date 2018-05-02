import React from "react";
import { Link } from 'react-router-dom';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Chip from "material-ui/Chip";

const styles = {
    chip: {
        margin: 4
    },
    bcolor: "#7957D5"
};

const User = ({ user }) => {
    return (
        <Card className="user-container">
            <Link to={'/profile/' + user._id}>
                <CardTitle title={user.firstname + " " + user.lastname} subtitle={user.email} />
                <CardText>
                    <p className="user-posts">Posts: <span>{user.posts.length}</span></p>
                    <p className="user-comments">Comments: <span>{user.comments.length}</span></p>
                    <div className="pull-right">
                        <Chip
                            backgroundColor={styles.bcolor}
                            style={styles.chip}
                            labelColor="#fff"
                        >
                            {user.groups.map(group => (
                                <Chip
                                    backgroundColor={styles.bcolor}
                                    style={styles.chip}
                                    labelColor="#fff"
                                >
                                    {group.name}
                                </Chip>
                            ))}
                        </Chip>
                    </div>
                </CardText>
            </Link>
        </Card>
    );

}

export default User;