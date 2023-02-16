//Class - Decription:
class Student {

    constructor({name, age, email, cursosAprobados, path={}}){
       this.name = name;
       this.age = age;
       this.email=email;
       this.cursosAprobados=cursosAprobados;
       this.path=path;
    }

    //Metodo
    agregarCursos(cursosAprobados){
        this.cursosAprobados.push = cursosAprobados; 
    }    
    //Metodo
    agregarPath(pathNew){
        this.path = {
            ...this.path,
            pathNew 
        };
    }
}//End to Class