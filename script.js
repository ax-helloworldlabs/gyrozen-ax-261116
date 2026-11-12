const address = '경기도 김포시 고촌읍 아라육로 16, 5층 대회의실';
document.getElementById('copy-address').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText(address); status.textContent = '교육장 주소를 복사했습니다.'; }
  catch { status.textContent = address; }
});
let closedForPrint = [];
window.addEventListener('beforeprint', () => {
  closedForPrint = [...document.querySelectorAll('details:not([open])')];
  closedForPrint.forEach(detail => detail.open = true);
});
window.addEventListener('afterprint', () => {
  closedForPrint.forEach(detail => detail.open = false);
  closedForPrint = [];
});
document.getElementById('print-page').addEventListener('click', () => window.print());
