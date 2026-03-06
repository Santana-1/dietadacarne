import { motion } from "framer-motion";
import { Check, X, ChevronDown, Shield, Users, Dumbbell, BookOpen, Sun, Zap, Leaf, Wifi, UtensilsCrossed, Clock, TreePine, Brain, Heart, Battery, Moon, Eye, Scale, Salad, Sparkles } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";
import aboutPhoto from "@/assets/about-photo.jpg";
import { useState } from "react";

const CHECKOUT_LINK = "https://checkout.b4you.com.br/M10oK5U3iM?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAQFJTdleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeJMPw8SxsbY_lBs7DdxKR2NuCzPaH2DUr7wUL5a3-H__DvAzDGdeTm08NKGg_aem_SpvwwFSizksLm5UWeHQDew";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const CTAButton = ({ text = "QUERO GARANTIR MEU ACESSO", href = "#preco" }: { text?: string; href?: string }) => (
  <a href={href} className="btn-cta inline-block text-center uppercase tracking-wider font-display">
    {text}
  </a>
);

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
      >
        <span className="font-semibold text-foreground text-base md:text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const PillarCard = ({ icon: Icon, number, title, items }: { icon: React.ElementType; number: string; title: string; items: string[] }) => (
  <motion.div variants={fadeUp} className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/50 transition-colors">
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <span className="text-sm text-primary font-display tracking-wider">PILAR {number}</span>
        <h3 className="text-2xl">{title}</h3>
      </div>
    </div>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-primary/10 border-b border-primary/20 py-3 text-center">
        <p className="text-primary font-semibold text-sm md:text-base flex items-center justify-center gap-2">
          <Users className="w-5 h-5" />
          + 4.000 pessoas já transformaram suas vidas
        </p>
      </div>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-[70%] overflow-hidden">
          <img
            src={heroPhoto}
            alt="Estilo de vida carnívoro"
            className="w-full h-full object-cover object-center opacity-90"
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 py-20 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              TRANSFORME SUA ROTINA ATRAVÉS DA{" "}
              <span className="text-gradient-primary">ALIMENTAÇÃO ANCESTRAL</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Hábitos naturais que fortalecem corpo e mente. Método baseado em experiência prática, estudos independentes e aplicação real com mentorados.
            </p>
            <div className="pt-4">
              <CTAButton />
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: Brain, text: "Experiência prática" },
                { icon: Shield, text: "Garantia de 7 dias" },
                { icon: Zap, text: "Acesso imediato" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 text-sm text-muted-foreground">
                  <Icon className="w-4 h-4 text-primary" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre o Método */}
      <section className="bg-card border-y border-accent/30 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl">SOBRE O <span className="text-primary">MÉTODO</span></h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
              Compartilho minha experiência prática, estudos aprofundados e aplicação real do estilo de vida carnívoro ao longo dos anos, ajudando pessoas a estruturarem uma rotina mais simples e natural.
            </p>
            <div className="mt-8 max-w-sm mx-auto">
              <div className="relative w-full rounded-xl overflow-hidden border border-accent/30 shadow-lg" style={{ aspectRatio: '9/16' }}>
                <iframe
                  src="https://www.youtube.com/embed/ZbpzMJ4F744?modestbranding=1&showinfo=0&rel=0&controls=1&disablekb=0&fs=1"
                  title="Sobre o Método"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5 Pilares */}
      <section id="pilares" className="py-16 md:py-24 bg-background scroll-mt-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl">
              OS 5 PILARES DO <span className="text-primary">MÉTODO</span>
            </h2>
            <p className="text-muted-foreground text-lg">A base que diferencia essa abordagem de qualquer dieta comum</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PillarCard icon={UtensilsCrossed} number="1" title="Alimentação Carnívora Estratégica" items={["Simplificação alimentar", "Redução de ultraprocessados", "Ajuste gradual", "Aplicação prática no dia a dia"]} />
            <PillarCard icon={Clock} number="2" title="Jejum como Ferramenta" items={["Organização metabólica", "Disciplina alimentar", "Estratégia consciente (sem extremismos)"]} />
            <PillarCard icon={Sun} number="3" title="Exposição Solar e Ritmo Circadiano" items={["Sol diário", "Regulação natural do sono", "Alinhamento hormonal natural"]} />
            <PillarCard icon={TreePine} number="4" title="Contato com a Natureza" items={["Aterramento", "Redução de estresse", "Estímulo natural ao corpo"]} />
            <PillarCard icon={Wifi} number="5" title="Redução de Poluição Eletromagnética" items={["Organização do ambiente", "Higiene do sono", "Estratégias simples de aplicação"]} />
          </motion.div>
          <div className="text-center mt-12">
            <CTAButton text="QUERO ACESSAR O MÉTODO" />
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl text-center mb-12">
            PARA QUEM É <span className="text-primary">ESSE CURSO?</span>
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Users, text: "Homens e mulheres acima de 30 anos que querem retomar o controle da saúde" },
              { icon: X, text: "Pessoas cansadas de dietas complexas e sem resultado" },
              { icon: Leaf, text: "Quem busca um estilo de vida mais natural e sustentável" },
              { icon: Battery, text: "Profissionais que querem energia estável ao longo do dia" },
            ].map(({ icon: Icon, text }) => (
              <motion.div key={text} variants={fadeUp} className="flex gap-4 items-start bg-background border border-border rounded-xl p-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground text-lg mt-2">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl text-center mb-12">
            BENEFÍCIOS <span className="text-primary">ESPERADOS</span>
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Battery, text: "Energia estável ao longo do dia, com menos picos e quedas bruscas" },
              { icon: UtensilsCrossed, text: "Maior controle sobre a fome e redução de episódios de compulsão" },
              { icon: Moon, text: "Sono mais profundo e recuperação mais eficiente" },
              { icon: Brain, text: "Clareza mental e maior foco nas atividades diárias" },
              { icon: Scale, text: "Melhora gradual da composição corporal, com perda de peso sustentável" },
              { icon: Salad, text: "Rotina alimentar simples, prática e previsível" },
              { icon: Sparkles, text: "Sensação de leveza, autonomia e liberdade em relação à comida" },
            ].map(({ icon: Icon, text }) => (
              <motion.div key={text} variants={fadeUp} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground text-base mt-1.5">{text}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
            <h2 className="text-4xl md:text-5xl text-center">
              O ESTILO DE VIDA CARNÍVORO VAI{" "}
              <span className="text-primary">ALÉM DA ALIMENTAÇÃO</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                Compartilho minha experiência prática, anos de estudo independente e aplicação real no dia a dia. Mostro, de forma simples e estruturada, o caminho que percorri para recuperar autonomia sobre minha saúde, fortalecer minha autoestima e assumir o controle das minhas decisões sem culpa ou dependência de padrões impostos pela indústria moderna.
              </p>
              <p>
                A proposta é resgatar fundamentos que sustentaram nossa evolução: alimentação simples, exposição ao sol, contato com a natureza, disciplina diária e redução de excessos.
              </p>
              <p>
                Trata-se de reconstruir um ambiente saudável — físico e mental — capaz de sustentar energia, clareza e constância no longo prazo.
              </p>
              <p className="text-foreground font-semibold text-xl">
                Não é uma mudança isolada na dieta. É a reorganização da rotina para viver com mais autonomia, consciência e equilíbrio.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tudo que você recebe */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl">
              TUDO QUE VOCÊ <span className="text-primary">RECEBE</span>
            </h2>
            <p className="text-muted-foreground text-lg">Entre agora e receba de forma instantânea:</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: UtensilsCrossed, title: "Plano Alimentar Completo", desc: "Saiba exatamente o que comprar, como montar refeições e implementar no dia a dia." },
              { icon: Sun, title: "Protocolo Solar", desc: "Melhore sono e regule hormônios com exposição solar no horário e tempo ideais." },
              { icon: Zap, title: "Guia de Suplementação", desc: "Pare de gastar com suplemento inútil. Saiba exatamente o que tomar e quando." },
              { icon: Clock, title: "Protocolo de Jejum", desc: "Domine a ferramenta mais poderosa de desintoxicação e organização metabólica." },
              { icon: Dumbbell, title: "Treinos Exclusivos", desc: "Treinos para acelerar resultados, na academia ou em casa." },
              { icon: BookOpen, title: "E-books e Manuais", desc: "Livros digitais completos para viver o verdadeiro estilo de transformação." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6 space-y-3 hover:border-primary/50 transition-colors">
                <Icon className="w-8 h-8 text-primary" />
                <h3 className="text-2xl">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl text-center mb-12">
            BÔNUS <span className="text-accent">EXCLUSIVOS</span>
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Receitas Fit", from: "R$47", desc: "Receitas que eliminam compulsão sem sair da dieta." },
              { title: "Lista de Compras", from: "R$27", desc: "Vá ao mercado sabendo exatamente o que colocar no carrinho." },
            ].map((b) => (
              <motion.div key={b.title} variants={fadeUp}
                className="bg-background border border-accent/20 rounded-xl p-6 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl">{b.title}</h3>
                  <span className="text-accent text-sm font-semibold">De <span className="line-through">{b.from}</span> por R$0</span>
                </div>
                <p className="text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Minha História */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src={aboutPhoto} alt="Minha história" className="rounded-2xl w-full max-w-md mx-auto" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-5">
              <h2 className="text-4xl md:text-5xl">MINHA <span className="text-primary">HISTÓRIA</span></h2>
              <p className="text-muted-foreground leading-relaxed">
                Em 2018 iniciei uma jornada intensa de estudos e experimentação prática sobre alimentação e saúde metabólica. Fui inspirado pelo médico norte-americano Paul Saladino, e a partir desse primeiro contato mergulhei em pesquisas sobre jejum, alimentos altamente biodisponíveis e nutrição baseada em densidade nutricional.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Comecei retirando alimentos processados, reduzindo drasticamente o açúcar e simplificando minha alimentação. Nos primeiros dias já percebi mudanças significativas: melhora no bem-estar geral, fim das crises de refluxo e abandono de medicamentos para alergias.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Em 2023 iniciei mentorias individuais e em grupo, acompanhando pessoas por 21 dias no <span className="text-foreground font-semibold">Desafio Carnívoro 21 Dias</span>. Os resultados foram consistentes: melhora na qualidade do sono, aumento de energia e redução de peso sustentável.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Em 2025 decidi organizar todo esse conhecimento em um curso acessível, direto e aplicável — pensado para quem quer estruturar um estilo de vida saudável, natural e sustentável no longo prazo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preco" className="py-16 md:py-24 bg-card scroll-mt-4">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
            <h2 className="text-4xl md:text-5xl">GARANTA SEU ACESSO HOJE</h2>
            <div className="bg-background border border-border rounded-2xl p-8 md:p-12 space-y-6">
              <div className="space-y-2 text-muted-foreground text-sm">
                {[
                  ["Acesso à plataforma completa", "R$ 697"],
                  ["Treinos exclusivos", "R$ 147"],
                  ["Receitas fit", "R$ 47"],
                  ["Lista de compras", "R$ 27"],
                  ["E-books e manuais", "R$ 27"],
                ].map(([name, price]) => (
                  <div key={name} className="flex justify-between border-b border-border/50 pb-2">
                    <span>{name}</span>
                    <span className="line-through">{price}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-muted-foreground line-through text-lg">Total: R$ 945</p>
                <div className="mt-4">
                  <span className="font-display text-2xl text-muted-foreground">12x</span>
                  <span className="font-display text-7xl md:text-8xl text-primary ml-2">R$25</span>
                  <span className="font-display text-4xl text-primary">,55</span>
                </div>
                <p className="text-muted-foreground mt-2">ou R$247 à vista (menos de R$1 por dia)</p>
              </div>
              <CTAButton text="QUERO GARANTIR MEU ACESSO" href={CHECKOUT_LINK} />
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Shield className="w-4 h-4" /> Pagamento 100% seguro · Garantia de 7 dias
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-12 md:py-16 bg-background border-y border-accent/30">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl text-accent">
              RESULTADOS EM 7 DIAS OU SEU DINHEIRO DE VOLTA!
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Se você começar, aplicar exatamente o que ensino e não ver resultados em até 7 dias,
              basta enviar um e-mail e eu devolvo 100% do seu dinheiro. Simples assim.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl text-center mb-12">
            PERGUNTAS <span className="text-primary">FREQUENTES</span>
          </motion.h2>
          <div className="space-y-3">
            <FAQ question="É seguro?" answer="Sim, é testado e aprovado por diversos profissionais de saúde ao redor do mundo." />
            <FAQ question="Em quanto tempo vou ver resultados?" answer="Depende do seu comprometimento, mas os relatos mostram resultados visíveis em poucos dias: mais energia, mais foco, redução de inchaço e perda de gordura real." />
            <FAQ question="Funciona para mulheres?" answer="Sim! Funciona tanto para homens quanto para mulheres. Já temos dezenas de alunas com resultados incríveis." />
            <FAQ question="E se eu não gostar?" answer="Você tem 7 dias de garantia incondicional. Se não curtir, basta solicitar seu reembolso." />
            <FAQ question="Posso fazer academia junto?" answer="Pode e é recomendado! O método potencializa qualquer treinamento físico." />
            <FAQ question="Funciona para quem já tentou de tudo?" answer="Funciona justamente porque não é uma dieta restritiva. É um retorno à forma como seu corpo foi programado para se alimentar." />
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
            <h2 className="text-4xl md:text-5xl">
              SIMPLIFIQUE SUA ALIMENTAÇÃO, RECUPERE SUA <span className="text-primary">ENERGIA</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Se você deseja simplificar sua alimentação, recuperar energia e estruturar uma rotina natural e sustentável, este curso foi feito para você.
            </p>
            <CTAButton text="QUERO COMEÇAR AGORA" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} · Todos os direitos reservados</p>
        <p className="mt-1">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho é apenas estimativa.</p>
      </footer>
    </div>
  );
};

export default Index;
