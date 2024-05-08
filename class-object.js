class Dog
{
    #dogName;
    #weight;
    #color;
    #breed;

constructor (dogName,weight,color,breed) {
    this.#dogName=dogName 
    this.#weight=weight
    this.#color=color 
    this.#breed=breed 
    }
    get weight(){return this.#weight}
    set weight(new_weight)
    {
        if (new_weight >10){
            this.#weight = 10
        } 
        else{
            this.#weight = new_weight
        }
    }
}

let dog12 = new Dog('Jimy', '5kg', 'black&white', "chihuahua")

console.log(dog12.color)
console.log(dog12.weight)
dog12.weight = 12
console.log(dog12.weight)