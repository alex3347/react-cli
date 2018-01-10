import React, {Component} from 'react';
import styles from './Header.scss'
import PropTypes from 'prop-types';


export default class Header extends Component {
    //为了在constructor中拥有context参数，必须先为context做类型检测
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <i onClick={() => {this.context.router.history.goBack()}} className={`iconfont icon-chevron-copy-copy-copy-copy-copy-copy ${styles.left}`}/>
                    <input type="text"  placeholder="搜索"/>
                </div>
            </div>
        )
    }
}
