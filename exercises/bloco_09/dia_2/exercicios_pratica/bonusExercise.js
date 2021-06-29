// Bônus:
// Utilize somente Higher Order Functions para fazer as operações com o array;
// Refatore a Promise para utilizar somente async e await .

const sumRandomNumbers = () => {
  const sum = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1 )
    .map((num) => num * num).reduce((acc, curr) => acc + curr, 0);

  console.log('Número gerado:', sum);

  if (sum >= 8000) throw new Error();
  return sum;
};

const sumArrayFromSum = (sum) => {
  const genArray = [2, 3, 5, 10].map((div) => sum / div);

  console.log('Array gerado:', genArray);

  return genArray.reduce((acc, curr) => acc + curr, 0);
};

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
    console.log('Soma do array:', sumFromSum.toFixed(2));
  } catch(error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

fetchPromise();
