const buttons = document.getElementsByClassName('btn');
const equation = document.getElementById('equation');

for (let item of buttons) {
  item.addEventListener('click', () => {
    if (item.innerHTML[0] === '=') {
      let answer = eval(equation.value);
      if (answer || answer == 0) {
        equation.value = answer;
      } else {
        equation.value = 'Error';
      }
    } else if (item.innerHTML[0] === 'C') {
      equation.value = '';
    } else {
      equation.value = equation.value + item.innerHTML[0];
    }
  });
}
