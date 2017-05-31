import React, {Component} from 'react';
import './index.less'
export default class LoadMore extends Component {
    render() {
        return (
            <div className="has-more">
                {this.props.hasMore ? <div ref="more" onClick={this.loadMore.bind(this)}>加载更多</div>
                    : <div>我是有底线的</div>}
            </div>

        )
    }

    componentDidMount() {
        //绑定事件
        this.fn = () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                if (this.props.isLoading) {
                    return
                }
                let screen = window.screen.height;
                let top = this.refs.more.getBoundingClientRect().top;//获取元素当前位置（原生方法）上下左右
                if (top < screen) {//如果按钮进入可视窗口加载更多
                    this.props.loadMore();
                }
            }, 50)
        };
        window.addEventListener('scroll', this.fn)
    }

    componentWillUnmount() {
        //移除事件
        window.removeEventListener('scroll', this.fn)
    }

    loadMore() {
        if (this.props.isLoading) {
            return
        }
        this.props.loadMore()
    }
};
