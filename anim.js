document.addEventListener('DOMContentLoaded', function() {
    const competence = document.querySelector('.competence');
    const description = competence.querySelector('.description');
  
    competence.addEventListener('mouseenter', function() {
      description.style.display = 'block';
    });
  
    competence.addEventListener('mouseleave', function() {
      description.style.display = 'none';
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const competences = document.querySelectorAll('.competence');
    const sidePanel = document.getElementById('side-panel');
    const sidePanelContent = document.getElementById('side-panel-content');
  
    competences.forEach(competence => {
      competence.addEventListener('mouseenter', function() {
        const title = this.querySelector('h2').textContent;
        const description = "Description détaillée de " + title;
        sidePanelContent.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
        sidePanel.classList.add('open');
      });
  
      competence.addEventListener('mouseleave', function() {
        sidePanel.classList.remove('open');
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close');
    const competences = document.querySelectorAll('.competence');
  
    competences.forEach(competence => {
      competence.addEventListener('click', function() {
        const title = this.querySelector('h2').textContent;
        const description = competence.querySelector('.hidden-description').textContent;
        
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        
        modal.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  function showProgress() {
    const bars = document.querySelectorAll('.progress');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}
window.addEventListener('load', showProgress);

