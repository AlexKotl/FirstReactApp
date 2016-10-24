import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({

    getInitialState: function() {
        return {
            agreed: false
        }
    },

    componentDidMount: function() {
        ReactDOM.findDOMNode(this.refs.textInput).focus();
    },

    addHandler: function() {
        const text = ReactDOM.findDOMNode(this.refs.textInput).value;
        window.ee.emit('News.add', {
            text: text,
            author: 'anonymous'
        });
    },

    checkboxChange: function() {
        this.setState({agreed: !this.state.agreed});

    },

    render: function() {
        return (
            <div>
                <p/>
                <input type="text" placeholder="Add new article" ref="textInput" />
                <button onClick={this.addHandler} disabled={!this.state.agreed} ref="addButton">Add</button> <br/>
                <label><input type="checkbox" onChange={this.checkboxChange} ref="acceptCheckbox"/> Accept terms</label>
            </div>
        )
    }
});