const products=[];
module.exports = class Product{
    constructor(title){
        this.title = title;
    }
    save(){
        products.push(this);
    }
    static fetchAllProducts(){
        return this.products;
    }
}