# Que es Git?

Git es el sistema de control de versiones mas usado actualmente, se caracteriza por su velocidad, su sencillez y su soporte para desarrollo no lineal.

# Que es la metodologia Git Flow?

La metodologia Git Flow consiste en el uso de dos tipos de ramas, ramas principales que tienen un tiempo de vida no definido y ramas de funcion que tienen un tiempo limitado.

Las ramas principales por lo general no sera necesario hacer commits sobre ellas, su evolucion se basara en merges de ramas de funcion.
Tendremos dos ramas principales, Master o Main y Development.

Las ramas de funcion son sobre las que realizaremos commits, hay tres tipos de ellas, feature, hotfix y release, cada una de ellas con funciones especificas.

# Porque hemos usado Git Flow?

Hemos usado Git Flow ya que es una buena metodologia para proyectos complejos y nos ayuda a distribuir la carga de trabajo, pudiendo separar el desarrollo de funciones en diferentes desarrolladores y asi disminuyendo posibles errores.

# Como ha sido el proceso?
Primero, el desarrollador jefe se ha encargado de crear el repositorio local:

![Foto 1](./new-site/img/gh-pages/1.png)

Despues ha implementado el html boilerplate:

![Foto 2](./new-site/img/gh-pages/2.png)

Ahora ha subido el repositorio local al repositorio remoto en GitHub:

![Foto 3](./new-site/img/gh-pages/3.png)
![Foto 4](./new-site/img/gh-pages/4.png)
![Foto 5](./new-site/img/gh-pages/6.png)

Como podemos ver, en este punto las ramas ya se pueden ver en GitHub:

![Foto 6](./new-site/img/gh-pages/7.png)

Ahora nuestro segundo desarrollador se va a encargar de crear e implementar sus dos features correspondientes:

![Foto 7](./new-site/img/gh-pages/8.png)
![Foto 8](./new-site/img/gh-pages/9.png)
![Foto 9](./new-site/img/gh-pages/10.png)
![Foto 10](./new-site/img/gh-pages/11.png)
![Foto 11](./new-site/img/gh-pages/12.png)

Ahora sera el turno de nuestro tercer desarrollador, el se encargara de crear e implementar su feature y ademas de hacer la primera release de nuestro proyecto:

![Foto 12](./new-site/img/gh-pages/13.png)
![Foto 13](./new-site/img/gh-pages/14.png)
![Foto 14](./new-site/img/gh-pages/15.png)
![Foto 15](./new-site/img/gh-pages/16.png)
![Foto 16](./new-site/img/gh-pages/17.png)

Una vez hecho el release, el desarrollador jefe penso que se podian hacer unas mejoras en algun apartado, por lo que se realizo un hotfix: 

![Foto 17](./new-site/img/gh-pages/18.png)
![Foto 18](./new-site/img/gh-pages/19.png)
![Foto 19](./new-site/img/gh-pages/20.png)

Para terminar se realizo un push con todos los cambios al repositorio remoto:

![Foto 20](./new-site/img/gh-pages/21.png)
