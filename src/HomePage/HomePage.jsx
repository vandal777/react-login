import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
        this.props.dispatch(userActions.getTools());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hola {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>Aquestas son las Einas disponibles</h3>
                {users.loading && <em>Carregant einas...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                {users.tools &&
                    <ul>
                        {users.tools.map((tool, index) =>
                            <li key={tool.id}>
                                {tool.name + ' ' + tool.description}
                                {
                                    // tool.deleting ? <em> - Deleting...</em>
                                    // : tool.deleteError ? <span className="text-danger"> - ERROR: {tool.deleteError}</span>
                                    // : <span> - <a onClick={this.handleDeleteUser(tool.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication, tools } = state;
    const { user } = authentication;
    return {
        user,
        users,
        tools,
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };