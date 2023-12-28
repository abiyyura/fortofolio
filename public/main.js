document.addEventListener("DOMContentLoaded", function () {
    // Update #datetime element every second
    function updateDateTime() {
      const now = new Date();
      const options = { hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
      const timeString = now.toLocaleTimeString('id', options); // Menggunakan 'en-US' sebagai contoh zona waktu
      document.getElementById("datetime").innerText = `${timeString} `;
    }
  
    // Update date and time every second
    setInterval(updateDateTime, 1000);
  });
  