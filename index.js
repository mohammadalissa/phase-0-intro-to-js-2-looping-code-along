// Code your solutions in this file
function countDown(inte){
    while(inte+1>0){
        console.log(inte);
        inte-=1;
    }
}
let newmessage= [];
function writeCards(name,event){

    for(let i=0;i<name.length;i++){
        newmessage.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);

    }
    return newmessage;
}