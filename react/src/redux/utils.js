import {browser} from '../Browser';

/**
 * mapStateToProps
 * @return {function(*, *)}
 */
const mstp = (...propNames) => {
    return (state, ownProps) => {
        let newProps = {};
        for (let pn of propNames) {
            newProps[pn] = state.vulners[pn]
        }
        return newProps;
    }
};

export {mstp}