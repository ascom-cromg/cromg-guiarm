import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import {
  BackToTop,
  InstitutionalBar,
  MobileQuickBar,
  OnThisPage,
  ReadingProgress,
  SiteHeader,
} from "@/components/cromg/TopBarHeader";
import {
  Hero,
  Nomeacao,
  OPapel,
  Pilares,
  QuemFazOQue,
  QuickAccess,
  Welcome,
} from "@/components/cromg/SectionsIntro";
import { Atribuicoes, Fluxo, Limites, NaPratica } from "@/components/cromg/SectionsNormas";
import {
  Comunicacao,
  Eventos,
  FiscalizacaoColaborativa,
  Mapeamento,
  Plano90,
  ProtecaoDados,
  Relacionamento,
  Rotina,
} from "@/components/cromg/SectionsPratica";
import {
  CtaFinal,
  Faq,
  Ferramentas,
  Materiais,
  SiteFooter,
} from "@/components/cromg/SectionsRecursos";

const title = "Representante Municipal do CRO-MG | Guia de Atuação";
const description =
  "Conheça as atribuições, os limites, os canais de apoio e as ferramentas do Representante Municipal do Conselho Regional de Odontologia de Minas Gerais.";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background pb-14 md:pb-0">
      <ReadingProgress />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[70] focus:rounded-lg focus:bg-wine focus:px-4 focus:py-2 focus:text-white"
      >
        Ir para o conteúdo
      </a>
      <InstitutionalBar />
      <SiteHeader />
      <OnThisPage />
      <main id="conteudo">
        <Hero />
        <QuickAccess />
        <Welcome />
        <OPapel />
        <Nomeacao />
        <QuemFazOQue />
        <Pilares />
        <Atribuicoes />
        <Limites />
        <Fluxo />
        <NaPratica />
        <Plano90 />
        <Mapeamento />
        <Relacionamento />
        <Comunicacao />
        <FiscalizacaoColaborativa />
        <ProtecaoDados />
        <Eventos />
        <Rotina />
        <Ferramentas />
        <Materiais />
        <Faq />
        <CtaFinal />
      </main>
      <SiteFooter />
      <BackToTop />
      <MobileQuickBar />
      <Toaster position="bottom-center" />
    </div>
  );
}
