import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "TypeScript", level: 42, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Next.js", level: 40, category: "frontend" },

  // Backend
  { name: "Node.js", level: 60, category: "backend" },
  { name: "Java", level: 70, category: "backend" },
  { name: "C", level: 60, category: "backend" },
  { name: "Golang", level: 50, category: "backend" },
  { name: "MySql", level: 90, category: "backend" },

  // ferramentas
  { name: "Git/GitHub", level: 90, category: "ferramentas" },
  { name: "Docker", level: 20, category: "ferramentas" },
  { name: "Figma", level: 50, category: "ferramentas" },
  { name: "VS Code", level: 95, category: "ferramentas" },
];

const categories = ["tudo", "frontend", "backend", "ferramentas"];

export const Competencias = () => {
  const [activeCategory, setActiveCategory] = useState("tudo");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "tudo" || skill.category === activeCategory
  );
  return (
    <section id="competencias" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-primary"> Competências</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
  key={key}
  onClick={() => setActiveCategory(category)}
  className={cn(
    "px-5 py-2 rounded-full capitalize hover-effect",
    activeCategory === category
      ? "bg-primary text-primary-foreground"
      : "bg-secondary/70 text-foreground"
  )}
>
  {category}
</button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};