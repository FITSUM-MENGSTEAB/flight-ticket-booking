const x='Fi1tsum'
let arrayOfletters =  x.split('')
for(let elem of arrayOfletters){
  let value = parseInt(elem);
  console.log(value, elem);
 if(!Number.isNaN(value)){
  console.log({'invalid': true})
  //   if(typeof(control.value) != 'string'){
  //    return null;
  }
  
}
console.log(null)
//return null;