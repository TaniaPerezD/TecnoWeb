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
