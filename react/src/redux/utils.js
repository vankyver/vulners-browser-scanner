/**
 * mapStateToProps
 * @return {function(*, *)}
 */
const mstp = (...propNames) => {
    return (state, ownProps) => {
        let newProps = {};
        for (let pn of propNames) {
            newProps[pn] = state[pn]
        }
        console.log('[PROPS]', newProps);
        return newProps;
    }
};

export {mstp}