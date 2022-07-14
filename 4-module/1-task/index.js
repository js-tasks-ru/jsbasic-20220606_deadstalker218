function makeFriendList(arr){
  let ul = document.createElement('ul');

  for (let friend of arr) {
    ul.innerHTML += <li>${friend.firstName} ${friend.lastName}</li>;
  }

  return ul;
}