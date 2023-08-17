const card = document.getElementsByClassName('card')
console.log(card)
card[0].style.display = 'block'
card[1].style.display = 'none'
function rating(){
  let userRate = document.forms[0]['selection'].value
  let messageRating = document.getElementsByClassName('rating')[0]
  messageRating.innerHTML = `You selected ${userRate} out of 5` 
  card[1].style.display = 'block'
  card[0].style.display = 'none'
  return false
}
