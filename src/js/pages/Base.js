import {TEMPLATES} from "../Templates";
import {parse} from "../Ashe";

export default class Base {

    template = TEMPLATES.INDEX;

    constructor(data) {
        this.data = data;
        this.render()
    }

    render() {
        document.getElementById('content').innerHTML = parse(this.template, this.data);
        document.querySelectorAll('a').forEach(a => a.addEventListener('click', e => openLink(e.target.href || e.target.parentElement.href)))
    }

}