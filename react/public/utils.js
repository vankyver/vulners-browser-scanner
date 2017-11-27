const isChrome = (/google/i).test(navigator.vendor);
const browser = isChrome ? chrome : browser;

/**
 * Sugar
 */
Array.prototype.addIfNotExist = function (item) {
    if (this.indexOf(item) < 0) {
        this.push(item)
    }
};

/**
 * Pure throttle implementation
 **/
function throttled(fn, timeout) {
    let task, queue = [];
    let lastTaskTime;

    return function() {
        let args = arguments;
        queue.push(fn);

        function next() {
            if (lastTaskTime && ((new Date().getTime() - lastTaskTime) < timeout)) {
                setTimeout(() => next(), timeout)
            } else {
                lastTaskTime = new Date().getTime();
                task = queue[0];
                queue.shift();
                return task.apply(this, args);
            }
        }
        return next();
    }
}