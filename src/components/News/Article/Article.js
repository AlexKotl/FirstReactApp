import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired
        })
    },

    getInitialState: function() {
        return {
            visible: false
        }
    },

    detailsClick: function(event) {
        event.preventDefault();
        this.setState({visible: true});
    },

    render: function() {
        const data = this.props.data;

        return (
            <div className="news__article">
                <b className="news__author">{data.author}</b> <br/>
                {data.text}
                <div className={this.state.visible ? '' : 'hidden'}>Full article comming soon...</div>
                <p><a href="#" className={'news__details ' + (!this.state.visible ? '' : 'hidden')} onClick={this.detailsClick}>More details...</a> </p>
            </div>
        )
    }
});