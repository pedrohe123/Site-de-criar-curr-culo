function atualizar(idInput, idCv) {
  document.getElementById(idInput).addEventListener("input", (e) => {
    document.getElementById(idCv).innerText = e.target.value;
  });
}

atualizar("nome", "cv-nome");
atualizar("cargo", "cv-cargo");
atualizar("email", "cv-email");
atualizar("telefone", "cv-telefone");
atualizar("resumo", "cv-resumo");
atualizar("experiencia", "cv-experiencia");
atualizar("formacao", "cv-formacao");
atualizar("habilidades", "cv-habilidades");
