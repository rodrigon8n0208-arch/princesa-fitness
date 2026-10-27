import { HOURS, TIMEZONE } from '../../data/site';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/** Dia da semana (0 = domingo) e hora decimal no fuso de Princesa Isabel, independente do fuso do visitante. */
export function nowInGymTimezone() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIMEZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '0';
  return {
    day: WEEKDAYS.indexOf(get('weekday')),
    hour: Number(get('hour')) + Number(get('minute')) / 60,
  };
}

export const fmtHour = (h: number) =>
  `${Math.floor(h)}h${h % 1 ? String(Math.round((h % 1) * 60)).padStart(2, '0') : ''}`;

export function openStatus() {
  const { day, hour } = nowInGymTimezone();
  const today = HOURS[day];
  if (hour >= today.open && hour < today.close) {
    return { open: true, text: `Aberto agora · fecha às ${fmtHour(today.close)}` };
  }
  if (hour < today.open) {
    return { open: false, text: `Fechado agora · abre hoje às ${fmtHour(today.open)}` };
  }
  const next = HOURS[(day + 1) % 7];
  return { open: false, text: `Fechado agora · abre amanhã às ${fmtHour(next.open)}` };
}
