

// myaccount
function check(form){
    if (form.username.value == 'Xander2355' && form.psw.value == 'Blackops3') {
      window.open('practicelog.html')
    } else {
      alert('This username or password is incorrect');
    }
  }

  var product = [
    {
     
      title:"Dog food",
      image:"img/dogfood/81U6D983SxL._AC_SL1500_.jpg",
      price:"$29.99",

    },
    {
      image:"./img/dogfood/dog treat.jpg",
      title:"Dog Treat",
      price:"$29.99",

    },
    {
      image:"./img/dogfood/dog pharma.jpg",
      title:"Dog Pharma",
      price:"$29.99",

    },
    {
      image:"./img/dogfood/toys.jpg",
      title:"Dog Toys",
      price:"$29.99",

    },
    {
      image:"./img/CAT/FOOD.jfif",
      title:"Cat food",
      price:"$29.99",

    },
    {
      image:"./img/CAT/TOY.jpg",
      title:"Cat Toys",
      price:"$29.99",

    },
    {
      image:"./img/CAT/TREAT.jpg",
      title:"Cat Treat",
      price:"$29.99",

    },
    {
      image:"./img/CAT/PHARMA.jpg",
      title:"Cat Pharma",
      price:"$29.99",

    },
    {
      image:"./img/FISH/FOOD.jfif",
      title:"Fish food",
      price:"$29.99",

    },
    {
      image:"./img/FISH/AQUAIRUM.jpg",
      title:"Fish AQUAIRUM",
      price:"$29.99",

    },
    {
      image:"./img/FISH/FISH CARE.jfif",
      title:"Fish Care",
      price:"$29.99",

    },
    {
      image:"./img/FISH/WATEER CARE.jfif",
      title:"Water Care",
      price:"$29.99",

    },
  ]
 
  var postHTML = "";
  for(let i = 0; i < product.length; i++){
    let div = '<div class="col-lg-3 col-md-6 col-sm-12 update-card sale-item-small"> <div class="card-product" style="width: 18rem;" > ';
    let image = '<img src=" ' + product[i].image + '" class="card-img-top" alt="product">';
    let cardBody = '<div class="card-body"><h5 class="card-title"> '+ 
    product[i].title + '</h5> <p class="card-text-price lead"><strike strike class=""> $59.99</strike>  <button type="button" class="btn btn-lg btn-block btn-primary">BUY   </button>' + product[i].price  + '</p></div></div></div>'
    let concatThis = div + image + cardBody;
    postHTML = postHTML + concatThis;
  }
  document.getElementById('market').innerHTML = postHTML