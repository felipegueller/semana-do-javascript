/*
  You must use the filter function when you want to create a new array with
  smaller quantity of items
*/

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium)

console.log('premiumUsers: ', premiumUsers)