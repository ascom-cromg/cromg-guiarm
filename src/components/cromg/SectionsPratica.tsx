import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  Copy,
  Download,
  Landmark,
  Lock,
  Megaphone,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  Stethoscope,
  Users2,
} from "lucide-react";
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

/* ---------------- Primeiros 90 dias ---------------- */

const plano = [
  {
    title: "Dias 1 a 15 — Integração",
    items: [
      "Ler a portaria de nomeação.",
      "Conferir a área de jurisdição.",
      "Receber e verificar a identificação funcional.",
      "Salvar os contatos da Delegacia Regional.",
      "Conhecer os canais oficiais do CRO-MG.",
      "Ler os arts. 224 a 230 da Resolução CFO nº 63/2005.",
      "Consultar o Código de Ética Odontológica.",
      "Conhecer a Política de Privacidade do CRO-MG.",
    ],
  },
  {
    title: "Dias 16 a 30 — Conhecimento do município",
    items: [
      "Identificar a Secretaria Municipal de Saúde.",
      "Identificar a coordenação de saúde bucal.",
      "Conhecer o Conselho Municipal de Saúde.",
      "Mapear instituições de ensino.",
      "Mapear serviços públicos e principais entidades.",
      "Identificar lideranças profissionais.",
      "Atualizar os contatos institucionais.",
    ],
  },
  {
    title: "Dias 31 a 60 — Escuta ativa",
    items: [
      "Conversar com profissionais de diferentes áreas.",
      "Levantar as principais demandas do município.",
      "Identificar dúvidas recorrentes.",
      "Registrar oportunidades de capacitação.",
      "Conhecer projetos locais de saúde bucal.",
      "Compartilhar um resumo inicial com a Delegacia.",
    ],
  },
  {
    title: "Dias 61 a 90 — Plano de atuação",
    items: [
      "Definir três prioridades realistas.",
      "Construir uma agenda de relacionamento.",
      "Propor uma primeira ação de aproximação.",
      "Organizar uma rotina de comunicação.",
      "Enviar o primeiro relatório sintético.",
      "Revisar o plano com a Delegacia Regional.",
    ],
  },
];

const PLANO_KEY = "cromg:plano90";

export function Plano90() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(PLANO_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(PLANO_KEY, JSON.stringify(done));
    } catch {
      /* ignore */
    }
  }, [done, ready]);

  const total = plano.reduce((acc, p) => acc + p.items.length, 0);
  const completed = Object.values(done).filter(Boolean).length;
  const pct = total ? Math.round((completed / total) * 100) : 0;

  return (
    <Section id="primeiros-90-dias" tone="ice">
      <Eyebrow>Primeiros 90 dias</Eyebrow>
      <SectionTitle>Um começo organizado faz toda a diferença</SectionTitle>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <div className="h-2 w-full max-w-sm overflow-hidden rounded-full bg-line">
          <div className="h-full bg-wine transition-[width]" style={{ width: `${pct}%` }} />
        </div>
        <p className="text-sm font-bold text-wine">
          {completed} de {total} etapas concluídas ({pct}%)
        </p>
        <button
          type="button"
          onClick={() => {
            setDone({});
            toast("Plano reiniciado neste dispositivo.");
          }}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-wine/30 px-4 text-sm font-bold text-wine transition-colors hover:bg-wine/5"
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          Reiniciar meu plano
        </button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {plano.map((bloco, bi) => (
          <Panel key={bloco.title} className="h-full">
            <h3 className="text-base font-extrabold text-wine">{bloco.title}</h3>
            <ul className="mt-4 space-y-2">
              {bloco.items.map((item, ii) => {
                const key = `${bi}-${ii}`;
                const checked = !!done[key];
                return (
                  <li key={item}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-2 text-sm leading-[1.6] hover:bg-ice">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => setDone((prev) => ({ ...prev, [key]: e.target.checked }))}
                        className="mt-1 size-4 shrink-0 accent-[oklch(0.263_0.098_27.5)]"
                      />
                      <span className={checked ? "text-muted-foreground line-through" : ""}>
                        {item}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </Panel>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Use as caixas para marcar cada etapa como concluída. O progresso fica salvo apenas neste
        dispositivo.
      </p>
      <NoteBox>
        Este checklist é uma recomendação de organização. As orientações da Delegacia Regional e da
        Diretoria prevalecem.
      </NoteBox>
    </Section>
  );
}

/* ---------------- Mapeamento ---------------- */

const grupos = [
  {
    title: "Poder público e controle social",
    Icon: Landmark,
    items: [
      "Prefeitura.",
      "Secretaria Municipal de Saúde.",
      "Coordenação de Saúde Bucal.",
      "Conselho Municipal de Saúde.",
      "Câmara Municipal.",
      "Vigilância Sanitária.",
      "Ministério Público, quando pertinente.",
    ],
  },
  {
    title: "Rede profissional e acadêmica",
    Icon: Stethoscope,
    items: [
      "Cirurgiões-dentistas.",
      "TSB e ASB.",
      "Técnicos e auxiliares de prótese.",
      "Clínicas e consultórios.",
      "Laboratórios de prótese.",
      "Hospitais.",
      "Faculdades e escolas técnicas.",
      "Entidades de classe.",
    ],
  },
  {
    title: "Sociedade e comunicação",
    Icon: Users2,
    items: [
      "Organizações sociais.",
      "Projetos comunitários.",
      "Imprensa local.",
      "Eventos de saúde.",
      "Lideranças comunitárias.",
    ],
  },
];

const fichaCampos = [
  { id: "instituicao", label: "Instituição" },
  { id: "setor", label: "Nome do setor" },
  { id: "contato", label: "Contato institucional" },
  { id: "telefone", label: "Telefone público" },
  { id: "email", label: "E-mail institucional" },
  { id: "observacao", label: "Observação" },
  { id: "atualizacao", label: "Data da última atualização" },
];

export function Mapeamento() {
  const [ficha, setFicha] = useState<Record<string, string>>({});

  const copyFicha = useCallback(async () => {
    const text = fichaCampos.map((c) => `${c.label}: ${ficha[c.id] ?? ""}`).join("\n");
    try {
      await navigator.clipboard.writeText(text);
      toast("Ficha copiada para a área de transferência.");
    } catch {
      toast("Não foi possível copiar a ficha.");
    }
  }, [ficha]);

  const mapeamentoUrl = cromgConfig.downloads.mapeamento;

  return (
    <Section>
      <Eyebrow>Mapeamento da rede municipal</Eyebrow>
      <SectionTitle>Conhecer o território para representar melhor</SectionTitle>
      <Lead>
        O mapeamento ajuda o CRO-MG a compreender a realidade de cada município. O objetivo não é
        criar um banco paralelo de dados pessoais, mas manter referências institucionais úteis e
        atualizadas.
      </Lead>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {grupos.map(({ title, Icon, items }) => (
          <Panel key={title} className="h-full">
            <span className="grid size-10 place-items-center rounded-lg bg-wine/5 text-wine">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-extrabold text-wine">{title}</h3>
            <BulletList items={items} />
          </Panel>
        ))}
      </div>

      <Panel className="mt-8">
        <h3 className="text-base font-extrabold text-wine">Ficha de mapeamento</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Preenchimento livre, apenas neste dispositivo. Não informe CPF, endereço residencial,
          prontuário, dado de saúde ou qualquer informação sensível.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {fichaCampos.map((campo) => (
            <div key={campo.id}>
              <label
                htmlFor={`ficha-${campo.id}`}
                className="text-xs font-bold tracking-wide text-wine"
              >
                {campo.label}
              </label>
              <input
                id={`ficha-${campo.id}`}
                value={ficha[campo.id] ?? ""}
                onChange={(e) => setFicha((p) => ({ ...p, [campo.id]: e.target.value }))}
                className="mt-1.5 min-h-11 w-full rounded-xl border border-line bg-background px-3.5 text-sm placeholder:text-muted-foreground"
                placeholder={campo.label}
              />
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copyFicha}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-wine px-5 text-sm font-bold text-white transition-colors hover:bg-wine-soft"
          >
            <Copy className="size-4" aria-hidden="true" />
            Copiar ficha preenchida
          </button>
          {mapeamentoUrl ? (
            <LinkButton href={mapeamentoUrl} variant="outline">
              Baixar ficha de mapeamento
            </LinkButton>
          ) : (
            <span className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-xl border border-dashed border-line px-5 text-sm font-bold text-muted-foreground">
              <Download className="size-4" aria-hidden="true" />
              Material em preparação
            </span>
          )}
        </div>
      </Panel>
    </Section>
  );
}

/* ---------------- Relacionamento institucional ---------------- */

const apresentacaoModelo =
  "Meu nome é [NOME], sou cirurgião-dentista e Representante Municipal do CRO-MG em [MUNICÍPIO]. Atuo como ponto de aproximação entre o Conselho e a comunidade odontológica local, em diálogo com a Delegacia Regional.";

export function Relacionamento() {
  return (
    <Section tone="ice">
      <Eyebrow>Relacionamento institucional</Eyebrow>
      <SectionTitle>Como construir relações institucionais produtivas</SectionTitle>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Panel>
          <h3 className="text-base font-extrabold text-wine">1. Prepare-se</h3>
          <BulletList
            items={[
              "Defina objetivo e pauta.",
              "Conheça a instituição.",
              "Leve informações oficiais.",
              "Confirme se há autorização necessária.",
              "Evite reunião sem propósito definido.",
            ]}
          />
        </Panel>
        <Panel>
          <h3 className="text-base font-extrabold text-wine">2. Apresente-se</h3>
          <p className="mt-3 rounded-xl border border-gold/60 bg-gold/10 p-4 text-sm leading-[1.7] text-foreground/85 italic">
            “{apresentacaoModelo}”
          </p>
          <CopyButton text={apresentacaoModelo} label="Copiar apresentação" className="mt-4" />
        </Panel>
        <Panel>
          <h3 className="text-base font-extrabold text-wine">3. Conduza a reunião</h3>
          <BulletList
            items={[
              "Escute antes de responder.",
              "Registre demandas.",
              "Diferencie informação de compromisso.",
              "Não improvise resposta jurídica.",
              "Informe que pontos específicos serão encaminhados.",
            ]}
          />
        </Panel>
        <Panel>
          <h3 className="text-base font-extrabold text-wine">4. Faça o retorno</h3>
          <BulletList
            items={[
              "Envie agradecimento.",
              "Registre os encaminhamentos.",
              "Compartilhe resumo com a Delegacia.",
              "Acompanhe apenas o que estiver sob sua responsabilidade.",
            ]}
          />
        </Panel>
      </div>
    </Section>
  );
}

export function CopyButton({
  text,
  label,
  className,
}: {
  text: string;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          toast("Texto copiado para a área de transferência.");
        } catch {
          toast("Não foi possível copiar o texto.");
        }
      }}
      className={`inline-flex min-h-11 items-center gap-2 rounded-xl bg-wine px-5 text-sm font-bold text-white transition-colors hover:bg-wine-soft ${className ?? ""}`}
    >
      <Copy className="size-4" aria-hidden="true" />
      {label}
    </button>
  );
}

/* ---------------- Comunicação ---------------- */

const identificacaoModelo =
  "[NOME COMPLETO]\nCirurgião-Dentista — CRO-MG nº [NÚMERO]\nRepresentante Municipal do CRO-MG em [MUNICÍPIO]";

export function Comunicacao() {
  return (
    <Section>
      <Eyebrow>Comunicação</Eyebrow>
      <SectionTitle>Comunicação responsável protege o representante e a instituição</SectionTitle>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Panel>
          <h3 className="text-base font-extrabold text-wine">Identificação sugerida</h3>
          <pre className="mt-3 rounded-xl bg-ice p-4 text-sm leading-[1.8] whitespace-pre-wrap text-foreground/85">
            {identificacaoModelo}
          </pre>
          <CopyButton text={identificacaoModelo} label="Copiar identificação" className="mt-4" />
          <p className="mt-4 text-xs leading-[1.7] text-muted-foreground">
            Utilizar o título somente durante a vigência da nomeação e respeitando as orientações de
            identidade institucional.
          </p>
        </Panel>
        <Panel>
          <h3 className="text-base font-extrabold text-wine">Redes sociais</h3>
          <BulletList
            items={[
              "Não criar perfil que pareça oficial sem autorização.",
              "Não modificar o logotipo.",
              "Não divulgar denúncias ou casos em apuração.",
              "Não usar o título para promoção comercial.",
              "Compartilhar preferencialmente publicações dos canais oficiais.",
              "Separar opiniões pessoais de manifestações institucionais.",
            ]}
          />
        </Panel>
        <Panel>
          <span className="grid size-10 place-items-center rounded-lg bg-wine/5 text-wine">
            <Megaphone className="size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-base font-extrabold text-wine">Imprensa</h3>
          <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
            Toda solicitação de posicionamento, entrevista, nota, gravação ou resposta institucional
            deve ser encaminhada à área de Comunicação.
          </p>
        </Panel>
        <Panel>
          <h3 className="text-base font-extrabold text-wine">Grupos de mensagens</h3>
          <BulletList
            items={[
              "Usar linguagem respeitosa.",
              "Não compartilhar dados pessoais sem necessidade.",
              "Não encaminhar documentos sigilosos.",
              "Evitar debates sobre casos concretos.",
              "Confirmar informações antes de repassar.",
            ]}
          />
        </Panel>
      </div>
      <Quote>
        Rapidez não substitui precisão. Quando uma informação ainda não estiver confirmada, diga que
        fará a verificação.
      </Quote>
    </Section>
  );
}

/* ---------------- Fiscalização colaborativa ---------------- */

export function FiscalizacaoColaborativa() {
  return (
    <Section tone="wine">
      <Eyebrow invert>Fiscalização colaborativa</Eyebrow>
      <SectionTitle invert>
        O representante observa, orienta e encaminha. A fiscalização apura.
      </SectionTitle>
      <Lead invert>
        A fiscalização do CRO-MG possui caráter técnico e atua na orientação, inspeção e apuração de
        situações relacionadas ao exercício da Odontologia. O representante contribui ao comunicar
        fatos e facilitar o acesso aos canais oficiais, sem antecipar conclusões.
      </Lead>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Panel invert>
          <h3 className="text-base font-extrabold text-wine">
            Situações que podem exigir encaminhamento
          </h3>
          <BulletList
            items={[
              "Suspeita de exercício ilegal.",
              "Atendimento odontológico em local possivelmente irregular.",
              "Clínica ou empresa aparentemente sem registro.",
              "Possível infração ética.",
              "Divulgação que possa contrariar as normas vigentes.",
              "Uso indevido de títulos ou especialidades.",
              "Alterações relevantes em serviços e estabelecimentos.",
            ]}
          />
          <p className="mt-4 text-xs leading-[1.7] text-muted-foreground">
            Usar sempre expressões como “possível”, “aparente” ou “suspeita”, evitando afirmar que
            houve infração antes da análise técnica.
          </p>
        </Panel>
        <Panel invert>
          <h3 className="text-base font-extrabold text-wine">
            Informações úteis para o encaminhamento
          </h3>
          <BulletList
            items={[
              "Descrição objetiva.",
              "Município e endereço.",
              "Data ou período.",
              "Nome público do estabelecimento.",
              "Links e perfis públicos.",
              "Capturas de tela legíveis.",
              "Fotos obtidas de forma legítima.",
              "Contato do denunciante, quando informado no formulário.",
            ]}
          />
        </Panel>
        <Panel invert>
          <h3 className="text-base font-extrabold text-wine">Nunca faça</h3>
          <BulletList
            items={[
              "Confronto.",
              "Ameaça.",
              "Exposição pública.",
              "Coleta clandestina de dados.",
              "Entrada não autorizada.",
              "Promessa de punição.",
            ]}
          />
        </Panel>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href={cromgConfig.links.denuncias} variant="gold">
          Registrar denúncia
        </LinkButton>
        <LinkButton href={cromgConfig.links.fiscalizacao} variant="onWine">
          Acompanhar conteúdos da Fiscalização
        </LinkButton>
      </div>
    </Section>
  );
}

/* ---------------- Proteção de dados ---------------- */

const regrasDados = [
  {
    title: "Colete o mínimo necessário",
    text: "Não solicite documentos ou dados que não sejam indispensáveis ao encaminhamento.",
  },
  {
    title: "Não compartilhe listas",
    text: "Cadastros de profissionais, telefones e e-mails não devem ser repassados para finalidades pessoais, comerciais, partidárias ou eleitorais.",
  },
  {
    title: "Proteja relatos e denúncias",
    text: "Não encaminhe informações para pessoas que não participem do fluxo institucional.",
  },
  {
    title: "Evite dados sensíveis no celular pessoal",
    text: "Prontuários, imagens clínicas, dados de saúde e documentos pessoais exigem tratamento específico.",
  },
  {
    title: "Use canais oficiais",
    text: "Sempre que existir formulário, sistema, e-mail institucional ou serviço oficial, utilize-o.",
  },
  {
    title: "Siga a orientação de guarda",
    text: "Após o protocolo, siga as instruções do CRO-MG sobre armazenamento ou eliminação de cópias locais.",
  },
];

export function ProtecaoDados() {
  return (
    <Section>
      <Eyebrow>Proteção de dados</Eyebrow>
      <SectionTitle>Informação também exige cuidado</SectionTitle>
      <Lead>
        O representante deve usar apenas os dados necessários para cada finalidade, priorizar canais
        oficiais e impedir acesso indevido às informações recebidas durante sua atuação.
      </Lead>
      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {regrasDados.map((r) => (
          <li key={r.title}>
            <Panel className="h-full">
              <span className="grid size-10 place-items-center rounded-lg bg-wine/5 text-wine">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-sm font-extrabold text-wine">{r.title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{r.text}</p>
            </Panel>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href={cromgConfig.links.privacidade}>
          Política de Privacidade do CRO-MG
        </LinkButton>
        <LinkButton href={cromgConfig.controladoriaEmail} variant="outline" external={false}>
          Falar com a Controladoria de Dados
        </LinkButton>
      </div>
    </Section>
  );
}

/* ---------------- Eventos ---------------- */

const falaEvento =
  "Em nome do Conselho Regional de Odontologia de Minas Gerais, agradeço o convite e cumprimento todos os profissionais e instituições presentes. O CRO-MG trabalha para aproximar o Conselho da categoria, fortalecer a ética e contribuir para a valorização da Odontologia em todas as regiões do estado.";

export function Eventos() {
  return (
    <Section tone="ice">
      <Eyebrow>Representação em eventos</Eyebrow>
      <SectionTitle>Antes, durante e depois de uma representação institucional</SectionTitle>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <Panel>
          <h3 className="text-base font-extrabold text-wine">Antes</h3>
          <BulletList
            items={[
              "Encaminhar o convite.",
              "Confirmar autorização.",
              "Conhecer público e programação.",
              "Solicitar orientação de fala.",
              "Confirmar uso da marca.",
              "Levar identificação funcional.",
              "Verificar material institucional.",
            ]}
          />
        </Panel>
        <Panel>
          <h3 className="text-base font-extrabold text-wine">Durante</h3>
          <BulletList
            items={[
              "Apresentar-se com clareza.",
              "Manter postura institucional.",
              "Evitar promessas.",
              "Registrar demandas.",
              "Usar dados oficiais.",
              "Respeitar o tempo de fala.",
              "Produzir registros somente quando autorizado.",
            ]}
          />
        </Panel>
        <Panel>
          <h3 className="text-base font-extrabold text-wine">Depois</h3>
          <BulletList
            items={[
              "Enviar agradecimento.",
              "Elaborar registro breve.",
              "Compartilhar fotos autorizadas.",
              "Informar as demandas recebidas.",
              "Apontar próximos passos.",
              "Arquivar convite e programação.",
            ]}
          />
        </Panel>
      </div>
      <Panel className="mt-8">
        <p className="text-[11px] font-bold tracking-widest text-wine uppercase">
          Fala inicial sugerida
        </p>
        <p className="mt-3 text-sm leading-[1.75] text-foreground/85 italic">“{falaEvento}”</p>
        <CopyButton text={falaEvento} label="Copiar fala institucional" className="mt-4" />
      </Panel>
      <NoteBox>Usar a fala apenas quando a representação oficial tiver sido confirmada.</NoteBox>
    </Section>
  );
}

/* ---------------- Rotina ---------------- */

const rotina = [
  {
    title: "Todo mês",
    items: [
      "Conferir mensagens e orientações da Delegacia.",
      "Registrar demandas relevantes.",
      "Atualizar contatos alterados.",
      "Compartilhar notícias importantes.",
      "Acompanhar os canais oficiais.",
    ],
  },
  {
    title: "A cada trimestre",
    items: [
      "Revisar o mapeamento municipal.",
      "Realizar contato institucional estratégico.",
      "Enviar relato sintético de atividades.",
      "Identificar necessidade de capacitação.",
      "Rever prioridades locais.",
    ],
  },
  {
    title: "Uma vez por ano",
    items: [
      "Consolidar as principais ações.",
      "Atualizar o mapa da rede odontológica.",
      "Avaliar resultados.",
      "Registrar dificuldades.",
      "Propor prioridades para o próximo período.",
    ],
  },
];

const contadores = [
  { id: "reunioes", label: "Reuniões realizadas" },
  { id: "visitas", label: "Visitas institucionais" },
  { id: "demandas", label: "Demandas encaminhadas" },
  { id: "eventos", label: "Eventos acompanhados" },
  { id: "noticias", label: "Notícias compartilhadas" },
  { id: "aproximacao", label: "Ações de aproximação" },
];

const COUNTER_KEY = "cromg:contadores";

export function Rotina() {
  const [values, setValues] = useState<Record<string, number>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(COUNTER_KEY);
      if (raw) setValues(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(COUNTER_KEY, JSON.stringify(values));
    } catch {
      /* ignore */
    }
  }, [values, ready]);

  const change = useMemo(
    () => (id: string, delta: number) =>
      setValues((p) => ({ ...p, [id]: Math.max(0, (p[id] ?? 0) + delta) })),
    [],
  );

  return (
    <Section>
      <Eyebrow>Rotina recomendada</Eyebrow>
      <SectionTitle>Uma rotina simples para manter a atuação ativa</SectionTitle>
      <Lead>
        A frequência abaixo é uma proposta de organização e pode ser adaptada pela Delegacia
        Regional.
      </Lead>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {rotina.map((r) => (
          <Panel key={r.title} className="h-full">
            <h3 className="text-base font-extrabold text-wine">{r.title}</h3>
            <BulletList items={r.items} />
          </Panel>
        ))}
      </div>

      <Panel className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-base font-extrabold text-wine">Painel de atividades</h3>
          <button
            type="button"
            onClick={() => {
              setValues({});
              toast("Painel zerado neste dispositivo.");
            }}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-wine/30 px-4 text-sm font-bold text-wine hover:bg-wine/5"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Zerar painel
          </button>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          Os números ficam salvos somente no seu dispositivo. Nenhum dado é transmitido.
        </p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contadores.map((c) => (
            <li
              key={c.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-line bg-ice px-4 py-3"
            >
              <span className="text-sm font-semibold text-foreground/85">{c.label}</span>
              <span className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => change(c.id, -1)}
                  aria-label={`Diminuir ${c.label}`}
                  className="grid size-8 place-items-center rounded-lg border border-line bg-background text-wine"
                >
                  <Minus className="size-4" aria-hidden="true" />
                </button>
                <span className="w-8 text-center text-base font-black text-wine">
                  {values[c.id] ?? 0}
                </span>
                <button
                  type="button"
                  onClick={() => change(c.id, 1)}
                  aria-label={`Aumentar ${c.label}`}
                  className="grid size-8 place-items-center rounded-lg bg-wine text-white"
                >
                  <Plus className="size-4" aria-hidden="true" />
                </button>
              </span>
            </li>
          ))}
        </ul>
      </Panel>

      <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Lock className="size-3.5" aria-hidden="true" />
        Armazenamento local, sem cadastro e sem banco de dados.
      </p>
    </Section>
  );
}
