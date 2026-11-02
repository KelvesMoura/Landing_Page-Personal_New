import { calc } from "./helper.js";

const number = 5514991355467;

export const link = `https://api.whatsapp.com/send?phone=${number}&text=`;

export const messageCard = "Olá, já vi os preços e quero contratar direto";
export const messagePortfolio =
  "Olá, vi o portfólio e quero um projeto parecido";

export const dataCards = [
  {
    plan: "START",
    star: 3,
    color: "--start-color",
    customers: [
      "Divulgar um serviço específico;",
      "Divulgar um produto exclusivo;",
      "Profissionais liberais e autônomos.",
    ],
    pos: [
      "Divulge sua marca",
      "Página Única",
      "Site com sua Marca",
      "E-mail com sua Marca",
      "Formulário integrado ao Whatsapp",
      "Manutenção Mensal",
    ],
    deadline: "3 dias",
    parcel: 5,
    total: 797,
    paymentLink: "https://payment-link-v3.ton.com.br/pl_G0ZDoMNqp2nYdL5UpHGRlabvLB16J8wm",
    get split() {
      return calc(this.total, this.parcel);
    },
    montlhy: 99.9,
  },
  {
    plan: "PRO",
    star: 4,
    color: "--pro-color",
    customers: [
      "Apresentar sua empresa;",
      "Contar sua história;",
      "Criar autoridade do seu negócio.",
    ],
    pos: [
      "Conte sua História",
      "Até 5 páginas",
      "Site com sua Marca",
      "E-mail com sua Marca",
      "Formulário integrado ao Whatsapp",
      "Manutenção Mensal",
    ],
    deadline: "7 dias",
    parcel: 6,
    total: 1499,
    paymentLink: "https://payment-link-v3.ton.com.br/pl_qGNKERbwLnQ9kPb8sAIrgrXDYjPzoOl3",
    get split() {
      return calc(this.total, this.parcel);
    },
    montlhy: 149.9,
  },
  {
    plan: "MASTER",
    star: 5,
    color: "--master-color",
    customers: [
      "Vender seus produtos 24/7;",
      "Receber pagamento automático;",
      "Multiplicar seu faturamento com vendas online.",
    ],
    pos: [
      "Venda o Tempo Todo",
      "Até 15 páginas",
      "Site com sua Marca",
      "E-mail com sua Marca",
      "Receba Direto na Sua Conta",
      "Manutenção Mensal",
    ],
    deadline: "15 dias",
    parcel: 10,
    total: 2999,
    paymentLink: "https://payment-link-v3.ton.com.br/pl_5GjVPA7YbEv9Amrtlwhj19NDQweyma1L",
    get split() {
      return calc(this.total, this.parcel);
    },
    montlhy: 299.9,
  },
];

export const dataTestimonials = [
  "nexonic",
  "clare-way-services",
  "isaac-painting-ltd",
  "achadinhos-online",
  "cortesan",
  "isabelle-matos",
  "decolar-limpeza",
  "vc-digital",
  "doutor-dos-fogões",
  "clean-air-tech",
];

export const dataPortfolio = [
  {
    customer: "abrigo-do-cão",
    project: "loja-online",
    link: "abrigodocao.kelvesmoura.com",
  },
  {
    customer: "achadinhos-online",
    project: "loja-online",
    link: "achadinhos.kelvesmoura.com",
  },
  {
    customer: "brazilian-day-festival-gort",
    project: "landing-page",
    link: "brazilian.kelvesmoura.com",
  },
  {
    customer: "clare-way-services",
    project: "landing-page",
    link: "clareway.kelvesmoura.com",
  },
  {
    customer: "clean-air-tech",
    project: "landing-page",
    link: "cleanairtech.com.br",
  },
  {
    customer: "cortesan",
    project: "loja-online",
    link: "cortesan.kelvesmoura.com",
  },
  {
    customer: "decolar-limpeza",
    project: "landing-page",
    link: "decolarlimpeza.com",
  },
  {
    customer: "doutor-dos-fogões",
    project: "landing-page",
    link: "doutordosfogoes.com.br",
  },
  {
    customer: "find-me-ie",
    project: "sistema",
    link: "findmeie.kelvesmoura.com",
  },
  {
    customer: "get-a-pet",
    project: "sistema",
    link: "getapet.kelvesmoura.com",
  },
  {
    customer: "isaac-painting-ltd",
    project: "landing-page",
    link: "isaacpainting.ie",
  },
  {
    customer: "isabelle-matos",
    project: "landing-page",
    link: "isabellematos.kelvesmoura.com",
  },
  {
    customer: "kelves-moura",
    project: "landing-page",
    link: "kelvesmoura.com",
  },
  {
    customer: "pizza-pos",
    project: "sistema",
    link: "pizzapos.kelvesmoura.com",
  },
  {
    customer: "roberto-filho-consultoria",
    project: "landing-page",
    link: "roberto.kelvesmoura.com",
  },
  {
    customer: "thoughts",
    project: "sistema",
    link: "thoughts.kelvesmoura.com",
  },
  {
    customer: "vc-digital-company",
    project: "landing-page",
    link: "vcdigitalcompany.com",
  },
  {
    customer: "visual-media-create",
    project: "landing-page",
    link: "visualmediacreate.kelvesmoura.com",
  },
  {
    customer: "vpm-viagens",
    project: "site-institucional",
    link: "vpmviagens.kelvesmoura.com",
  },
];
