class Student{
    #r_no
    constructor(name){
        this.name=name;
    }
    getRollNo(){
        return this.#r_no;
    }
    setRoll(r_no){
        this.#r_no=r_no;
    }
}

let s1=new Student("KS");
console.log(s1);