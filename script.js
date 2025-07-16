const semestres = [
  {
    titulo: "01 SEMESTRE",
    ramos: [
      "Historia del Pensamiento Político y Teoría del Estado",
      "Fuentes, Proceso y Bienes en el Derecho Romano",
      "Historia del Derecho Antiguo y Medieval",
      "Fundamentos de Filosofía Práctica",
      "Introducción al Estudio del Derecho Positivo Chileno",
      "Taller de Memoria 1",
      "Inglés 1",
      "Antropología Cristiana"
    ]
  },
  {
    titulo: "02 SEMESTRE",
    ramos: [
      "Teoría de la Constitución e Historia Política y Constitucional de Chile",
      "Familia y Patrimonio en el Derecho Romano",
      "Historia del Derecho Moderno y Contemporáneo",
      "Teoría de la Normatividad",
      "Judicatura",
      "Inglés 2",
      "Ética Cristiana"
    ]
  },
  {
    titulo: "03 SEMESTRE",
    ramos: [
      "Derecho Constitucional Orgánico",
      "Derecho Internacional Público",
      "Negocio Jurídico",
      "Tutela Judicial Efectiva y Debido Proceso",
      "Estrategias de Producción del Discurso Oral",
      "Taller de Memoria 2",
      "Inglés 3"
    ]
  },
  {
    titulo: "04 SEMESTRE",
    ramos: [
      "Derechos Fundamentales",
      "Bienes",
      "Disposiciones Comunes a Todo Procedimiento",
      "Teoría del Delito",
      "Formación Fundamental 3",
      "Inglés 4"
    ]
  },
  {
    titulo: "05 SEMESTRE",
    ramos: [
      "Bases del Derecho Administrativo",
      "Derecho Individual del Trabajo",
      "Derecho y Orden Económico",
      "Obligaciones y Contratos",
      "Juicio Declarativo y Prueba",
      "Responsabilidad Penal",
      "Taller de Memoria 3",
      "Formación Fundamental 4",
      "Optativo 1"
    ]
  },
  {
    titulo: "06 SEMESTRE",
    ramos: [
      "Actuación de la Administración del Estado",
      "Derecho Colectivo del Trabajo",
      "Regulación Económica y Derecho de la Libre Competencia",
      "Responsabilidad Civil",
      "Recursos Procesales",
      "Delito Contra Intereses Individuales",
      "Enseñanza Clínica del Derecho: Negociación y Formas Autocompositivas",
      "Optativo 2"
    ]
  },
  {
    titulo: "07 SEMESTRE",
    ramos: [
      "Control y Responsabilidad de la Administración del Estado",
      "Introducción al Derecho Comercial y Organización Jurídica de la Empresa",
      "Derecho de los Mercados Financieros",
      "Contratos en Particular",
      "Ejecución y Tutela Cautelar",
      "Taller de Memoria 4",
      "Optativo 3"
    ]
  },
  {
    titulo: "08 SEMESTRE",
    ramos: [
      "Derecho Tributario",
      "Sociedades de Capital",
      "Teoría del Ordenamiento Jurídico",
      "Familia",
      "Derecho Procesal Penal",
      "Enseñanza Clínica: Litigación Oral",
      "Formación Fundamental 5"
    ]
  },
  {
    titulo: "09 SEMESTRE",
    ramos: [
      "Enseñanza Clínica: Pasantía Profesional",
      "Derecho Concursal y de Seguros",
      "Filosofía del Derecho y Teorías de la Justicia",
      "Sucesiones",
      "Ética Profesional",
      "Memoria"
    ]
  },
  {
    titulo: "10 SEMESTRE",
    ramos: [
      "Licenciatura"
    ]
  }
];

const container = document.getElementById("malla-container");

semestres.forEach((sem) => {
  const div = document.createElement("div");
  div.className = "semestre";
  div.innerHTML = `<h2>${sem.titulo}</h2>`;

  const ramosList = document.createElement("div");
  ramosList.className = "ramos";
  sem.ramos.forEach(ramo => {
    const p = document.createElement("p");
    p.textContent = ramo;
    ramosList.appendChild(p);
  });

  div.appendChild(ramosList);
  div.addEventListener("click", () => {
    ramosList.style.display = ramosList.style.display === "block" ? "none" : "block";
  });

  container.appendChild(div);
});
