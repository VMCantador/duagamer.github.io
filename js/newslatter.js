// newsletter.js
document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.querySelector('.form-control');
    const subscribeButton = document.querySelector('.btn-primary');
  
    subscribeButton.addEventListener('click', function () {
      const email = emailInput.value;
  
      // Faça uma solicitação AJAX para sua API para inscrever o email
      // Você pode usar o Fetch API ou uma biblioteca como o Axios para isso.
      // Exemplo com Fetch API:
      fetch('http://locallhost/3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'Inscrição realizada com sucesso') {
            alert('Inscrição realizada com sucesso!');
          } else {
            alert('Erro ao inscrever-se na newsletter.');
          }
        })
        .catch((error) => {
          console.error('Erro ao fazer a solicitação:', error);
        });
    });
  });
  