import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { toolActions } from '../_actions/tool.actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(toolActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users, tools } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hola {user.firstName}!</h1>
                <p>Acabas de fer login amb React!!</p>
                <h3>Aquestas son las Einas disponibles</h3>
                {users.loading && <em>Carregant einas...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {/* users.items &&
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
                */}
                {tools.tools &&
                    <ul>
                        {tools.tools.map((tool, index) =>
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