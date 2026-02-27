import { motion } from "framer-motion";
import { Check, X, ChevronDown, Shield, Users, Dumbbell, BookOpen, ShoppingCart, Apple, Flame, Sun, Zap } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";
import aboutPhoto from "@/assets/about-photo.jpg";
import { useState } from "react";

const CTA_LINK = "#";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CTAButton = ({ text = "QUERO GARANTIR MEU ACESSO" }: { text?: string }) => (
  <a href={CTA_LINK} className="btn-cta inline-block text-center uppercase tracking-wider font-display">
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
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroPhoto}
            alt="Transformação"
            className="w-full h-full object-cover object-right-top opacity-80"
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 py-20 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              DESCUBRA COMO{" "}
              <span className="text-gradient-primary">TRANSFORMAR</span>{" "}
              SEU CORPO NOS PRÓXIMOS 30 DIAS
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Com hábitos simples e à prova de falhas que vão mudar completamente a sua relação com alimentação e treino.
            </p>
            <div className="pt-4">
              <CTAButton />
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: Flame, text: "Resultados reais" },
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

      {/* Guarantee Banner */}
      <section className="bg-card border-y border-accent/30 py-12 md:py-16">
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

      {/* Results Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl text-center mb-12">
            QUER UMA <span className="text-primary">PROVA?</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { day: "Dia 1-3", items: ["✔ Mais disposição", "✔ Mais clareza mental"] },
              { day: "Dia 4-5", items: ["✔ A pele começa a melhorar", "✔ O inchaço diminui"] },
              { day: "Dia 7", items: ["✔ Espere ter perdido pelo menos 3kg", "✔ Roupas mais folgadas"] },
            ].map((block) => (
              <motion.div key={block.day} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-2xl text-primary">{block.day}</h3>
                {block.items.map((item) => (
                  <p key={item} className="text-foreground text-base">{item}</p>
                ))}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton text="QUERO TER ESSES RESULTADOS" />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl text-center mb-12">
            COMO VOCÊ VAI TER <span className="text-primary">RESULTADOS?</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { step: "01", title: "Acesse a plataforma", desc: "Aulas curtas e direto ao ponto para saber o que comer, quando comer e como preparar." },
              { step: "02", title: "Vá ao mercado", desc: "Com a lista de compras pronta, abasteça sua geladeira com comida de verdade." },
              { step: "03", title: "Comece a dieta", desc: "Tire todas as suas dúvidas com suporte especializado durante toda sua jornada." },
              { step: "04", title: "Acelere os resultados", desc: "Inclua jejum e rotinas específicas para potencializar ainda mais seu emagrecimento." },
            ].map((s) => (
              <motion.div key={s.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-2xl text-primary">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-1">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl">
              TUDO QUE VOCÊ <span className="text-primary">RECEBE</span>
            </h2>
            <p className="text-muted-foreground text-lg">Entre agora e receba de forma instantânea:</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Apple, title: "Plano Alimentar Completo", desc: "Saiba exatamente o que comprar, como montar refeições e implementar no dia a dia." },
              { icon: Sun, title: "Protocolo Solar", desc: "Melhore sono e regule hormônios com exposição solar no horário e tempo ideais." },
              { icon: Zap, title: "Guia de Suplementação", desc: "Pare de gastar com suplemento inútil. Saiba exatamente o que tomar e quando." },
              { icon: Flame, title: "Protocolo de Jejum", desc: "Domine a ferramenta mais poderosa de desintoxicação e queima de gordura." },
              { icon: Dumbbell, title: "Treinos Exclusivos", desc: "Treinos para acelerar o emagrecimento, na academia ou em casa." },
              { icon: BookOpen, title: "E-books e Manuais", desc: "9 livros digitais completos para viver o verdadeiro estilo de transformação." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6 space-y-3 hover:border-primary/50 transition-colors">
                <Icon className="w-8 h-8 text-primary" />
                <h3 className="text-2xl">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl text-center mb-12">
            BÔNUS <span className="text-accent">EXCLUSIVOS</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Comunidade Ativa", from: "R$197", desc: "Pessoas na mesma jornada, prontas para te apoiar." },
              { title: "Suporte com Nutricionistas", from: "R$450", desc: "Profissionais para tirar todas as suas dúvidas." },
              { title: "Receitas Fit", from: "R$47", desc: "Receitas de doces que eliminam compulsão sem sair da dieta." },
              { title: "Lista de Compras", from: "R$27", desc: "Vá ao mercado sabendo exatamente o que colocar no carrinho." },
            ].map((b) => (
              <motion.div key={b.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-background border border-accent/20 rounded-xl p-6 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl">{b.title}</h3>
                  <span className="text-accent text-sm font-semibold">De <span className="line-through">{b.from}</span> por R$0</span>
                </div>
                <p className="text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain vs Gain */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-destructive/10 border border-destructive/30 rounded-xl p-8 space-y-4">
              <h3 className="text-3xl text-center">SE VOCÊ NÃO AGUENTA MAIS...</h3>
              {[
                "Contar calorias e não ver diferença no espelho",
                "Se controlar a semana toda e descontar no final de semana",
                "Viver de peito de frango grelhado sem resultado",
                "Comer de 3 em 3 horas e continuar com fome",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-primary/10 border border-primary/30 rounded-xl p-8 space-y-4">
              <h3 className="text-3xl text-center">VOCÊ FINALMENTE IRÁ...</h3>
              {[
                "Comer com prazer até a saciedade, sem pesar prato",
                "Parar com a compulsão por doce nos primeiros dias",
                "Seguir sua intuição e comer apenas quando sente fome",
                "Perceber roupas mais folgadas em poucos dias",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
            <h2 className="text-4xl md:text-5xl">GARANTA SEU ACESSO HOJE</h2>
            <div className="bg-background border border-border rounded-2xl p-8 md:p-12 space-y-6">
              <div className="space-y-2 text-muted-foreground text-sm">
                {[
                  ["Acesso à plataforma completa", "R$ 697"],
                  ["Comunidade exclusiva", "R$ 197"],
                  ["Suporte com nutricionistas", "R$ 450"],
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
                <p className="text-muted-foreground line-through text-lg">Total: R$ 1.592</p>
                <div className="mt-4">
                  <span className="font-display text-2xl text-muted-foreground">12x</span>
                  <span className="font-display text-7xl md:text-8xl text-primary ml-2">R$30</span>
                  <span className="font-display text-4xl text-primary">,72</span>
                </div>
                <p className="text-muted-foreground mt-2">ou R$297 à vista (menos de R$1 por dia)</p>
              </div>
              <CTAButton />
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                <Shield className="w-4 h-4" /> Pagamento 100% seguro · Garantia de 7 dias
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src={aboutPhoto} alt="Sobre" className="rounded-2xl w-full max-w-md mx-auto" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-4">
              <h2 className="text-4xl md:text-5xl">QUEM <span className="text-primary">SOU EU</span></h2>
              <p className="text-muted-foreground leading-relaxed">
                Já estive no fundo do poço. Sem energia, sem resultado, seguindo tudo que o sistema mandava.
                A virada veio quando comecei a estudar o que ninguém quer que você descubra sobre alimentação e saúde.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoje impacto milhares de pessoas mensalmente. Pessoas que perderam 30, 45 kg seguindo este método.
                Uma comunidade de verdade, com resultados reais.
              </p>
            </motion.div>
          </div>
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
          <div className="text-center mt-12">
            <CTAButton />
          </div>
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
