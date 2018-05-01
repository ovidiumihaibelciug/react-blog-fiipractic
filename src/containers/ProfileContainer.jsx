import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Post from "../components/Post/Post";
import Chip from "material-ui/Chip";

const styles = {
    chip: {
        margin: 10
    },
    bcolor: "#7957D5"
};

class ProfileContainer extends Component {
    componentWillMount() {
        const { id } = this.props.match.params;
        const user = JSON.parse(localStorage.getItem('user'));
        const { userStore } = this.props.rootStore;

        const req_id = id ? id : user.id;
        userStore.getUserById(req_id);
    }

    render() {
        const { id } = this.props.match.params;
        const { userStore } = this.props.rootStore;
        const user = id ? userStore.user : JSON.parse(localStorage.getItem('user'));

        return (
            <div className="container user-container">
                {!user.groups && !user.posts ? (
                    <div>Loading...</div>
                ) : (
                        <div className="flex-row">
                            <div className="box user-box">
                                <div className="groups">
                                    {user.groups.map(group => (
                                        <Chip
                                            backgroundColor={styles.bcolor}
                                            style={styles.chip}
                                            labelColor="#fff"
                                        >
                                            {group.name}
                                        </Chip>
                                    ))}
                                </div>
                                <h3 className="title">{user.firstname + " " + user.lastname}</h3>
                                <div className="subtitle">{user.email}</div>
                                <div className="user-posts">Posts</div>
                                {user.posts.map(
                                    post => (!post.category ? "" : <Post post={post} />)
                                )}
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default withRouter(inject(["rootStore"])(observer(ProfileContainer)));
