export const calcStrength = (password:string) => {
  let strengthVal:number = [/[$@!%*#?&]/, /[A-Z]/, /[0-9]/, /[a-z]/]
    .reduce((val, test) => val + (test.test(password) ? 1 : 0), 0);
  if (strengthVal > 2 && password.length > 7) {
    strengthVal++;
    if (strengthVal > 3 && password.length > 9) {
      strengthVal++;
    }
  }
  if (password.length < 6 && strengthVal > 3) {
    strengthVal = 3;
  }
  return strengthVal;
}