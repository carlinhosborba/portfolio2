export function Sobre() {
  return (
    <section id="sobre">
      <div className="container min-h-screen px-6 py-12">
        <div className="flex justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold">SOBRE</h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-28 mt-10">
          <p className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left max-w-xl">
            Seja Bem Vindo(a) !
            <br /> <br />
            Sou pernambucano, tenho 31 anos. Formado em <strong>Direito</strong> e atualmente graduando em <strong>Sistemas para Internet</strong> pela UNICAP,
        sempre fui apaixonado por tecnologia. Atuo como <strong>Desenvolvedor Front-End</strong> e trabalho na <strong>Secretaria de Gestão e Inovação</strong> da Aliança-PE,
        onde também contribuo como <strong>desenvolvedor web freelancer</strong> comprometido em criar experiências incríveis na web! <br /> Já atuei por 10 anos na coordenação do ENEM
        na Mata Norte de Pernambuco pelo INEP, também coordenei concursos públicos da UFPE atraves da COVEST/COPSET.
            <br />
            <br />
            <br />
            Conheça alguns de meus projetos clicando{" "}
            <a className="text-blue-500 hover:text-blue-700" href="#projects">
              aqui
            </a>
            .
          </p>

          <div className="relative w-[250px] sm:w-[330px] h-[400px] sm:h-[350px] flex flex-col">
            {/* Efeito da borda */}
            <div className="absolute inset-7 rounded-3xl border-10 border-transparent bg-gradient-to-r from-blue-500 via-white to-blue-700 animate-spin-slow blur-sm"></div>

            {/* Foto */}
            <div className="relative rounded-3xl overflow-hidden bg-white border-4 border-blue-500 shadow-lg">
              <img
                src="/minhafoto.jpg"
                alt="Imagem de Carlos Borba"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
