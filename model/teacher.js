var teacher = function(name, age) {
  this.name = name || ""
  this.age = age || 0

  this.setName = function(n){
    this.name = n;
  }

  this.setAge = function(a){
    this.age = a;
  }
}

module.exports = teacher;
