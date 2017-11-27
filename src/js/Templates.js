import {br} from './Browser'

const TEMPLATES = {};

br.runtime.sendMessage( {action: 'get_templates'}, (response) => {
    Object.assign(TEMPLATES, response.TEMPLATES)
});

export {TEMPLATES}