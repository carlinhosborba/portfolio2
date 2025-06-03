import { SkillImage } from "./skillimage";

export function Skills() {
  return (
    <section id="skills">
      <br />
      <br />
      <div className="container min-h-screen px-6 py-12">
        <div className="flex justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold">SKILLS</h1>
          <br />
          <br />
        </div>

        <div className="flex justify-center items-center mt-8">
          <p className="text-lg sm:text-xl lg:text-2xl text-center max-w-2xl">
            Aqui estão listadas algumas das tecnologias que utilizo para realizar meus projetos.
          </p>
        </div>
<br />
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 mt-10 max-w-5xl">
            <SkillImage image="/html-5.png" name="HTML" />
            <SkillImage image="/css-3.png" name="CSS" />
            <SkillImage image="/js.png" name="JavaScript" />
            <SkillImage image="/foto.png" name="React" />
            <SkillImage image="/tailwind.png" name="Tailwind" />
            <SkillImage image="/figma.png" name="Figma" />
            <SkillImage image="/git.png" name="Git" />
          </div>
        </div>
      </div>
    </section>
  );
}
