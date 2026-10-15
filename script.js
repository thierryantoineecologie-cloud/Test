// Après ajout d'un fichier, remplacez null par son chemin : "audio/piste-1.mp3".
const sources = { 1: null, 2: null, 3: null, 4: null, 5: null };
const player = document.querySelector('#player');
const status = document.querySelector('#status');
const buttons = [...document.querySelectorAll('[data-track]')];
let selected = null;
function updateButtons() {
  buttons.forEach(button => {
    const active = button.dataset.track === selected && !player.paused;
    button.setAttribute('aria-pressed', String(active));
    button.querySelector('.play').textContent = active ? 'Ⅱ' : '▶';
    button.querySelector('.state').textContent = sources[button.dataset.track] ? (active ? 'En écoute' : 'Écouter') : 'À venir';
  });
}
buttons.forEach(button => {
  button.addEventListener('click', async () => {
    const track = button.dataset.track;
    if (!sources[track]) {
      status.textContent = `La piste ${track} n’est pas encore disponible. Son enregistrement sera ajouté prochainement.`;
      return;
    }
    if (selected === track && !player.paused) { player.pause(); return; }
    if (selected !== track) { player.pause(); selected = track; player.src = sources[track]; }
    player.hidden = false;
    try { await player.play(); }
    catch { status.textContent = 'Lecture impossible. Vérifiez le fichier audio ou réessayez avec les commandes du lecteur.'; }
  });
});
player.addEventListener('play', () => {
  status.textContent = `En écoute : ${buttons.find(button => button.dataset.track === selected).querySelector('.title').textContent}.`;
  updateButtons();
});
player.addEventListener('pause', () => { updateButtons(); if (selected) status.textContent = `Piste ${selected} en pause.`; });
player.addEventListener('ended', () => { updateButtons(); status.textContent = 'Écoute terminée. Choisissez une autre piste pour continuer.'; });
player.addEventListener('error', () => { updateButtons(); status.textContent = 'Le fichier audio est introuvable ou illisible. Vérifiez son nom et son format.'; });
updateButtons();
