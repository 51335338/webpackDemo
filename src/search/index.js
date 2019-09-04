'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../common/index'
import logo from './image/icon.png'
import './search.less'

class Search extends React.Component {
    render() {
        return <div className="search-text">
            Say something
            Add something
            Update something
            <img src={ logo } />
            </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)