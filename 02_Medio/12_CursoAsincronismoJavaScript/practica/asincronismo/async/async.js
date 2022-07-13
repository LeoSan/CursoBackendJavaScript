
//Creamos nuestra función 
const fnAsync = () => {
    return new Promise((resolve, reject) => {
      (true)
        ? setTimeout(() => resolve('Async!!'), 2000)
        : reject(new Error('Error!'));
    });
  }
  

  //Creamos nuestro metodo ya declarando async ya que internamente usara una promesa 
  const anotherFn = async () => {
    const somethig = await fnAsync();//Await le decimos que espere hasta que termine la promesa 
    console.log(somethig);
    console.log('Hello!');
  }
  
  console.log('Before');
  anotherFn();
  console.log('After');