function showInfo(infoId) {
  const infoText = {
    info1:
      'Match-3 puzzles help you progress in the game and unlock new challenges.',
    info2:
      'Renovate an old cafe and turn it into a beautiful and stylish dining place.',
    info3:
      'Enjoy a story full of surprises and immerse yourself in a heartwarming tale.',
    info4: 'Personalize your cafe with amazing decor and unique furnishings.',
    info5:
      'Get regular updates with new puzzles, themes, and exciting content.',
  };

  const modal = document.getElementById('info-modal');
  const textElement = document.getElementById('info-text');
  textElement.textContent = infoText[infoId];
  modal.style.display = 'flex';
}
function closeModal() {
  const modal = document.getElementById('info-modal');
  modal.style.display = 'none';
}
