// object
const student = {}
const user = {
    // properties
    nokp: "123456789",
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        poscode: "12345"
    },
    // methods
    getinfo:function(){
        // kalau dalam php $this->nokp
                                                                                    // jika tidak null
        return `NOKP: ${this.nokp}, Name: ${this.name}, Age: ${this.age}, Address: ${this.address?.street}, ${this.address?.poscode}`;
    }
}
console.log(user.getinfo());