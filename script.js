function toggleTransferInfo() {
  const selecao = document.getElementById("transferida")?.value;
  const transferDiv = document.getElementById("transferInfo");
  if (!transferDiv) return;
  transferDiv.style.display = selecao === "sim" ? "flex" : "none";
}

function toggleOutroCargo() {
  const cargo = document.getElementById("cargo").value;
  const outroContainer = document.getElementById("outroCargoContainer");
  outroContainer.style.display = cargo === "outros" ? "block" : "none";
}

function toggleMunicipio() {
  const select = document.getElementById("vinculo-outro-municipio");
  const campo = document.getElementById("campo-municipio");
  campo.style.display = select.value === "Sim" ? "block" : "none";
}

function toggleCNPJ() {
  const tipoVinculo = document.getElementById("tipo-vinculo").value;
  const campoCNPJ = document.getElementById("campo-cnpj");

  if (tipoVinculo === "CNPJ") {
    campoCNPJ.style.display = "block";
  } else {
    campoCNPJ.style.display = "none";
  }
}

function mostrarMensagemEImprimir() {
  const mensagem = document.querySelector(".mensagem-pj");
  mensagem.style.display = "block";
  setTimeout(() => {
    window.print();
  }, 100);
}

function toggleCamposCargo() {
  const cargo = document.getElementById("cargo").value;
  const outroCargoContainer = document.getElementById("outroCargoContainer");
  const formacaoRegistro = document.getElementById("formacaoRegistro");
  const especialidadeMedicaContainer = document.getElementById(
    "especialidadeMedicaContainer"
  );
  const especialidadeMedica = document.getElementById("especialidadeMedica");

  // "Outros"
  outroCargoContainer.style.display = cargo === "outros" ? "block" : "none";

  // Especialidade médica obrigatória se for Médico
  if (cargo === "Médico") {
    especialidadeMedicaContainer.style.display = "block";
    especialidadeMedica.setAttribute("required", "required");
  } else {
    especialidadeMedicaContainer.style.display = "none";
    especialidadeMedica.removeAttribute("required");
    especialidadeMedica.value = "";
  }

  // Formação e Registro para cargos específicos
  const cargosComFormacao = [
    "Médico",
    "Enfermeiro",
    "Téc. Enfermagem",
    "Aux. Enfermagem",
    "Preceptor/Enfermeiro",
    "Psicólogo",
    "Fonoaudiólogo",
    "Assistente Social",
    "Fisioterapeuta",
    "Cirurgião Dentista",
    "Farmacêutico",
    "Téc. Saúde Bucal"
  ];

  formacaoRegistro.style.display = cargosComFormacao.includes(cargo)
    ? "block"
    : "none";
}

function atualizarCampos() {
  const acao = document.getElementById("acao").value;
  const campoMotivo = document.getElementById("motivoExclusao");

  if (acao === "excluir") {
    campoMotivo.style.display = "block";
  } else {
    campoMotivo.style.display = "none";
  }
}

function toggleCampos() {
  const vinculo = document.getElementById("vinculo-outro-municipio").value;
  const campoMunicipio = document.getElementById("campo-municipio");
  const campoCarga = document.getElementById("campo-carga-horaria");

  if (vinculo === "Sim") {
    campoMunicipio.style.display = "block";
    campoCarga.style.display = "block";
  } else {
    campoMunicipio.style.display = "none";
    campoCarga.style.display = "none";
  }
}

/* Validação básica antes de imprimir */
function validarFormulario() {
  const cargo = document.getElementById("cargo").value;
  const especialidade = document.getElementById("especialidadeMedica").value;

  if (!cargo) {
    alert("Por favor, selecione o cargo ou função.");
    document.getElementById("cargo").focus();
    return;
  }

  if (cargo === "Médico" && !especialidade) {
    alert("Por favor, selecione a especialidade médica.");
    document.getElementById("especialidadeMedica").focus();
    return;
  }

  // aqui você pode adicionar mais validações depois, se quiser

  mostrarMensagemEImprimir();
}
