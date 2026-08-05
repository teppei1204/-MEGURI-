/**
 * スクロールに合わせて要素をふわっと表示させるアニメーション
 */
const handleScrollReveal = () => {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  const revealPoint = 150; // 表示されるタイミング（ピクセル）

  reveals.forEach(reveal => {
      const elementTop = reveal.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
      }
  });
};

// スクロール時に実行
window.addEventListener('scroll', handleScrollReveal);

// ページ読み込み時にも一度実行（最初から画面内にある要素のため）
window.addEventListener('load', handleScrollReveal);

/**
* ナビゲーションの背景透過切り替え（オプション：高級感演出）
* スクロールしたらナビゲーションの背景を少し濃くする
*/
const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
      navEl.style.backgroundColor = 'rgba(27, 48, 34, 0.95)'; // 深い緑を少し濃く
      navEl.style.transition = '0.5s';
  } else {
      navEl.style.backgroundColor = 'var(--deep-green)';
  }
});