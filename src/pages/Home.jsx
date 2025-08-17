import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/NavBar";
import { Inicio } from "../components/Inicio";
import { SobreMim } from "../components/SobreMim";
import { Competencias } from "../components/Competencias";
import { Projetos } from "../components/Projetos";
import { Contato } from "../components/Contato";
import { Footer } from "../components/Rodape";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* butao de alternar tema */}
        <ThemeToggle/>
        {/* efeito de plano defundo */}
        <StarBackground/>
        {/* Navbar */}
        <Navbar/>
        {/* main */}
        <main>
            <Inicio/>
            <SobreMim/>
            <Competencias/>
            <Projetos/>
            <Contato/>
        </main>
        {/* footer */}

        <Footer/>
    
        </div>;
};