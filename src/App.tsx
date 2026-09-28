import { useEffect, useState } from 'react'
import heroBg from '@/imports/background_cover_img.jpg'
import catImg from '@/imports/5a6a096f-5f18-4bf8-9f48-da9fea077525.png'
import hoodieImg from '@/imports/fdf6f186-03d0-435e-bb3d-b8b3c6b7be01.png'
import teeImg from '@/imports/ada85d98-daea-4212-93b9-2e814c1fec75.png'
import capsImg from '@/imports/cbfe227f-fc8f-4ac8-befc-f7eb47e611fa.png'
import fleeceImg from '@/imports/ef5d2cc1-0b55-48c0-9c17-382810fbc085.png'
import bagImg from '@/imports/498280d0-b8f6-43d2-9662-1c8cb3ff084a.png'
import accImg from '@/imports/737c6879-b26d-475b-8506-a6757398437d.png'
import patchImg from '@/imports/a911091f-f394-4f0d-a3b6-eecfe0bedebb.png'

const img = (id: string, w = 900, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`

const IMG = {
  hoodie: '1614214191247-5b2d3a734f1b',
  cap: '1620365093928-c0e4dcdcad5d',
  tote: '1578237493287-8d4d2b03591a',
  toteCaps: '1770017863938-237bd953a6e6',
  tote2: '1572196284554-4e321b0e7e0b',
  tee: '1589884047253-28d52f2891e7',
  embroidery: '1772351720165-d9218e428cf0',
  embroidery2: '1772351721250-58367a2aecba',
  fabric: '1695666995983-3eb031a3f370',
  shoesTote: '1718724403139-ca810fd1fe94',
}

/* ---------- primitives ---------- */

function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`font-mono text-[13px] uppercase tracking-[0.22em] ${dark ? 'text-acid' : 'text-ash'}`}>
      {children}
    </span>
  )
}

function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  )
}

function PrimaryButton({ children, className = '', ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={`cta-button inline-flex h-12 items-center gap-2 rounded-full bg-acid px-5 font-display text-[0.875rem] font-extrabold whitespace-nowrap uppercase tracking-tight text-ink min-[480px]:gap-3 min-[480px]:px-7 min-[480px]:text-[1rem] sm:text-[1.0625rem] ${className}`}
    >
      {children}
      <Arrow className="cta-arrow h-4 w-4 shrink-0" />
    </button>
  )
}

function TextLink({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href="#"
      className={`arrow-link inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-tight underline decoration-acid decoration-4 underline-offset-4 ${dark ? 'text-paper' : 'text-ink'}`}
    >
      {children} <Arrow className="arrow-link-icon h-4 w-4" />
    </a>
  )
}

/* ---------- header ---------- */

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#" className="flex items-baseline gap-3">
      <svg viewBox="0 0 79 20" className={`h-6 w-auto transition-colors duration-200 ease-out ${inverse ? 'text-paper' : 'text-ink'}`} fill="none" aria-label="ТФМ" role="img">
        <path
          d="M6.73035 3.12334H12.3714V18.8359H6.73035V3.12334ZM-0.000165409 0.678078H19.1019V5.68965H-0.000165409V0.678078ZM35.0733 16.197V11.7907H40.8838C41.4648 11.7907 41.9571 11.6938 42.3606 11.5002C42.7803 11.3065 43.095 11.024 43.3048 10.6528C43.5308 10.2816 43.6438 9.83771 43.6438 9.32122C43.6438 8.80473 43.5308 8.36894 43.3048 8.01385C43.095 7.64263 42.7803 7.36017 42.3606 7.16649C41.9571 6.9728 41.4648 6.87596 40.8838 6.87596H35.0975V2.46965H41.2227C42.9174 2.46965 44.362 2.75211 45.5564 3.31702C46.7669 3.88193 47.695 4.68088 48.3406 5.71386C49.0023 6.7307 49.3332 7.93315 49.3332 9.32122C49.3332 10.7093 49.0023 11.9198 48.3406 12.9528C47.695 13.9858 46.7669 14.7847 45.5564 15.3496C44.362 15.9145 42.9174 16.197 41.2227 16.197H35.0733ZM27.6648 16.197C25.9701 16.197 24.5175 15.9145 23.307 15.3496C22.1126 14.7847 21.1926 13.9858 20.547 12.9528C19.9014 11.9198 19.5785 10.7093 19.5785 9.32122C19.5785 7.93315 19.9014 6.7307 20.547 5.71386C21.1926 4.68088 22.1126 3.88193 23.307 3.31702C24.5175 2.75211 25.9701 2.46965 27.6648 2.46965H33.8143V6.87596H28.0038C27.4227 6.87596 26.9305 6.9728 26.527 7.16649C26.1234 7.36017 25.8087 7.64263 25.5827 8.01385C25.3729 8.36894 25.268 8.80473 25.268 9.32122C25.268 9.83771 25.3729 10.2816 25.5827 10.6528C25.8087 11.024 26.1234 11.3065 26.527 11.5002C26.9305 11.6938 27.4227 11.7907 28.0038 11.7907H33.8385V16.197H27.6648ZM31.6354 19.5138V0.000184375H37.2764V19.5138H31.6354ZM78.7336 0.678078V18.8359H73.3589V2.76018L74.4726 2.88123L67.9115 18.8359H62.2947L55.7095 2.92965L56.8231 2.78439V18.8359H51.4726V0.678078H60.1642L66.1442 15.858H64.0863L70.0179 0.678078H78.7336Z"
          fill="currentColor"
        />
      </svg>
    </a>
  )
}

function Header() {
  const nav = ['Ассортимент', 'Кейсы', 'Отзывы', 'О компании', 'Блог']
  const [open, setOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const updateScrollProgress = () => {
      frame = 0
      setScrollProgress(Math.min(Math.max(window.scrollY / 80, 0), 1))
    }
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollProgress)
    }
    updateScrollProgress()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const headerProgress = open ? 1 : scrollProgress
  const solidHeader = headerProgress >= 0.5

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b ${solidHeader ? 'text-ink' : 'text-paper'}`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${headerProgress})`,
        borderColor: `rgba(218, 216, 208, ${headerProgress})`,
      }}
    >
      {/* utility bar */}
      <div className="hidden bg-ink text-paper lg:block">
        <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-8 py-2 font-mono text-[13px] uppercase tracking-[0.16em]">
          <span className="opacity-70">Тюменская фабрика мерча</span>
          <span className="absolute left-1/2 -translate-x-1/2 opacity-70">Производим брендированные вещи с 2009 года</span>
          <a href="#contacts" className="opacity-70 transition-opacity hover:opacity-100">Контакты</a>
        </div>
      </div>

      {/* main nav */}
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-8 py-4">
        <Logo inverse={!solidHeader} />
        <nav className="hidden items-center gap-8 xl:absolute xl:left-1/2 xl:flex xl:-translate-x-1/2">
          {nav.map((n) => (
            <a key={n} href="#" className="font-sans text-[15px] font-semibold uppercase tracking-tight transition-colors duration-150 ease-out hover:text-ash">
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#lead"
            className="cta-button hidden h-11 items-center justify-center gap-2 rounded-full bg-acid px-6 font-display text-[15px] font-bold leading-none uppercase tracking-tight text-ink sm:inline-flex"
          >
            <span>Обсудить проект</span>
            <Arrow className="cta-arrow h-4 w-4 shrink-0" />
          </a>
          {/* burger — phones + vertical tablets */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            className={`flex h-11 shrink-0 items-center gap-3 border px-3 transition-colors duration-200 ease-out xl:hidden ${
              solidHeader
                ? 'border-line bg-white text-ink hover:bg-ink hover:text-paper'
                : 'border-white/40 bg-transparent text-paper hover:bg-white/10'
            }`}
          >
            <span className="font-mono text-[12px] uppercase tracking-[0.18em]">Меню</span>
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
            </span>
          </button>
        </div>
      </div>

      {/* mobile / tablet menu */}
      {open && (
        <div className="border-t border-line bg-paper xl:hidden">
          <nav className="mx-auto max-w-[1600px] px-8 py-2">
            {[...nav, 'Контакты'].map((n) => (
              <a
                key={n}
                href={n === 'Контакты' ? '#contacts' : '#'}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-4 font-sans text-[19px] font-bold uppercase tracking-tight transition-colors hover:text-ash"
              >
                {n}
                <Arrow className="h-4 w-4 text-ash" />
              </a>
            ))}
            <a
              href="#lead"
              onClick={() => setOpen(false)}
              className="cta-button mt-5 mb-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-acid px-4 font-display text-[0.875rem] font-bold leading-none whitespace-nowrap uppercase tracking-tight text-ink min-[480px]:px-5 min-[480px]:text-[1rem]"
            >
              <span>Обсудить проект</span>
              <Arrow className="cta-arrow h-4 w-4 shrink-0" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background photo */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* gradient overlay: opaque left → transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

      <div className="relative mx-auto max-w-[1600px] px-8 pt-36 pb-28 lg:pt-52 lg:pb-40">
        <span className="font-mono text-[13px] uppercase tracking-[0.22em] text-paper/60">Брендируем бизнес, команды и людей</span>
        <h1 className="mt-6 max-w-2xl font-heading uppercase tracking-[-1px] text-paper">
          <span className="text-acid">Мерч,</span><br />который<br />носят
        </h1>
        <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-paper/70">
          Тюменская фабрика мерча — производство брендированной продукции под ключ с 2009
          года. Вышивка, печать, текстиль, аксессуары и кастомизация.
        </p>
        <div className="mt-8 flex flex-col items-start gap-8">
          <a href="#lead">
            <PrimaryButton>Заказать мерч</PrimaryButton>
          </a>
          <a href="#tech" className="font-display text-[14px] font-bold uppercase tracking-tight text-paper underline decoration-paper/30 decoration-2 underline-offset-4 transition-colors hover:decoration-acid">
            Посмотреть возможности
          </a>
        </div>

      </div>
    </section>
  )
}

/* ---------- stats strip ---------- */

function Stats() {
  const items = [
    ['16 лет', 'На рынке'],
    ['от 1 шт', 'Минимальный тираж'],
    ['под ключ', 'От идеи до доставки'],
    ['по РФ', 'Доставка'],
  ]
  return (
    <section className="bg-coal text-paper">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4">
        {items.map(([big, small], i) => (
          <div
            key={small}
            className={`px-6 py-7 min-[480px]:px-8 min-[480px]:py-11 ${i < 3 ? 'border-b border-white/10 lg:border-r lg:border-b-0' : ''} ${i === 2 ? 'min-[480px]:border-b-0' : ''} ${i === 1 || i === 3 ? 'min-[480px]:border-l min-[480px]:border-white/10 lg:border-l-0' : ''}`}
          >
            <div className="font-display text-[0.9rem] font-black uppercase leading-[1.1] tracking-mega text-acid max-[479px]:text-[1rem] sm:text-[1.5rem]">
              {big}
            </div>
            <div className="mt-2 font-mono text-[14px] uppercase tracking-[0.18em] text-paper min-[480px]:mt-3">{small}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- production directions strip ---------- */

function Directions() {
  const cats = [
    ['Бейсболки', catImg],
    ['Худи', hoodieImg],
    ['Футболки', teeImg],
    ['Шапки', capsImg],
    ['Флис', fleeceImg],
    ['Сумки', bagImg],
    ['Аксессуары', accImg],
    ['Нашивки', patchImg],
  ]
  return (
    <section>
      <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-8 px-8 py-14 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:py-6">
        <div>
          <Label>Направления производства</Label>
          <div className="mt-6 font-heading text-[1.375rem] font-black uppercase tracking-[-1px] sm:mt-2 sm:text-[1.6875rem] md:text-[2.0625rem]">Что мы изготавливаем</div>
        </div>
        <TextLink>Все возможности</TextLink>
      </div>
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 border-x border-t border-line md:grid-cols-4 xl:grid-cols-8">
        {cats.map(([label, id]) => (
          <a
            key={label}
            href="#"
            className="group flex min-w-0 flex-col items-center gap-4 border-b border-r border-line bg-paper px-4 py-8 last:border-r-0 xl:[&:nth-child(8n)]:border-r-0"
          >
            <div className="flex aspect-square w-full items-center justify-center p-4">
              <img
                src={id}
                alt={label}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <span className="min-w-0 whitespace-nowrap font-display text-[0.646875rem] font-extrabold uppercase tracking-tight min-[480px]:text-[0.6875rem] sm:text-[0.75rem]">{label}</span>
              <Arrow className="h-3.5 w-3.5 text-ash transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

/* ---------- cases ---------- */

function Cases() {
  const cards = [
    ['Siberia Team', 'Корпоративная коллекция', IMG.hoodie],
    ['Ямал', 'Мерч для события', IMG.tee],
    ['Технопарк', 'Коллекция для сотрудников', IMG.tote2],
  ]
  return (
    <section>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="px-8 py-14 lg:py-20">
          <div className="xl:sticky xl:top-[144px]">
            <Label>Наши работы</Label>
            <h2 className="mt-6 font-heading uppercase tracking-[-1px]">
              Бренды,<br />которые<br />движутся<br />вперёд
            </h2>
            <p className="mt-7 max-w-md text-[16px] leading-relaxed text-ink/75">
              Реальные проекты для компаний, команд и событий. Мерч, который становится частью
              бренда.
            </p>
            <div className="mt-8">
              <TextLink>Все кейсы</TextLink>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {cards.map(([name, desc, id], i) => (
            <a
              key={name}
              href="#"
              className="group relative min-w-0 overflow-hidden border-b border-l border-line sm:border-r [&:nth-child(2n)]:sm:border-r-0"
            >
              <div className="aspect-[4/5] overflow-hidden bg-neutral-200">
                <img src={img(id as string, 700, 850)} alt={`${name} — ${desc}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-start justify-between p-5">
                <div>
                  <div className="min-w-0 break-words font-heading text-[0.875rem] font-extrabold uppercase tracking-tight sm:text-[1.0625rem]">{name}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ash">{desc}</div>
                </div>
                <span className="mt-1 font-mono text-[11px] text-ash">0{i + 1}</span>
              </div>
            </a>
          ))}
          {/* yellow CTA block */}
          <a href="#lead" className="group flex min-h-[400px] flex-col justify-between bg-acid p-7 text-ink sm:min-h-0">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Свободный слот</span>
            <div className="heading-size-blog mt-3 mb-5 font-heading font-black uppercase leading-[0.92] tracking-[-1px] sm:mt-0 sm:mb-0">
              Ваш проект<br />здесь?
            </div>
            <span className="flex items-center gap-3 font-display font-extrabold uppercase tracking-tight">
              Обсудить
              <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink transition-transform group-hover:translate-x-1">
                <Arrow className="h-4 w-4" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------- benefits (editorial) ---------- */

function BenefitIcon({ i }: { i: number }) {
  const paths = [
    'M4 20V8l8-4 8 4v12M9 20v-6h6v6', // factory
    'M4 7h16M4 12h16M4 17h10', // tiers
    'M12 7v5l3 3M12 3a9 9 0 100 18 9 9 0 000-18z', // clock
    'M4 18l5-5 3 3 8-8M4 6h6M4 6v6', // design
    'M3 12h13l-3-3M16 12l-3 3M20 6v12', // delivery
    'M5.58253 20.5625C5.48503 21.1175 6.03253 21.5512 6.51503 21.3037L12.0025 18.4837L17.4888 21.3037C17.9713 21.5512 18.5188 21.1175 18.4213 20.5637L17.3838 14.6512L21.7863 10.4562C22.1988 10.0637 21.9863 9.34622 21.4338 9.26872L15.3113 8.39872L12.5813 2.98996C12.5293 2.88033 12.4472 2.78769 12.3447 2.72283C12.2421 2.65797 12.1232 2.62354 12.0019 2.62354C11.8806 2.62354 11.7617 2.65797 11.6591 2.72283C11.5566 2.78769 11.4745 2.88033 11.4225 2.98996L8.69253 8.39996L2.57003 9.26997C2.01878 9.34747 1.80503 10.065 2.21628 10.4575L6.62003 14.6525L5.58253 20.565V20.5625ZM11.7138 17.1037L7.10628 19.4712L7.97378 14.525C7.99466 14.4111 7.98698 14.2938 7.95142 14.1837C7.91586 14.0735 7.85354 13.9739 7.77003 13.8937L4.13753 10.4312L9.20253 9.71122C9.30723 9.69487 9.40649 9.65365 9.49197 9.59101C9.57745 9.52837 9.64666 9.44614 9.69378 9.35122L12 4.77871L14.3088 9.35122C14.3559 9.44614 14.4251 9.52837 14.5106 9.59101C14.5961 9.65365 14.6953 9.69487 14.8 9.71122L19.865 10.43L16.2325 13.8925C16.1488 13.9728 16.0864 14.0726 16.0508 14.183C16.0152 14.2934 16.0077 14.4109 16.0288 14.525L16.8963 19.4712L12.2888 17.1037C12.1998 17.0575 12.1009 17.0333 12.0007 17.0333C11.9004 17.0333 11.8028 17.0575 11.7138 17.1037Z', // star
  ]
  const isFill = i === 5
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden>
      {isFill
        ? <path d={paths[i]} fill="currentColor" />
        : <path d={paths[i]} stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
      }
    </svg>
  )
}

function Benefits() {
  const items = [
    ['Своё производство', 'Полный контроль качества на всех этапах.'],
    ['От 1 штуки', 'Работаем как с небольшими партиями, так и с крупными тиражами.'],
    ['Срочные заказы', 'Помогаем реализовать проект в сжатые сроки.'],
    ['Дизайн под задачу', 'Помогаем с концепцией, макетами и материалами.'],
    ['Доставка по России', 'Отправляем готовые заказы по всей стране.'],
    ['16 лет экспертизы', 'Работаем с корпоративным мерчем с 2009 года.'],
  ]
  return (
    <section>
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-4 px-8 py-12">
        <div>
          <Label>Преимущества</Label>
          <h2 className="mt-4 font-heading uppercase tracking-mega">
            Почему<br />выбирают нас
          </h2>
        </div>
        <p className="max-w-xs text-[15px] leading-relaxed text-ink/70">
          Надёжный производственный партнёр для брендов, команд и организаций.
        </p>
      </div>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map(([title, desc], i) => (
          <div
            key={title}
            className={`group flex min-h-[220px] flex-col justify-between border-b border-r border-line p-8 transition-colors hover:bg-ink hover:text-paper ${
              i === 0 ? 'bg-coal text-paper' : ''
            }`}
          >
            <span className={i === 0 ? 'text-acid' : 'text-ink group-hover:text-acid'}>
              <BenefitIcon i={i} />
            </span>
            <div>
              <div className="min-w-0 break-words font-heading text-[1.0625rem] font-extrabold uppercase tracking-tight sm:text-[1.3125rem]">{title}</div>
              <p className={`mt-3 text-[15px] leading-relaxed ${i === 0 ? 'text-paper/70' : 'text-ink/65 group-hover:text-paper/70'}`}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- lead gen ---------- */

function LeadForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <section id="lead">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-2">
        <div className="border border-line px-8 py-12 sm:px-[60px] sm:py-14 lg:py-20">
          <Label>Обсудим ваш проект</Label>
          <h2 className="mt-6 font-heading uppercase tracking-[-1px]">
            Отправим<br />примеры<br />работ
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink/75">
            Расскажите о вашей задаче — подберём подходящие решения и покажем примеры похожих
            проектов.
          </p>
          <form
            className="mt-9 max-w-lg"
            onSubmit={(e) => {
              e.preventDefault()
              onSubmit()
            }}
          >
            <div className="border border-line">
              <input required placeholder="Ваше имя" className="w-full border-b border-line bg-paper px-4 py-4 text-[15px] outline-none placeholder:text-ash focus:bg-acid/15" />
              <input required placeholder="Телефон / Telegram / WhatsApp" className="w-full border-b border-line bg-paper px-4 py-4 text-[15px] outline-none placeholder:text-ash focus:bg-acid/15" />
              <textarea required rows={3} placeholder="Ваша задача" className="w-full resize-none bg-paper px-4 py-4 text-[15px] outline-none placeholder:text-ash focus:bg-acid/15" />
            </div>
            <PrimaryButton className="mt-6 w-full justify-center sm:w-auto sm:justify-start">
              Получить примеры
            </PrimaryButton>
            <p className="mt-4 max-w-sm font-mono text-[14px] leading-relaxed text-ash">
              Нажимая на кнопку, вы соглашаетесь с{' '}
              <a href="#" className="underline underline-offset-2 transition-colors hover:text-ink">
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>

        <div className="relative min-h-[440px] bg-coal">
          <img src={img(IMG.embroidery2, 900, 1100)} alt="Брендированный текстиль на производстве" className="h-full w-full object-cover opacity-80" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coal/60 to-transparent" />
          <div className="heading-size-image absolute bottom-8 right-8 text-right font-heading font-black uppercase leading-[0.9] tracking-[-1px] text-paper">
            Идеи<br />становятся<br />вещами
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- assortment (typography columns) ---------- */

function Assortment() {
  const cols = [
    ['Рюкзаки и сумки', ['Рюкзаки', 'Шопперы', 'Поясные сумки', 'Дорожные сумки']],
    ['Одежда', ['Футболки', 'Худи', 'Свитшоты', 'Поло', 'Спецодежда']],
    ['Головные уборы', ['Бейсболки', 'Шапки', 'Панамы', 'Кепки']],
    ['Верхняя одежда', ['Куртки', 'Жилеты', 'Флис', 'Ветровки']],
    ['Аксессуары', ['Бутылки', 'Термокружки', 'Ежедневники', 'Ручки', 'Значки', 'Нашивки']],
  ]
  return (
    <section>
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-6 px-8 py-14">
        <div>
          <Label>Ассортимент</Label>
          <h2 className="mt-5 font-heading uppercase tracking-[-1px]">
            Какой мерч<br className="hidden min-[480px]:block" />{' '}мы изготавливаем
          </h2>
        </div>
        <TextLink>Перейти в каталог</TextLink>
      </div>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-5">
        {cols.map(([title, items]) => (
          <div key={title as string} className="border-b border-r border-line p-7">
            <div className="min-w-0 break-words flex items-center gap-2 font-heading text-[0.8125rem] font-extrabold uppercase tracking-tight sm:text-[0.9375rem]">
              <span className="h-2 w-2 bg-acid" />
              {title}
            </div>
            <ul className="mt-5 space-y-2.5">
              {(items as string[]).map((it) => (
                <li key={it}>
                  <a href="#" className="text-[15px] text-ink/70 transition-colors hover:text-ink">{it}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- technologies ---------- */

function Technologies() {
  const techs = [
    ['DTF', 'Плёночный перенос'],
    ['DTG', 'Прямая печать по ткани'],
    ['UV DTF', 'УФ-перенос'],
    ['UV', 'УФ-печать по предметам'],
    ['Шелкография', 'Насыщенная печать тиражей'],
    ['Вышивка', 'Объёмный логотип на текстиле'],
    ['Embossing', 'Тиснение по материалам'],
    ['Лазерная гравировка', 'Маркировка по металлу и дереву'],
  ]
  const [active, setActive] = useState(0)
  return (
    <section id="tech" className="bg-coal text-paper">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="px-8 py-14 lg:border-r border-white/10 lg:py-20">
          <Label dark>Технологии нанесения</Label>
          <h2 className="mt-6 font-heading uppercase tracking-[-1px]">
            Все<br />популярные<br />технологии
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-paper/70">
            Современное оборудование и проверенные методы нанесения для любых задач.
          </p>
          <div className="mt-8">
            <TextLink dark>Все технологии</TextLink>
          </div>
        </div>
        <div className="grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:border-t-0">
          {techs.map(([name, desc], i) => (
            <button
              key={name}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`flex min-w-0 flex-col justify-between gap-6 border-r border-white/10 p-5 text-left transition-colors sm:p-7 ${
                active === i ? 'bg-acid text-ink' : 'hover:bg-white/5'
              } ${i === techs.length - 1 ? '' : 'border-b'} ${i === techs.length - 2 ? 'sm:border-b-0' : ''}`}
            >
              <span className="font-mono text-[11px] opacity-60">0{i + 1}</span>
              <div>
                <div className="min-w-0 break-words font-heading text-[0.8125rem] font-extrabold uppercase tracking-tight sm:text-[1.0625rem]">{name}</div>
                <div className={`mt-1 text-[13px] ${active === i ? 'text-ink/70' : 'text-paper/50'}`}>{desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- clients ---------- */

function Clients() {
  const logos = ['СИБУР', 'Яндекс', 'Газпром', 'СБЕР', 'Тюменская область', 'Росатом', 'Тинькофф', 'МТС']
  return (
    <section>
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-4 px-8 py-12">
        <div>
          <Label>Нам доверяют</Label>
          <h2 className="mt-4 font-heading uppercase tracking-[-1px]">Наши заказчики</h2>
        </div>
        <p className="max-w-md text-[15px] leading-relaxed text-ink/70">
          Работаем с крупным бизнесом, региональными компаниями, государственными
          учреждениями и командами.
        </p>
      </div>
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 border-l border-t border-line sm:grid-cols-4">
        {logos.map((l) => (
          <div
            key={l}
            className="flex min-w-0 items-center justify-center border-b border-r border-line px-4 py-10 text-center font-display text-[0.8125rem] font-extrabold uppercase tracking-tight text-ash transition-colors hover:text-ink sm:px-6 sm:text-[1.125rem]"
          >
            {l}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- blog ---------- */

function Blog() {
  const posts = [
    ['Технологии', 'Как выбрать способ нанесения логотипа', '12 марта 2024', IMG.fabric],
    ['Тренды', 'Тренды корпоративного мерча', '5 марта 2024', IMG.toteCaps],
    ['HR', 'Как мерч помогает строить HR-бренд', '28 февраля 2024', IMG.embroidery],
  ]
  return (
    <section>
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-6 px-8 py-14">
        <div>
          <Label>Блог</Label>
          <h2 className="mt-5 font-heading uppercase tracking-[-1px]">
            Рассказываем<br />о мерче
          </h2>
        </div>
        <TextLink>Все статьи</TextLink>
      </div>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 border-l border-t border-line md:grid-cols-3">
        {posts.map(([tag, title, date, id]) => (
          <a
            key={title}
            href="#"
            className="group border-b border-r border-line p-6"
          >
            <div className="aspect-[16/11] overflow-hidden bg-neutral-200">
              <img src={img(id as string, 700, 480)} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper">{tag}</span>
              <span className="font-mono text-[11px] text-ash">{date}</span>
            </div>
            <div className="mt-3 flex items-start justify-between gap-4">
              <span className="min-w-0 break-words font-heading text-[0.875rem] font-extrabold uppercase leading-tight tracking-tight sm:text-[1.0625rem]">{title}</span>
              <Arrow className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

/* ---------- faq ---------- */

function Faq() {
  const qa = [
    ['Какой минимальный тираж?', 'Работаем от 1 штуки — можно изготовить пробный образец или крупную партию до десятков тысяч изделий.'],
    ['Сколько времени занимает производство?', 'Стандартный срок — от 7 до 14 рабочих дней в зависимости от тиража и способа нанесения. Есть срочное производство.'],
    ['Работаете ли вы с юридическими лицами?', 'Да, работаем с юрлицами с НДС и предоставляем полный пакет закрывающих документов.'],
    ['Можно ли заказать образцы?', 'Да. Оставьте заявку — покажем примеры работ и подберём материалы под вашу задачу.'],
    ['Как осуществляется доставка?', 'Доставляем по всей России надёжными логистическими партнёрами — в любой регион.'],
  ]
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="border border-line">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="px-8 py-14 lg:border-r lg:border-line lg:py-20">
          <Label>Частые вопросы</Label>
          <h2 className="mt-6 font-heading uppercase tracking-[-1px]">
            Отвечаем<br />на главное
          </h2>
        </div>
        <div className="border-t border-line lg:border-t-0 lg:border-r">
          {qa.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <div key={q} className="border-b border-line last:border-b-0">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0 break-words font-heading text-[0.875rem] font-extrabold uppercase tracking-tight sm:text-[0.9375rem] lg:text-[1.0625rem]">{q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-colors ${isOpen ? 'bg-acid' : ''}`}>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" className={`origin-center transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                    </svg>
                  </span>
                </button>
                <div className={`grid overflow-hidden transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="min-h-0">
                    <p className="max-w-2xl px-8 pb-7 text-[16px] leading-relaxed text-ink/75">{a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- footer ---------- */

function Footer() {
  const social = ['TG', 'VK']
  return (
    <footer id="contacts" className="bg-coal text-paper">
      {/* big CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-8 px-8 py-16 lg:flex-row lg:items-center">
          <h2 className="font-heading uppercase tracking-[-1px]">
            Готовы обсудить<br />ваш проект?
          </h2>
          <a href="#lead">
            <PrimaryButton>Обсудить проект</PrimaryButton>
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-8 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-baseline gap-2">
            <svg width="79" height="20" viewBox="0 0 79 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ТФМ">
              <path d="M6.73035 3.12334H12.3714V18.8359H6.73035V3.12334ZM-0.000165409 0.678078H19.1019V5.68965H-0.000165409V0.678078ZM35.0733 16.197V11.7907H40.8838C41.4648 11.7907 41.9571 11.6938 42.3606 11.5002C42.7803 11.3065 43.095 11.024 43.3048 10.6528C43.5308 10.2816 43.6438 9.83771 43.6438 9.32122C43.6438 8.80473 43.5308 8.36894 43.3048 8.01385C43.095 7.64263 42.7803 7.36017 42.3606 7.16649C41.9571 6.9728 41.4648 6.87596 40.8838 6.87596H35.0975V2.46965H41.2227C42.9174 2.46965 44.362 2.75211 45.5564 3.31702C46.7669 3.88193 47.695 4.68088 48.3406 5.71386C49.0023 6.7307 49.3332 7.93315 49.3332 9.32122C49.3332 10.7093 49.0023 11.9198 48.3406 12.9528C47.695 13.9858 46.7669 14.7847 45.5564 15.3496C44.362 15.9145 42.9174 16.197 41.2227 16.197H35.0733ZM27.6648 16.197C25.9701 16.197 24.5175 15.9145 23.307 15.3496C22.1126 14.7847 21.1926 13.9858 20.547 12.9528C19.9014 11.9198 19.5785 10.7093 19.5785 9.32122C19.5785 7.93315 19.9014 6.7307 20.547 5.71386C21.1926 4.68088 22.1126 3.88193 23.307 3.31702C24.5175 2.75211 25.9701 2.46965 27.6648 2.46965H33.8143V6.87596H28.0038C27.4227 6.87596 26.9305 6.9728 26.527 7.16649C26.1234 7.36017 25.8087 7.64263 25.5827 8.01385C25.3729 8.36894 25.268 8.80473 25.268 9.32122C25.268 9.83771 25.3729 10.2816 25.5827 10.6528C25.8087 11.024 26.1234 11.3065 26.527 11.5002C26.9305 11.6938 27.4227 11.7907 28.0038 11.7907H33.8385V16.197H27.6648ZM31.6354 19.5138V0.000184375H37.2764V19.5138H31.6354ZM78.7336 0.678078V18.8359H73.3589V2.76018L74.4726 2.88123L67.9115 18.8359H62.2947L55.7095 2.92965L56.8231 2.78439V18.8359H51.4726V0.678078H60.1642L66.1442 15.858H64.0863L70.0179 0.678078H78.7336Z" fill="currentColor"/>
            </svg>
          </div>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-paper/70">
            Тюменская фабрика мерча. Больше чем вещи.
          </p>
          <div className="mt-6 flex gap-3">
            {social.map((s) => (
              <a key={s} href="#" className="grid h-10 w-10 place-items-center border border-white/20 font-mono text-xs transition-colors hover:border-acid hover:bg-acid hover:text-ink">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[14px] uppercase tracking-[0.18em] text-acid">Навигация</div>
          <ul className="mt-5 space-y-3 text-[16px] text-paper/75">
            {['Ассортимент', 'Кейсы', 'Отзывы'].map((x) => (
              <li key={x}><a href="#" className="transition-colors hover:text-acid">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-[14px] uppercase tracking-[0.18em] text-acid">Компания</div>
          <ul className="mt-5 space-y-3 text-[16px] text-paper/75">
            {['О нас', 'Кейсы', 'Блог'].map((x) => (
              <li key={x}><a href="#" className="transition-colors hover:text-acid">{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-[14px] uppercase tracking-[0.18em] text-acid">Контакты</div>
          <ul className="mt-5 space-y-2 text-[16px] text-paper/80">
            <li>+7 (3452) 00-00-00</li>
            <li>hello@tfm.ru</li>
            <li className="text-paper/60">г. Тюмень, ул. Республики, 1</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-2 px-8 py-6 font-mono text-[12px] uppercase tracking-[0.14em] text-paper/50 sm:flex-row sm:items-center">
          <a href="#" className="text-[14px] transition-colors hover:text-acid">Политика конфиденциальности</a>
          <span className="text-[14px]">© Тюменская фабрика мерча 2026</span>
        </div>
      </div>
    </footer>
  )
}

/* ---------- toast ---------- */

function Toast({ show }: { show: boolean }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-acid px-6 py-3 font-display text-sm font-extrabold uppercase tracking-tight text-ink shadow-lg transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      Заявка принята — свяжемся с вами
    </div>
  )
}

export default function App() {
  const [toast, setToast] = useState(false)
  const fireToast = () => {
    setToast(true)
    setTimeout(() => setToast(false), 2600)
  }
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main className="flex flex-col [&>*:nth-child(n+3)]:mt-[100px]">
        <Hero />
        <Stats />
        <Directions />
        <Cases />
        <Benefits />
        <LeadForm onSubmit={fireToast} />
        <Assortment />
        <Technologies />
        <Clients />
        <Blog />
        <Faq />
      </main>
      <Footer />
      <Toast show={toast} />
    </div>
  )
}
