import React, {Component} from 'react';
import Header from './Header/Header';

const styles = require('./SearchResult.scss');

export default class SearchResult extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={styles.title}>点击左上角箭头返回</div>
            </div>
        )
    }
}