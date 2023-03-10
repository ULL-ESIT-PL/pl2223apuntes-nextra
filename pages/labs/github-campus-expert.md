export const FrontMatter = {
   title: "GitHub Campus Expert",
   date: "2022/09/14 01",
   delivery: "2022/10/18",
   order: 2,
   layout: "Practica",
   published: true,
   rubrica: [
      "Rellenado cuestionario GitHub,Alu"
      , "Miembro de la comunidad Currents/G+"
      , "El nombre del equipo es correcto"
      , "Solicitado Backpack"
      , "Kanban Board project creado"
      , "Informe realizado  mostrando que domina markdown de forma eficiente: Usa imágenes, enlaces, listas, etc."
      , "Ha entregado el .zip en el campus con el repo"
   ]
}

import { Callout } from 'nextra-theme-docs'

# { FrontMatter.title }

## Aceptación de la Práctica github-campus-expert  

Esta práctica tiene por objetivo mejorar las competencias transversales y establecer nuestro workflow habitual.

La realización de lo que se pide respecto a los cursos es opcional pero **la aceptación y el informe son obligatorios**. 

Al aceptar la asignación, si no se ha creado ya su equipo, se le pedirá que cree uno.  
Es un equipo individual.

<Callout type="info" emoji="ℹ️">
* Deberá dar como nombre del equipo: `nombre-apellido1-apellido2-aluXXXX`.  
  * Sin acentos ni caracteres especiales. 
  Sustituya `aluXXX` por su usuario en la ULL. 
  * Use SnakeCase si su nombre es compuesto p.ej. "Ana María González de Pérez" es `ana_maria-gonzalez-de_perez-alu010034789`. 
  * Los equipos son de un sólo miembro.
</Callout>

## Tareas 

Estas son las tareas a realizar:

1. Rellene el cuestionario GitHub-Alu
2. Hágase miembro de la comunidad Currents/G+ de PL (deberá estar autenticado con el gmail de la ULL)
3. Cree un project board kanban automated asociado al repo de la asignación. Rellene la columna TODO con los requisitos de la práctica. 
   * Véase también [GitHub Docs: About project boards](https://docs.github.com/en/github/managing-your-work-on-github/about-project-boards)
4. Considere la posibilidad de [realizar el curso *Become a Campus Expert*](https://githubcampus.expert/training) de GitHub. Puede no hacerlo si no lo considera oportuno.
   * ... The training itself has a six-week timeline where you’ll be able to analyze your community and learn community leadership skills, —like public speaking, technical writing, and software development, as well as —and write a community proposal. [Introducing the New (and Improved!) Campus Experts Program](https://github.blog/2020-12-10-introducing-the-new-and-improved-campus-experts-program/) 2020-12-10
5. Considere la posibilidad de solicitar su [Student Developer Pack](https://education.github.com/pack) 
6. Considere la posibilidad de [solicitar una GitHub Internship](https://internships.github.com/). Si está cerrada puede subscríbirse para recibir las actualizaciones
7. En todas las entregas de prácticas en el Campus de la asignatura deberá poner
   1. El enlace al repo de entrega en GitHub
   2. En todas las prácticas, siempre que ocupe menos de la capacidad admitida por el servidor Moodle, deberá adjuntar el repo en formato zip. En GH vaya a `code`y de ahí a:

      ![saveaszip.png](/images/saveaszip.png)

## Rubric

import { Rubric } from '@components/rubric'


<Rubric list={FrontMatter.rubrica} />

## References

* [GitHub Docs: About project boards](https://docs.github.com/en/github/managing-your-work-on-github/about-project-boards)
* [Students leading the way: Campus Experts - Juan Pablo Flores](https://www.twitch.tv/videos/833713562?collection=lrqXyFWFThau8w) twitch video. De 08:00 a 13:25 se dan consejos sobre como rellenar la solicitud.
* [Teachers guiding teachers: Campus Advisors](https://www.twitch.tv/videos/833727589?collection=lrqXyFWFThau8w) Arelia Jones

