import {
  Award,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  ClipboardList,
  Ear,
  FileSearch,
  Gavel,
  Handshake,
  IdCard,
  Map,
  MapPin,
  ScrollText,
  Search,
  ShieldAlert,
  Users,
  AlertTriangle,
} from "lucide-react";
import heroImage from "@/assets/hero-representante.jpg";
import { cromgConfig } from "@/config/cromg";
import {
  BulletList,
  Eyebrow,
  Lead,
  LinkButton,
  NoteBox,
  Panel,
  Quote,
  Section,
  SectionTitle,
} from "./primitives";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-wine-deep scroll-mt-28">
      <img
        src={heroImage}
        alt="Cirurgiã-dentista apresentando sua identificação funcional em consultório"
        width={1600}
        height={1008}
        className="absolute inset-0 size-full object-cover object-center opacity-45"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-wine-deep via-wine-deep/92 to-wine-deep/35"
        aria-hidden="true"
      />
      <div
        className="absolute -top-16 right-0 hidden h-[420px] w-[420px] bg-gold/10 md:block"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 h-40 w-40 border-t border-r border-gold/40"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 0 0)" }}
        aria-hidden="true"
      />

      <div className="container-cro relative z-10 py-20 md:py-28">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-gold uppercase">
          Representação Municipal • CRO-MG
        </p>
        <h1 className="max-w-3xl text-3xl leading-[1.15] font-black tracking-tight text-white text-balance md:text-5xl">
          Presença que aproxima.
          <span className="block text-gold">Atuação que fortalece a Odontologia.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-[1.75] text-white/85 md:text-lg">
          O Representante Municipal é o elo de aproximação entre o CRO-MG, os profissionais, as
          instituições e a comunidade odontológica de seu município. Sua atuação contribui para
          ampliar o diálogo, orientar a categoria, identificar demandas locais e fortalecer a
          presença institucional do Conselho em todas as regiões de Minas Gerais.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="#o-papel" variant="gold" external={false}>
            Começar por aqui
          </LinkButton>
          <LinkButton href="#ferramentas" variant="onWine" external={false}>
            Acessar ferramentas
          </LinkButton>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3 md:max-w-3xl">
          {[
            { label: "Atuação honorífica", Icon: Award },
            { label: "Nomeação por portaria", Icon: ScrollText },
            { label: "Apoio da Delegacia Regional", Icon: Building2 },
          ].map(({ label, Icon }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
            >
              <Icon className="size-4 shrink-0 text-gold" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-white/60">
          Base normativa: Resolução CFO nº 63/2005, especialmente os arts. 224, 225, 229 e 230.
        </p>
      </div>
    </section>
  );
}

const quickAccess = [
  {
    title: "Minha Delegacia",
    text: "Encontre endereço, telefone, e-mail e composição da Delegacia Regional responsável por sua região.",
    href: cromgConfig.links.delegacias,
    Icon: MapPin,
  },
  {
    title: "Comunicar uma irregularidade",
    text: "Utilize o canal oficial do CRO-MG para registrar situações que precisam ser avaliadas.",
    href: cromgConfig.links.denuncias,
    Icon: ShieldAlert,
  },
  {
    title: "Consultar profissional ou empresa",
    text: "Confira inscrição, especialidade, responsabilidade técnica e situação cadastral.",
    href: cromgConfig.links.profissionais,
    Icon: Search,
  },
  {
    title: "Serviços Online",
    text: "Acesse requerimentos, certidões, atualização cadastral, ficha financeira e outros serviços.",
    href: cromgConfig.links.servicos,
    Icon: ClipboardList,
  },
  {
    title: "Código de Ética",
    text: "Consulte o Código de Ética Odontológica e as orientações vigentes.",
    href: cromgConfig.links.etica,
    Icon: Gavel,
  },
];

export function QuickAccess() {
  return (
    <section className="border-b border-line bg-ice py-10 md:py-14">
      <div className="container-cro">
        <h2 className="sr-only">Acessos rápidos</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickAccess.map(({ title, text, href, Icon }) => (
            <li key={title}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-line bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_14px_30px_-22px_rgba(41,37,37,0.8)]"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-wine/5 text-wine">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="mt-4 text-sm font-extrabold text-wine">{title}</span>
                <span className="mt-2 text-sm leading-[1.7] text-muted-foreground">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Welcome() {
  return (
    <Section>
      <div
        className="absolute top-0 -left-24 h-72 w-72 bg-wine/5"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        aria-hidden="true"
      />
      <Eyebrow>Bem-vindo(a) à rede do CRO-MG</Eyebrow>
      <SectionTitle>Uma missão de confiança, diálogo e serviço à Odontologia</SectionTitle>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <p className="text-base leading-[1.75] text-foreground/85">
          Minas Gerais reúne realidades muito diferentes, municípios de todos os portes e uma
          comunidade odontológica ampla e diversa. Para estar mais próximo dos profissionais e
          compreender as necessidades de cada região, o CRO-MG conta com a colaboração de seus
          Representantes Municipais.
        </p>
        <div className="space-y-5">
          <p className="text-base leading-[1.75] text-foreground/85">
            Ao aceitar essa missão, você passa a integrar uma rede de profissionais comprometidos
            com a ética, a valorização da Odontologia, a qualidade da assistência e o fortalecimento
            do diálogo institucional.
          </p>
          <p className="text-base leading-[1.75] text-foreground/85">
            Sua atuação não é isolada. A Delegacia Regional, os setores técnicos, a Diretoria e os
            canais oficiais do CRO-MG compõem a estrutura de apoio necessária para que cada demanda
            seja encaminhada de forma segura, organizada e responsável.
          </p>
        </div>
      </div>
      <Quote>
        Representar é ouvir com atenção, orientar com responsabilidade e encaminhar cada situação
        pelo canal adequado.
      </Quote>
      <p className="mt-6 text-sm font-semibold text-wine">
        Diretoria do Conselho Regional de Odontologia de Minas Gerais
      </p>
    </Section>
  );
}

const papelCards = [
  {
    title: "Designação oficial",
    text: "A atuação somente se torna oficial após a nomeação por portaria da Presidência do CRO-MG, com definição da área de jurisdição.",
    Icon: ScrollText,
  },
  {
    title: "Atuação honorífica",
    text: "O cargo possui natureza honorífica e representa uma colaboração institucional em benefício da categoria e da sociedade.",
    Icon: Award,
  },
  {
    title: "Jurisdição definida",
    text: "A atuação deve respeitar o município ou a área indicada na portaria de nomeação.",
    Icon: Map,
  },
  {
    title: "Identificação funcional",
    text: "O representante deve portar e apresentar sua identificação funcional sempre que estiver em atividade institucional.",
    Icon: IdCard,
  },
  {
    title: "Integração regional",
    text: "O trabalho é desenvolvido em diálogo com a Delegacia Regional responsável pela área e com os setores competentes do CRO-MG.",
    Icon: Handshake,
  },
];

export function OPapel() {
  return (
    <Section id="o-papel" tone="ice">
      <Eyebrow>Entenda o seu papel</Eyebrow>
      <SectionTitle>Quem é o Representante Municipal do CRO-MG?</SectionTitle>
      <Lead>
        O Representante Municipal é um cirurgião-dentista regularmente inscrito, designado pelo
        CRO-MG para atuar como ponto de aproximação entre o Conselho e a comunidade odontológica de
        determinado município.
      </Lead>
      <Lead className="mt-4">
        Sua função principal é facilitar o relacionamento institucional, orientar os profissionais,
        conhecer a realidade local e comunicar à autoridade hierarquicamente superior fatos,
        mudanças e possíveis irregularidades relevantes para a Odontologia.
      </Lead>
      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {papelCards.map(({ title, text, Icon }) => (
          <li key={title}>
            <Panel className="h-full">
              <span className="grid size-10 place-items-center rounded-lg bg-wine text-white">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-extrabold text-wine">{title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{text}</p>
            </Panel>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <LinkButton href={cromgConfig.links.normasCfo} variant="outline">
          Consultar a Consolidação das Normas do CFO
        </LinkButton>
      </div>
    </Section>
  );
}

const nomeacaoSteps = [
  {
    title: "Identificação da necessidade",
    text: "O CRO-MG e a Delegacia Regional avaliam a necessidade de representação no município e o perfil adequado para a função.",
  },
  {
    title: "Indicação e análise",
    text: "O nome do profissional é submetido à análise institucional, considerando regularidade, disponibilidade, postura ética e capacidade de articulação.",
  },
  {
    title: "Nomeação por portaria",
    text: "A designação é formalizada por portaria da Presidência, que define a área de atuação.",
  },
  {
    title: "Comunicação às autoridades",
    text: "Quando necessário, a nomeação é comunicada às autoridades e instituições locais para facilitar o desempenho das funções.",
  },
  {
    title: "Integração e orientação",
    text: "O novo representante recebe sua identificação, conhece os canais de apoio e inicia o plano de atuação no município.",
  },
];

export function Nomeacao() {
  return (
    <Section>
      <Eyebrow>Processo institucional</Eyebrow>
      <SectionTitle>Como funciona a nomeação</SectionTitle>
      <ol className="mt-10 grid gap-6 md:grid-cols-5">
        {nomeacaoSteps.map((step, i) => (
          <li key={step.title} className="relative md:pt-6">
            <span
              className="absolute top-9 left-0 hidden h-px w-full bg-line md:block"
              aria-hidden="true"
            />
            <span className="relative z-10 grid size-9 place-items-center rounded-full bg-wine text-sm font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-4 text-sm font-extrabold text-wine">{step.title}</h3>
            <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
      <NoteBox>
        A indicação ou convite não autoriza o uso do título. A identificação como Representante
        Municipal somente deve ocorrer após a formalização da nomeação.
      </NoteBox>
    </Section>
  );
}

const papeisComparados = [
  {
    title: "Representante Municipal",
    Icon: Users,
    items: [
      "Mantém diálogo com os profissionais do município.",
      "Orienta sobre canais, normas e serviços.",
      "Identifica demandas e mudanças locais.",
      "Encaminha fatos e possíveis irregularidades.",
      "Apoia a articulação institucional.",
      "Participa de ações quando autorizado.",
    ],
    highlight: "É o ponto de aproximação local.",
  },
  {
    title: "Delegacia Regional",
    Icon: Building2,
    items: [
      "Coordena e acompanha a atuação regional.",
      "Recebe e organiza demandas dos municípios.",
      "Intermedeia o relacionamento com a sede.",
      "Orienta o representante em situações específicas.",
      "Articula ações com os setores do CRO-MG.",
    ],
    highlight: "É a referência hierárquica regional.",
  },
  {
    title: "Fiscalização do CRO-MG",
    Icon: FileSearch,
    items: [
      "Realiza ações técnicas de fiscalização.",
      "Avalia denúncias e documentos.",
      "Orienta profissionais e estabelecimentos.",
      "Emite notificações e adota as providências cabíveis.",
      "Atua dentro das competências legais do Conselho.",
    ],
    highlight: "É o setor técnico responsável pela apuração e atuação fiscalizatória.",
  },
];

export function QuemFazOQue() {
  return (
    <Section tone="ice">
      <Eyebrow>Papéis complementares</Eyebrow>
      <SectionTitle>
        Representante, Delegacia e Fiscalização: funções diferentes e complementares
      </SectionTitle>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {papeisComparados.map(({ title, Icon, items, highlight }) => (
          <Panel key={title} className="flex h-full flex-col">
            <span className="grid size-10 place-items-center rounded-lg bg-wine/5 text-wine">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-extrabold text-wine">{title}</h3>
            <BulletList items={items} />
            <p className="mt-5 rounded-xl border border-gold/60 bg-gold/10 px-4 py-3 text-sm font-bold text-wine">
              {highlight}
            </p>
          </Panel>
        ))}
      </div>
      <div className="mt-8 flex gap-4 rounded-2xl border border-wine/20 bg-wine/5 p-6">
        <AlertTriangle className="mt-0.5 size-5 shrink-0 text-wine" aria-hidden="true" />
        <p className="text-sm leading-[1.7] font-semibold text-wine">
          O Representante Municipal não substitui o fiscal, o Delegado Regional, a Diretoria, o
          Jurídico ou os demais setores técnicos do CRO-MG.
        </p>
      </div>
    </Section>
  );
}

const pilares = [
  {
    title: "Orientação",
    Icon: BookOpenCheck,
    text: "Ajudar os profissionais a encontrar informações corretas sobre normas, serviços, inscrições, atualização cadastral e canais do Conselho.",
    items: [
      "Indicar o canal correto.",
      "Compartilhar materiais oficiais.",
      "Incentivar a atualização profissional.",
      "Evitar interpretações pessoais sobre questões jurídicas ou éticas.",
    ],
  },
  {
    title: "Escuta e comunicação",
    Icon: Ear,
    text: "Ouvir as necessidades da comunidade odontológica e encaminhar informações relevantes de forma objetiva.",
    items: [
      "Demandas dos profissionais.",
      "Mudanças na rede municipal.",
      "Problemas recorrentes.",
      "Notícias e iniciativas positivas.",
      "Situações que exigem apoio institucional.",
    ],
  },
  {
    title: "Articulação institucional",
    Icon: Handshake,
    text: "Construir diálogo respeitoso com instituições locais, sem assumir compromissos não autorizados.",
    items: [
      "Secretaria Municipal de Saúde.",
      "Conselho Municipal de Saúde.",
      "Prefeitura e Câmara Municipal.",
      "Instituições de ensino.",
      "Hospitais e serviços de saúde.",
      "Entidades de classe.",
    ],
  },
  {
    title: "Fiscalização colaborativa",
    Icon: BadgeCheck,
    text: "Contribuir com informações para o trabalho técnico do CRO-MG, sem realizar autuações, inspeções ou abordagens coercitivas.",
    items: [
      "Identificar indícios de exercício ilegal.",
      "Comunicar possível irregularidade.",
      "Orientar sobre o canal de denúncia.",
      "Preservar registros públicos, links e evidências.",
    ],
  },
  {
    title: "Conhecimento do território",
    Icon: Map,
    text: "Manter uma visão atualizada da realidade odontológica do município.",
    items: [
      "Serviços públicos de saúde bucal.",
      "Consultórios e clínicas.",
      "Instituições de ensino.",
      "Entidades e lideranças profissionais.",
      "Necessidades de capacitação.",
      "Projetos e ações locais.",
    ],
  },
];

export function Pilares() {
  return (
    <Section tone="wine">
      <Eyebrow invert>Fundamentos</Eyebrow>
      <SectionTitle invert>Uma atuação orientada por cinco pilares</SectionTitle>
      <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pilares.map(({ title, Icon, text, items }, i) => (
          <li key={title}>
            <Panel invert className="h-full">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-wine text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-bold tracking-widest text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-base font-extrabold text-wine">{title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{text}</p>
              <p className="mt-4 text-[11px] font-bold tracking-widest text-wine-soft uppercase">
                Exemplos
              </p>
              <BulletList items={items} className="mt-2" />
            </Panel>
          </li>
        ))}
      </ol>
    </Section>
  );
}
