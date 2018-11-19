export function createHTMLElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstElementChild;
}


export function ItemDetails(products) {
    let collection = `     
    <div class="card border-light mb-3 Item">
    <div class="card-body">
           <div class="row">
            <div class="col-sm-12">
            <div class="row">
            <div class="col-sm-2">
            <a href="#" id="TakeAlookAt" data-toggle="modal" 
            data-target="#myCarousel"><img src="${products.img}" alt="image"/></a></div>         
                <div class="col-sm-4">
                    <p id="ptitle">${products.ptitle}</p>
                    <p id="style">Style #:${products.style}</p>
                    <p id="colour">Colour:${products.colour}</p>           
                    
                    <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">                        
                            <!-- Modal content-->
                            <div class="modal-content">
                                <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div id="modal-body">
                                </div>
                            </div>                      
                        </div>
                </div>
                </div>
                <div id="size" class="col-sm-2">${products.size}</div>
                <div id="qty" class="col-sm-2"><input type="text" class="count" title="count" value="${products.quantity}" size="1" readonly/></div>
                <div id="subprice" class="col-sm-2">$${products.price}</div>
                <div id="carouselPopup"></div>
                </div>                 
                <div class="row">
                <div class="col-sm-2"></div>         
                    <div class="col-sm-4">                        
                        <div class="row">
                            <div class="col-xsm-2">
                            <button type="submit" class="btn btn-link editpopup" data-toggle="modal" data-target="#myModal" name="${products.id}"><label class="buttonText">EDIT</label></button></div>
                            <div class="col-xsm-2 infoText" name="${products.id}">X REMOVE</div>
                            <div class="col-xsm-3 infoText">SAVE FOR LATER</div>                     
                        </div>                        
                    </div>
                    </div> 
            </div>
            </div>
    </div>
</div>
      `;
    return collection;
}

export function editCartTemplate(data) {
    let editTemplate = `
    <div class="row">
    <div class="col-sm-12">
    <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-6">
                  <hr>
                  <p class="textAlign"><span>${data.ptitle}</span></p>
                  <p class="textAlign"><span>$${data.price}</span></p>
                  <p class="textAlign"><span class="parentColorbox" style="border: 1px solid ${data.colour};background:${data.colour}"></span>
                  <span class="colorbox"></span></p>
                  <p>
                    <div class="row textAlign">
                    <div class="dropdown">
                    <span>SIZE:</span>                    
                   <select name="size" id="updatedsize">
                    <option value="${data.size}">${data.size}</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                   </select>
                      </div>
                      &nbsp;
                        <div class="dropdown">
                        <span>QTY:</span>
                            <select name="quantity" id="updatedqty">
                                <option checkvalue="${data.quantity}">${data.quantity}</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option> 
                            </select>
                      </div>
                    </div>
                </p>               
                </div>
                <div class="col-sm-5 alignImg">
                  <p><img class="img-fluid" src="${data.img}" alt="blueTShirt">
                    </p>
                </div>
      </div>             
      
    <div class="row" style="width:100%;">      
    <div class="col-sm-9">    
                <div class="text-center">
                <button type="button" name="${data.id}" class="btn btn-primary maineditbtn" id="updateEdit" data-dismiss="modal">Edit</button>
                </div>   
                <div class="text-center"><label><span><u>See Product Details</u></span></label></div>                
    </div>   
    <div class="col-sm-3"></div>         
   </div>  
     </div>
  `;
    return editTemplate;
}



export function totalTemplate(subTotal, promoAmount, grandTotal) {

    let collection = `
          <div class="total">
              <form>
                  <div class="form-group">
                  <div class="row">
                      <div class="col-sm-8">
                      <p for="subtotal" title="subtotal" class="col-form-label subtotal">SUBTOTAL</p>
                     </div>
                      <div class="col-sm-4">
                     <input type="text" readonly class="form-control-plaintext" title="subtotal" id="subtotal" value="$${subTotal}"/>
                    </div>
                   </div>
                   <div class="row">
                      <div class="col-sm-8">
                      <p for="promoAmount" title="promoAmount" class="col-form-label promoAmount">PROMOTON CODE <em>JF10</em> APPLIED</p>
                      </div><div class="col-sm-4">
                      <input type="text" title="promoAmount" readonly class="form-control-plaintext" id="promoAmount" value="-$${promoAmount}"/>
                      </div>
                      </div>
                      <div class="row hrlight">
                      <div class="col-sm-8">
                      <p for="delivary" title="delivary" class="col-form-label delivary">Estimate Shipping*<label> You qualify for free shipping because your order is over $50*</label></p>
                      </div><div class="col-sm-4">
                      <input type="text" title="delivary" readonly class="form-control-plaintext" id="delivary" value="FREE">
                      </div>
                      </div>
                      <div class="row">
                      <div class="col-sm-8">
                      <p for="estimatedtotal" title="estimatedtotal" class="col-form-label estimatedtotal">ESTIMATED TOTAL</p><label>Tax will be applied during checkout</label>
                      </div><div class="col-sm-4">
                      <input type="text" title="estimatedtotal" readonly class="form-control-plaintext" id="estimatedtotal" value="$${grandTotal}"/>
                      </div></div>
                  </div>
              </form>
          </div>
  `;
    document.getElementById("AmountDetails").innerHTML = collection;
}

export function carouselTemplate(data) {
    document.getElementById("carouselPopup").innerHTML = '';
    let collection = `
    <div class="modal fade" id="myCarousel" tabindex="-1" role="dialog" aria-labelledby="itemView" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="itemModal">TAKE A LOOK AT</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <div class="container">
                            <div class="row blog">
                                <div class="col-md-12">
                                    <div id="blogCarousel" class="carousel slide" data-ride="carousel">
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner carouselbody">
                                      <div class="carousel-item active">
                                        <img class="d-block w-100" src="${data.img}" alt="First slide"/>
                                      </div>
                                      <div class="carousel-item">
                                        <img class="d-block w-100" src="${data.img}" alt="Second slide"/>
                                      </div>
                                      <div class="carousel-item">
                                        <img class="d-block w-100" src="${data.img}" alt="Third slide"/>
                                      </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span class="sr-only">Next</span>
                                    </a>
                                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    `;

    document.getElementById("carouselPopup").appendChild(createHTMLElement(collection));

}