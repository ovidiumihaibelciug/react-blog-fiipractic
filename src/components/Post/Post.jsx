import React from "react";
import { Link } from 'react-router-dom';

import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";
import Chip from "material-ui/Chip";
import FlatButton from "material-ui/FlatButton";

const styles = {
    chip: {
        marginTop: -10,
        marginBottom: 10,
        marginRight: 4
    },
    bcolor: "#7957D5"
};

const Post = ({ post, single }) => {
    return (
        <div className="post-box">
            <Card>
                <CardTitle
                    className="post-title"
                    title={<a>{post.title}</a>}
                    subtitle={
                        <Link to={/profile/ + post.user._id}>
                            {"Posted by " + post.user.lastname + " " + post.user.firstname}
                        </Link>
                    }
                />
                <CardText>
                    <div>
                        {post.tags.map(tag => {
                            return (
                                <Chip
                                    backgroundColor={styles.bcolor}
                                    style={styles.chip}
                                    labelColor="#fff"
                                    key={tag._id}
                                >
                                    {tag.name}
                                </Chip>
                            );
                        })}
                    </div>
                    <div className="post-category">
                        <Chip
                            backgroundColor="#8c67ef"
                            style={styles.chip}
                            labelColor="#fff"
                        >
                            {post.category.name}
                        </Chip>
                    </div>
                    {post.description}
                </CardText>
                <CardActions className="card-action">
                    {!single && (
                        <React.Fragment>
                            <a href={"/post/" + post._id}>
                                <FlatButton
                                    className="btn-blog-primary"
                                    label={<i className="fa fa-2x fa-eye" />}
                                    labelPosition="before"
                                    primary={true}
                                />
                            </a>
                            <a href="">
                                <FlatButton
                                    className="btn-blog-primary"
                                    label={<i className="fa fa-2x fa-comment" />}
                                    labelPosition="before"
                                    primary={true}
                                />
                            </a>
                        </React.Fragment>
                    )}

                    <div className="pull-right">{post.createdAt}</div>
                </CardActions>
            </Card>
        </div>
    );
}

export default Post; ``