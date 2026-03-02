# App de Sumatoria

Una aplicación web interactiva que demuestra el uso de clases en JavaScript. Realiza sumas sucesivas partiendo de un número base aleatorio.

## 📋 Descripción

Esta aplicación implementa una clase `Sumatoria` que:
- Genera un número aleatorio entre 1 y 10 como base inicial
- Permite realizar sumas sucesivas con un clic de botón
- Muestra el historial completo de operaciones y resultados

Cada vez que haces clic en el botón **Ejecutar sumar()**, la aplicación suma el siguiente número entero al acumulado actual y muestra la operación realizada.

## 🚀 Características

- **Generación aleatoria**: Base numérica aleatoria en cada carga
- **Interfaz intuitiva**: Botón simple para ejecutar sumas
- **Historial visible**: Muestra todas las operaciones en tiempo real
- **Scroll automático**: Se desplaza hacia el resultado más reciente
- **Diseño responsivo**: Se adapta a diferentes tamaños de pantalla
- **Código orientado a objetos**: Implementación limpia con clases

## 📁 Estructura del Proyecto

```
_sumatoria_/
├── index.html                 # Estructura HTML principal
├── assets/
│   ├── css/
│   │   └── sumatoria.css     # Estilos de la aplicación
│   └── js/
│       └── sumatoria.js      # Lógica con la clase Sumatoria
└── README.md                  # Este archivo
```

## 🎯 Cómo Funciona

1. **Inicialización**: Al cargar la página, se crea una instancia de `Sumatoria` con un número base aleatorio
2. **Programa**: El constructor muestra el número base generado
3. **Ejecución**: Cada clic en el botón ejecuta el método `sumar()`
4. **Visualización**: Las operaciones se muestran en tiempo real en la pantalla

### Ejemplo de ejecución:

Si el número base aleatorio es **5**:

```
Constructor iniciado: La base aleatoria es 5
Operación: 5 + 6
Resultado actual: 11
---
Operación: 11 + 7
Resultado actual: 18
---
```

## 💻 Cómo Usar

1. Abre el archivo `index.html` en tu navegador
2. Verás el número base aleatorio mostrado
3. Haz clic en el botón **Ejecutar sumar()** tantas veces como desees
4. Observa cómo se incrementan las sumas sucesivas

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsivo y estilos modernos
- **JavaScript (ES6)**: Clases y manipulación del DOM

## 📚 Conceptos Clave

Este proyecto demuestra:
- Uso de **clases** en JavaScript
- **Constructor** para inicializar propiedades
- **Métodos** para encapsular comportamiento
- **Event listeners** para interactuar con el usuario
- **Manipulación del DOM** para mostrar resultados dinámicamente
- **Scroll automático** con `scrollHeight`

## 🎨 Paleta de Colores

- **Verde principal** (#27ae60): Títulos y botones
- **Verde hover** (#2ecc71): Efecto hover del botón
- **Gris oscuro** (#2c3e50): Panel de resultados
- **Texto claro** (#ecf0f1): Texto en el panel
- **Amarillo** (#f1c40f): Resaltado en el constructor

## 📝 Licencia

Este proyecto es de propósito educativo y libre para usar y modificar.

## 👤 Autor

Creado como ejemplo de progresión en JavaScript orientado a objetos.
