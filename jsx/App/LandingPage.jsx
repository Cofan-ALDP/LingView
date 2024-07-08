import React from "react";
import { ENGLISH, ESPANOL } from "./locale/LocaleConstants.jsx";
import { TranslatableText } from "./locale/TranslatableText.jsx";
import image1 from '../../images/workshopgroup.jpg';
import image2 from '../../images/nasality.jpg';
import image3 from '../../images/recordingsession.jpg';


const landingPageJSX = {
  [ENGLISH]: (
    <div>
      <p><b>Welcome</b> to the A’ingae Language Documentation Project (ALDP) website! 
        The A’ingae Language Documentation Project (ALDP) is an interdisciplinary 
        effort which aims to document, investigate, and revitalize the A’ingae 
        (also known as Cofán) language. A’ingae is spoken in Northeast Ecuador 
        and southern Colombia by the A’i (or Cofán) people, and currently has 
        approximately 1,500 speakers. The project is led by Scott AnderBois (Brown 
        University) and Wilson de Lima Silva (University of Arizona), and is 
        primarily based out of Brown University. It is carried out in close 
        collaboration with members of the Zábalo, Dureno, Dovuno, and Sinangoe 
        communities in Ecuador. Check out the {" "}<a href="#/about">About page</a>{" "} 
        for more information.
      </p>
      <p>
        This website has the following tabs/pages:
      </p>
      <ul>
        <li><a href="#/search">Search</a>{" "}
          - the search tab contains a search bar from which you can keyword 
          search within the texts posted to the website
        </li>
        <li><a href="#/about">About</a>{" "}
         - the about page has more information about the project and its members, 
          the A’ingae language, and the A’i people
        </li>
        <li><a href="#/materials">Materials</a>{" "}
         - the materials page contains links to PDFs of various literature 
          that has been written about A’ingae, many of which were written by previous or 
          current members of the ALDP
        </li>
        <li><a href="#/glossary">Glosses</a>{" "} - the glosses page has more information about how to engage with the 
          texts on this website. It contains both an explanation of how to use the texts tab, 
          as well as provides a list of the glossing conventions used within the text analyses.
        </li>
        <li><a href="#/index">Texts</a>{" "} - texts is where you can view a number of the texts that we’ve recorded with 
          native speakers. Many of these texts have been glossed (linguistically annotated), 
          and many have accompanying audio and/or video.
        </li>
      </ul>
      <div className="image-row">
        <div className="image-container">
          <img src={image2} alt="Nasality recording session" className="image" />
          <span className="caption-bar">Nasality recording session</span>
        </div>
        {/*<div className="image-container">
          <img src={image1} alt="2023 Workshop" className="image" />
          <span className="caption-bar">2023 Workshop</span>
        </div>
        <div className="image-container">
          <img src={image3} alt="Recording session by the river" className="image" />
          <span className="caption-bar">Recording session by the river</span>
        </div>*/}
      </div>
    </div>
  ),
  [ESPANOL]: (
    <div>
      <p>
        <b>Bienvenido</b> al sitio web del proyecto de documentación del idioma A'ingae (PDLA). El proyecto de documentación 
        del idioma A'ingae (PDLA) es un esfuerzo interdisciplinario cuyo objetivo es documentar, investigar y revitalizar 
        el idioma A'ingae (también conocida como Cofán). El a'ingae es una lengua hablada en el noreste de Ecuador y el 
        sur de Colombia por el pueblo a'i (o cofán), y cuenta actualmente con unos 1.500 hablantes. El proyecto está dirigido 
        por Scott AnderBois (Brown Universidad) y Wilson de Lima Silva (Universidad de Arizona), y tiene su sede principal en 
        la Brown Universidad. Se lleva a cabo en estrecha colaboración con miembros de las comunidades zábalo, dureno, dovuno 
        y sinangoe de Ecuador.
        Para más información acerca del corpus, consulte <a href="#/about">esta página</a>.
      </p>
      <p>
        Este sitio web tiene las siguientes pestañas/páginas:
      </p>
      <ul>
        <li><a href="#/search">Buscar</a>{" "}
          - la pestaña de búsqueda contiene una barra de búsqueda desde la que se pueden buscar palabras clave 
          en los textos publicados en el sitio web
        </li>
        <li><a href="#/about">Acerca del corpus</a>{" "}
          - la página "Acerca de" contiene más información sobre el proyecto y sus miembros, la lengua a'ingae 
          y el pueblo a'i.
        </li>
        <li><a href="#/resources">Recursos</a>{" "} -
        </li>
        <li><a href="#/materials">Materias</a>{" "}
          - la página de materiales contiene enlaces a archivos PDF de diversa literatura que se ha escrito sobre A'ingae, 
          muchos de los cuales fueron escritos por miembros anteriores o actuales de la PDLA
        </li>
        <li><a href="#/glossary">Glosario</a>
          - la página de glosas contiene más información sobre cómo utilizar los textos de este sitio web. Contiene tanto 
          una explicación de cómo utilizar la pestaña de textos como una lista de las convenciones de glosado utilizadas 
          en los análisis de textos.
        </li>
        <li><a href="#/index">Textos</a>{" "}
          - textos es donde puede ver una serie de textos que hemos grabado con hablantes nativos. Muchos de estos textos 
          han sido glosados (anotados lingüísticamente), y muchos van acompañados de audio y/o vídeo.
        </li>
      </ul>
      <div className="image-row">
        <div className="image-container">
          <img src={image2} alt="Sesión de grabación de la nasalidad" className="image" />
          <span className="caption-bar">Sesión de grabación de la nasalidad</span>
        </div>
        {/*<div className="image-container">
          <img src={image1} alt="Taller de 2023" className="image" />
          <span className="caption-bar">Taller de 2023</span>
        </div>
        <div className="image-container">
          <img src={image3} alt="Sesión de grabación junto al río" className="image" />
          <span className="caption-bar">Sesión de grabación junto al río</span>
        </div>*/}
      </div>
    </div>
  )
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
