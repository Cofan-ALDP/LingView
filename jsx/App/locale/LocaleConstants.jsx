// Put language constants here to use in your display.
// JSX for entire pages, specifically the Landing page, Glossary page, and the
// About page, are in the respective files themselves
// (e.g. jsx/App/LandingPage.jsx).
export const ENGLISH = "en";
export const ESPANOL = "es";
export const AINGAE = "ai";

// Put default language here.
export const DEFAULT_LOCALE = ESPANOL;

// Below, write the text that goes in various parts of the website for each
// language.

// NavBar text (header).
export const navBarTitleText = {
  [ENGLISH]: "A'ingae Language Documentation Project",
  [ESPANOL]: "Proyecto de documentación del idioma A'ingae",
};

export const navBarSearchText = {
  [ENGLISH]: "Search",
  [ESPANOL]: "Buscar",
};

export const navBarAboutText = {
  [ENGLISH]: "About",
  [ESPANOL]: "Acerca del corpus",
};

export const navBarGlossaryText = {
  [ENGLISH]: "Glosses",
  [ESPANOL]: "Glosario",
};

export const navBarIndexText = {
  [ENGLISH]: "Texts",
  [ESPANOL]: "Textos",
};

export const navBarResourcesText = {
  [ENGLISH]: "Resources",
  [ESPANOL]: "Recursos",
};

export const navBarMaterialsText = {
  [ENGLISH]: "Materials",
  [ESPANOL]: "Materias",
};

// Search page text
export const searchPagePromptText = {
  [ENGLISH]: "Search database:",
  [ESPANOL]: "Buscar en la base de datos:",
};

// Materials page text
export const curatedCategoryName = {
  [ENGLISH]: "Curated",
  [ESPANOL]: "Curado",
};

export const curatedCategoryDescription = {
  [ENGLISH]: "Here is a curated collection of materials related to A’ingae.",
  [ESPANOL]: "A continuación, se muestra una colección seleccionada de materiales relacionados con A'ingae.",
};

export const currentCategoryText = {
  [ENGLISH]: "Viewing by Category: ",
  [ESPANOL]: "Viendo la categoría ",
};

export const chooseCategoryPrompt = {
  [ENGLISH]: "View by Category",
  [ESPANOL]: "Ver por categoría",
};

export const materialsLinkInstructions = {
  [ENGLISH]: "To view a work below, click on its title.",
  [ESPANOL]: "Para ver una obra a continuación, haga clic en su título.",
};

// Click the link with this text to return to the Materials page index.
export const returnToMaterialsIndexLinkText = {
  [ENGLISH]: "Go back",
  [ESPANOL]: "Regresar",
};

export const materialsPageNotFound = {
  [ENGLISH]: "Materials page not found.",
  [ESPANOL]: "Página de materiales no encontrada.",
};

// Story index columns text.
export const indexPageTitleHeaderText = {
  [ENGLISH]: "Title",
  [ESPANOL]: "Título",
};

export const indexPageAuthorHeaderText = {
  [ENGLISH]: "Author",
  [ESPANOL]: "Autor",
};

export const indexPageMediaHeaderText = {
  [ENGLISH]: "Media",
  [ESPANOL]: "Médias",
};

// Use if a story isn't found.
export const notFoundPageText = {
  [ENGLISH]: "Story not found. Perhaps you mistyped the URL?",
  [ESPANOL]: "Historia no encontrada. ¿Quizás escribiste mal la URL?",
};

// Use when a story is loading.
export const loadingPageText = {
  [ENGLISH]: "Loading...",
  [ESPANOL]: "Cargando...",
};

// Story controls and metadata.
export const showVideoButtonText = {
  [ENGLISH]: "Show video",
  [ESPANOL]: "Mostrar video",
};

export const showOrHideTiersButtonText = {
  [ENGLISH]: "Show/hide tiers",
  [ESPANOL]: "Mostrar/ocultar niveles",
};

export const metadataAuthorText = {
  [ENGLISH]: "Author",
  [ESPANOL]: "Autor",
};

export const metadataDateText = {
  [ENGLISH]: "Date",
  [ESPANOL]: "Fecha",
};

export const metadataDescriptionText = {
  [ENGLISH]: "Description",
  [ESPANOL]: "Descripción",
};

export const metadataGenreText = {
  [ENGLISH]: "Genre",
  [ESPANOL]: "Género",
};

export const metadataGlosserText = {
  [ENGLISH]: "Glosser",
  [ESPANOL]: "Glosador",
};

export const metadataSourceText = {
  [ENGLISH]: "Source",
  [ESPANOL]: "Fuente",
};

export const metadataSpeakersText = {
  [ENGLISH]: "Speakers",
  [ESPANOL]: "Oradores",
};

export const storySearchText = {
  [ENGLISH]: "Story",
  [ESPANOL]: "Historia",
};

export const storySearchViewStoryText = {
  [ENGLISH]: "View story",
  [ESPANOL]: "Ver historia",
};

// Texts for LaTeX conversion UI

export const latexButtonText = {
  [ENGLISH] : "LaTeX",
  [ESPANOL] : "LaTeX",
};

export const latexSelectTiersPromptText = {
  [ENGLISH] : "Please select what tier to use for each line in the LaTeX gloss.",
  [ESPANOL] : "Seleccione qué nivel usar para cada línea en la glosa en LaTeX.",
};

export const latexSentenceTierName = {
	[ENGLISH] : "original sentence",
	[ESPANOL] : "frase original",
};

export const latexMorphemesTierName = {
	[ENGLISH] : "morphemes",
	[ESPANOL] : "morfemas",
};

export const latexMorphemeTranslationsTierName = {
	[ENGLISH] : "morpheme translations",
	[ESPANOL] : "morfemas traducidos",
};

export const latexSentenceTranslationsTierName = {
	[ENGLISH] : "sentence translation",
	[ESPANOL] : "frase traducida",
};

// Text on the tier selection confirm button
export const tierSelectionConfirmButtonText = {
  [ENGLISH] : "Confirm",
  [ESPANOL] : "Confirmar",
};

export const latexStoryTitleText = {
  [ENGLISH] : "Story title:",
  [ESPANOL] : "Título de la historia:",
};

export const latexStoryIDText = {
  [ENGLISH] : "Story ID:",
  [ESPANOL] : "ID de historia:",
};

export const latexSentenceURLText = {
  [ENGLISH] : "Sentence URL:",
  [ESPANOL] : "URL de la frase:",
};

export const latexLibraryText = {
  [ENGLISH] : "Formatted for gb4e and gb4e-modified LaTeX packages:",
  [ESPANOL] : "Formateado para paquetes LaTeX gb4e y gb4e-modified:",
};
