var nameVar = 'Steve';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);


const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Chloe';
  return petName;
}

var fullName = 'Steve Fenn';

if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}