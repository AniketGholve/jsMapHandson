let data="abcadeecfb"

let map1=new Map();
for(let i=0;i<data.length;i++){
    if(!map1.has(data[i])){
        map1.set(data[i],1);
    }
    else{
        let val=map1.get(data[i])+1;
        map1.set(data[i],val)
    }
}
map1.forEach((val,key)=>{
    console.log(`${key}=${val}`)
})