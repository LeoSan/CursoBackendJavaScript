
//Obejetos Literales 
const lista = {
    name:'Alumno',
    age:20,
    cursosAprobados:[
        "Curso 1",
        "Curso 2",
    ],
    //Asignar un nuevo curso
    aprobarCursos:function(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    },
};

// //Objeto Prototipado 

// function Student(name, age, cursoAprobados){
//     this.name = name;
//     this.age = age;
//     this.cursoAprobados = cursoAprobados; 
// }

// //Otra forma podemos crearlo por fuera pero debomosusar la palabra reservada prototype
// Student.prototype.aprobarCursos = function (nuevoCurso){
//     this.cursoAprobados.push(nuevoCurso);
// };

const leo = new Student("Leonard", "35", ["Cruso 1", "Curso 2", "Curso 3"]);

//Class - Decription:
 class Estudiante {

    constructor({name, age, cursoAprobados=[], email}){
        this.name = name;
        this.age = age;
        this.cursoAprobados = cursoAprobados; 
        this.email=email;
    }

    //Metodos
    aprobarCursos(nuevoCurso){
        this.cursoAprobados.push(nuevoCurso) ;
    }

}//End to Class 


const Leonard = new Estudiante({
    name: "Jose", 
    age:35, 
    cursoAprobados:["Cruso 4", "Curso 5", "Curso 7"],
    email:"Cuenca623@gmail.com"
});


// USANDO CLASES 

//Instanciamos Ruta 
const rutaBasica = new PathLearning({name:"Ruta Basica", courses:["Basico 1", "Basico 2", "Basico 3"]});
const rutaMedia = new PathLearning({name:"Ruta Media", courses:["Media 1", "Media 2", "Media 3"]});
console.log(rutaBasica);
//instanciamos Estuddiante 
const Jose = new Student({name:"Jose", age:20, email:"correo@gmail.com", cursosAprobados:["Basico 1"], path:{rutaBasica}});

Jose.agregarPath(rutaMedia);
console.log(Jose);