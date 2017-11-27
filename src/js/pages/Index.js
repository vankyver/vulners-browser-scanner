import Base from './Base'
import {TEMPLATES} from "../Templates";

class Index extends Base {

    template = TEMPLATES.INDEX;

    render() {
        super.render();

        document.getElementById('show_all_content').addEventListener('click', render);
        document.querySelector('.material-icons.delete').addEventListener('click', onClearClick);

        $('.collapsible').collapsible();
        $('.tooltipped').tooltip({delay: 50});

    }

}