import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

//foodDetails

foodDetails =[
  {
    id:1,
    foodName:"Paneer Grilled Sandwich",
    foodDetails:"Pan-fried masala paneer.",
    foodPrice:200,
    foodImg:"https://thumbs.dreamstime.com/b/different-variety-chicken-rolls-wrap-wooden-plate-black-background-copy-scape-top-view-bun-232487374.jpg"
  },
  {
    id:2,
    foodName:"Paneer Burger",
    foodDetails:"Paneer",
    foodPrice:140,
    foodImg:"https://images.unsplash.com/photo-1529042222786-e26b38309122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id:3,
    foodName:"Veg Masala Roll In Naan",
    foodDetails:"A homely mix of mashed potato and veggies, ",
    foodPrice:140,
    foodImg:"https://www.shutterstock.com/image-photo/close-image-table-delicious-dishes-600w-2066201162.jpg"
  },
  {
    id:4,
    foodName:"Oreo cheesecake Ice Cream",
    foodDetails:"Oreo Ice Cream ",
    foodPrice:140,
    foodImg:"https://media.istockphoto.com/id/1008939328/photo/piece-of-delicious-vanilla-chocolate-cheesecake-slate-plate-white-background-selective-focus.jpg?b=1&s=170667a&w=0&k=20&c=pTt2CAWfg8dHkV5_DygYBBd4W4wtlh-eKtEWX6XDHLE="
  },
  {
    id:5,
    foodName:"Indulgence Brownie",
    foodDetails:"(Eggless)Chocolate and raspberry brownie with a chocolate and raspberry ganache and red lustred cocoa nibs ",
    foodPrice:140,
    foodImg:"https://media.gettyimages.com/id/872457042/photo/two-homemade-hot-chocolate-mugs-with-marshmallows-on-rustic-wooden-christmas-table.jpg?s=612x612&w=0&k=20&c=XQ6CcopahJB2ZaSxoBrtD_IdzeQH5xPaJhl9QL84XoY="
  },
  {
    id:6,
    foodName:"Veggie Supreme",
    foodDetails:"epperoni, sausage, meatballs, mushrooms, green bell peppers, and onions. ",
    foodPrice:140,
    foodImg:"https://media.istockphoto.com/id/1349560847/photo/sausage-and-vegetable-pizza-on-dark-background.jpg?s=612x612&w=0&k=20&c=VjDdBc_WrHh9dqI8jCSEoI1jeWQDVSdXOJJ5LijQoRA="
  },
]

}
