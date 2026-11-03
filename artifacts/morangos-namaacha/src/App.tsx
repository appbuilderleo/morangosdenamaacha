import { type ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowDown, ArrowUpRight, CircleDot, MapPin, Sprout } from 'lucide-react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import logo from './assets/morangos-namaacha-logo.png';

const queryClient = new QueryClient();
const whatsappUrl = 'https://wa.me/258872514554';

const audienceContent = {
  casa: {
    title: 'Para a mesa de casa.',
    description:
      'Procura fruta da época para desfrutar em casa? Pergunte-nos o que está disponível neste momento e partilhe o que procura.',
    caption: 'Para quem escolhe com cuidado',
    note: 'Uma conversa começa pela época',
  },
  negocio: {
    title: 'Para quem serve à mesa.',
    description:
      'Tem um negócio e procura fruta sazonal? Fale connosco sobre o que precisa e consulte a disponibilidade actual.',
    caption: 'Para pessoas e negócios',
    note: 'Partilhe a sua necessidade',
  },
};

function StrawberryDrawing() {
  return (
    <svg className="berry-art" viewBox="0 0 360 420" role="img" aria-label="Ilustração original de um morango">
      <defs>
        <linearGradient id="berryRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d34536" />
          <stop offset=".56" stopColor="#b52c27" />
          <stop offset="1" stopColor="#8b241f" />
        </linearGradient>
        <linearGradient id="leafGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#62824c" />
          <stop offset="1" stopColor="#29452f" />
        </linearGradient>
      </defs>
      <path d="M179 83C134 42 103 36 74 42c23 21 45 35 82 42-45-5-79 5-102 23 33 10 67 7 109-7-31 20-47 42-49 66 30-13 52-38 69-65 11 36 31 64 64 83 0-32-12-64-39-94 33 20 63 26 93 19-22-26-56-45-102-48 24-11 45-30 60-58-35 5-64 21-89 48-6-28-24-52-53-71 1 38 12 70 34 103Z" fill="url(#leafGreen)" />
      <path d="M180 116C148 103 112 93 77 112c-41 23-58 73-44 125 18 70 82 140 137 175 7 4 15 4 22 0 63-37 128-105 145-175 13-53-4-102-46-125-34-19-71-9-105 4l-3-1Z" fill="url(#berryRed)" />
      <path d="M100 145c-24 22-31 50-27 72" fill="none" stroke="#ed7661" strokeWidth="7" strokeLinecap="round" opacity=".46" />
      <g fill="#e6bc50">
        <ellipse className="seed" cx="115" cy="149" rx="5" ry="8" transform="rotate(25 115 149)" />
        <ellipse className="seed" cx="162" cy="143" rx="5" ry="8" transform="rotate(14 162 143)" />
        <ellipse className="seed" cx="212" cy="145" rx="5" ry="8" transform="rotate(-12 212 145)" />
        <ellipse className="seed" cx="256" cy="166" rx="5" ry="8" transform="rotate(-26 256 166)" />
        <ellipse className="seed" cx="83" cy="202" rx="5" ry="8" transform="rotate(12 83 202)" />
        <ellipse className="seed" cx="131" cy="197" rx="5" ry="8" transform="rotate(8 131 197)" />
        <ellipse className="seed" cx="180" cy="192" rx="5" ry="8" />
        <ellipse className="seed" cx="229" cy="199" rx="5" ry="8" transform="rotate(-8 229 199)" />
        <ellipse className="seed" cx="276" cy="209" rx="5" ry="8" transform="rotate(-16 276 209)" />
        <ellipse className="seed" cx="90" cy="251" rx="5" ry="8" transform="rotate(19 90 251)" />
        <ellipse className="seed" cx="140" cy="247" rx="5" ry="8" transform="rotate(9 140 247)" />
        <ellipse className="seed" cx="190" cy="246" rx="5" ry="8" />
        <ellipse className="seed" cx="240" cy="253" rx="5" ry="8" transform="rotate(-11 240 253)" />
        <ellipse className="seed" cx="116" cy="301" rx="5" ry="8" transform="rotate(16 116 301)" />
        <ellipse className="seed" cx="166" cy="299" rx="5" ry="8" transform="rotate(5 166 299)" />
        <ellipse className="seed" cx="216" cy="301" rx="5" ry="8" transform="rotate(-8 216 301)" />
        <ellipse className="seed" cx="151" cy="344" rx="5" ry="8" transform="rotate(8 151 344)" />
        <ellipse className="seed" cx="194" cy="344" rx="5" ry="8" transform="rotate(-5 194 344)" />
      </g>
    </svg>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Morangos de Namaacha, início">
        <img src={logo} alt="Morangos de Namaacha" />
      </a>
      <nav className="nav-links" aria-label="Navegação principal">
        <a href="#origem">A origem</a>
        <a href="#epoca">A época</a>
        <a href="#para-si">Para si</a>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-header-whatsapp">
          Fale connosco <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow">Fruta sazonal · Namaacha</div>
        <h1 id="hero-title">Sabor da <em>nossa terra.</em></h1>
        <p className="hero-intro">
          Fruta orgânica da época, com origem em Namaacha. Descubra o que está disponível e converse connosco.
        </p>
        <a className="button-primary" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-hero-whatsapp">
          Perguntar pela fruta da época <ArrowUpRight className="arrow" size={16} aria-hidden="true" />
        </a>
        <div className="hero-notes" aria-label="Sobre a Morangos de Namaacha">
          <span className="hero-note"><Sprout aria-hidden="true" /> Fruta orgânica</span>
          <span className="hero-note"><MapPin aria-hidden="true" /> Namaacha, Moçambique</span>
        </div>
      </div>
      <StrawberryDrawing />
      <span className="hero-side" aria-hidden="true">Da época, com identidade</span>
      <a href="#historia" className="scroll-mark" aria-label="Descer para conhecer a nossa história">
        <span className="scroll-line" /><span>Descobrir</span><ArrowDown size={12} aria-hidden="true" />
      </a>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="section manifesto" id="historia" aria-labelledby="manifesto-heading">
      <div className="manifesto-aside">
        <span className="section-kicker">O que nos move</span>
        <p>Uma relação simples entre a fruta, a época e quem a procura.</p>
      </div>
      <div>
        <h2 id="manifesto-heading">
          Há sabores que não precisam de <span>explicação.</span> Só de espaço à mesa.
        </h2>
        <div className="manifesto-bottom">
          <span>Fruta orgânica</span>
          <span>Da época</span>
          <span>Namaacha</span>
        </div>
      </div>
    </section>
  );
}

function Origin() {
  return (
    <section className="section origin" id="origem" aria-labelledby="origin-heading">
      <div className="origin-grid">
        <div>
          <span className="section-kicker">Um lugar no nome</span>
          <h2 id="origin-heading">Namaacha.<br /><em>O nosso ponto de partida.</em></h2>
        </div>
        <div>
          <p className="origin-copy">
            A Morangos de Namaacha é uma distribuidora de fruta orgânica sazonal. O nome assinala a nossa ligação a Namaacha, em Moçambique, e a uma forma de escolher fruta que respeita o tempo da época.
          </p>
          <div className="place-mark">
            <MapPin aria-hidden="true" />
            <span>Namaacha · Moçambique</span>
          </div>
        </div>
        <div className="origin-orbit" aria-hidden="true">
          <span className="orbit-dot" />
          <span className="orbit-center">Sabor<br />da nossa<br />terra</span>
          <span className="origin-orbit-label">Raiz e estação</span>
        </div>
        <div>
          <span className="section-kicker">A nossa assinatura</span>
          <p className="origin-copy">Mais do que um nome, uma referência ao lugar de onde vem a nossa identidade.</p>
        </div>
      </div>
    </section>
  );
}

function Season() {
  return (
    <section className="section season" id="epoca" aria-labelledby="season-heading">
      <div className="season-head">
        <div>
          <span className="section-kicker">O ritmo da natureza</span>
          <h2 id="season-heading">A fruta certa tem <em>a sua época.</em></h2>
        </div>
        <p>A disponibilidade acompanha a época. Fale connosco para saber que fruta está disponível agora.</p>
      </div>
      <div className="season-flow">
        <article className="season-step">
          <span className="num">01 / A ÉPOCA</span>
          <div>
            <h3>O tempo da fruta</h3>
            <p>Cada estação traz a sua própria disponibilidade.</p>
          </div>
          <svg className="fruit-line" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M32 17C24 9 17 9 11 11c5 4 10 7 17 8-9-1-16 1-20 5 6 2 13 1 21-2-6 4-9 8-9 13 6-3 10-8 13-13 2 7 6 12 12 15 0-6-2-12-8-18 6 4 12 5 18 4-4-5-11-9-20-9 5-3 9-6 11-11-7 1-12 4-17 9-1-5-5-10-10-14 0 7 2 13 6 19Z" fill="currentColor" />
            <path d="M32 24c-7-3-14-2-19 2-7 6-8 16-4 23 5 8 14 13 21 17 1 1 2 1 3 0 8-4 17-10 21-18 4-7 3-17-4-22-5-4-12-5-18-2Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </article>
        <span className="flow-arrow" aria-hidden="true">→</span>
        <article className="season-step">
          <span className="num">02 / A PERGUNTA</span>
          <div>
            <h3>O que procura?</h3>
            <p>Conte-nos que fruta tem em mente e para quem é.</p>
          </div>
          <CircleDot className="fruit-line" aria-hidden="true" strokeWidth={1} />
        </article>
        <span className="flow-arrow" aria-hidden="true">→</span>
        <article className="season-step">
          <span className="num">03 / A CONVERSA</span>
          <div>
            <h3>Falamos consigo</h3>
            <p>Consulte connosco a disponibilidade actual.</p>
          </div>
          <ArrowUpRight className="fruit-line" aria-hidden="true" strokeWidth={1} />
        </article>
      </div>
    </section>
  );
}

function Audience() {
  const [selected, setSelected] = useState<'casa' | 'negocio'>('casa');
  const [swap, setSwap] = useState(false);
  const content = audienceContent[selected];

  function chooseAudience(next: 'casa' | 'negocio') {
    if (next === selected) return;
    setSelected(next);
    setSwap((current) => !current);
  }

  return (
    <section className="section uses" id="para-si" aria-labelledby="uses-heading">
      <div className="uses-heading">
        <div>
          <span className="section-kicker">Uma boa escolha começa por si</span>
          <h2 id="uses-heading">O que procura?</h2>
        </div>
        <p>Em casa ou para o seu negócio, diga-nos o que precisa. A disponibilidade varia com a época.</p>
      </div>
      <div className="audience-panel">
        <div className="audience-tabs">
          <span className="tab-label">Escolha o seu caminho</span>
          <div className="tab-options" role="tablist" aria-label="Escolha o tipo de cliente">
            <button
              className="audience-tab"
              type="button"
              role="tab"
              id="tab-casa"
              aria-selected={selected === 'casa'}
              aria-controls="audience-panel"
              onClick={() => chooseAudience('casa')}
              data-testid="tab-casa"
            >
              Para casa <span className="tab-index">01</span>
            </button>
            <button
              className="audience-tab"
              type="button"
              role="tab"
              id="tab-negocio"
              aria-selected={selected === 'negocio'}
              aria-controls="audience-panel"
              onClick={() => chooseAudience('negocio')}
              data-testid="tab-negocio"
            >
              Para o negócio <span className="tab-index">02</span>
            </button>
          </div>
          <span className="tab-label">Morangos de Namaacha · Sabor da nossa terra.</span>
        </div>
        <div
          className={`audience-display${swap ? ' swap' : ''}`}
          role="tabpanel"
          id="audience-panel"
          aria-labelledby={`tab-${selected}`}
          tabIndex={0}
        >
          <div className="display-top">
            <Sprout className="audience-symbol" strokeWidth={1} aria-hidden="true" />
            <span className="audience-caption">{content.caption}</span>
          </div>
          <div>
            <h3 key={`${selected}-title`}>{content.title}</h3>
            <p key={`${selected}-description`}>{content.description}</p>
          </div>
          <div className="display-bottom">
            <span>{content.note}</span>
            <span>Namaacha, Moçambique</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StartAConversation() {
  return (
    <section className="section season" aria-labelledby="conversation-heading">
      <div className="season-head">
        <div>
          <span className="section-kicker">Uma conversa simples</span>
          <h2 id="conversation-heading">Para começar, <em>basta dizer.</em></h2>
        </div>
        <p>Quanto melhor conhecermos o que procura, mais fácil será falar sobre a fruta disponível.</p>
      </div>
      <div className="season-flow conversation-flow">
        <article className="season-step">
          <span className="num">01 / A FRUTA</span>
          <div>
            <h3>O que tem em mente?</h3>
            <p>Partilhe a fruta que procura, se já souber.</p>
          </div>
        </article>
        <span className="flow-arrow" aria-hidden="true">→</span>
        <article className="season-step">
          <span className="num">02 / A QUANTIDADE</span>
          <div>
            <h3>Para que escala?</h3>
            <p>Conte-nos se é para casa ou para o seu negócio.</p>
          </div>
        </article>
        <span className="flow-arrow" aria-hidden="true">→</span>
        <article className="season-step">
          <span className="num">03 / A ÉPOCA</span>
          <div>
            <h3>Quando procura?</h3>
            <p>Pergunte-nos sobre a disponibilidade actual.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contacto" aria-labelledby="contact-heading">
      <div className="contact-layout">
        <div>
          <span className="section-kicker">O próximo passo é seu</span>
          <h2 id="contact-heading">Vamos falar de <em>fruta?</em></h2>
        </div>
        <div className="contact-info">
          <p>Pergunte-nos o que está disponível nesta época. Estamos no WhatsApp.</p>
          <a className="button-primary" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp">
            +258 87 251 4554 <ArrowUpRight className="arrow" size={16} aria-hidden="true" />
          </a>
          <p className="contact-note">O WhatsApp abre numa nova janela. A disponibilidade de fruta depende da época.</p>
        </div>
      </div>
      <footer className="footer">
        <a className="footer-logo" href="#inicio" aria-label="Voltar ao início">
          <img src={logo} alt="" />
          <span>Morangos de Namaacha</span>
        </a>
        <span>Sabor da nossa terra.</span>
        <div className="footer-links">
          <a href="#origem">A origem</a>
          <a href="#epoca">A época</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <span>Namaacha · Moçambique</span>
      </footer>
    </section>
  );
}

function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '.manifesto, .origin-grid, .season-head, .season-flow, .uses-heading, .audience-panel, .contact-layout',
    );
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((target) => target.classList.add('in-view'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">Saltar para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Manifesto />
        <Origin />
        <Season />
        <Audience />
        <StartAConversation />
        <Contact />
      </main>
    </>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
