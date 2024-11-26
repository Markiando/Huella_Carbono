Propuesta inicial del proyecto: 

Crear una pagina web que pueda ayudar a las personas a medir y reducir su huella de carbono mediante
el registro de sus actividades diarias, mostrando cómo estas impactan en el medio ambiente.La página 
proporcionará recomendaciones personalizadas para fomentar hábitos más sostenibles y otrogará recompensas
a quienes logren disminuir su impacto. De esta forma se busca promover el compromiso con el cuidado del
planeta y fomentar una cultura de responsabilidad ecológica.  

Objetivos:  
 · Fomentar hábitos sostenibles. 
 · Crear conciencia colectiva. 
 · Medir la huella de carbono.
 · Reducir la huella de carbono.

Planeacion de la solución:

Para abordar nuestra problemática, se plantea desarrollar un sistema de registro de actividades que permita
al usuario identificar en qué áreas, actividades y hábitos cotidianos genera una mayor carga ecológica.
A partir de esta información, el sistema ofrecerá recomendaciones viables para incorporar a su rutina,
reduciendo así su impacto ambiental mediante la métrica de CO2eq (toneladas de CO2 equivalentes).

Analisis de la solución:

1. Registro de Actividades diarias: Ingreso de sus datos día a día. 
2. Calculadora de huella de carbono: La app muestra que el usuario ha generado tal cantidad de kg de CO₂ en
total, desglosado en categorías (transporte, alimentación, energía). 
3. Recomendaciones personalizadas: La app proporcionará recomendaciones personalizadas para ayudar a los 
usuarios a reducir su huella de carbono.
4. Monitoreo del progreso: (por ejemplo: Un gráfico que muestre cómo las emisiones de CO₂ han disminuido
tras adoptar el hábito de caminar o comer más vegetales, o cualquier otro.).
5. Los usuarios podrán participar en desafíos relacionados con la sostenibilidad, "un mes usando transporte
público" o similares. Por ejemplo: Un desafío mensual donde el objetivo es reducir un 10% de la huella de
carbono en comparación con el mes anterior. Al completarlo, el usuario recibe una insignia de forma digital
y aparece en una tabla de clasificación. 
6. Educación ambiental: La app incluirá una sección educativa con artículos, videos de YouTube y recursos 
gratuitos que enseñen a los usuarios sobre sostenibilidad, cambio climático y cómo reducir su huella de carbono. 

Prototipo de la solución: 

Link para ver los frames de la página:  
https://www.canva.com/design/DAGXjcXXBgU/07ZV-2u0YivcDHicj7CiTQ/edit

Link para ir al prototipo de la página web:
https://huella-carbono.vercel.app/

Diseño detallado de la solución: 

Frontend:
  Lenguaje: JavaScript
  Framework: React y Next.js
  Estilos y UX/UI: Vamos a optar por Tailwind CSS para un diseño modular.Este diseño se basará en la 
  interfaz  mostrada, con una barra lateral para la navegación y un área de contenido principal.
Componentes:
Gráfico de Huella de Carbono: Utilizaremos Chart.js para gráfico interactivo. La gráfica debe mostrar 
  el consumo en diferentes áreas (energía, transporte, alimentos, etc.).
Consejos y Desafíos: Los consejos se presentarán como tarjetas interactivas, y los desafíos como bloques 
  con opciones de participación.
Insignias y Logros: Integración de insignias desbloqueables que el usuario puede compartir. Se pueden  
  representar con iconos o imágenes optimizadas.
Contenidos Educativos: Recurso descargable y enlaces a contenido de aprendizaje.
Backend:
API: Utilizaremos una APl para gestionar la lógica del cálculo de la huella de carbono, el progreso  del
  usuario, y los consejos/desafíos. 
  Lenguaje y Framework: Node.js
  Módulos:
  Sistema de Cálculo de Huella de Carbono: Algoritmo para procesar los datos de consumo y convertirlos en
  métricas visualizables.
 Base de Datos:
   Tipo de Base de Datos:  MongoDB.
   Estructura de la Base de Datos:
   Usuarios: Información básica de los usuarios y progreso.
   Emisiones y Consumo: Datos sobre el impacto del usuario en diferentes  categorías (energía, transporte, 
   alimentos, etc.).
   Consejos y Desafíos: Lista de consejos y desafíos.
   Insignias: Lista de insignias desbloqueables y logros alcanzados.
 Infraestructura de Despliegue:
   Plataforma de Hosting: Vamos a utilizar Vercel.  

Organigrama del equipo de trabajo:

Link del organigrama: 
https://www.canva.com/design/DAGXjT_LmCQ/D5QPkvJuUs0H8cKq08xnLQ/edit

Cronograma acerca del proceso para la asignación de recursos:

Link del Cronograma: 
https://www.canva.com/design/DAGXivoBnuk/E_KrKbkdWzj48kaZptqXOw/edit

Evaluación de los miembros del equipo: 

La actitud de cada miembro del equipo fue excepcional, destacando siempre un fuerte trabajo en colaboración,
apoyo mutuo y un ambiente agradable y acogedor. La combinación de todos estos elementos permitió la exitosa
realización del proyecto.

Comentario sobre la labor del profesor como apoyo al proyecto:

El profesor Adalberto mostró en todo momento una actitud colaboradora en donde se mostraba interesado y
comprometido en la resolución de las dudas que fueron surgiendo a lo largo del desarrolló del proyecto,
todos estamos de acuerdo en que fue un gran mentor en la elaboración del mismo.

Presentación del proyecto:

Link de la presentación: 
https://www.canva.com/design/DAGRWeWE488/K4dcX_JVJUPr3FGpuFvd4g/edit?utm_content=DAGRWeWE488&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton