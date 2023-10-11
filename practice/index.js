/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.64,
  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.64,
  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (john.bmi  > mark.bmi){
  console.log(`${john.fullName}'s BMI (${john.bmi} is higher than ${mark.bmi})`);
}else if (mark.bmi > john.bmi){
  console.log(`${mark.fullName}'s BMI (${mark.bmi} is higher than ${john.bmi})`);
}