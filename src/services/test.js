class Something {
  age = 2345;
  ageData = {
    age: 20,
    getAge1: () => this.age,
    getAge2: function () {
      return this.age;
    },
  };

  writeAge() {
    console.log(this.ageData.getAge1(), this.ageData.getAge2());
  }
}

new Something().writeAge();
