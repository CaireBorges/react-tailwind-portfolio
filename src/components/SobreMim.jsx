import { Briefcase, Code, User } from "lucide-react";

export const SobreMim = () => {
  return (
    <section id="sobre" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor Web e entusiasta back-end
            </h3>

            <p className="text-muted-foreground">
              Estudo desenvolvimento web há 2 anos e meu foco
              é entregar sites acessíveis e responsivos usando tecnologias modernas.
            </p>

            <p className="text-muted-foreground">
              Sou apaixonado em criar soluções elegantes para problemas complexos,
              estou aprendendo novas tecnlogias constantemente para me manter à frente no mundo Dev.
            
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contato" className="cosmic-button">
                {" "}
                Fale comigo
              </a>

              <a
                href="/among.png"
                download="among.png"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
  Download CV
</a>


            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Desenvolvimento Web </h4>
                  <p className="text-muted-foreground">
                    Criando sites responsivos e aplicações web com frameworks modernos.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desenvolvimento Back-End</h4>
                  <p className="text-muted-foreground">
                    Trazendo soluções robustas e escaláveis para seu negócio.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Gerenciamento de projetos</h4>
                  <p className="text-muted-foreground">
                    Liderando projetos desde a concepção até a conclusão com metodologias ágeis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};