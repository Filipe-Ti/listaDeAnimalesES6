 export default class Proprietario {
    constructor(nombre, direccion, telefono, animal) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
        this._animal = animal;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get direccion(){
        return this._direccion;
    }

    set direccion(direccion){
        this._direccion = direccion;
    }

    get telefono(){
        return this._telefono;
    }

    set telefono(telefono){
        this._telefono = telefono;
    }

    get animal(){
        return this._animal;
    }

    set animal(animal){
        this._animal = animal;
    }
}