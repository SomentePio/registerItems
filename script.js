

  let option
  let items = []

while (option != 3) {
  
  let option = Number(prompt(`
  Hey! How can I help you today?
  
  1. Register an item
  2. Show my item's list
  3. Logout
  `))

switch(option) {
  case 1:
    let item = prompt(`Enter item's name`)
    //the push is adding item on my items array
    items.push(item)
    break;

  case 2:
      if (items.length == 0) {
    alert(`Your list is empty`)
    } else {
    alert(items)
    }
    break;

  case 3:
    alert(`See you later!`)
    break;
    
  default:
    alert(`Invalid option`)
    break;    
  }
}


// if (option == 1) {
//   let item = prompt(`Enter item's name`)
//   items.push(item)
// }

// else if (option == 2) {
  
//   if (items.length == 0) {
//     alert(`Your list is empty`)
//   } else {
//     alert(items)
//   }

// } else {
//  alert(`See you later!`)
// }
