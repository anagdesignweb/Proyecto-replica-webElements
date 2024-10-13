# Proyecto: Replica Web Components 🚀

## Descripción 📝

Este proyecto se basa en **Web Components**, una tecnología que permite crear componentes HTML personalizados y reutilizables. Los **Web Components** encapsulan la estructura, el estilo y el comportamiento en un solo archivo, lo que facilita la creación de elementos reutilizables en cualquier proyecto.

#### Tecnologías usadas:

HTML5
CSS3
JavaScript (ES6)

## Estilos css generales del proyecto:

IMPORTANTE: Los elementos llevan aplicadas algunas clases mas a parte de las necesarias para la animación (para los tamaños de los textos, posiciones...) Si quieres seguir utilizando esas clases debes copiarlas tambien con el elemento al igual que haras copiando las clases para las animaciones.
Tambien hay que tener en cuenta las media queries si quieres que sea responsive y adaptativo en cada tamaño de pantalla.

## Animaciones del proyecto:

### Animación `TextAnimatedHeading`

Esta animación se aplica a elementos de texto para que **aparezcan con un desplazamiento suave** desde abajo hacia su posición original.

#### Uso:

1. Aplica la clase `TextAnimatedHeading` a un contenedor que contenga un elemento de texto ( parrafo, headding...).
2. El texto se deslizará hacia arriba al aparecer.

#### Ejemplo:

```html
<div class="TextAnimatedHeading">
  <h1>Título animado</h1>
</div>
```

#### Codigo equivalente:

- **CSS**: 0.6s
- **JS**: Desplaza el texto 50px hacia arriba hasta su posición original.
