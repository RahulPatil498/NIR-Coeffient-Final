function submitAddition() {
  const a = document.getElementById('inputA').value;
  const b = parseFloat(document.getElementById('inputB').value);
  const outputDiv = document.getElementById('output');
  const copyBtn = document.getElementById('copyBtn');

  outputDiv.textContent = "Processing...";
  copyBtn.style.display = "none";

  try {
    if (isNaN(b)) {
      throw new Error("Please enter a valid coefficient (b).");
    }

    const values = a.split(',').map(x => {
      const val = parseFloat(x.trim());
      if (isNaN(val)) throw new Error("Input contains invalid numbers.");
      return val;
    });

    const result = values.map(val => (val + b).toFixed(4));
    outputDiv.textContent = result.join(', ');
    copyBtn.style.display = "inline-block";
  } catch (err) {
    outputDiv.textContent = 'Error: ' + err.message;
  }
}
