const userInfo = ['1abc_5','2abc_5','3abc_15','4abc_2','5abc_1','6abc_2'];
let itemArray = userInfo.map((item)=>{
    let idata = item.split('_');
    let pId = idata[0];
    let pQty = Number(idata[1]);

    itemObject = {id:pId, quantity:pQty};
    
    return itemObject;
})

const obj = {
    items:itemArray
}

const myJson = JSON.stringify(obj, null, "\t")
console.log(myJson);