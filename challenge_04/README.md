# ***Reto 4:*** _Tío, he perdido mi contraseña_

## ***Problema*** 🧠

Un amigo compró 5 Bitcoins en 2008. El problema es que lo tenía en una billetera digital...¡y no recuerda la contraseña!

Nos ha pedido ayuda y nos ha dado algunas pistas:

## ***Pistas*** 🕵️

- Es una contraseña de 5 dígitos.
- La contraseña tiene el número 5 repetido al menos dos veces.
- El número de la derecha siempre es mayor o igual que el de la izquierda.

Nos ha dado algunos ejemplos:

```properties
55678 -> Correcto
55555 -> Correcto
12345 -> Incorrecto -> No tiene el número 5 repetido
57775 -> Incorrecto -> Los números no van en orden creciente
```

Dice que la contraseña está entre los números 11098 y 98123. ¿Podemos decirle cuántos números cumplen esas reglas dentro de ese rango?

## ***Cómo enviar la solución*** 🥇

Envía la solución con el comando "submit", y el número de contraseñas que cumplen con los criterios junto con la contraseña que está en el índice 55 de la lista de contraseñas válidas, separadas por un guión. Por ejemplo:

```properties
$ submit 87-35522
```