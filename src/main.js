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

                <InputNews />
            </div>

        )
    }
});

const InputNews = React.createClass({

    getInitialState: function() {
        return {
            agreed: false
        }
    },

    componentDidMount: function() {
        ReactDOM.findDOMNode(this.refs.textInput).focus();
    },

    addHandler: function() {
        console.log(this.refs.textInput)
        alert(ReactDOM.findDOMNode(this.refs.textInput).value);
    },

    checkboxChange: function() {
        this.setState({agreed: !this.state.agreed});
        //ReactDOM.findDOMNode(this.refs.addButton).disabled = this.state.agreed;
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