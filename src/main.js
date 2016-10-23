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

var News = React.createClass({
    render: function() {
        const news_html = this.props.data.map(function(item, index) {
            return (
                <div key={index}>
                    <b className="news__author">{item.author}</b>
                    {item.text}
                </div>
            )
        })

        return (
            <div className="news">
                {news_html}
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