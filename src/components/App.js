import React from 'react';
import ReactDOM from 'react-dom';
import News from './News/News.js';

var my_news = [
    {
        author: 'Alex',
        text: 'Text news...'
    },
    {
        author: 'Jack',
        text: 'Another test'
    },
    {
        author: 'Bob',
        text: 'Test here.'
    }
];

export default React.createClass({
    getInitialState: function() {
        return {
            news: my_news
        }
    },

    componentDidMount: function() {
        window.ee.addListener('News.add', text => {
            const news = this.state.news.concat(text);
            this.setState({
                news: news
            })
        });
    },

    componentWillUnmount: function() {
        window.ee.removeListener('News.add');
    },

    render: function() {
        return (
            <div className="app">
                <News data={this.state.news} /> {/* some comment */}
            </div>
        )
    }
});
