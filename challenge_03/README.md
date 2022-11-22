# ***Reto 3:*** _Cebra de colores_

## ***Problema*** 🧠

TMChein está preparándose para las vacaciones y quiere empezar a decorar la casa con luces navideñas.

Quiere comprar luces elegantes, pero sus favoritas son
las que tienen dos colores que se alternan. Como una cebra de colores.

Ha representado las luces como Arrays donde cada posición es un color. Ahora, quiere saber qué luces tienen la cebra más larga y cuál es el último color de la secuencia. Por ejemplo:

```properties
"['red', 'blue', 'red', 'blue', 'green'] -> 4, blue
['green', 'red', 'blue', 'gray'] -> 2, gray
['blue', 'blue', 'blue', 'blue'] -> 1, blue
['red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
['blue', 'red', 'blue', 'red', 'gray'] -> 4, red
['red', 'red', 'blue', 'red', 'red', 'red', 'green'] -> 3, red
['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
```

Ahora que sabes esto, https://codember.dev/colors.txt

## ***Pistas*** 🕵️

- Ten en cuenta que solamente quiere saber la longitud de la alternancia de dos colores. Una vez que se rompe la alternancia de los dos colores, deja de contar. 
- Recuerda que una cebra de color es cuando dos colores se alternan uno tras otro. Si un color se repite en la siguiente posición o aparece un tercer color, deja de contar.
- Lo que queremos calcular es la cebra de color más larga y el último color de esa secuencia de colores.

## ***Cómo enviar la solución*** 🥇

Usa el comando "submit" para enviar tu solución. Por ejemplo:

```properties
$ submit 62@red
```