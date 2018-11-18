const url = 'http://localhost:3000/item';
import { ItemDetails } from './view';
import { createHTMLElement } from './view';
import { carouselTemplate } from './view';
import { editItem } from './controller';
import { deleteItem } from './controller';
import { totalTemplate } from './view';

export function createShoppingBag() {
    fetch(url).then(resp => resp.json()).then((data) => {
        data.map(bagData => {
            let collection = ItemDetails(bagData);
            let bagElt = createHTMLElement(collection);
            let takeALookAt = bagElt.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.lastChild;

            takeALookAt.onclick = () => {
                carouselTemplate(bagData);
            }

            let edit = bagElt.firstElementChild.firstElementChild.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.lastChild;

            let remove = edit.parentElement.nextElementSibling;

            edit.onclick = () => {
                document.getElementById("modal-body").innerHTML = '';
                editItem(bagData.id);
            }

            remove.onclick = () => { deleteItem(bagData.id); }
            document.getElementById("itemDetails").appendChild(bagElt);
        })

    });
}


export function updateMainPage(id, qty, size) {
    let url = `http://localhost:3000/item/${id}`;
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let newObj = Object.assign({}, data, { "quantity": qty, "size": size });
            let putData = {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                redirect: "follow",
                referrer: "no-referrer",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(newObj)
            }
            fetch(url, putData)
                .then(() => {
                    document.getElementById("itemDetails").innerHTML = '';
                    createShoppingBag();
                    ItemsCount();
                    getTotal();
                })
        });
}

export function ItemsCount() {
    let length = 0;
    fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            length = Object.keys(data).length;
            document.getElementById("itemsCount").innerHTML = length + " ITEM(S)";
        })
}

export function getTotal() {
    var subTotal = 0;
    let promoAmount = 7;
    let grandTotal = 0;
    fetch(url).then(resp => resp.json()).then((data) => {
        let i = 0;
        for (i = 0; i < data.length; i++) {
            subTotal += (data[i].price) * (data[i].quantity);
        }
        grandTotal = subTotal - promoAmount;
        totalTemplate(subTotal, promoAmount, grandTotal);
    });

}