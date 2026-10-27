import { qa, q } from '../lib/gsap';
import { nowInGymTimezone, openStatus } from './time';

/** "Aberto agora / Fechado agora" — atualiza a cada minuto. */
export function initOpenStatus() {
  const els = qa('[data-open-status]');
  if (!els.length) return;
  const update = () => {
    const s = openStatus();
    els.forEach((el) => {
      el.dataset.state = s.open ? 'open' : 'closed';
      const text = q('[data-open-status-text]', el);
      if (text) text.textContent = s.text;
    });
  };
  update();
  setInterval(update, 60_000);
}

/** Abas de dias da semana (padrão WAI-ARIA Tabs), abrindo no dia de hoje. */
export function initTabs() {
  const root = q('[data-tabs]');
  if (!root) return;
  const tabs = qa<HTMLButtonElement>('[role="tab"]', root);
  const panels = qa('[role="tabpanel"]', root);
  const indicator = q('[data-tab-indicator]', root);

  function select(i: number, focus = false) {
    tabs.forEach((t, j) => {
      const active = i === j;
      t.setAttribute('aria-selected', String(active));
      t.tabIndex = active ? 0 : -1;
      panels[j].hidden = !active;
    });
    if (indicator) indicator.style.transform = `translateX(${i * 100}%)`;
    if (focus) tabs[i].focus();
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', (e) => {
      const n = tabs.length;
      const map: Record<string, number> = { ArrowRight: (i + 1) % n, ArrowLeft: (i - 1 + n) % n, Home: 0, End: n - 1 };
      if (e.key in map) {
        e.preventDefault();
        select(map[e.key], true);
      }
    });
  });

  const today = nowInGymTimezone().day;
  const todayIndex = tabs.findIndex((t) => Number(t.dataset.tab) === today);
  tabs[todayIndex]?.classList.add('is-today');
  tabs[todayIndex]?.setAttribute('aria-label', `${tabs[todayIndex].textContent?.trim()} (hoje)`);
  select(Math.max(0, todayIndex));
}
