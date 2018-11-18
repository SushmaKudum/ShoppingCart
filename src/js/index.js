const jQuery = require('jquery');
require('../../node_modules/bootstrap/scss/bootstrap.scss');
require('../scss/main.scss');

import {ItemsCount} from './service';
import {createShoppingBag} from './service';
import {getTotal} from './service';

jQuery(document).ready(() => {  
    createShoppingBag();  
    ItemsCount();
    getTotal();    
});