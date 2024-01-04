const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const myOrderMenu = document.querySelector('#shoppingCartContainer');
const cartShopIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailImage = document.querySelector('#productDetail > img:nth-child(2)');
const productDetailPrice = document.querySelector('#productDetail .product-info p:nth-child(1)');
const productDetailName = document.querySelector('#productDetail .product-info p:nth-child(2)');
const productDetailDescription = document.querySelector('#productDetail .product-info p:nth-child(3)');
const productDetailCloseICon = document.querySelector('.product-detail-close');
const myOrderMenuClose = document.querySelector('#closeShoppingCart');
const myOrderContent = document.querySelector('.items');
const buttonAddToCart = document.querySelector('.add-to-cart-button');
const numShoppingCart = document.querySelector('#num-shopping-cart');
const totalOrderAmount = document.querySelector("#total-order");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
cartShopIcon.addEventListener('click', toggleMyOrderMenu);
productDetailCloseICon.addEventListener('click', closeProductDetailAside);
myOrderMenuClose.addEventListener('click', toggleMyOrderMenu);
buttonAddToCart.addEventListener('click',addProductList);

function toggleDesktopMenu () {
  let isMyOrderDisplay = !myOrderMenu.classList.contains('inactive');
  if (isMyOrderDisplay) {
    myOrderMenu.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
  let isMyOrderDisplay = !myOrderMenu.classList.contains('inactive');
  if (isMyOrderDisplay) {
    myOrderMenu.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleMyOrderMenu () {
  let isMobileMenuDisplay = !mobileMenu.classList.contains('inactive');
  if (isMobileMenuDisplay) {
    mobileMenu.classList.add('inactive');
  }

  productDetailContainer.classList.add('inactive');
  myOrderMenu.classList.toggle('inactive');
  cardsContainer.classList.remove('cards-container-open-aside');
}

const producList = [];
const orderProduct = [];
producList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
})

producList.push({
  name: 'Pantalla',
  price: 350,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQmch-V4k-LowV2tw08U9m7GSDS75w1y8W7bbpKVB9d_41SaWRVNzQAKUUo003l3Mhjc&usqp=CAU',
  description: 'Boasting an ultra-thin screen and high-resolution technology, every detail comes to life with vibrant colors and stunning clarity.'
})

producList.push({
  name: 'Maceta',
  price: 20,
  image: 'https://m.media-amazon.com/images/I/A1LXV5Y3x+L._AC_SX300_SY300_.jpg',
  description: 'Crafted with meticulous attention to detail, this pot combines stylish aesthetics with functional design.'
})

producList.push({
  name: 'Telefono',
  price: 300,
  image: 'https://m.media-amazon.com/images/I/712pM1KqGhL._AC_UF1000,1000_QL80_.jpg',
  description: "With its stunning high-resolution display, you'll experience vivid colors and sharp details for an immersive viewing experience."
})

producList.push({
  name: 'Control',
  price: 150,
  image: 'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00071171954694l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
  description: 'Designed for precision and comfort, this controller offers an immersive gaming experience like never before.'
})

producList.push({
  name: 'Smartwatch',
  price: 200,
  image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg',
  description: 'Stay connected and track your fitness with this stylish and feature-packed smartwatch.'
})

producList.push({
  name: 'Headphones',
  price: 80,
  image: 'http://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_900_00183_01_studio_wireless_over_ear_headphone_1037578.jpg',
  description: 'Immerse yourself in high-quality sound with these comfortable and sleek headphones.'
})

producList.push({
  name: 'Coffee Maker',
  price: 100,
  image: 'https://www.coffeemakerslist.com/wp-content/uploads/2015/05/delonghi-magnifica-esam-3301.jpg',
  description: 'Start your day right with a cup of freshly brewed coffee from this efficient coffee maker.'
})

producList.push({
  name: 'Laptop',
  price: 800,
  image: 'https://geekculture.co/wp-content/uploads/2020/09/HP-ProBook-x360-435-G7-1.jpg',
  description: 'Powerful and portable, this laptop is perfect for work, entertainment, and creativity.'
})

producList.push({
  name: 'Sneakers',
  price: 60,
  image: 'https://cdn.luxe.digital/media/sites/7/2018/10/20110949/best-premium-leather-sneakers-men-paul-smith-luxury-style-luxe-digital.jpg',
  description: 'Step out in style with these trendy and comfortable sneakers for any casual occasion.'
})

producList.map(function (element) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', element.image);
  productImg.addEventListener('click', function (e) {
    openProductDetailAside(
      element.image,
      element.price,
      element.name,
      element.description
    )
  })

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');
  const productPrice = document.createElement('p');
  productPrice.textContent = '$' + element.price;
  const productName = document.createElement('p');
  productName.setAttribute('id', 'product-name');
  productName.textContent = element.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  productImgCart.addEventListener('click', function (e) {
    orderProduct.push({
      name: element.name,
      price: element.price,
      image: element.image
    });
    myOrderContent.innerHTML = '';
    orderProduct.map(function (element) {
      updateShoppingCart(element);
    });
    numShoppingCart.innerText = orderProduct.length;
    totalAmount();
  });

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
})

orderProduct.map(function (element) {
  updateShoppingCart(element);
})

function updateShoppingCart (element) {
  const shoppingCart = document.createElement('div');
  shoppingCart.classList.add('shopping-cart');

  const figureShoppingCart = document.createElement('figure');

  const imageShoppingCart = document.createElement('img');
  imageShoppingCart.setAttribute('src', element.image);

  const nameShoppingCart = document.createElement('p');
  nameShoppingCart.textContent = element.name;
  const priceShoppingCart = document.createElement('p');
  priceShoppingCart.textContent = '$' + element.price;

  const iconShoppingCart = document.createElement('img');
  iconShoppingCart.setAttribute('src', './icons/icon_close.png');  
  iconShoppingCart.addEventListener('click', function (e) {
    arrayRemove(element);
    myOrderContent.innerHTML = '';
    orderProduct.map(function (element) {
      updateShoppingCart(element);
    });
  });

  figureShoppingCart.appendChild(imageShoppingCart);
  shoppingCart.appendChild(figureShoppingCart);
  shoppingCart.appendChild(nameShoppingCart);
  shoppingCart.appendChild(priceShoppingCart);
  shoppingCart.appendChild(iconShoppingCart);

  myOrderContent.appendChild(shoppingCart);
}

function openProductDetailAside (imagen, precio, nombre, descripcion) {
  myOrderMenu.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
  cardsContainer.classList.add('cards-container-open-aside');
  productDetailImage.src = imagen;
  productDetailPrice.textContent = '$' + precio;
  productDetailName.textContent = nombre;
  productDetailDescription.textContent = descripcion;
}

function closeProductDetailAside () {
  productDetailContainer.classList.add('inactive');
  cardsContainer.classList.remove('cards-container-open-aside');
}

function addProductList () {
  orderProduct.push({
    name: buttonAddToCart.parentElement.childNodes[3].innerText,
    price: buttonAddToCart.parentElement.childNodes[1].innerText.substring(1),
    image: buttonAddToCart.parentElement.parentElement.childNodes[3].getAttribute('src')
  });
  myOrderContent.innerHTML = '';
  orderProduct.map(function (element) {
    updateShoppingCart(element);
  });
  numShoppingCart.innerText = orderProduct.length;
  totalAmount();
}

function arrayRemove(value) { 

    let index = orderProduct.findIndex(object => {
      return object.name == value.name;
    });

    orderProduct.splice(index,1);
    numShoppingCart.innerText = orderProduct.length;
    totalAmount();
}

function totalAmount(){
  let total=0;
  orderProduct.map(function(element){
    total = element.price + total;
  });
  
  totalOrderAmount.textContent = "$"+total;
}

const nameProduct = document.querySelector('.product-info');
