function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  const clearInfo = () => {
    result.innerHTML = '';
  };
  const clearInfoAndInput = () => {
    input.value = '';
    result.innerHTML = '';
  };

  const inputHandler = (e) => {
    // Check if the input is empty
    clearInfo();
    if (input.value === '') {
      result.innerHTML = 'Invalid, input is empty';
      return;
    }

    // Check if the input is a number
    if (isNaN(input.value)) {
      result.innerHTML = 'This is not a number';
      return;
    }

    // Check if the input is an integer
    if (!Number.isInteger(Number(input.value))) {
      result.innerHTML = 'Invalid, entered number is not an integer';
      return;
    }

    if (
      Number(input.value) > 0 &&
      Number(input.value) < 100 &&
      Number(input.value) % 2 === 0
    ) {
      result.innerHTML = 'Valid';
    } else {
      result.innerHTML = 'Invalid';
    }
  };

  button.addEventListener('click', inputHandler);
  button2.addEventListener('click', clearInfoAndInput);
}

validator();
