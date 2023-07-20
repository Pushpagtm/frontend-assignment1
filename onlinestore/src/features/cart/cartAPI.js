// A mock function to mimic making an async request for data
export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch('https://fakestoreapi.com/carts', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
export function fetchCartByUserId(userId) {
  return new Promise(async (resolve) =>{
   const response=await fetch('https://fakestoreapi.com/carts')
   const data= await response.json()
   resolve({data})
}
  );
}
export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('https://fakestoreapi.com/carts/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
export function deleteCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch('https://fakestoreapi.com/carts/'+itemId, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data:{id:itemId} });
  });
}
export function resetCart(userId) {
  //get all item of user's cart and delete
  return new Promise(async (resolve) => {
    const response = await fetchCartByUserId(userId);
const items=response.data;
for(let item of items){
  await deleteCart(item.id);
}
resolve({status:'success'})
    });

}