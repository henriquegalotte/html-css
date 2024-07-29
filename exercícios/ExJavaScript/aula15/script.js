let val = [2,4,8,35]
val.sort()

function acao(){
/*    for(p=0;p<val.length;p++){
    console.log(val[p])
}*/

    for(p in val){
        console.log(`Para cada ${p} tem ${val[p]}`)
    }
}