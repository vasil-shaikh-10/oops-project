class fizzbuzz{
    print(){
        for(let i=0; i<=102; i++ ){
            if(i % 3 == 0 && i % 5 ==0){
                console.log("fizzbuzz");
            }else if(i % 3== 0){
                console.log("fizz");
            }else if(i % 5== 0){
                console.log("buzz");
            }else{
                console.log(i);
            }
        }
    }
}

let print = new fizzbuzz();
print.print();