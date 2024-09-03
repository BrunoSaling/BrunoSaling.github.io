document.addEventListener('DOMContentLoaded', function() {
  // Recupera os agendamentos do localStorage
  const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
  const agendamentosLista = document.getElementById('agendamentosLista');

  // Função para carregar os agendamentos na tabela
  function carregarAgendamentos() {
    agendamentosLista.innerHTML = ''; // Limpa a tabela antes de carregar

    if (agendamentos.length === 0) {
      agendamentosLista.innerHTML = '<tr><td colspan="6" class="text-center">Nenhum agendamento encontrado.</td></tr>';
    } else {
      agendamentos.forEach((agendamento, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${agendamento.serviceType}</td>
          <td>${agendamento.petName}</td>
          <td>${agendamento.date}</td>
          <td>${agendamento.time}</td>
          <td>${agendamento.teleBusca}</td>
          <td><button class="btn btn-danger" onclick="cancelarAgendamento(${index})">Cancelar</button></td>
        `;
        agendamentosLista.appendChild(row);
      });
    }
  }

  // Função para cancelar um agendamento
  window.cancelarAgendamento = function(index) {
    // Remove o agendamento do array
    agendamentos.splice(index, 1);
    // Atualiza o localStorage
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
    // Recarrega os agendamentos
    carregarAgendamentos();
  };

  // Carrega os agendamentos ao iniciar a página
  carregarAgendamentos();
});