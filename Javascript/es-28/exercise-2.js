const order = {};

/* if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

if (order.customer.addess.city === undefined) {
  console.log("city is required")
} */

let customerCity = order.customer?.addess.city; 
  if (customerCity === undefined) {
    console.log("city is required")
  } 
