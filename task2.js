function PandaCost(singara,samucha,jilapi){
    const singaraPrice=7
    const samuchaPrice=10
    const jilapiPrice=15
    if(typeof singara!=='number'||singara<0 ||typeof samucha!=='number'||samucha<0||typeof jilapi!=='number'|| jilapi<0){
        return 'Please provide correct numbers of items'

    }else{
        const total=(singaraPrice*singara)+(samuchaPrice*samucha)+(jilapi*jilapiPrice)
        return total;
    }
    
}
const result=PandaCost(0,5,5)
console.log(result)