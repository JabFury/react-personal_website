import React, {Component} from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const arr = [12, 32, 4, 5, 2323, 55, 333, 2];
        return (
            <div>
                <h1>数组是:{arr.join(',')}</h1>
                <h1>最大值为:{Math.max.apply(null, arr)}</h1>
            </div>
        )
    }
}