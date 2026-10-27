import { gsap, prefersReduced, q, qa } from '../lib/gsap';
import { PERIODS, formatBRL, whatsappUrl, type Period } from '../../data/site';

type PlanData = { name: string; prices: Record<Period, number> };

/** Seletor Mensal/Trimestral/Semestral/Anual: atualiza preços, "equivale a" e a mensagem do WhatsApp. */
export function initPlans() {
  const group = q('[data-period-switch]');
  if (!group) return;
  const buttons = qa<HTMLButtonElement>('[data-period]', group);
  const pill = q('[data-period-pill]', group);
  const cards = qa('[data-plan]').map((el) => ({
    el,
    data: JSON.parse(el.dataset.plan!) as PlanData,
    value: q('[data-plan-value]', el)!,
    suffix: q('[data-plan-suffix]', el)!,
    equiv: q('[data-plan-equiv]', el)!,
    cta: q<HTMLAnchorElement>('[data-plan-cta]', el)!,
  }));

  let current: Period = 'mensal';

  // A pílula copia posição e largura do botão ativo (os rótulos têm tamanhos diferentes)
  function placePill() {
    const active = buttons.find((b) => b.getAttribute('aria-pressed') === 'true');
    if (!active || !pill) return;
    pill.style.width = `${active.offsetWidth}px`;
    pill.style.transform = `translateX(${active.offsetLeft}px)`;
  }

  function apply(periodId: Period, animate = true) {
    const period = PERIODS.find((p) => p.id === periodId)!;
    const prev = current;
    current = periodId;
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.period === periodId)));
    placePill();

    cards.forEach((c) => {
      const to = c.data.prices[periodId];
      const from = c.data.prices[prev];
      c.suffix.textContent = period.suffix;
      c.equiv.textContent =
        period.months > 1 ? `equivale a R$ ${formatBRL(to / period.months)}/mês` : ' ';
      c.cta.href = whatsappUrl(
        `Olá! Vim pelo site e tenho interesse no Plano ${c.data.name} (${period.label}) da Princesa Fitness.`
      );

      if (!animate || prefersReduced()) {
        c.value.textContent = formatBRL(to);
        return;
      }
      const counter = { v: from };
      gsap.to(counter, {
        v: to,
        duration: 0.6,
        ease: 'power3.out',
        onUpdate: () => (c.value.textContent = formatBRL(counter.v)),
      });
      gsap.fromTo(c.value, { y: -8 }, { y: 0, duration: 0.5, ease: 'expo.out' });
    });
  }

  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.period as Period)));
  apply('mensal', false);

  // Recalcula quando o tamanho dos botões muda (fonte carregada, rotação da tela, resize)
  if (pill) {
    pill.style.transition = 'none';
    placePill();
    requestAnimationFrame(() => (pill.style.transition = ''));
    new ResizeObserver(placePill).observe(group);
    document.fonts?.ready.then(placePill);
  }

  // Borda animada do plano em destaque só roda quando ele está na tela
  const featured = q('.plan--featured');
  if (featured && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => featured.classList.toggle('is-inview', entry.isIntersecting)).observe(featured);
  }
}
