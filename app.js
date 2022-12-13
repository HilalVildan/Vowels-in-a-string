const input = document.querySelector("#input");
const buton = document.querySelector("#button");
const text = document.querySelector(".text");

buton.onclick = () => {
  if (!input.value) {
    alert("Lütfen bir seyler yaziniz.!");
  }

  let vowels;
  if (input.value.match(/[aeiou]/gi)) {
    vowels = input.value.match(/[aeiou]/gi).length;
  } else {
    vowels = 0;
  }

  if (vowels === 0) {
    text.innerHTML = `There isn't vowel in ${input.value}`;
    input.value = "";
  } else {
    text.innerHTML = `There are ${vowels} vowel in "${input.value}"`;
    input.value = "";
  }
};
