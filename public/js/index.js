const Button = document.getElementById("button");

const getDataUser = async () => {
  let response = await fetch("/api/whoami");
  let data = await response.json();
  return data;
};

const sendUserInfo= async () =>{
  const response = await getDataUser();
  console.log(response);
  document.getElementById("result").innerHTML = `
  <p>Direccion IP: ${response.ipaddress} </p>
  <p>Lenguajes: </p/>
  <p>${response.language}</p>
  <p>User agent: </p>
  <p> ${response.software}</p>`;
}




Button.addEventListener('click',sendUserInfo);


