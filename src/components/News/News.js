import React from 'react';
import ReactDOM from 'react-dom';

import Article from './Article/Article'
import InputNews from './Article/InputNews/InputNews'

export default React.createClass({
    render: function() {
        const data = this.props.data;
        const news_html = data.map(function(item, index) {
            return (
                <div key={index}>
                    <Article data={item} />
                </div>
            )
        })

        return (
            <div className="news">
                {news_html}

                {data.length > 0 ? 'Total news: ' + data.length : ''}

                <InputNews />
            </div>

        )
    }
});