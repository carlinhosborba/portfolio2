import { ProjectCard } from "./projectcard";

export function Projects() {
  return (
    <section id="projects">
      <div className="container min-h-screen px-6 py-12">
        <div className="flex justify-center mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold">PROJETOS</h1>
        </div>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <ProjectCard
            link="https://atividades-pw-2024-2-g0jkzid5l-carlos-borbas-projects.vercel.app/Atividade03-2-JogodaForca//"
            image="/forca.jpeg"
            title="Jogo da Forca"
            description="Atividade desenvolvida na faculdade para criar um clássico dos jogos online por décadas."
          />

          <ProjectCard
            link="https://healnet-ipw.vercel.app/"
            image="/Healnet.jpeg"
            title="Site Healnet"
            description="Site para conexão com médicos certificados e organização de receitas e consultas."
          />

          <ProjectCard
            link="https://projeto-site-nine.vercel.app/"
            image="/SwiftChat.jpeg"
            title="SwiftChat"
            description="Site de bate-papo online nos moldes antigos."
          />

          <ProjectCard
            link="https://pfe-2025-1-mu.vercel.app/"
            image="/Conversores.jpeg"
            title="Conversores"
            description="Moedas, Temperatura e Distância."
          />

          <ProjectCard
            link="https://pfe-2025-1-m6ls.vercel.app/"
            image="/Jogo de Dados.jpeg"
            title="Jogo de Dados"
            description="Jogo online com sorteios e disputa de soma de dados."
          />

          <ProjectCard
            link="https://borba-pw-2024-2.vercel.app/Exercicio-Mentoria-Formulario/"
            image="/FormularioWhats.jpeg"
            title="Formulário para contato via WhatsApp"
            description="Formulário de contato usando WhatsApp."
          />

          <ProjectCard
            link="https://jogo-da-senha-liart.vercel.app/"
            image="/jogo.png"
            title="JOGO DA SENHA"
            description="Jogo da senha da feito com NextJS."
          />
        </div>
      </div>
    </section>
  );
}
