//SetData To LocalStorage
if(localStorage.getItem('fruitNames') === null) {
    localStorage.setItem('fruitNames', '["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"]');
  }
  
  if(localStorage.getItem('fruitEmojis') === null) {
    localStorage.setItem('fruitEmojis', '["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"]');
  }
  
  //View the localstorage data
  // Check if Fruit Name Data is Available
  if(localStorage.getItem('fruitNames') != null) {
    const fruitNam = JSON.parse(localStorage.getItem('fruitNames'));
    const fruitEmo = JSON.parse(localStorage.getItem('fruitEmojis'));
     //map the two arrays to a single array
     const fruitArray = fruitNam.map(function(e, i){
       return '<li class="list-group-item">'+ [e, fruitEmo[i]] + '</li>';
     });
  //sort results in alphabetical order
  fruitArray.sort();
  //Display Results On Web Page 
  document.getElementById('fruit-joined').innerHTML = fruitArray.join('');
  console.log(fruitArray);
  }
  
  
  //adding a new fruit
  function addFruit() {
    //get form data from the form
    const getFruitName = document.querySelector( "#fruitName").value;
    const getFruitEmoji = document.querySelector( "#fruitEmoji").value;
  
    const oldFruitName =  JSON.parse(localStorage.getItem('fruitNames'));
    oldFruitName.push(getFruitName);
  
    // Save the old and new data to local storage
    localStorage.setItem('fruitNames', JSON.stringify(oldFruitName));
    const oldFruitEmoji =  JSON.parse(localStorage.getItem('fruitEmojis'));
    oldFruitEmoji.push(getFruitEmoji);
    // // Save the old and new data to local storage
    localStorage.setItem('fruitEmojis', JSON.stringify(oldFruitEmoji));
  
    alert("New Fruit Added!");
  
  }
  
  //search for fruits
  function searchTerm() {
    
  }
  
  //refresh page
  function refreshPage() {
    window.location.reload();
  }
