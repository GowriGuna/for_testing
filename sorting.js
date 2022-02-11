const sort_num = [20,10,40,50,60];
let temp=0;

for(i=0;i<sort_num.length;i++){
    for(j=i+1;j<sort_num.length;j++){
        if(sort_num[i] > sort_num[j]){
            temp = sort_num[i];
            sort_num[i] = sort_num[j];
            sort_num[j] = temp;
        }
    }
}
console.log(sort_num);