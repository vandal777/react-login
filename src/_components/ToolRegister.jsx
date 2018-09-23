import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toolActions } from '../_actions/tool.actions';

class ToolRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tool: {
                name: 'leo',
                description: 'leo',
                title: 'leo',
                links: ['hola.jpg', 'adios']
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { tool } = this.state;
        this.setState({
            tool: {
                ...tool,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { tool } = this.state;
        const { dispatch } = this.props;
        if (tool.name && tool.description && tool.title && tool.links) {
            dispatch(toolActions.addTool(tool));
        }
    }

    render() {
        const { registering  } = this.props;
        const { tool, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Registre</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !tool.name ? ' has-error' : '')}>
                        <label htmlFor="name">Nom:</label>
                        <input type="text" className="form-control" name="name" value={tool.name} onChange={this.handleChange} />
                        {submitted && !tool.name &&
                            <div className="help-block">El nom es obligatori</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !tool.description ? ' has-error' : '')}>
                        <label htmlFor="description">Descripcio: </label>
                        <input type="text" className="form-control" name="description" value={tool.description} onChange={this.handleChange} />
                        {submitted && !tool.description &&
                            <div className="help-block">La descripcio es obligatoria</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !tool.title ? ' has-error' : '')}>
                        <label htmlFor="title">Titol: </label>
                        <input type="text" className="form-control" name="title" value={tool.title} onChange={this.handleChange} />
                        {submitted && !tool.title &&
                            <div className="help-block">Es necesari introduir un titol: </div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !tool.links ? ' has-error' : '')}>
                        <label htmlFor="links">links:</label>
                        <input type="text" className="form-control" name="links" value={tool.links} onChange={this.handleChange} />
                        {submitted && !tool.links &&
                            <div className="help-block">Falta aquest camp</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Introdueix eina</button>
                        {registering && 
                            <label htmlFor="password">Estem treballant en el registre</label>
                        }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedToolRegister = connect(mapStateToProps)(ToolRegister);
export { connectedToolRegister as ToolRegister };