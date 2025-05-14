document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button');
  const notification = document.getElementById('notification');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (notification) {
        notification.classList.add('show');
        setTimeout(() => {
          notification.classList.remove('show');
        }, 3000); // hilang setelah 3 detik
      }
    });
  });
});
