// Modelo: Responsable de almacenar y gestionar los datos
class Model {
    constructor() {
        this.name = '';
    }

    setName(newName) {
        this.name = newName;
    }

    getName() {
        return this.name;
    }
}

// Vista: Responsable de la interfaz de usuario (mostrar datos y recibir la entrada)
class View {
    constructor() {
        this.input = document.getElementById('nameInput');
        this.display = document.getElementById('displayName');
        this.submitBtn = document.getElementById('submitBtn');
    }

    // Método para actualizar la visualización del nombre
    updateDisplay(name) {
        this.display.textContent = name;
    }

    // Método para capturar la entrada del usuario (callback para cuando se envía el formulario)
    bindSubmit(handler) {
        this.submitBtn.addEventListener('click', () => {
            handler(this.input.value);
        });
    }
}
// Controlador: Coordina las interacciones entre el modelo y la vista
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Cuando el usuario hace clic en enviar, actualizamos el modelo y la vista
        this.view.bindSubmit(this.handleNameSubmit.bind(this));
    }

    // Método que gestiona la interacción cuando se ingresa un nombre
    handleNameSubmit(name) {
        this.model.setName(name);
        this.view.updateDisplay(this.model.getName());
    }
}

// Instanciamos el modelo, la vista y el controlador para que interactúen
const app = new Controller(new Model(), new View());
