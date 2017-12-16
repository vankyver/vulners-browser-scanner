import {browser} from '../Browser';

/**
 * mapStateToProps
 * @return {function(*, *)}
 */
const mstp = (...propNames) => {
    return (state, ownProps) => {
        let newProps = {};
        for (let pn of propNames) {
            if (typeof pn === 'function') {
                pn(state, ownProps)
            } else {
                newProps[pn] = state.vulners[pn]
            }
        }
        return newProps;
    }
};

export {mstp}