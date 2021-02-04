const  arreglo= document.querySelectorAll('.agregar');
arreglo.forEach(arreglo => {
arreglo.addEventListener('click', clicked) ; 

});

 const contenedoritems  = document.querySelector('.contenedoritems');

function clicked( event )
{
 const button = event.target;
 const item=button.closest('.cuadro-2');



 const titulo=item.querySelector('.titulo').textContent;


const precio=item.querySelector('.precio').textContent;
const imagen=item.querySelector('.A5').src;
//console.log('-->',precio,imagen,titulo);


valores(titulo, precio, imagen);
}




function valores(titulo, precio, imagen){

const carfilas	= document.createElement('div');
const contenidofila = ` 
<div class="row2 shoppingCartItem">
                    <div class="col-6">
                        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <img src=${imagen} class="shopping-cart-image">
                            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${titulo}
                            </h6>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <p class="item-price mb-0 shoppingCartItemPrice">${precio}</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div
                            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                                value="1">
                            <button class="btn btn-danger buttonDelete" type="button">X</button>
                        </div>
                    </div>
                </div>`;


carfilas.innerHTML = contenidofila;
contenedoritems.append(carfilas);

actualizarTotal();
 }



 function actualizarTotal() {

    let total = 0;
    const carTotal = document.querySelector('.shoppingCartTotal');
    
    const shoppingcartItems = document.querySelectorAll('.shoppingCartItem');

    console.log(carTotal);
    console.log(shoppingcartItems);

shoppingcartItems.forEach((shoppingCartItem) => {
    const PrecioElemento = shoppingCartItem.querySelector('.shoppingCartItemPrice');
    
const shoppingCartItemPrice = PrecioElemento.textContent.replace( '$',' ');
    //const PrecioItem = PrecioElemento.textContent;

    console.log(PrecioElemento);

});
 }
