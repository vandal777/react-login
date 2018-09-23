import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { toolActions } from '../_actions/tool.actions';
import ItemCard from '../_components/ItemCard';
import injectSheet from 'react-jss'
import styles from './style'; // Import styles
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ToolRegister } from '../_components/ToolRegister';
class HomePage extends React.Component {
	componentDidMount() {
		this.props.dispatch(toolActions.getAll());
	}

	handleDeleteUser(id) {
		return (e) => this.props.dispatch(userActions.delete(id));
	}

	render() {
		const { user, users, tools, classes } = this.props;
		return (
			<div className={classes.container}>
				<h1 className={classes.titulito} >Hola {user.firstName}!</h1>
				<p>Acabas de fer login amb React!!</p>
				<Tabs className={classes.tabContainer}>
					<TabList>
						<Tab>Einas disponibles</Tab>
						<Tab>Test</Tab>
						{/* user.hasOwnProperty('admin') && <Tab>Title 2</Tab>*/}
					</TabList>
					<TabPanel>
						<h3>Aquestas son las Einas disponibles</h3>
							{tools.loading && <em>Carregant einas...</em>}
							{tools.error && <span className="text-danger">ERROR: {users.error}</span>}
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
							<div className={classes.cardList}>
								{tools.tools &&
										tools.tools.map((tool, index) =>
												<ItemCard
													key = {index}
													name={tool.name}
													description={tool.description}
													img={tool.link}
												/>                                   
										)}
							</div>
					</TabPanel>
					{/* user.hasOwnProperty('admin') && <Tab>Title 2</Tab>
						<TabPanel>
							<h2>Any content 2</h2>
						</TabPanel>*/
					}
						<TabPanel>
							<div>
								<ToolRegister />
							</div>
						</TabPanel>
				</Tabs>
				<p>
					<Link to="/login">Tanca sessio</Link>
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

const connectedHomePage = injectSheet(styles)(connect(mapStateToProps)(HomePage));

export { connectedHomePage as HomePage };