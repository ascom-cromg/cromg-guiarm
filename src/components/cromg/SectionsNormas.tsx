import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowDown, CircleCheck, CircleX, Send, ShieldQuestion } from "lucide-react";
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

const atribuicoes = [
  {
    title: "Colaborar com a autoridade hierarquicamente superior",
    text: "Atuar em alinhamento com a Delegacia Regional e com as orientações institucionais do CRO-MG.",
  },
  {
    title: "Orientar os profissionais",
    text: "Contribuir para que os profissionais de sua jurisdição conheçam e observem a legislação odontológica.",
  },
  {
    title: "Comunicar irregularidades",
    text: "Informar à autoridade superior fatos relevantes ou possíveis irregularidades relacionados ao exercício da Odontologia e ao Código de Ética.",
  },
  {
    title: "Intermediar o relacionamento",
    text: "Facilitar o diálogo entre o Conselho Regional e as pessoas físicas e jurídicas sediadas no município.",
  },
  {
    title: "Conhecer e atualizar a realidade local",
    text: "Acompanhar informações sobre profissionais e entidades da área e comunicar alterações relevantes.",
  },
];

export function Atribuicoes() {
  return (
    <Section id="atribuicoes">
      <Eyebrow>Base normativa</Eyebrow>
      <SectionTitle>O que a norma estabelece</SectionTitle>
      <Lead>
        A Resolução CFO nº 63/2005 atribui aos Representantes Municipais e Distritais cinco
        responsabilidades centrais.
      </Lead>
      <ol className="mt-10 space-y-4">
        {atribuicoes.map((item, i) => (
          <li key={item.title}>
            <Panel className="flex gap-5">
              <span className="text-2xl leading-none font-black text-gold md:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <h3 className="text-base font-extrabold text-wine">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-[1.7] text-muted-foreground">{item.text}</p>
              </span>
            </Panel>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href={cromgConfig.links.consolidacaoCfo}>Ver arts. 224 a 230</LinkButton>
        <LinkButton href={cromgConfig.links.atosCfo} variant="outline">
          Consultar atos normativos do CFO
        </LinkButton>
      </div>
      <NoteBox>
        A legislação pode ser atualizada. Sempre consultar a versão vigente e as orientações
        oficiais antes de responder questões específicas.
      </NoteBox>
    </Section>
  );
}

const limites = [
  {
    title: "Não realizar fiscalização por conta própria",
    dont: "Não entrar em áreas restritas, exigir documentos, aplicar notificações, autuar, interditar ou anunciar sanções.",
    how: "Registrar informações básicas e encaminhar ao canal oficial.",
  },
  {
    title: "Não prometer decisões",
    dont: "Não garantir deferimento, arquivamento, multa, prazo, apoio financeiro, presença da Diretoria ou qualquer resultado institucional.",
    how: "Informar que a solicitação será analisada pelo setor competente.",
  },
  {
    title: "Não expor denúncias",
    dont: "Não discutir nomes, provas ou relatos em grupos, redes sociais, eventos ou conversas sem necessidade institucional.",
    how: "Manter discrição e usar os canais oficiais.",
  },
  {
    title: "Não emitir parecer jurídico ou ético",
    dont: "Não oferecer interpretação conclusiva sobre casos concretos.",
    how: "Encaminhar a dúvida ao setor competente e compartilhar apenas orientações oficiais.",
  },
  {
    title: "Não usar o cargo para promoção pessoal",
    dont: "Não utilizar o título para benefício comercial, partidário, eleitoral ou para conferir aparência de apoio institucional a produtos, empresas ou candidaturas.",
    how: "Manter postura impessoal e separar claramente atividades privadas da função institucional.",
  },
  {
    title: "Não falar oficialmente sem alinhamento",
    dont: "Não conceder entrevista, emitir nota ou assumir posição pública em nome do CRO-MG sem orientação.",
    how: "Encaminhar a demanda à Comunicação ou à Diretoria.",
  },
];

export function Limites() {
  return (
    <Section tone="ice">
      <Eyebrow>Limites da atuação</Eyebrow>
      <SectionTitle>Representar com segurança também é conhecer os limites</SectionTitle>
      <Lead>
        O representante aproxima, orienta e encaminha. Ele não recebe automaticamente competências
        técnicas, administrativas, fiscalizatórias ou decisórias que pertencem aos setores e
        autoridades do Conselho.
      </Lead>
      <ul className="mt-10 grid gap-5 md:grid-cols-2">
        {limites.map((item) => (
          <li key={item.title}>
            <Panel className="h-full">
              <h3 className="text-base font-extrabold text-wine">{item.title}</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-ice p-4">
                  <p className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-wine uppercase">
                    <CircleX className="size-4" aria-hidden="true" /> Não faça
                  </p>
                  <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{item.dont}</p>
                </div>
                <div className="rounded-xl border border-gold/60 bg-gold/10 p-4">
                  <p className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-wine uppercase">
                    <CircleCheck className="size-4" aria-hidden="true" /> Como agir
                  </p>
                  <p className="mt-2 text-sm leading-[1.7] text-foreground/85">{item.how}</p>
                </div>
              </div>
            </Panel>
          </li>
        ))}
      </ul>
      <Quote>Na dúvida, não improvise. Registre a situação e consulte a Delegacia Regional.</Quote>
    </Section>
  );
}

const fluxo = [
  "Profissional, instituição ou fato local",
  "Representante Municipal recebe e organiza a informação",
  "Delegacia Regional avalia e direciona",
  "Setor competente do CRO-MG analisa",
  "Orientação ou providência institucional",
  "Retorno ao representante, quando cabível",
];

export function Fluxo() {
  return (
    <Section>
      <Eyebrow>Fluxo institucional</Eyebrow>
      <SectionTitle>Como a informação circula</SectionTitle>
      <ol className="mt-10 grid gap-3 md:max-w-3xl">
        {fluxo.map((step, i) => (
          <li key={step}>
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-card px-5 py-4">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-wine text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm leading-[1.6] font-semibold text-foreground/90">{step}</span>
            </div>
            {i < fluxo.length - 1 ? (
              <div className="flex justify-center py-1.5" aria-hidden="true">
                <ArrowDown className="size-4 text-gold" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
      <Lead>
        O representante deve encaminhar informações de forma objetiva, com contexto, data, local,
        contatos e documentos estritamente necessários. Demandas urgentes ou de risco devem ser
        direcionadas imediatamente aos canais oficiais e às autoridades competentes, conforme a
        natureza do caso.
      </Lead>
      <div className="mt-6">
        <LinkButton href={cromgConfig.links.delegacias}>
          Encontrar minha Delegacia Regional
        </LinkButton>
      </div>
    </Section>
  );
}

type Situacao = {
  title: string;
  do: string[];
  avoid?: string[];
  forward?: { label: string; href: string };
  extra?: { label: string; text: string };
};

const situacoes: Situacao[] = [
  {
    title: "Recebi uma denúncia pelo WhatsApp",
    do: [
      "Acolher o relato com respeito, sem antecipar julgamento.",
      "Explicar que a apuração depende de registro no canal oficial.",
      "Orientar o envio de informações, links, imagens ou documentos disponíveis.",
      "Preservar a confidencialidade.",
      "Encaminhar o link oficial de denúncia.",
    ],
    avoid: [
      "Investigar por conta própria.",
      "Confrontar o denunciado.",
      "Replicar o conteúdo.",
      "Prometer resultado ou prazo.",
    ],
    forward: { label: "Canal oficial de denúncias", href: cromgConfig.links.denuncias },
  },
  {
    title: "Identifiquei possível exercício ilegal",
    do: [
      "Anotar endereço, data e descrição objetiva.",
      "Preservar apenas informações públicas ou recebidas legitimamente.",
      "Registrar links, anúncios ou publicações.",
      "Encaminhar imediatamente à Delegacia ou ao canal oficial.",
    ],
    avoid: [
      "Realizar abordagem coercitiva.",
      "Entrar em local privado sem autorização.",
      "Expor a situação nas redes sociais.",
      "Apresentar o fato como infração já comprovada.",
    ],
    forward: { label: "Canal oficial de denúncias", href: cromgConfig.links.denuncias },
  },
  {
    title: "A Prefeitura solicitou apoio do CRO-MG",
    do: [
      "Identificar o tema, objetivo, prazo e responsável.",
      "Solicitar documento, ofício ou e-mail institucional.",
      "Encaminhar à Delegacia Regional.",
      "Aguardar orientação antes de confirmar apoio ou participação.",
    ],
    avoid: [
      "Comprometer recursos.",
      "Confirmar presença de dirigentes.",
      "Assinar documentos ou acordos sem autorização.",
    ],
    forward: { label: "Delegacias Regionais", href: cromgConfig.links.delegacias },
  },
  {
    title: "Fui convidado para um evento",
    do: [
      "Enviar convite, programação, público e objetivo à Delegacia.",
      "Confirmar se atuará como representante oficial ou como participante.",
      "Solicitar orientações sobre fala, materiais e registro.",
      "Portar identificação funcional.",
    ],
    avoid: [
      "Usar a marca do CRO-MG sem autorização.",
      "Anunciar parceria antes de confirmação.",
      "Assumir compromissos em nome do Conselho.",
    ],
    forward: { label: "Delegacias Regionais", href: cromgConfig.links.delegacias },
  },
  {
    title: "Um veículo de imprensa pediu entrevista",
    do: [
      "Agradecer o contato.",
      "Perguntar tema, perguntas, formato e prazo.",
      "Encaminhar imediatamente à Comunicação do CRO-MG.",
      "Aguardar orientação.",
    ],
    extra: {
      label: "Resposta sugerida",
      text: "“Obrigado pelo contato. Como se trata de uma manifestação institucional, encaminharei a solicitação à equipe responsável do CRO-MG para o devido alinhamento.”",
    },
  },
  {
    title: "Um profissional pediu orientação sobre inscrição ou anuidade",
    do: [
      "Direcionar aos Serviços Online ou à Central de Atendimento.",
      "Informar os links oficiais.",
      "Orientar a manter os dados cadastrais atualizados.",
    ],
    avoid: [
      "Solicitar senha, CPF completo, boleto ou dados bancários pelo WhatsApp pessoal.",
      "Acessar a conta do profissional.",
    ],
    forward: { label: "Serviços Online", href: cromgConfig.links.servicos },
  },
  {
    title: "A cidade possui uma notícia positiva",
    do: [
      "Reunir título, resumo, data, local e contatos.",
      "Solicitar autorização para uso de imagens quando necessário.",
      "Enviar à Delegacia ou ao canal indicado pela Comunicação.",
      "Informar claramente a relação do fato com a Odontologia.",
    ],
  },
  {
    title: "Tomei conhecimento do falecimento de um profissional",
    do: [
      "Confirmar a informação por fonte confiável.",
      "Comunicar com discrição à Delegacia Regional.",
      "Enviar nome completo, município e informação disponível.",
      "Não divulgar dados pessoais além do necessário.",
    ],
  },
];

export function NaPratica() {
  return (
    <Section id="na-pratica" tone="ice">
      <Eyebrow>Situações práticas</Eyebrow>
      <SectionTitle>Como agir nas situações mais comuns</SectionTitle>
      <Accordion type="single" collapsible className="mt-8 space-y-3">
        {situacoes.map((s, idx) => (
          <AccordionItem
            key={s.title}
            value={`sit-${idx}`}
            className="rounded-2xl border border-line bg-card px-5"
          >
            <AccordionTrigger className="text-left text-sm font-extrabold text-wine hover:no-underline md:text-base">
              <span className="flex items-center gap-3">
                <ShieldQuestion className="size-4 shrink-0 text-gold" aria-hidden="true" />
                {s.title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-ice p-4">
                  <p className="text-[11px] font-bold tracking-widest text-wine uppercase">
                    O que fazer
                  </p>
                  <BulletList items={s.do} className="mt-1" />
                </div>
                {s.avoid ? (
                  <div className="rounded-xl border border-wine/15 p-4">
                    <p className="text-[11px] font-bold tracking-widest text-wine uppercase">
                      O que evitar
                    </p>
                    <BulletList items={s.avoid} className="mt-1" />
                  </div>
                ) : null}
              </div>
              {s.extra ? (
                <div className="mt-4 rounded-xl border border-gold/60 bg-gold/10 p-4">
                  <p className="text-[11px] font-bold tracking-widest text-wine uppercase">
                    {s.extra.label}
                  </p>
                  <p className="mt-2 text-sm leading-[1.7] text-foreground/85 italic">
                    {s.extra.text}
                  </p>
                </div>
              ) : null}
              {s.forward ? (
                <div className="mt-4 flex items-center gap-3">
                  <Send className="size-4 text-wine" aria-hidden="true" />
                  <LinkButton href={s.forward.href} variant="outline">
                    {s.forward.label}
                  </LinkButton>
                </div>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}