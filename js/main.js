var card = document.querySelectorAll(".addtocard");
var cartshopping = document.getElementById("after");
var counter = 0;
for (var i = 0; i < card.length; i++) {
  var button = card[i];
  button.addEventListener("click", addToCard);
}
function addToCard(event) {
  var button = event.target;
  var itemparent = button.parentElement.parentElement.parentElement;
  var title = itemparent.getElementsByClassName("title")[0].innerText;
  var price = itemparent.getElementsByClassName("price")[0].innerText;
  var cartimg = itemparent.getElementsByClassName("card-img-top")[0].src;
  console.log(title, price, cartimg);
  showMyCarts(title, price, cartimg);
}
function showMyCarts(title, price, cartimg) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("card")
    var cartRowContents = `
    <div class="card border-0 text-center">
         <div class="card-img">
            <img
            src="${cartimg}"
            class="card-img-top" alt="not found">
        </div>
            <a href="" class="title"><h3>${title}</h3></a>
            <p class="price">${price}</p>
    </div>`;
    cartRow.innerHTML = cartRowContents;
  var cartitems = document.getElementsByClassName("card")[0];
  cartitems.append(cartRow)

}
