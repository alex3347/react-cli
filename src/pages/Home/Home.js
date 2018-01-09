import React, {Component} from 'react';

const styles = require('./Home.scss');

import {focus} from 'actions/home';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Link to='/SearchResult' className={styles.inputContainer}>
                    <input type="text"  placeholder="请点击" disabled/>
                    <i className='iconfont icon-sousuo'/>
                </Link>
            </div>
        )
    }
}

export default connect((state) => ({
    login: state.login
}), {focus})(Home);