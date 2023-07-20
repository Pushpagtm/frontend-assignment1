// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
   const response=await fetch('https://fakestoreapi.com/products')
   const data= await response.json()
   resolve({data})
}
  );
}
export function fetchProductId(id) {
  return new Promise(async (resolve) =>{
   const response=await fetch('https://fakestoreapi.com/products/'+id)
   const data= await response.json()
   resolve({data})
}
  );
}
export function fetchAllCategories() {
  return new Promise(async (resolve) =>{
   const response=await fetch('https://fakestoreapi.com/products/categories')
   const data= await response.json()
   resolve({data})
}
  );
}
export function fetchProductsByFilters(filter) {
  //filter={"category":"smartphones"}
  let queryString='';
  for(let key in filter){

      queryString +=`${key}=${filter[key]}&`
    }
    return new Promise(async (resolve) =>{
      const response=await fetch('https://fakestoreapi.com/products?'+queryString)
      const data= await response.json()
   
      resolve({data})
   }
    );
   
  }
 
  




