document.addEventListener('DOMContentLoaded', function() {
    const petForm = document.getElementById('petForm');
    const petsLista = document.getElementById('petsLista');
    let pets = JSON.parse(localStorage.getItem('pets')) || [];

    // Função para carregar os pets na tabela
    function carregarPets() {
      petsLista.innerHTML = ''; // Limpa a tabela antes de carregar
      if (pets.length === 0) {
        petsLista.innerHTML = '<tr><td colspan="5" class="text-center">Nenhum PET cadastrado.</td></tr>';
      } else {
        pets.forEach((pet, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${pet.name}</td>
            <td>${pet.type}</td>
            <td>${pet.breed}</td>
            <td>${pet.temperament}</td>
            <td>
              <button class="btn botaopet btn-warning" onclick="editarPet(${index})">Editar</button>
              <button class="btn botaopet btn-danger" onclick="excluirpet(${index})">Excluir</button>
            </td>
          `;
          petsLista.appendChild(row);
        });
      }
    }

    petForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('petName').value;
      const type = document.getElementById('petType').value;
      const breed = document.getElementById('petBreed').value;
      const temperament = document.getElementById('petTemperament').value;

      const petIndex = petForm.getAttribute('data-index');
      if (petIndex !== null && petIndex !== '') {
        // Editar pet existente
        pets[petIndex] = { name, type, breed, temperament };
      } else {
        // Adicionar novo pet
        pets.push({ name, type, breed, temperament });
      }

      // Salvar no localStorage
      localStorage.setItem('pets', JSON.stringify(pets));
      // Resetar formulário
      petForm.reset();
      petForm.removeAttribute('data-index');
      carregarPets();
    });

    // Função para editar pet
    window.editarPet = function(index) {
      const pet = pets[index];
      document.getElementById('petName').value = pet.name;
      document.getElementById('petType').value = pet.type;
      document.getElementById('petBreed').value = pet.breed;
      document.getElementById('petTemperament').value = pet.temperament;
      petForm.setAttribute('data-index', index);
    };

    window.excluirpet = function(index) {
        if (confirm('Tem certeza que deseja excluir este PET?')) {
          pets.splice(index, 1);
          localStorage.setItem('pets', JSON.stringify(pets));
          carregarPets();
        }
      };


    // Carregar pets ao iniciar a página
    carregarPets();
  });