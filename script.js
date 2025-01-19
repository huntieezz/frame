document.addEventListener("DOMContentLoaded", function() {
    setActiveTab();
  });
  
  function setActiveTab() {
    const tabs = document.querySelectorAll('nav button');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
  
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage.includes('index')) {
      document.getElementById('tony-page').classList.add('active');
    } else if (currentPage.includes('heitor')) {
      document.getElementById('heitor-page').classList.add('active');
    } else if (currentPage.includes('facts')) {
      document.getElementById('facts-page').classList.add('active');
    }
  }
  
  function showCredits() {
    document.getElementById('credits-modal').style.display = 'block';
  }
  
  function hideCredits() {
    document.getElementById('credits-modal').style.display = 'none';
  }
  
  function toggleAudio() {
    var audio = document.getElementById('background-audio');
    var button = document.getElementById('music-button');
    if (audio.paused) {
      audio.play();
      button.textContent = 'Stop Music';
    } else {
      audio.pause();
      button.textContent = 'Play Music';
    }
  }