import React, {Component} from 'react';
import Header from './Header/Header';

const styles = require('./SearchResult.scss');

export default class SearchResult extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={styles.title}>热门搜索</div>
            </div>
        )
    }
}