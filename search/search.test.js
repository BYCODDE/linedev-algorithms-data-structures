function linearSearch(id, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return array[i];
    }
  }

  return void 0;
}

function binarySearch(id, array) {
  let min = 0;
  let max = array.length - 1;
  let index;
  let element;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = array[index];

    if (element.id < id) {
      min = index + 1;
    } else if (element.id > id) {
      max = index - 1;
    } else {
      return element;
    }
  }

  return void 0;
}

// Recursion solution
// function binarySearch(id, array) {
//   const mid = Math.floor(array.length / 2);
//   const midValue = array[mid];

//   if (midValue.id === id) {
//     return midValue;
//   } else if (midValue.id < id) {
//     return binarySearch(id, array.slice(mid + 1));
//   } else {
//     return binarySearch(id, array.slice(0, mid));
//   }
// }

test("linear search", function () {
  const lookingFor = { id: 5, name: "Giorgi" };
  expect(
    linearSearch(5, [
      { id: 1, name: "Sandro" },
      { id: 11, name: "Salome" },
      { id: 21, name: "Irakli" },
      { id: 10, name: "Beka" },
      { id: 13, name: "Sopo" },
      { id: 31, name: "Ani" },
      { id: 6, name: "Nino" },
      { id: 19, name: "Mariam" },
      { id: 25, name: "Kakha" },
      { id: 18, name: "Jemali" },
      { id: 2, name: "Malkhaz" },
      { id: 51, name: "Khatia" },
      lookingFor,
      { id: 14, name: "Besarion" },
    ])
  ).toBe(lookingFor);
});

test("binary search", function () {
  const lookingFor = { id: 23, name: "Bidzina" };
  expect(
    binarySearch(23, [
      { id: 1, name: "Sandro" },
      { id: 3, name: "Salome" },
      { id: 5, name: "Irakli" },
      { id: 6, name: "Beka" },
      { id: 10, name: "Sopo" },
      { id: 12, name: "Ani" },
      { id: 13, name: "Nino" },
      { id: 15, name: "Mariam" },
      { id: 17, name: "Kakha" },
      { id: 18, name: "Jemali" },
      { id: 19, name: "Malkhaz" },
      { id: 21, name: "Khatia" },
      lookingFor,
      { id: 24, name: "Besarion" },
    ])
  ).toBe(lookingFor);
});
