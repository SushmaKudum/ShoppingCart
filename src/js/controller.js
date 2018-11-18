import { editCartTemplate } from './view';
import { createHTMLElement } from './view';
import { updateMainPage } from './service';
import { ItemDetails } from './view';
import { ItemsCount } from './service';

export function editItem(id) {
    fetch(`http://localhost:3000/item/${id}`)
        .then(resp => resp.json())
        .then((data) => {
            let collection = editCartTemplate(data);
            let bagElt = createHTMLElement(collection);

            let editButton = bagElt.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;


            editButton.onclick = () => {
                let qtyid = document.getElementById("updatedqty");
                let qty = qtyid.options[qtyid.selectedIndex].value;
                let sizeid = document.getElementById("updatedsize");
                let size = sizeid.options[sizeid.selectedIndex].value;
                updateMainPage(id, qty, size);
            }
            document.getElementById("modal-body").appendChild(bagElt);
        });
}



export function deleteItem(id) {
    fetch(`http://localhost:3000/item/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    });
    location.reload();
    ItemDetails();
    ItemsCount();
}