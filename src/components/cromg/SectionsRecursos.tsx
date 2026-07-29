import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Building2,
  ClipboardList,
  Download,
  ExternalLink,
  Facebook,
  FileSearch,
  FileText,
  Gavel,
  GraduationCap,
  Instagram,
  Lock,
  MapPin,
  Newspaper,
  Phone,
  RefreshCw,
  Scale,
  Search,
  Smartphone,
  ShieldAlert,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { cromgConfig, type DownloadKey } from "@/config/cromg";
import { Eyebrow, LinkButton, NoteBox, Panel, Section, SectionTitle } from "./primitives";

const ferramentas = [
  {
    title: "Delegacias Regionais",
    text: "Encontre a unidade responsável por sua região.",
    href: cromgConfig.links.delegacias,
    Icon: MapPin,
  },
  {
    title: "Consulta de Profissionais",
    text: "Consulte profissionais, empresas, especialidades e responsabilidades.",
    href: cromgConfig.links.profissionais,
    Icon: Search,
  },
  {
    title: "Serviços Online",
    text: "Acesse requerimentos, certidões, atualização e ficha financeira.",
    href: cromgConfig.links.servicos,
    Icon: ClipboardList,
  },
  {
    title: "Atualização Cadastral",
    text: "Oriente os profissionais a manter dados e contatos atualizados.",
    href: cromgConfig.links.atualizacaoCadastral,
    Icon: RefreshCw,
  },
  {
    title: "Fiscalização e Denúncia",
    text: "Registre situações para análise do setor responsável.",
    href: cromgConfig.links.denuncias,
    Icon: ShieldAlert,
  },
  {
    title: "Conteúdos da Fiscalização",
    text: "Acompanhe orientações e notícias oficiais.",
    href: cromgConfig.links.fiscalizacao,
    Icon: FileSearch,
  },
  {
    title: "Código de Ética",
    text: "Consulte os documentos e orientações vigentes.",
    href: cromgConfig.links.etica,
    Icon: Gavel,
  },
  {
    title: "Normas CFO-CROs",
    text: "Consulte a Consolidação das Normas e suas alterações.",
    href: cromgConfig.links.normasCfo,
    Icon: Scale,
  },
  {
    title: "Atos Normativos do CFO",
    text: "Acesse resoluções, decisões e portarias.",
    href: cromgConfig.links.atosCfo,
    Icon: FileText,
  },
  {
    title: "Portal da Transparência do CRO-MG",
    text: "Consulte atos, despesas, documentos e informações públicas.",
    href: cromgConfig.links.transparencia,
    Icon: Building2,
  },
  {
    title: "Educação Permanente",
    text: "Acesse ações de capacitação e atualização.",
    href: cromgConfig.links.pep,
    Icon: GraduationCap,
  },
  {
    title: "Aplicativo Meu CROMG",
    text: "Conheça os serviços e conteúdos disponíveis no aplicativo.",
    href: cromgConfig.links.app,
    Icon: Smartphone,
  },
  {
    title: "Site Institucional",
    text: "Acompanhe notícias, serviços e ações do Conselho.",
    href: cromgConfig.links.site,
    Icon: Newspaper,
  },
];

export function Ferramentas() {
  return (
    <Section id="ferramentas" tone="wine">
      <Eyebrow invert>Ferramentas e links oficiais</Eyebrow>
      <SectionTitle invert>Tudo o que você precisa, em poucos cliques</SectionTitle>
      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ferramentas.map(({ title, text, href, Icon }) => (
          <li key={title}>
            <Panel invert className="flex h-full flex-col">
              <span className="grid size-10 place-items-center rounded-lg bg-wine text-white">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-extrabold text-wine">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-[1.7] text-muted-foreground">{text}</p>
              <LinkButton href={href} variant="outline" className="mt-4 self-start">
                Acessar
              </LinkButton>
            </Panel>
          </li>
        ))}
      </ul>
    </Section>
  );
}

type Material = {
  title: string;
  key: DownloadKey;
  state?: "restrito" | "atualizacao";
  action?: "Baixar" | "Acessar";
};

const materiais: Material[] = [
  { title: "Modelo de relatório de atividade", key: "relatorio", action: "Baixar" },
  { title: "Modelo de registro de visita institucional", key: "visita", action: "Baixar" },
  { title: "Modelo de ofício", key: "oficio", action: "Baixar" },
  { title: "Modelo de solicitação de reunião", key: "reuniao", action: "Baixar" },
  { title: "Checklist para eventos", key: "evento", action: "Baixar" },
  { title: "Plano dos primeiros 90 dias", key: "plano90Dias", action: "Baixar" },
  { title: "Ficha de mapeamento municipal", key: "mapeamento", action: "Baixar" },
  { title: "Apresentação institucional do CRO-MG", key: "apresentacao", action: "Acessar" },
  { title: "Assinatura institucional", key: "assinatura", state: "restrito" },
  { title: "Manual de uso da marca", key: "marca", state: "restrito" },
  { title: "Cartilha em PDF", key: "cartilha", action: "Baixar" },
  { title: "Código de Ética Odontológica", key: "codigoEtica", action: "Acessar" },
];

export function Materiais() {
  return (
    <Section tone="ice">
      <Eyebrow>Modelos e materiais</Eyebrow>
      <SectionTitle>Materiais para facilitar sua atuação</SectionTitle>
      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {materiais.map((m) => {
          const url = cromgConfig.downloads[m.key];
          const restrito = m.state === "restrito";
          const disponivel = !!url && !restrito;
          return (
            <li key={m.title}>
              <Panel className="flex h-full flex-col">
                <span className="grid size-10 place-items-center rounded-lg bg-wine/5 text-wine">
                  {restrito ? (
                    <Lock className="size-5" aria-hidden="true" />
                  ) : (
                    <FileText className="size-5" aria-hidden="true" />
                  )}
                </span>
                <h3 className="mt-4 flex-1 text-sm font-extrabold text-wine">{m.title}</h3>
                {disponivel ? (
                  <LinkButton href={url} variant="outline" className="mt-4 self-start">
                    {m.action === "Acessar" ? (
                      <ExternalLink className="size-4" aria-hidden="true" />
                    ) : (
                      <Download className="size-4" aria-hidden="true" />
                    )}
                    {m.action ?? "Baixar"}
                  </LinkButton>
                ) : (
                  <span
                    aria-disabled="true"
                    className="mt-4 inline-flex min-h-11 cursor-not-allowed items-center gap-2 self-start rounded-xl border border-dashed border-line px-4 text-sm font-bold text-muted-foreground"
                  >
                    {restrito ? (
                      <>
                        <Lock className="size-4" aria-hidden="true" /> Restrito
                      </>
                    ) : (
                      <>
                        <RefreshCw className="size-4" aria-hidden="true" /> Em atualização
                      </>
                    )}
                  </span>
                )}
              </Panel>
            </li>
          );
        })}
      </ul>
      <NoteBox>
        Materiais internos devem ser disponibilizados somente na Área do Representante ou por link
        controlado.
      </NoteBox>
    </Section>
  );
}

const faq = [
  {
    q: "Quem pode ser Representante Municipal?",
    a: "Cirurgião-dentista regularmente inscrito no Conselho Regional e formalmente designado por portaria.",
  },
  {
    q: "A função é remunerada?",
    a: "O cargo possui natureza honorífica. Eventuais despesas, auxílios ou autorizações dependem de ato e procedimento específico do CRO-MG; nunca devem ser presumidos.",
  },
  {
    q: "Posso usar o título antes da publicação da portaria?",
    a: "Não. A identificação como Representante Municipal deve ocorrer somente após a formalização da nomeação.",
  },
  {
    q: "Posso fiscalizar clínicas?",
    a: "Não como fiscal. O representante pode orientar, observar fatos e encaminhar informações, mas não deve realizar autuação, inspeção coercitiva, notificação ou interdição.",
  },
  {
    q: "Posso solicitar documentos de um estabelecimento?",
    a: "Não por iniciativa própria. Solicitações formais de documentos pertencem aos setores competentes.",
  },
  {
    q: "Posso receber denúncias?",
    a: "Pode acolher o relato e orientar o denunciante, mas o registro deve ocorrer no canal oficial.",
  },
  {
    q: "Posso divulgar uma denúncia?",
    a: "Não. Denúncias e informações pessoais devem ser tratadas com discrição e dentro do fluxo institucional.",
  },
  {
    q: "Posso falar com a Prefeitura?",
    a: "Sim, dentro das atribuições e com postura institucional. Pedidos, compromissos e manifestações oficiais devem ser alinhados com a Delegacia.",
  },
  {
    q: "Posso conceder entrevista?",
    a: "Somente após orientação da Comunicação ou da Diretoria.",
  },
  {
    q: "Posso criar um perfil local do CRO-MG?",
    a: "Não sem autorização. Perfis não autorizados podem confundir o público e comprometer a identidade institucional.",
  },
  {
    q: "Posso organizar cursos ou eventos?",
    a: "Pode identificar demandas e apresentar propostas. A confirmação de parceria, apoio, marca, palestrante ou recurso depende de autorização.",
  },
  {
    q: "Posso compartilhar a base de contatos dos profissionais?",
    a: "Não. Dados cadastrais devem ser protegidos e usados apenas para finalidades institucionais autorizadas.",
  },
  {
    q: "Como devo me identificar?",
    a: "Use nome, categoria, número de inscrição, função e município, mantendo linguagem clara e sem ampliar as competências do cargo.",
  },
  {
    q: "Para quem envio uma demanda?",
    a: "A referência inicial é a Delegacia Regional, salvo quando existir canal oficial específico.",
  },
  {
    q: "Como acompanho uma denúncia?",
    a: "O acompanhamento deve respeitar o sistema e as orientações do setor responsável. O representante não deve prometer acesso a informações sigilosas.",
  },
  {
    q: "O que fazer quando não souber responder?",
    a: "Informe que fará a verificação e consulte a Delegacia ou o setor competente. Não improvise.",
  },
  {
    q: "Quando termina a nomeação?",
    a: "A duração segue o ato de designação e as regras da Resolução CFO nº 63/2005, inclusive quanto ao período relacionado ao término da gestão da Presidência e à possibilidade de recondução.",
  },
];

export function Faq() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    if (!q) return faq;
    return faq.filter((f) =>
      `${f.q} ${f.a}`
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(q),
    );
  }, [query]);

  return (
    <Section id="duvidas">
      <Eyebrow>Perguntas frequentes</Eyebrow>
      <SectionTitle>Dúvidas frequentes</SectionTitle>

      <div className="mt-8 max-w-md">
        <label htmlFor="faq-search" className="text-xs font-bold tracking-wide text-wine">
          Buscar por palavra-chave
        </label>
        <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-line bg-background px-3.5">
          <Search className="size-4 text-muted-foreground" aria-hidden="true" />
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ex.: denúncia, entrevista, portaria"
            className="min-h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">
          Nenhuma pergunta encontrada. Consulte a Delegacia Regional para dúvidas específicas.
        </p>
      ) : (
        <Accordion type="single" collapsible className="mt-6 space-y-3">
          {filtered.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              className="rounded-2xl border border-line bg-card px-5"
            >
              <AccordionTrigger className="text-left text-sm font-extrabold text-wine hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-[1.75] text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </Section>
  );
}

export function CtaFinal() {
  return (
    <Section tone="wine-deep">
      <div
        className="absolute top-0 right-0 h-64 w-64 bg-gold/10"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
        aria-hidden="true"
      />
      <span className="mb-6 block h-px w-24 bg-gold" aria-hidden="true" />
      <SectionTitle invert>Você não está sozinho nessa missão</SectionTitle>
      <p className="mt-5 max-w-3xl text-base leading-[1.75] text-white/80 md:text-lg">
        Cada município possui características próprias, mas todos os representantes fazem parte da
        mesma rede. Sempre que surgir uma dúvida, uma demanda ou uma oportunidade, conte com a
        Delegacia Regional e com os canais oficiais do CRO-MG.
      </p>
      <p className="mt-4 max-w-3xl text-base leading-[1.75] text-white/80">
        Sua participação aproxima o Conselho, amplia a escuta e fortalece a Odontologia mineira.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href={cromgConfig.links.delegacias} variant="gold">
          Encontrar minha Delegacia
        </LinkButton>
        <LinkButton href={cromgConfig.whatsappUrl} variant="onWine">
          <MessageCircle className="size-4" aria-hidden="true" />
          Falar com o CRO-MG pelo WhatsApp
        </LinkButton>
        <LinkButton href={cromgConfig.links.servicos} variant="onWine">
          Acessar Serviços Online
        </LinkButton>
      </div>
    </Section>
  );
}

const footerLinks = [
  { label: "Site institucional", href: cromgConfig.links.site },
  { label: "Serviços Online", href: cromgConfig.links.servicos },
  { label: "Delegacias Regionais", href: cromgConfig.links.delegacias },
  { label: "Fiscalização e Denúncia", href: cromgConfig.links.denuncias },
  { label: "Portal da Transparência", href: cromgConfig.links.transparencia },
  { label: "Política de Privacidade", href: cromgConfig.links.privacidade },
  { label: "Acessibilidade", href: cromgConfig.links.acessibilidade },
];

const socials = [
  { label: "Instagram oficial", href: cromgConfig.links.instagram, Icon: Instagram },
  { label: "Facebook oficial", href: cromgConfig.links.facebook, Icon: Facebook },
  { label: "YouTube oficial", href: cromgConfig.links.youtube, Icon: Youtube },
];

export function SiteFooter() {
  return (
    <footer className="bg-wine text-white">
      <div className="container-cro grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-sm font-extrabold">
            Conselho Regional de Odontologia de Minas Gerais — CRO-MG
          </p>
          <address className="mt-4 text-sm leading-[1.8] text-white/75 not-italic">
            Rua da Bahia, 1477 — Lourdes
            <br />
            Belo Horizonte — MG
            <br />
            CEP 30160-017
          </address>
          <p className="mt-4 space-y-1 text-sm text-white/75">
            <a
              href={cromgConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp: {cromgConfig.whatsappLabel}
            </a>
            <a href={cromgConfig.phoneUrl} className="mt-1 flex items-center gap-2 hover:text-gold">
              <Phone className="size-4" aria-hidden="true" />
              Telefone: {cromgConfig.phoneLabel}
            </a>
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">Links</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">Redes oficiais</p>
          <ul className="mt-4 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-xl border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-white/60">
            Conteúdo atualizado em {cromgConfig.updatedAt}.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-cro py-6 text-xs leading-[1.7] text-white/60">
          Este guia possui caráter informativo e não substitui a legislação, os atos normativos, a
          portaria de nomeação nem as orientações oficiais do CRO-MG.
        </p>
      </div>
    </footer>
  );
}
