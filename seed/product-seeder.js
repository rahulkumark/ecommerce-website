var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping');
var Product = require('../models/product');

var products =[
  new Product({
    imagePath:"https://www.au.com/content/dam/au-com/extlib/english/iphone/iphone-x/images/img_block03.jpg",
    title:"Iphone X",
    description:"Apple's latest phone",
    price:98000
  }),
  new Product({
    imagePath:"http://cdn.iphonehacks.com/wp-content/uploads/2016/10/MacBook-Pro.png",
    title:"MacBook Pro w Touch-bar",
    description:"Apple's latest MacBook Pro",
    price:140000
  }),
  new Product({
    imagePath:"https://assets.kogan.com/files/product/hkfeeds/ipadpro97/KHIPP9732WROS_main.jpg",
    title:"Ipad Pro",
    description:"Apple's latest Ipad",
    price:70000
  }),
  new Product({
    imagePath:"https://www.bhphotovideo.com/images/images2500x2500/apple_mndy2ll_a_21_5_imac_with_retina_1342556.jpg",
    title:"Imac",
    description:"Apple's latest Imac",
    price:200000
  }),
  new Product({
    imagePath:"https://images.techhive.com/images/article/2013/06/mac_pro_2013_03-100041172-orig.jpg",
    title:"Imac",
    description:"Apple's latest Imac",
    price:500000
  }),
  new Product({
    imagePath:"http://www.jackieleonards.ie/wp-content/uploads/2015/03/potato.png",
    title:"Ipotato",
    description:"Apple's latest potato!",
    price:1000000
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err,result) {
    done++ ;
    if (done === products.length) {
      exit();
    }
  });

}

function exit(){
  mongoose.disconnect();
}
