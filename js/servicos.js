function checkAvailability(dateId, timeId, petSelectId, serviceType, checkboxId) {
  // Captura os valores dos inputs
  const selectedDate = document.getElementById(dateId).value;
  const selectedTime = document.getElementById(timeId).value;
  const selectedPet = document.getElementById(petSelectId).options[document.getElementById(petSelectId).selectedIndex].text;
  const teleBusca = document.getElementById(checkboxId).checked ? "Sim" : "Não";

  if (!selectedDate || !selectedTime) {
    alert("Por favor, selecione uma data e um horário.");
    return;
  }

  // data e o horário estão disponíveis
  if (unavailableDates.includes(selectedDate) && unavailableTimes.includes(selectedTime)) {
    alert("Data e horário indisponíveis. Por favor, escolha outro horário.");
  } else {
    alert("Data e horário disponíveis!");

    agendarServico(serviceType, selectedPet, selectedDate, selectedTime, teleBusca);
  }
}

function agendarServico(serviceType, petName, date, time, teleBusca) {
  // Recupera agendamentos existentes ou cria uma nova lista
  let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

  // Adiciona o novo agendamento
  agendamentos.push({ serviceType, petName, date, time, teleBusca });

  // Salva de volta no localStorage
  localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

  // Redireciona para a página de agendamentos
  window.location.href = 'agendamentos.html';
}

document.addEventListener('DOMContentLoaded', function() {
  const pets = JSON.parse(localStorage.getItem('pets')) || [];

  function carregarPetsSelect(selectId) {
    const selectElement = document.getElementById(selectId);
    selectElement.innerHTML = ''; // Limpa as opções existentes

    if (pets.length === 0) {
      const option = document.createElement('option');
      option.text = 'Nenhum PET cadastrado';
      option.disabled = true;
      option.selected = true;
      selectElement.appendChild(option);
    } else {
      pets.forEach((pet) => {
        const option = document.createElement('option');
        option.value = pet.name;
        option.text = `Nome: ${pet.name}, Tipo: ${pet.type}`;
        selectElement.appendChild(option);
      });
    }
  }

  // Chame a função para cada elemento <select> que você deseja preencher
  carregarPetsSelect('selectPetTosa');
  carregarPetsSelect('selectPetBanho'); // Adicione mais conforme necessário
});