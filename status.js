function checkOpeningHours() {
    var now = new Date();
    var day = now.getDay();
    var hour = now.getHours();

    var openingHours = [
      { day: 1, open: 14, close: 18 },
      { day: 2, open: 14, close: 0 },
      { day: 3, open: 14, close: 18 },
      { day: 4, open: 14, close: 18 },
      { day: 5, open: 14, close: 0 },
      { day: 6, open: null, close: null },
      { day: 0, open: null, close: null }
    ];

    var currentDayHours = openingHours.find(function(hours) {
      return hours.day === day;
    });

    var isOpen = false;

    if (currentDayHours) {
      if (currentDayHours.open !== null && currentDayHours.close !== null) {
        if (hour >= currentDayHours.open && hour < currentDayHours.close) {
          isOpen = true;
        }
      }
    }

    var statusElement = document.getElementById('status');
    if (isOpen) {
      statusElement.style = "color:green";
      statusElement.textContent = 'Ouvert';
    } else {
      statusElement.style = "color:red";
      statusElement.textContent = 'Fermé';
    }
  }

  checkOpeningHours();