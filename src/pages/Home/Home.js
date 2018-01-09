import React, {Component} from 'react';

const styles = require('./Home.scss');

import {focus} from 'actions/home';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        let {text} = this.props.home
        return (
            <div className={styles.container}>
                <Link to='/SearchResult' className={styles.inputContainer}>
                    <input type="text"  placeholder="点击跳转页面" disabled/>
                    <i className='iconfont icon-sousuo'/>
                </Link>
                <img src={require('./images/noList.png')} alt=""/>
                <div className={styles.tip}>已点击图片{text}次</div>
            </div>
        )
    }
}

export default connect((state) => ({
    home: state.home
}), {clickImg})(Home);