import React from "react";
import { ENGLISH, ESPANOL } from "./locale/LocaleConstants.jsx";
import { TranslatableText } from "./locale/TranslatableText.jsx";

const aboutPageJSX = {
  [ENGLISH]: (
    <div>
      <h2>
        About ALDP <br />
      </h2>
      <p>
        The <b>A’ingae Language Documentation Project</b> is an interdisciplinary
        effort which aims to document, investigate, and revitalize the A’ingae
        (also known as Cofán) language. A'ingae is spoken in Northeast Ecuador 
        and southern Colombia by the A'i (or Cofán) people, and currently has 
        approximately 1,500 speakers.
      </p>
      <p>
        The project is led by Scott AnderBois (Brown University)
        and Wilson de Lima Silva (University of Arizona) and is primarily
        based out of Brown University. It is carried out in close 
        collaboration with members of the Cofán communities in Ecuador 
        including the communities of Zábalo, Dureno, Dovuno, and Sinangoe.
      </p>

      <h3>The A’ingae Language Documentation Project</h3>

      <p>
      The A’ingae Language Documentation project started from a collaboration between 
      Scott AnderBois, Wilson Silva, and Hugo Lucitante, a native speaker of A’ingae 
      and a then-student at Brown (class of 2019). Through Hugo’s coursework, including a 
      linguistics field methods course taught by AnderBois in the spring 2017 semester, 
      as well as conversations outside the classroom, Hugo recognized the need for 
      community-engaged language documentation of his language. Members of AnderBois’ 
      field methods class had the opportunity to travel to Ecuador and work with A’ingae 
      community members directly, collecting primary sources in the form of recorded stories. 
      An{" "}
        <a href="https://www.browndailyherald.com/article/2019/02/professor-students-help-to-preserve-cofan-language">
          article
        </a>{" "}
        by the Brown Daily Herald reports on student experiences from the field methods 
        class and the resulting Ecuador trip.
      </p>
      <p>
      The ALDP presently aims to create a diverse multimedia database of A’ingae across 
      different cultural contexts and use this database to create pedagogical materials 
      of practical use to the Cofán nation as well as investigating research questions 
      about the language.
      At present, the project has collected over 30 hours of audio/video, which includes 
      over 220 stories. These primary texts are archived at the{" "}
      <a href="https://cla.berkeley.edu/">
        California Language Archive at UC Berkeley
      </a>{" "} and the {" "}
      <a href="https://elar.soas.ac.uk/Collection/MPI1079687">
        Endangered Languages Archive
      </a>{" "} at SOAS.  In addition to collecting primary sources, researchers have 
      written a host of formal research papers on the various linguistic aspects of 
      A’ingae, which can be read and downloaded from the{" "}
      <a href="#/materials">Materials</a> tab.
      </p>

      <h4>Funding</h4>

      <p>
      The ALDP is currently funded by National Science Foundation DEL/DLI grant 
      #BCS-1911348/1911428 “Perspective taking and reported speech in an evidentially-rich 
      language.” Our work has previously been funded by internal support at Brown, 
      including the I-Team UTRA program, and external support from the Endangered Language 
      Documentation Programme (ELDP #SG0481, Kofán Collaborative Project: Collection of 
      Audio-Video Materials and Texts).
      </p>

      <h3>The A’ingae language</h3>

      <p>
        Though in scholarly literature the language is most commonly referred 
        to as “Cofán” (or “Kofán”), the native speakers call their language A’ingae, 
        which means “in the way of the A’i/people” (the name consists of the stem 
        aʼi ('person, Cofán person, civilized person') and the manner clitic =ngae, 
        means 'in the manner of the people'). A’ingae is a language isolate, which 
        means that it is believed to be unrelated to any other known language on Earth. 
        Despite having no genetic relationship to other languages, A'ingae has many 
        typological features characteristic of other languages of the region, including 
        SOV basic word order, nominal classifiers, presence of frustative, apprehensive, 
        and evidential morphology, highly complex agglutinative morphology, contrastive 
        nasality on vowels and other prototypically Amazonian phonological features.
      </p>

      <p>
        A’ingae is an endangered language thought to have around 1,500 native
        speakers in Ecuador and Colombia. 
      </p>

      <p>
        More about the language can be found{" "}
        <a href="https://en.wikipedia.org/wiki/Cof%C3%A1n_language">here</a>,{" "}
        <a href="https://lddjournal.org/articles/10.25894/ldd28">here</a>, and in the{" "}
        <a href="#/materials">Materials</a> tab.
      </p>

      <h3>The People</h3>

      <p>
        The A’i people have long lived at the intersection of the Andes and Amazonia. 
        While they presently live in what is now the province of Sucumbíos in 
        northeast Ecuador and southern Colombia, they have historically made use of 
        a much larger territory as a primarily hunter-gatherer people. The A’i now are 
        about 1,500 strong and growing, a success they often credit to social cohesion 
        enabled by their distinct linguistic identity.
      </p>

      <p>
        The A’i have been negatively impacted by environmental threats such as oil 
        exploration and drilling, mining, logging, and poaching, as well as an influx 
        of people from other regions of Ecuador.
      </p>

      <h2>Members</h2>

      <h3>Co-directors</h3>

      <p style={{ marginBottom: "-.7em" }}>
        <b>Scott anderBois</b>
        <br />
        <a href="http://research.clps.brown.edu/anderbois/">
          research.clps.brown.edu/anderbois
        </a>
        <br />
        scott_anderbois at brown.edu
      </p>
      <p>
        Scott is an Associate Professor in the Department of Linguistics at 
        Brown University and Director of the {" "}
        <a href="https://linguistics.brown.edu/">
        Program in Linguistics
        </a>.
        In addition to the language documentation work of the ALDP, his research 
        is focused on the semantics and pragmatics and in particular the ways 
        that (non-truth conditional) assumptions about discourse context and 
        speaker attitudes are encoded and inferred cross-linguistically.
        Beyond A’ingae, his work has explored these issues through primary 
        fieldwork on Yucatec Maya (Mayan, Mexico) and Tagalog (Austronesian, 
        Philippines).
      </p>

      <p style={{ marginBottom: "-.7em" }}>
        <b>Wilson Silva</b>
        <br />
        wdelimasilva at email.arizona.edu
      </p>
      <p>
        Wilson is an Assistant Professor in the Department of Linguistics at the
        University of Arizona. He is a field linguist with formal training in
        theoretical linguistics and language documentation & revitalization.
        Beyond A’ingae, he has conducted research in Desano and Siriano; two
        endangered Eastern Tukanoan languages spoken in the Vaupés Region of
        Brazil and Colombia.
      </p>
    </div>
  ),
  [ESPANOL]: (
    <div>
      <h2>
        Acerca de ALDP <br />
      </h2>
      <p>
        <b>A’ingae Language Documentation Project</b> (esp.{" "}
        <i>el Proyecto de Documentación del Lenguaje A’ingae</i>) 
        es un esfuerzo interdisciplinar cuyo objetivo es documentar, 
        investigar y revitalizar la lengua a'ingae (también conocida 
        como cofán). La lengua a'ingae es hablada en el noreste de 
        Ecuador y el sur de Colombia por el pueblo a'i (o cofán), 
        y cuenta actualmente con unos 1.500 hablantes.
      </p>
      <p>
        El proyecto está dirigido por Scott AnderBois (Brown Universidad) 
        y Wilson de Lima Silva (Universidad de Arizona) y tiene su sede 
        principal en Brown Universidad. Se lleva a cabo en estrecha 
        colaboración con miembros de las comunidades zábalo, dureno, 
        dovuno y sinangoé de Ecuador.
      </p>

      <h3>Proyecto de Documentación del Lenguaje A’ingae</h3>

      <p>
        El proyecto de documentación de la lengua A'ingae comenzó a partir 
        de una colaboración entre Scott AnderBois, Wilson Silva y Hugo Lucitante, 
        hablante nativo de A'ingae y estudiante en Brown (clase de 2019). A través 
        del trabajo de curso de Hugo, incluido un curso de métodos de campo de 
        lingüística impartido por AnderBois en el semestre de primavera de 2017, 
        así como conversaciones fuera del aula, Hugo reconoció la necesidad de una 
        documentación lingüística de su idioma comprometida con la comunidad. Los 
        miembros de la clase de métodos de campo de AnderBois tuvieron la oportunidad 
        de viajar a Ecuador y trabajar directamente con miembros de la comunidad 
        a'ingae, recopilando fuentes primarias en forma de historias grabadas. Un{" "}
        <a href="https://www.browndailyherald.com/article/2019/02/professor-students-help-to-preserve-cofan-language">
          artículo
        </a> {" "} del Brown Daily Herald informa sobre las experiencias de los 
        estudiantes de la clase de métodos de campo y el consiguiente viaje a Ecuador.
      </p>

      <p>
        Los actuales investigadores del ALDP, entre los que se encuentran estudiantes de 
        Brown y de la Universidad de Arizona (cuya lista puede consultarse más abajo), se 
        dedican a diversas tareas de documentación lingüística, muchas de las cuales incluyen 
        el trabajo directo o indirecto con colaboradores de la comunidad A'i. La investigación 
        incluye la recopilación de transcripciones de relatos hablados, la glosa de estos 
        *textos que pueden consultarse en la pestaña Textos*, la creación de material 
        bibliográfico y pedagógico y, cuando las condiciones lo permiten, la realización de 
        viajes a Ecuador para participar en talleres lingüísticos y recopilar más fuentes 
        primarias. En la actualidad, el proyecto ha recopilado más de 30 horas de audio, que 
        incluyen más de 220 relatos. Estos textos primarios están archivados en el {" "}
        <a href="https://cla.berkeley.edu/">California Language Archive de la UC Berkeley</a>{" "}
        y en el <a href="https://elar.soas.ac.uk/Collection/MPI1079687">Endangered Languages Archive</a> 
        {" "}de SOAS. Además de recopilar fuentes primarias, los investigadores han escrito multitud de 
        trabajos de investigación formales sobre los diversos aspectos lingüísticos del 
        a'ingae, que pueden leerse y descargarse en la pestaña {" "}<a href="#/materials">Materiales</a>.
      </p>

      <h3>El idioma a'ingae</h3>

      <p>
        Aunque en la literatura académica se suele hacer referencia a esta lengua como 
        "cofán" (o "kofán"), los hablantes nativos la denominan a'ingae, que significa 
        "a la manera del pueblo a'i" (el nombre se compone de la raíz aʼi ('persona, 
        persona cofán, persona civilizada') y el clítico de modo =ngae, que significa 
        'a la manera del pueblo'). El a'ingae es una lengua aislada, lo que significa 
        que se cree que no está relacionada con ninguna otra lengua conocida en la Tierra. 
        A pesar de no tener ninguna relación genética con otras lenguas, el a'ingae 
        presenta muchos rasgos tipológicos característicos de otras lenguas de la región, 
        como el orden básico de las palabras SOV, los clasificadores nominales, la 
        presencia de morfología frustrativa, aprehensiva y evidencial, una morfología 
        aglutinativa muy compleja, nasalidad contrastiva en las vocales y otros rasgos 
        fonológicos prototípicamente amazónicos.
      </p>

      <p>
        El a'ingae es una lengua en peligro de extinción que cuenta con unos 1.500 hablantes 
        nativos en Ecuador y Colombia.
      </p>

      <p>
        Encontrará más información sobre la lengua {" "}
        <a href="https://en.wikipedia.org/wiki/Cof%C3%A1n_language">aquí</a>, {" "}
        <a href="https://lddjournal.org/articles/10.25894/ldd28">aquí</a>{" "} y en 
        la pestaña {" "}<a href="#/materials">Materiales</a>.
      </p>

      <h3>Los cofanes</h3>

      <p>
        El pueblo A'i ha vivido durante mucho tiempo en la intersección de los Andes 
        y la Amazonia. Aunque actualmente viven en lo que hoy es la provincia de 
        Sucumbíos, en el noreste de Ecuador y el sur de Colombia, históricamente han 
        utilizado un territorio mucho más extenso como pueblo cazador-recolector. En 
        la actualidad, los a'i son unos 1.500 y siguen creciendo, un éxito que suelen 
        atribuir a la cohesión social que les proporciona su identidad lingüística 
        diferenciada.
      </p>

      <p>
        La tradición religiosa a'i es chamanista, y un valor cultural clave de los 
        a'i es la convivencia armoniosa. Además, la participación en prácticas 
        culturales como beber yaje y en oficios tradicionales como la caza y la 
        construcción de casas, más que la ascendencia o la etnia, desempeña un papel 
        importante a la hora de determinar la condición de a'i (Cepek 2012). Los cofán 
        atribuyen a su fuerte identidad lingüística su capacidad para resistir la 
        opresión colonial y proteger su modo de vida tradicional.
      </p>

      <p>
        Los A'i se han visto afectados negativamente por amenazas medioambientales 
        como la prospección y perforación petrolífera, la minería, la tala de árboles 
        y la caza furtiva, así como por la afluencia de colonos de otras regiones de 
        Ecuador. Más información sobre el pueblo A'i{" "} 
        <a href="https://en.wikipedia.org/wiki/Cof%C3%A1n_people">aquí</a>.
      </p>

      <h2>Miembros</h2>

      <h3>Codirectores</h3>

      <p style={{ marginBottom: "-.7em" }}>
        <b>Scott AnderBois</b>
        <br />
        <a href="http://research.clps.brown.edu/anderbois/">
          research.clps.brown.edu/anderbois
        </a>
        <br />
        scott_anderbois en brown.edu
      </p>
      <p>
        Scott es profesor asociado en el Departamento de Ciencias Cognitivas, 
        Lingüísticas y Psicológicas (CLPS) de la Universidad de Brown. Su investigación 
        se centra en cuestiones de semántica y pragmática, especialmente aquellas 
        relacionadas con los significados condicionales que no son de verdad y la forma 
        en que interactúan con el tipo de oración. Más allá de A'ingae, su trabajo ha 
        explorado estos temas a través del trabajo de campo primario en maya yucateco 
        (maya, México) y tagalo (austronesio, Filipinas). Además, codirige con Miguel 
        Oscar Chan Dzul (Universidad de Oriente){" "}
        <a href="https://yucatecmaya.github.io/LingView/#/">
          U koorpusil maaya t'aan
        </a>, un corpus digital multipropósito de la cultura maya yucateca.
      </p>

      <p style={{ marginBottom: "-.7em" }}>
        <b>Wilson Silva</b>
        <br />
        wdelimasilva en email.arizona.edu
      </p>
      <p>
        Wilson es profesor asistente en el Departamento de Lingüística de la 
        Universidad de Arizona. Es un lingüista de campo con formación formal 
        en lingüística teórica y documentación y revitalización de idiomas. Más 
        allá de A'ingae, ha realizado investigaciones en Desano y Siriano; dos 
        lenguas tukanoanas orientales en peligro de extinción que se hablan en 
        la región de Vaupés de Brasil y Colombia.
      </p>
    </div>
  ),
};

export function AboutPage() {
  return <TranslatableText dictionary={aboutPageJSX} />;
}
