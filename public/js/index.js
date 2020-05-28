const Button = document.getElementById('button');

Button.addEventListener('click',async () =>{
  let response = await fetch('/api/whoami');
  let data = await response.json();
  console.log(data);
})