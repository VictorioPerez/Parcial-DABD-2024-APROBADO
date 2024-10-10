[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/VFst3XAT)
# Sistema de Gestión de Playa de Estacionamiento
El sistema a desarrollar es para una playa de estacionamiento que permite el ingreso y estadía de motocicletas, automóviles y camionetas. 
La playa de estacionamiento posee 30 plazas (slot), y la asignación de estas plazas se explica más adelante.
El objetivo de este desarrollo es poder registrar el ingreso de cada vehículo, mostrando la disponibilidad de espacios libres y ocupados con sus respectivos vehículos, asignando de forma automática el vehículo que ingresa a un lugar disponible y válido. 

## Requisitos Funcionales

1. **Mostrar Distribución de Lugares y Disponibilidad:**
   - **Distribución:** Mostrar el diseño del estacionamiento con la disponibilidad de los lugares. Utiliza diferentes íconos para representar los distintos tipos de vehículos:
     - **Lugar Disponible:** Mostrar un punto para los lugares disponibles.
     - **Lugares Ocupados:** Utiliza íconos de Bootstrap para mostrar autos, camionetas o motocicletas en los lugares ocupados.
   
2. **Formulario de Ingreso de Vehículo:**
   - **Campos del Formulario:**
     - **Marca** (Requerido): Proporcionar una lista predefinida de marcas.
     - **Modelo** (Opcional): Mínimo de 3 caracteres.
     - **Dominio Nuevo** (Booleano): Indica si el vehículo tiene un dominio nuevo.
     - **Dominio** (Requerido, X Caracteres Exactos): siendo X 7 para dominios nuevos y 6 para dominios viejos.
     - **Tipo de Vehículo**: Seleccionar de un enumerado con valores: moto, auto, camioneta.
     - **Hora de Ingreso** (Requerido): Debe ser proporcionada. Cargar la hora actual por defecto.
   - **Validación:**
     - Mostrar errores solo después de que el usuario haya interactuado con los controles del formulario.
   
3. **Visualización de Una Pantalla a la Vez:**
   - **Visibilidad del Formulario y del Mapa:**
     - Mostrar solo el formulario o el mapa, pero no ambos simultáneamente.
     - El formulario debe estar oculto mientras se visualiza el mapa y viceversa.
     - El usuario debe poder navegar entre ver el formulario y el mapa por medio de botones.
   
4. **Asignación de Lugares de Estacionamiento:**
   - **Tipo de Vehículo y Asignación de Lugares:**
     - Asignar los lugares de estacionamiento según el tipo de vehículo (cada plaza tiene 8 lugares y puede recibir varios vehiculos mientras haya espacio disponible):
       - **Camioneta:** Requiere 8 lugares.
       - **Auto:** Requiere 4 lugares.
       - **Motocicleta:** Requiere 1 lugar.
   Es decir, en una plaza entra solo una camioneta o, dos autos u, ocho motos. Entonces, si en una plaza hay un auto solamente, pueden entrar en la misma plaza hasta cuatro motocicletas.  
   - **Actualización de Disponibilidad:**
     - Al ingresar un vehículo, buscar un lugar disponible según el tipo de vehículo y actualizar la visualización del estacionamiento en consecuencia.
   
5. **Visualización de los Lugares:**
   - **Lugares Ocupados y Disponibles:**
     - **Ocupados:** Mostrar los lugares en rojo.
     - **Disponibles:** Mostrar los lugares en verde.
   - **Claridad:** Proporcionar indicadores visuales claros para ayudar al encargado de la playa de estacionamiento a identificar fácilmente los lugares ocupados y disponibles.

## Consideraciones

- **Estructura de Archivos:** Organizar los archivos en directorios según sus responsabilidades.
- **Estilo:** Respetar los estilos proporcionados utilizando el framework (Bootstrap).
- **Idioma:** Escribir todo el código y los comentarios en inglés, pero los mensajes dirigidos al usuario (etiquetas, alertas, validaciones, etc.) deben estar en español.
- **Archivos Proporcionados:** No modificar ningún archivo proporcionado, excepto el del formulario.
- **SPA** La pagina nunca debe ser recargada ateniendose al mecanismo proporcionado por las aplicaciones de una sola página.

## MockUps
![mu1](https://github.com/user-attachments/assets/3bd0119e-9a68-4d15-ba50-ad07a406a7b8)
![mu2](https://github.com/user-attachments/assets/3b160256-bc66-4619-acf7-1ca872e6e36e)
![mu3](https://github.com/user-attachments/assets/54b84a17-c2aa-499a-a0ee-50c59e2427c9)


## Ejemplos: 
Teniendo en cuenta la primer imagen proporcionada como mock up de la disponibilidad de lugares, a continuación se presentan algunos ejemplos visuales indicando como debería quedar la disponibilidad de lugares al ingresar un nuevo vehiculo:

**En caso de agregar una moto:**
![mu4](https://github.com/user-attachments/assets/33661232-ebdc-400a-900b-4231c4d0123c)

**En caso de agregar un auto:**
![mu5](https://github.com/user-attachments/assets/825b8d96-88b2-4ff5-9767-a6d54045e952)

**En caso de agregar una camioneta:**
![mu6](https://github.com/user-attachments/assets/be266d01-3757-4b14-a757-e82ec4571535)

## Rubrica:
- Registro ingreso (3)
- Validaciones (2)
- Mapa playa estacionamiento (3)
- Navegación componentes (1)
- Estilos (1)
# 1erparcialprog2024
