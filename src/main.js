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

var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired
        })
    },

    render: function() {
        const data = this.props.data;

        return (
            <div className="news__article">
                <b className="news__author">{data.author}</b> <br/>
                {data.text}
            </div>
        )
    }
});

var News = React.createClass({
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
            </div>

        )
    }
})

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <News data={my_news} /> {/* some comment */}
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);