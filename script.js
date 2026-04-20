const sportsItems = [
  {
    image: 'public/assets/sports/neymar.jpg',
    alt: {
      pt: 'Arte esportiva com atleta sentado em vestiário',
      en: 'Sports artwork with athlete seated in locker room',
      es: 'Arte deportiva con atleta sentado en vestuario'
    },
    caption: {
      pt: 'Identidade de atleta profissional',
      en: 'Pro athlete identity',
      es: 'Identidad de atleta profesional'
    },
    width: '246px'
  },
  {
    image: 'public/assets/sports/nuno.jpg',
    alt: {
      pt: 'Arte esportiva com jogador em composição editorial',
      en: 'Sports artwork with player in editorial composition',
      es: 'Arte deportiva con jugador en composición editorial'
    },
    caption: {
      pt: 'Presença que abre portas fora de campo',
      en: 'Presence that opens doors off the field',
      es: 'Presencia que abre puertas fuera de la cancha'
    },
    width: '282px'
  },
  {
    image: 'public/assets/sports/phil.jpg',
    alt: {
      pt: 'Arte esportiva com jogador em layout de marca esportiva',
      en: 'Sports artwork with player in branded layout',
      es: 'Arte deportiva con jugador en layout de marca deportiva'
    },
    caption: {
      pt: 'Artes no padrão das maiores marcas do esporte',
      en: 'Artwork at the level of top sports brands',
      es: 'Artes al nivel de las mayores marcas del deporte'
    },
    width: '356px'
  },
  {
    image: 'public/assets/sports/rollheiser.jpg',
    alt: {
      pt: 'Arte esportiva com composição institucional',
      en: 'Sports artwork with institutional composition',
      es: 'Arte deportiva con composición institucional'
    },
    caption: {
      pt: 'Visual que posiciona sua marca no esporte',
      en: 'Visuals that position your brand in sports',
      es: 'Visual que posiciona tu marca en el deporte'
    },
    width: '366px'
  }
];

const fixedCaptionItems = [sportsItems[1], sportsItems[2], sportsItems[3], sportsItems[0]];
const marqueeItems = [sportsItems[3], sportsItems[0], sportsItems[1], sportsItems[2]];
let brandingGalleryItems = [
  {
    src: 'public/assets/branding/rush.jpg',
    alt: {
      pt: 'Apresentação vertical de identidade visual da marca Rush',
      en: 'Vertical branding presentation for the Rush brand',
      es: 'Presentación vertical de identidad visual de la marca Rush'
    },
    width: 1429,
    height: 10900
  },
  {
    src: 'public/assets/branding/somos-um.jpg',
    alt: {
      pt: 'Aplicação vertical de camiseta oficial do projeto',
      en: 'Vertical mockup of the project official t-shirt',
      es: 'Aplicación vertical de la camiseta oficial del proyecto'
    },
    width: 1000,
    height: 12821
  }
];
const BRANDING_DIRECTORY_PATH = '';
const DIRECTORY_IMAGE_PATTERN = /\.(png|jpe?g|webp|avif|gif)$/i;
const thumbsGalleryItems = [
  {
    src: 'public/assets/thumbs/instagram.jpg',
    alt: {
      pt: 'Thumbnail sobre mudanças do Instagram em 2026',
      en: 'Thumbnail about Instagram changes in 2026',
      es: 'Thumbnail sobre cambios de Instagram en 2026'
    }
  },
  {
    src: 'public/assets/thumbs/inpi.jpg',
    alt: {
      pt: 'Thumbnail sobre registro de marca de moda no INPI',
      en: 'Thumbnail about registering a fashion brand at INPI',
      es: 'Thumbnail sobre registro de marca de moda en el INPI'
    }
  },
  {
    src: 'public/assets/thumbs/print-on-demand.jpg',
    alt: {
      pt: 'Thumbnail sobre criar uma marca print on demand do zero',
      en: 'Thumbnail about starting a print-on-demand brand from scratch',
      es: 'Thumbnail sobre crear una marca print on demand desde cero'
    }
  },
  {
    src: 'public/assets/thumbs/thumb-10.jpg',
    alt: {
      pt: 'Thumbnail de alta conversão para vídeo de conteúdo',
      en: 'High-converting thumbnail for content video',
      es: 'Thumbnail de alta conversión para video de contenido'
    }
  },
  {
    src: 'public/assets/thumbs/thumb-12.jpg',
    alt: {
      pt: 'Thumbnail editorial para vídeo de marketing digital',
      en: 'Editorial thumbnail for digital marketing video',
      es: 'Thumbnail editorial para video de marketing digital'
    }
  }
];

const track = document.getElementById('carouselTrack');
const captions = document.getElementById('sportsCaptions');
const sportsCarousel = document.querySelector('.sports-carousel');
const navbar = document.querySelector('.navbar');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let DEFAULT_BRANDING_BUTTON_LABEL = 'MEUS TRABALHOS COM BRANDING';
let DEFAULT_THUMBS_BUTTON_LABEL = 'MEUS TRABALHOS COM THUMBNAILS';
const brandingSection = document.querySelector('.feature-branding');
const brandingGallery = document.getElementById('brandingGallery');
const brandingGalleryViewport = brandingGallery
  ? brandingGallery.querySelector('.branding-gallery-viewport')
  : null;
const brandingGallerySlides = brandingGallery
  ? Array.from(brandingGallery.querySelectorAll('.branding-gallery-slide'))
  : [];
const brandingGalleryPrevPreviewImages = brandingGallery
  ? Array.from(brandingGallery.querySelectorAll('.branding-gallery-preview-prev img'))
  : null;
const brandingGalleryNextPreviewImages = brandingGallery
  ? Array.from(brandingGallery.querySelectorAll('.branding-gallery-preview-next img'))
  : null;
const brandingGalleryPrevButton = brandingGallery
  ? brandingGallery.querySelector('[data-branding-gallery-prev]')
  : null;
const brandingGalleryNextButton = brandingGallery
  ? brandingGallery.querySelector('[data-branding-gallery-next]')
  : null;
const brandingGalleryTriggers = Array.from(document.querySelectorAll('[data-branding-gallery-trigger]'));
const brandingGalleryButton = brandingSection
  ? brandingSection.querySelector('.feature-secondary[data-branding-gallery-trigger]')
  : null;
const thumbsSection = document.querySelector('.feature-thumbs');
const thumbsGallery = document.getElementById('thumbsGallery');
const thumbsGalleryButton = thumbsSection
  ? thumbsSection.querySelector('.feature-secondary[data-thumbs-gallery-trigger]')
  : null;
const thumbsGalleryPrevButton = thumbsGallery
  ? thumbsGallery.querySelector('[data-thumbs-gallery-prev]')
  : null;
const thumbsGalleryNextButton = thumbsGallery
  ? thumbsGallery.querySelector('[data-thumbs-gallery-next]')
  : null;
const thumbsGalleryViewport = thumbsGallery
  ? thumbsGallery.querySelector('.thumbs-gallery-viewport')
  : null;
const thumbsGalleryTrack = document.getElementById('thumbsGalleryTrack');
const thumbsGalleryTriggers = Array.from(document.querySelectorAll('[data-thumbs-gallery-trigger]'));
const featureTitleSections = [
  ...Array.from(document.querySelectorAll('.feature-section'))
    .map((section) => ({
      section,
      title: section.querySelector('.feature-watermark')
    }))
    .filter((item) => item.title),
  {
    section: document.querySelector('.sports-section'),
    title: document.querySelector('.sports-title')
  }
].filter((item) => item.section && item.title);
const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const heroActionButtons = Array.from(document.querySelectorAll('.hero-actions .hero-btn'));
const heroServiceItems = Array.from(document.querySelectorAll('.hero-services li'));
const servicePillItems = Array.from(document.querySelectorAll('.service-pill'));
const featureHooks = {
  branding: document.querySelector('.feature-branding .feature-hook'),
  thumbs: document.querySelector('.feature-thumbs .feature-hook'),
  social: document.querySelector('.feature-social .feature-hook')
};
const featureCardTitleNodes = {
  branding: document.querySelector('.feature-branding .feature-card-title'),
  thumbs: document.querySelector('.feature-thumbs .feature-card-title'),
  social: document.querySelector('.feature-social .feature-card-title')
};
const featureListNodes = {
  branding: Array.from(document.querySelectorAll('.feature-branding .feature-list li')),
  thumbs: Array.from(document.querySelectorAll('.feature-thumbs .feature-list li')),
  social: Array.from(document.querySelectorAll('.feature-social .feature-list li'))
};
const featureActionButtons = {
  brandingPrimary: document.querySelector('.feature-branding .feature-primary'),
  brandingSecondary: document.querySelector('.feature-branding .feature-secondary'),
  thumbsPrimary: document.querySelector('.feature-thumbs .feature-primary'),
  thumbsSecondary: document.querySelector('.feature-thumbs .feature-secondary'),
  socialPrimary: document.querySelector('.feature-social .feature-primary'),
  socialSecondary: document.querySelector('.feature-social .feature-secondary')
};
const sportsActionButtons = Array.from(document.querySelectorAll('.sports-actions .btn'));
const lpTitleNodes = Array.from(document.querySelectorAll('.lp-title'));
const lpHookNodes = Array.from(document.querySelectorAll('.lp-hook'));
const lpCardTitleNodes = Array.from(document.querySelectorAll('.lp-card-title'));
const lpCards = Array.from(document.querySelectorAll('.lp-card'));
const lpCardToggleButtons = Array.from(document.querySelectorAll('.lp-card-toggle'));
const lpListNodes = Array.from(document.querySelectorAll('.lp-column .lp-list')).map((list) =>
  Array.from(list.querySelectorAll('li'))
);
const lpButtons = Array.from(document.querySelectorAll('.lp-button'));
const faqKickerNode = document.querySelector('.lp-faq-kicker');
const faqTitleNode = document.querySelector('.lp-faq-title');
const faqIntroNode = document.querySelector('.lp-faq-intro');
const faqQuestionNodes = Array.from(document.querySelectorAll('.lp-faq-question'));
const faqAnswerNodes = Array.from(document.querySelectorAll('.lp-faq-answer p'));
const schedulePanel = document.getElementById('schedulePanel');
const scheduleOpenButtons = Array.from(document.querySelectorAll('[data-schedule-open]'));
const scheduleCloseButtons = schedulePanel
  ? Array.from(schedulePanel.querySelectorAll('[data-schedule-close]'))
  : [];
const schedulePanelTitleNode = document.querySelector('.schedule-panel-title');
const schedulePanelSubtitleNode = document.querySelector('.schedule-panel-subtitle');
const scheduleForm = document.getElementById('scheduleForm');
const scheduleNameField = document.getElementById('scheduleName');
const scheduleCompanyField = document.getElementById('scheduleCompany');
const scheduleServiceField = document.getElementById('scheduleService');
const scheduleWhatsappField = document.getElementById('scheduleWhatsapp');
const scheduleAboutField = document.getElementById('scheduleAbout');
const scheduleSubmitButton = document.querySelector('.schedule-submit');
const scheduleNextButton = document.querySelector('.schedule-next');
const scheduleBackButton = document.querySelector('.schedule-back');
const scheduleNoteNode = document.querySelector('.schedule-form-note');
const scheduleProgressStepLabel = document.querySelector('.schedule-progress-step-label');
const scheduleProgressFill = document.querySelector('.schedule-progress-fill');
const scheduleProgress = document.querySelector('.schedule-progress');
const scheduleStepFields = scheduleForm
  ? Array.from(scheduleForm.querySelectorAll('.schedule-field[data-schedule-step]'))
  : [];
const scheduleSuccess = document.getElementById('scheduleSuccess');
const scheduleSuccessTitleNode = document.querySelector('.schedule-success-title');
const scheduleSuccessTextNode = document.querySelector('.schedule-success-text');
const scheduleLabelNodes = {
  name: document.querySelector('label[for="scheduleName"] span:last-child'),
  company: document.querySelector('label[for="scheduleCompany"] span:last-child'),
  service: document.querySelector('label[for="scheduleService"] span:last-child'),
  whatsapp: document.querySelector('label[for="scheduleWhatsapp"] span:last-child'),
  about: document.querySelector('label[for="scheduleAbout"] span:last-child')
};
const scheduleServiceOptionNodes = {
  placeholder: scheduleForm?.querySelector('[data-schedule-service-placeholder]') || null,
  traffic: scheduleForm?.querySelector('[data-schedule-service-option="traffic"]') || null,
  branding: scheduleForm?.querySelector('[data-schedule-service-option="branding"]') || null,
  landing: scheduleForm?.querySelector('[data-schedule-service-option="landing"]') || null,
  all: scheduleForm?.querySelector('[data-schedule-service-option="all"]') || null
};
const footerLabels = Array.from(document.querySelectorAll('.footer-label'));
const footerButtons = Array.from(document.querySelectorAll('.footer-button'));
const footerBottom = document.querySelector('.footer-bottom');
const aboutTitleNode = document.querySelector('.about-title');
const aboutSubtitleNode = document.querySelector('.about-subtitle');
const aboutTextNodes = Array.from(document.querySelectorAll('.about-copy p'));
const languageToggleButtons = Array.from(document.querySelectorAll('[data-site-language]'));
const SCHEDULE_PHONE_COUNTRIES = [
  { key: 'br', flag: '🇧🇷', label: 'Brasil', dial: '+55', digits: 11, placeholder: '(11) 99999-9999' },
  { key: 'pt', flag: '🇵🇹', label: 'Portugal', dial: '+351', digits: 9, placeholder: '912 345 678' },
  { key: 'us', flag: '🇺🇸', label: 'Estados Unidos', dial: '+1', digits: 10, placeholder: '(201) 555-0123' },
  { key: 'ar', flag: '🇦🇷', label: 'Argentina', dial: '+54', digits: 10, placeholder: '11 2345-6789' },
  { key: 'uy', flag: '🇺🇾', label: 'Uruguai', dial: '+598', digits: 8, placeholder: '91 234 567' },
  { key: 'co', flag: '🇨🇴', label: 'Colômbia', dial: '+57', digits: 10, placeholder: '321 234 5678' },
  { key: 'ec', flag: '🇪🇨', label: 'Equador', dial: '+593', digits: 9, placeholder: '99 123 4567' },
  { key: 've', flag: '🇻🇪', label: 'Venezuela', dial: '+58', digits: 10, placeholder: '412 123 4567' },
  { key: 'ca', flag: '🇨🇦', label: 'Canadá', dial: '+1', digits: 10, placeholder: '(204) 555-0123' },
  { key: 'es', flag: '🇪🇸', label: 'Espanha', dial: '+34', digits: 9, placeholder: '612 345 678' },
  { key: 'fr', flag: '🇫🇷', label: 'França', dial: '+33', digits: 9, placeholder: '6 12 34 56 78' },
  { key: 'gb', flag: '🇬🇧', label: 'Inglaterra', dial: '+44', digits: 10, placeholder: '7123 456 789' }
];
let currentLanguage = 'pt';
let scheduleLastTrigger = null;
let scheduleCurrentStep = 0;
let scheduleServiceSelectUI = null;
let schedulePhoneUI = null;
let heroServiceTickerTimer = null;
let heroServiceTickerIndex = 0;

const translations = {
  pt: {
    documentLang: 'pt-BR',
    title: 'RAFA BY',
    common: {
      portfolio: 'SERVIÇOS',
      contact: 'FALE COMIGO',
      seeAbout: 'VER SOBRE',
      scheduleCall: 'AGENDAR REUNIÃO',
      learnMore: 'SAIBA MAIS',
      closeDetails: 'FECHAR'
    },
    nav: ['SERVIÇOS', 'FALE COMIGO'],
    heroButtons: ['SERVIÇOS', 'FALE COMIGO'],
    heroServices: ['UX DESIGN', 'BRANDING', 'VIDEO EDITOR', 'TRÁFEGO PAGO', 'SOCIAL MEDIA', 'DESIGN'],
    about: {
      title: 'Sobre mim',
      subtitle: 'Design nunca foi escolha. Foi direção.',
      paragraphs: [
        'Comecei no design ainda criança, quando era só curiosidade e tempo livre. Virou rotina antes mesmo de virar profissão. Na adolescência, entrei no cenário de eSports criando artes para o público gamer — trabalhos que chegaram a canais com mais de 1 milhão de inscritos. Foi ali que tudo começou a ganhar peso.',
        'Parei por um tempo. Voltei diferente. Aos 16, entrei no mercado trabalhando com agências, evoluí rápido, refinei meu olhar e passei a construir projetos com mais estratégia — não só estética.',
        'Hoje, atuo com branding, social media e direção visual, criando para empresas que querem mais do que “arte bonita”: querem presença. Já trabalhei com nomes relevantes do mercado, como Gesual Tomé, e sigo expandindo — sempre com o mesmo princípio: design que comunica, posiciona e marca.'
      ]
    },
    scheduleForm: {
      title: 'AGENDAR REUNIÃO',
      subtitle: 'Preencha o básico para eu entender seu cenário com mais clareza e te responder de forma mais objetiva.',
      labels: {
        name: 'Nome',
        company: '@ do Instagram da empresa, ou nome dela',
        service: 'Serviço que tenho interesse',
        whatsapp: 'Número de WhatsApp',
        about: 'Fale um pouco sobre o seu trabalho'
      },
      placeholders: {
        name: 'Seu nome',
        company: '@suaempresa ou nome dela',
        service: 'Selecione uma opção',
        whatsapp: '(61) 99999-9999',
        about: 'Conte brevemente o que você faz, em que momento sua marca está e o que você quer destravar.'
      },
      options: {
        traffic: 'Tráfego pago',
        branding: 'Branding ID visual',
        landing: 'Landing page',
        all: 'Gostaria de ver sobre todos'
      },
      actions: {
        next: 'CONTINUAR',
        back: 'VOLTAR'
      },
      progress: 'Pergunta {current} de {total}',
      submit: 'MARCAR REUNIÃO',
      successTitle: 'Perfeito.',
      successText: 'Parabéns. Sua reunião foi enviada com sucesso.',
      note: 'Entraremos em contato rapidamente assim que você enviar o formulário.',
      close: 'Fechar formulário'
    },
    servicePills: ['SPORTS', 'SOCIAL<br>MEDIA', 'ID VISUAL', 'THUMBS'],
    featureHooks: {
      branding: '<span class="accent">Sua marca precisa parecer tão boa</span> quanto o que você entrega.',
      thumbs: '<span class="accent">Seu vídeo pode ser ótimo</span> e ainda perder clique.',
      social: '<span class="accent">Sem estratégia, postar muito</span> não vira resultado.'
    },
    featureCardTitles: {
      branding: 'Do briefing à entrega, <strong>você recebe:</strong>',
      thumbs: 'O que muda no seu canal:',
      social: 'O que a gente constrói <strong>junto no seu perfil:</strong>'
    },
    featureLists: {
      branding: [
        'Uma marca com identidade<br>própria e diferencial claro',
        'Logo criada com<br>intenção estratégica',
        'Paleta de cores e<br>tipografia definidas',
        'Identidade visual<br>para redes sociais',
        'Mockups de<br>aplicação da marca',
        'Manual de marca para<br>usar com consistência'
      ],
      thumbs: [
        'Visual que compete com<br>os maiores do seu nicho',
        'Mais cliques sem mudar o<br>conteúdo que você já produz',
        'Identidade consistente<br>em todos os seus vídeos',
        'Thumbnails pensadas<br>pra converter'
      ],
      social: [
        'Posicionamento e estratégia<br>definidos pro seu perfil',
        'Bio e destaques prontos<br>pra apresentar seu negócio',
        'Posts e carrosséis alinhados<br>com sua identidade',
        'Copy que conversa com<br>quem você quer atingir'
      ]
    },
    featureButtons: {
      branding: 'MEUS TRABALHOS COM BRANDING',
      thumbs: 'MEUS TRABALHOS COM THUMBNAILS',
      social: 'FALE COMIGO'
    },
    sportsButtons: ['FALE COMIGO', 'FALE COMIGO'],
    lpTitles: [
      '<span class="accent">LANDING</span><span>PAGES</span>',
      '<span class="accent">TRÁFEGO</span><span>PAGO</span>',
      '<span class="accent">BRANDING</span><span>ID VISUAL</span>'
    ],
    lpHooks: [
      '<span class="accent">Uma boa landing page convence</span> antes do primeiro contato.',
      '<span class="accent">Sem anúncio, você depende</span> da sorte para ser visto.',
      '<span class="accent">Sua marca precisa parecer tão boa</span> quanto o que você entrega.'
    ],
    lpCardTitles: [
      'O que faz sua página vender antes de você:',
      'O que entra no seu projeto:',
      'Do briefing à entrega, você recebe:'
    ],
    lpLists: [
      [
        'Estratégia e UX<br>pensados pra converter',
        'Design que passa credibilidade<br>antes de você falar',
        'Página programada e<br>pronta pra receber clientes',
        'Resultado que você<br>já viu funcionando aqui'
      ],
      [
        'Estratégia de<br>campanha do zero',
        'Criativos pensados<br>pra converter',
        'Gestão de anúncios<br>no dia a dia',
        'Relatórios claros<br>de performance'
      ],
      [
        'Uma marca com identidade<br>própria e diferencial claro',
        'Logo criada com<br>intenção estratégica',
        'Paleta de cores e<br>tipografia definidas',
        'Identidade visual<br>para redes sociais',
        'Mockups de<br>aplicação da marca',
        'Manual de marca para<br>usar com consistência'
      ]
    ],
    faq: {
      kicker: 'FAQ',
      title: 'Perguntas frequentes',
      intro: 'Resposta direta para você entender como a reunião deixa o processo mais rápido, claro e objetivo.',
      questions: [
        'Por que agendar uma reunião?',
        'O que eu preciso levar para a reunião?',
        'Como eu sei qual serviço faz mais sentido?',
        'Onde eu clico para começar?'
      ],
      answers: [
        'Porque antes da conversa eu já consigo pesquisar sua empresa e o seu nicho. Assim a reunião fica mais direcionada, mais rápida e mais prática para definirmos metas, objetivos, resultados e valores, sem a demora de uma conversa travada no WhatsApp.',
        'Uma visão simples do seu negócio, da sua meta principal, do que você quer vender e, se tiver, referências que façam sentido para você. O resto a gente organiza juntos durante a conversa.',
        'Se você ainda está em dúvida entre branding, landing page ou tráfego pago, a própria reunião serve para isso. Eu analiso o cenário e indico o caminho mais coerente para o momento da sua empresa.',
        'Nos botões “Agendar reunião”. Eles abrem o formulário para eu receber o básico do seu projeto e já chegar na conversa com mais contexto, objetividade e qualidade na análise.'
      ]
    },
    footerLabels: ['MÍDIA SOCIAL', 'SERVIÇOS'],
    footerBottom: 'COPYRIGHT 2024 | TODOS OS DIREITOS RESERVADOS'
  },
  en: {
    documentLang: 'en',
    title: 'RAFA BY',
    common: {
      portfolio: 'SERVICES',
      contact: 'CONTACT ME',
      seeAbout: 'SEE ABOUT',
      scheduleCall: 'SCHEDULE CALL',
      learnMore: 'LEARN MORE',
      closeDetails: 'CLOSE'
    },
    nav: ['SERVICES', 'CONTACT ME'],
    heroButtons: ['SERVICES', 'CONTACT ME'],
    heroServices: ['UX DESIGN', 'BRANDING', 'VIDEO EDITOR', 'PAID ADS', 'SOCIAL MEDIA', 'DESIGN'],
    about: {
      title: 'About me',
      subtitle: 'Design was never a choice. It was direction.',
      paragraphs: [
        'I started in design as a kid, when it was just curiosity and free time. It became routine before it ever became a profession. As a teenager, I entered the eSports scene creating artwork for the gaming audience — projects that reached channels with over 1 million subscribers. That was when everything started to gain real weight.',
        'I stopped for a while. I came back differently. At 16, I entered the market working with agencies, evolved fast, refined my eye and started building projects with more strategy — not just aesthetics.',
        'Today, I work with branding, social media and visual direction, creating for companies that want more than “pretty design”: they want presence. I have worked with relevant names in the market, such as Gesual Tomé, and I keep expanding — always with the same principle: design that communicates, positions and leaves a mark.'
      ]
    },
    scheduleForm: {
      title: 'SCHEDULE MEETING',
      subtitle: 'Fill in the basics so I can understand your scenario clearly and reply more objectively.',
      labels: {
        name: 'Name',
        company: 'Company Instagram @ or company name',
        service: 'Service I am interested in',
        whatsapp: 'WhatsApp number',
        about: 'Tell me a bit about your work'
      },
      placeholders: {
        name: 'Your name',
        company: '@yourcompany or company name',
        service: 'Select an option',
        whatsapp: '+1 (555) 555-5555',
        about: 'Briefly tell me what you do, where your brand stands today and what you want to unlock.'
      },
      options: {
        traffic: 'Paid ads',
        branding: 'Branding visual ID',
        landing: 'Landing page',
        all: 'I would like to know about all of them'
      },
      actions: {
        next: 'CONTINUE',
        back: 'BACK'
      },
      progress: 'Question {current} of {total}',
      submit: 'BOOK MEETING',
      successTitle: 'Done.',
      successText: 'Congratulations. Your meeting request was sent successfully.',
      note: 'We will get back to you quickly as soon as you send the form.',
      close: 'Close form'
    },
    servicePills: ['SPORTS', 'SOCIAL<br>MEDIA', 'BRAND ID', 'THUMBS'],
    featureHooks: {
      branding: '<span class="accent">Your brand needs to look as good</span> as what you deliver.',
      thumbs: '<span class="accent">Your video can be great</span> and still lose the click.',
      social: '<span class="accent">Without strategy, posting more</span> does not create results.'
    },
    featureCardTitles: {
      branding: 'From briefing to delivery, <strong>you get:</strong>',
      thumbs: 'What changes in your channel:',
      social: 'What we build <strong>for your profile:</strong>'
    },
    featureLists: {
      branding: [
        'A brand with clear identity<br>and real differentiation',
        'Logo built with<br>strategic intent',
        'Defined color palette<br>and typography',
        'Visual identity for<br>social media',
        'Brand mockups for<br>real applications',
        'Brand guide for<br>consistent use'
      ],
      thumbs: [
        'Visuals that compete with<br>top channels in your niche',
        'More clicks without changing<br>the content you already make',
        'Consistent identity across<br>all your videos',
        'Thumbnails designed<br>to convert'
      ],
      social: [
        'Positioning and strategy<br>defined for your profile',
        'Bio and highlights ready<br>to present your business',
        'Posts and carousels aligned<br>with your identity',
        'Copy that speaks to<br>the right audience'
      ]
    },
    featureButtons: {
      branding: 'MY BRANDING WORK',
      thumbs: 'MY THUMBNAIL WORK',
      social: 'CONTACT ME'
    },
    sportsButtons: ['CONTACT ME', 'CONTACT ME'],
    lpTitles: [
      '<span class="accent">LANDING</span><span>PAGES</span>',
      '<span class="accent">PAID</span><span>TRAFFIC</span>',
      '<span class="accent">BRANDING</span><span>VISUAL ID</span>'
    ],
    lpHooks: [
      '<span class="accent">A strong landing page convinces</span> before the first contact.',
      '<span class="accent">Without ads, being seen</span> depends on luck.',
      '<span class="accent">Your brand needs to look as good</span> as what you deliver.'
    ],
    lpCardTitles: [
      'What makes your page sell before you do:',
      'What is included in your project:',
      'From briefing to delivery, you get:'
    ],
    lpLists: [
      [
        'Strategy and UX<br>built to convert',
        'Design that builds credibility<br>before you even speak',
        'Page developed and<br>ready to receive leads',
        'Results you can already<br>see working here'
      ],
      [
        'Campaign strategy<br>from scratch',
        'Creatives built<br>to convert',
        'Daily ad management<br>and optimization',
        'Clear performance<br>reports'
      ],
      [
        'A brand with clear identity<br>and real differentiation',
        'Logo built with<br>strategic intent',
        'Defined color palette<br>and typography',
        'Visual identity for<br>social media',
        'Brand mockups for<br>real applications',
        'Brand guide for<br>consistent use'
      ]
    ],
    faq: {
      kicker: 'FAQ',
      title: 'Frequently asked questions',
      intro: 'Straight answers so you understand how the meeting makes the process faster, clearer and more objective.',
      questions: [
        'Why schedule a meeting?',
        'What should I bring to the meeting?',
        'How do I know which service makes more sense?',
        'Where do I click to get started?'
      ],
      answers: [
        'Because before we talk, I can already research your company and your niche. That makes the meeting more direct, faster and more practical for defining goals, objectives, outcomes and pricing, instead of getting stuck in a WhatsApp conversation.',
        'A simple overview of your business, your main goal, what you want to sell and, if you have them, references that make sense to you. We organize the rest together during the call.',
        'If you are still unsure between branding, landing page or paid traffic, the meeting itself is made for that. I analyze your scenario and point to the path that makes the most sense for your business right now.',
        'On the “Schedule call” buttons. They open the form so I receive the basics of your project and arrive at the conversation with more context, objectivity and quality in the analysis.'
      ]
    },
    footerLabels: ['SOCIAL MEDIA', 'SERVICES'],
    footerBottom: 'COPYRIGHT 2024 | ALL RIGHTS RESERVED'
  },
  es: {
    documentLang: 'es',
    title: 'RAFA BY',
    common: {
      portfolio: 'SERVICIOS',
      contact: 'HABLE CONMIGO',
      seeAbout: 'VER SOBRE',
      scheduleCall: 'AGENDAR REUNIÓN',
      learnMore: 'SABER MÁS',
      closeDetails: 'CERRAR'
    },
    nav: ['SERVICIOS', 'HABLE CONMIGO'],
    heroButtons: ['SERVICIOS', 'HABLE CONMIGO'],
    heroServices: ['UX DESIGN', 'BRANDING', 'EDITOR DE VIDEO', 'TRÁFICO PAGO', 'SOCIAL MEDIA', 'DISEÑO'],
    about: {
      title: 'Sobre mí',
      subtitle: 'El diseño nunca fue elección. Fue dirección.',
      paragraphs: [
        'Empecé en el diseño cuando todavía era un niño, cuando todo era curiosidad y tiempo libre. Se volvió rutina incluso antes de convertirse en profesión. En la adolescencia entré en la escena de los eSports creando artes para el público gamer — trabajos que llegaron a canales con más de 1 millón de suscriptores. Ahí fue cuando todo empezó a tomar peso.',
        'Paré durante un tiempo. Volví diferente. A los 16 entré al mercado trabajando con agencias, evolucioné rápido, afiné mi mirada y empecé a construir proyectos con más estrategia — no solo estética.',
        'Hoy trabajo con branding, social media y dirección visual, creando para empresas que quieren más que “arte bonita”: quieren presencia. Ya trabajé con nombres relevantes del mercado, como Gesual Tomé, y sigo expandiéndome — siempre con el mismo principio: diseño que comunica, posiciona y deja marca.'
      ]
    },
    scheduleForm: {
      title: 'AGENDAR REUNIÓN',
      subtitle: 'Completa lo básico para que entienda tu contexto con más claridad y te responda de forma más objetiva.',
      labels: {
        name: 'Nombre',
        company: '@ de Instagram de la empresa, o su nombre',
        service: 'Servicio que me interesa',
        whatsapp: 'Número de WhatsApp',
        about: 'Cuéntame un poco sobre tu trabajo'
      },
      placeholders: {
        name: 'Tu nombre',
        company: '@tuempresa o su nombre',
        service: 'Selecciona una opción',
        whatsapp: '+55 (61) 99999-9999',
        about: 'Cuéntame brevemente qué haces, en qué momento está tu marca y qué quieres destrabar.'
      },
      options: {
        traffic: 'Tráfico pago',
        branding: 'Branding ID visual',
        landing: 'Landing page',
        all: 'Me gustaría ver todo'
      },
      actions: {
        next: 'CONTINUAR',
        back: 'VOLVER'
      },
      progress: 'Pregunta {current} de {total}',
      submit: 'MARCAR REUNIÓN',
      successTitle: 'Perfecto.',
      successText: 'Felicidades. Tu reunión fue enviada con éxito.',
      note: 'Entraremos en contacto rápidamente apenas envíes el formulario.',
      close: 'Cerrar formulario'
    },
    servicePills: ['SPORTS', 'SOCIAL<br>MEDIA', 'ID VISUAL', 'THUMBS'],
    featureHooks: {
      branding: '<span class="accent">Tu marca necesita verse tan bien</span> como lo que entregas.',
      thumbs: '<span class="accent">Tu video puede ser muy bueno</span> y aun así perder el clic.',
      social: '<span class="accent">Sin estrategia, publicar más</span> no genera resultado.'
    },
    featureCardTitles: {
      branding: 'Del briefing a la entrega, <strong>recibes:</strong>',
      thumbs: 'Lo que cambia en tu canal:',
      social: 'Lo que construimos <strong>para tu perfil:</strong>'
    },
    featureLists: {
      branding: [
        'Una marca con identidad clara<br>y diferencial real',
        'Logo creado con<br>intención estratégica',
        'Paleta de color y tipografía<br>bien definidas',
        'Identidad visual para<br>redes sociales',
        'Mockups de marca para<br>aplicaciones reales',
        'Manual de marca para<br>usar con consistencia'
      ],
      thumbs: [
        'Visuales que compiten con<br>los mayores de tu nicho',
        'Más clics sin cambiar<br>el contenido que ya produces',
        'Identidad consistente en<br>todos tus videos',
        'Miniaturas pensadas<br>para convertir'
      ],
      social: [
        'Posicionamiento y estrategia<br>definidos para tu perfil',
        'Bio y destacados listos<br>para presentar tu negocio',
        'Posts y carruseles alineados<br>con tu identidad',
        'Copy que habla con<br>tu público ideal'
      ]
    },
    featureButtons: {
      branding: 'MIS TRABAJOS DE BRANDING',
      thumbs: 'MIS TRABAJOS DE THUMBNAILS',
      social: 'HABLE CONMIGO'
    },
    sportsButtons: ['HABLE CONMIGO', 'HABLE CONMIGO'],
    lpTitles: [
      '<span class="accent">LANDING</span><span>PAGES</span>',
      '<span class="accent">TRÁFICO</span><span>PAGO</span>',
      '<span class="accent">BRANDING</span><span>ID VISUAL</span>'
    ],
    lpHooks: [
      '<span class="accent">Una buena landing page convence</span> antes del primer contacto.',
      '<span class="accent">Sin anuncios, ser visto</span> depende de la suerte.',
      '<span class="accent">Tu marca necesita verse tan bien</span> como lo que entregas.'
    ],
    lpCardTitles: [
      'Lo que hace que tu página venda antes que tú:',
      'Lo que incluye tu proyecto:',
      'Del briefing a la entrega, recibes:'
    ],
    lpLists: [
      [
        'Estrategia y UX<br>pensados para convertir',
        'Diseño que transmite credibilidad<br>antes de que hables',
        'Página programada y<br>lista para recibir clientes',
        'Resultado que ya puedes<br>ver funcionando aquí'
      ],
      [
        'Estrategia de campaña<br>desde cero',
        'Creativos pensados<br>para convertir',
        'Gestión de anuncios<br>en el día a día',
        'Reportes claros<br>de rendimiento'
      ],
      [
        'Una marca con identidad clara<br>y diferencial real',
        'Logo creado con<br>intención estratégica',
        'Paleta de color y tipografía<br>bien definidas',
        'Identidad visual para<br>redes sociales',
        'Mockups de marca para<br>aplicaciones reales',
        'Manual de marca para<br>usar con consistencia'
      ]
    ],
    faq: {
      kicker: 'FAQ',
      title: 'Preguntas frecuentes',
      intro: 'Respuestas directas para entender cómo la reunión hace el proceso más rápido, claro y objetivo.',
      questions: [
        '¿Por qué agendar una reunión?',
        '¿Qué necesito llevar a la reunión?',
        '¿Cómo sé qué servicio tiene más sentido?',
        '¿Dónde hago clic para empezar?'
      ],
      answers: [
        'Porque antes de hablar ya puedo investigar tu empresa y tu nicho. Así la reunión se vuelve más directa, más rápida y más práctica para definir metas, objetivos, resultados y valores, en lugar de quedar trabados en una conversación por WhatsApp.',
        'Una visión simple de tu negocio, tu meta principal, lo que quieres vender y, si tienes, referencias que te hagan sentido. Lo demás lo organizamos juntos durante la llamada.',
        'Si todavía dudas entre branding, landing page o tráfico pago, la propia reunión sirve para eso. Analizo tu escenario e indico el camino más coherente para el momento de tu empresa.',
        'En los botones “Agendar reunión”. Ellos abren el formulario para que yo reciba lo básico de tu proyecto y llegue a la conversación con más contexto, objetividad y calidad en el análisis.'
      ]
    },
    footerLabels: ['REDES SOCIALES', 'SERVICIOS'],
    footerBottom: 'COPYRIGHT 2024 | TODOS LOS DERECHOS RESERVADOS'
  }
};

const MARQUEE_SPEED = 38;
const SPORTS_AUTOPLAY_DELAY = 2800;
const SPORTS_TRANSITION_MS = 820;
const THUMBS_GALLERY_AUTOPLAY_DELAY = 3200;

let marqueeOffset = 0;
let marqueeBaseWidth = 0;
let marqueeFrameId = null;
let lastFrameTime = 0;
let marqueeDragPointerId = null;
let marqueeDragStartX = 0;
let marqueeDragStartOffset = 0;
let renderFrameId = null;
let resizeFrameId = null;
let scrollFrameId = null;
let sportsCaptionTimer = null;
let sportsCaptionIndex = 0;
let sportsCurrentIndex = 0;
let sportsCloneCount = 0;
let sportsSlides = [];
let sportsSlideOffsets = [];
let sportsLoopTimer = null;
let sportsIsTransitioning = false;
let sportsCurrentTranslate = 0;
let brandingGalleryIndex = 0;
let brandingGalleryActiveSlide = -1;
let brandingPanFrameId = null;
let brandingPanLastTime = 0;
let brandingPanOffset = 0;
let brandingPanTarget = 0;
let brandingPanSpeed = 0;
let brandingDragPointerId = null;
let brandingDragStartY = 0;
let brandingDragStartOffset = 0;
let brandingDragMoved = false;
let brandingTransitionResetId = null;
let thumbsGalleryIndex = 0;
let thumbsGalleryTimer = null;
let thumbsGalleryRenderFrameId = null;
const motionObserver = !prefersReducedMotion.matches && 'IntersectionObserver' in window
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('is-visible');
          motionObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px'
      }
    )
  : null;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function runSafely(label, callback) {
  try {
    return callback();
  } catch (error) {
    console.error(`[site] ${label} failed`, error);
    return undefined;
  }
}

function getReadableAssetName(path) {
  const fileName = decodeURIComponent(String(path).split('/').pop() || '')
    .replace(/\.[^.]+$/, '')
    .replace(/\.[^.]+$/, '');

  return fileName.replace(/[._+-]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractDirectoryHrefs(markup) {
  const hrefs = new Set();
  const hrefPattern = /href\s*=\s*["']([^"']+)["']/gi;
  let match;

  while ((match = hrefPattern.exec(markup))) {
    hrefs.add(match[1]);
  }

  if ('DOMParser' in window) {
    const doc = new DOMParser().parseFromString(markup, 'text/html');
    doc.querySelectorAll('a[href]').forEach((anchor) => hrefs.add(anchor.getAttribute('href')));
  }

  return Array.from(hrefs);
}

function resolveDirectoryImageSources(hrefs, directoryPath) {
  const baseUrl = new URL(directoryPath, window.location.href);

  return hrefs
    .map((href) => {
      if (!href || href.startsWith('?') || href.startsWith('#') || href === '../') return null;

      const resolvedUrl = new URL(href, baseUrl);
      if (!DIRECTORY_IMAGE_PATTERN.test(decodeURIComponent(resolvedUrl.pathname))) return null;

      return resolvedUrl.href;
    })
    .filter(Boolean)
    .sort((a, b) => getReadableAssetName(a).localeCompare(getReadableAssetName(b), 'pt-BR', { sensitivity: 'base' }));
}

function loadImageDimensions(src) {
  return new Promise((resolve) => {
    const image = new Image();

    image.onload = () => {
      resolve({
        width: image.naturalWidth || 1000,
        height: image.naturalHeight || 1000
      });
    };

    image.onerror = () => {
      resolve({ width: 1000, height: 1000 });
    };

    image.src = src;
  });
}

async function loadBrandingGalleryItemsFromDirectory() {
  if (!BRANDING_DIRECTORY_PATH) return brandingGalleryItems;

  try {
    const response = await fetch(BRANDING_DIRECTORY_PATH, { cache: 'no-store' });
    if (!response.ok) throw new Error('branding-directory');

    const markup = await response.text();
    const sources = resolveDirectoryImageSources(extractDirectoryHrefs(markup), BRANDING_DIRECTORY_PATH);
    if (!sources.length) return brandingGalleryItems;

    const items = await Promise.all(
      sources.map(async (src) => {
        const dimensions = await loadImageDimensions(src);
        const readableName = getReadableAssetName(src);

        return {
          src,
          alt: {
            pt: `Apresentação vertical de branding ${readableName}`,
            en: `Vertical branding presentation ${readableName}`,
            es: `Presentación vertical de branding ${readableName}`
          },
          width: dimensions.width,
          height: dimensions.height
        };
      })
    );

    if (items.length) {
      brandingGalleryItems = items;
    }
  } catch (error) {
    return brandingGalleryItems;
  }

  return brandingGalleryItems;
}

function getLanguagePack() {
  return translations[currentLanguage] || translations.pt;
}

function getSportsItemText(item, key) {
  const value = item?.[key];
  if (!value || typeof value === 'string') return value;
  return value[currentLanguage] || value.pt;
}

function setNodeText(node, value) {
  if (node) {
    node.textContent = value;
  }
}

function setNodeHTML(node, value) {
  if (node) {
    node.innerHTML = value;
  }
}

function formatHeroServiceLabel(label) {
  if (window.innerWidth <= 640 && label === 'BRANDING') {
    return 'BRAN<br>DING';
  }

  return label;
}

function setListItems(items, values, iconSrc = 'public/images/icons/check-badge.svg') {
  items.forEach((item, index) => {
    if (!item || !values[index]) return;
    item.innerHTML = `<img src="${iconSrc}" alt="" />${values[index]}`;
  });
}

function getBrandingGalleryButtonOpenLabel() {
  return getLanguagePack().common.seeAbout;
}

function getThumbsGalleryButtonOpenLabel() {
  return getLanguagePack().common.seeAbout;
}

function syncLanguageButtons() {
  languageToggleButtons.forEach((button) => {
    const isActive = button.dataset.siteLanguage === currentLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function updateLpCardToggleLabels() {
  const pack = getLanguagePack();

  lpCardToggleButtons.forEach((button) => {
    const card = button.closest('.lp-card');
    const isExpanded = Boolean(card?.classList.contains('is-expanded'));
    setNodeText(button, pack.common.learnMore);
    button.setAttribute('aria-expanded', String(isExpanded));
  });
}

function updateSchedulePanelCopy() {
  if (!schedulePanel) return;

  const pack = getLanguagePack();
  setNodeText(schedulePanelTitleNode, pack.scheduleForm.title);
  setNodeText(schedulePanelSubtitleNode, pack.scheduleForm.subtitle);
  setNodeText(scheduleLabelNodes.name, pack.scheduleForm.labels.name);
  setNodeText(scheduleLabelNodes.company, pack.scheduleForm.labels.company);
  setNodeText(scheduleLabelNodes.service, pack.scheduleForm.labels.service);
  setNodeText(scheduleLabelNodes.whatsapp, pack.scheduleForm.labels.whatsapp);
  setNodeText(scheduleLabelNodes.about, pack.scheduleForm.labels.about);
  setNodeText(scheduleNextButton, pack.scheduleForm.actions.next);
  setNodeText(scheduleBackButton, pack.scheduleForm.actions.back);
  setNodeText(scheduleSubmitButton, pack.scheduleForm.submit);
  setNodeText(scheduleSuccessTitleNode, pack.scheduleForm.successTitle);
  setNodeText(scheduleSuccessTextNode, pack.scheduleForm.successText);
  setNodeText(scheduleNoteNode, pack.scheduleForm.note);

  if (scheduleNameField) {
    scheduleNameField.placeholder = pack.scheduleForm.placeholders.name;
  }

  if (scheduleCompanyField) {
    scheduleCompanyField.placeholder = pack.scheduleForm.placeholders.company;
  }

  if (scheduleServiceOptionNodes.placeholder) {
    scheduleServiceOptionNodes.placeholder.textContent = pack.scheduleForm.placeholders.service;
  }

  if (scheduleServiceOptionNodes.traffic) {
    scheduleServiceOptionNodes.traffic.textContent = pack.scheduleForm.options.traffic;
  }

  if (scheduleServiceOptionNodes.branding) {
    scheduleServiceOptionNodes.branding.textContent = pack.scheduleForm.options.branding;
  }

  if (scheduleServiceOptionNodes.landing) {
    scheduleServiceOptionNodes.landing.textContent = pack.scheduleForm.options.landing;
  }

  if (scheduleServiceOptionNodes.all) {
    scheduleServiceOptionNodes.all.textContent = pack.scheduleForm.options.all;
  }

  refreshScheduleServiceSelectOptions();

  if (scheduleWhatsappField) {
    scheduleWhatsappField.placeholder = pack.scheduleForm.placeholders.whatsapp;
  }

  syncSchedulePhoneFieldState();

  if (scheduleAboutField) {
    scheduleAboutField.placeholder = pack.scheduleForm.placeholders.about;
  }

  scheduleCloseButtons.forEach((button) => {
    if (button.classList.contains('schedule-panel-close')) {
      button.setAttribute('aria-label', pack.scheduleForm.close);
    }
  });

  updateScheduleStepUI();
}

function getScheduleStepCount() {
  return scheduleStepFields.length;
}

function getScheduleCurrentField() {
  return scheduleStepFields[scheduleCurrentStep] || null;
}

function closeScheduleServiceSelect() {
  if (!scheduleServiceSelectUI) return;

  scheduleServiceSelectUI.wrapper.classList.remove('is-open');
  scheduleServiceSelectUI.wrapper.classList.remove('is-dropup');
  scheduleServiceSelectUI.dropdown.hidden = true;
  scheduleServiceSelectUI.dropdown.classList.remove('is-floating');
  scheduleServiceSelectUI.trigger.setAttribute('aria-expanded', 'false');
}

function syncScheduleDropdownDirection(container, trigger, dropdown, dropupClass) {
  if (!container || !trigger || !dropdown) return;

  container.classList.remove(dropupClass);
  const panelInner = container.closest('.schedule-panel-inner');
  const panelRect = panelInner?.getBoundingClientRect();
  const triggerRect = trigger.getBoundingClientRect();
  const dropdownRect = dropdown.getBoundingClientRect();
  const safeTop = (panelRect?.top || 0) + 20;
  const safeBottom = (panelRect?.bottom || window.innerHeight) - 20;
  const spaceBelow = safeBottom - triggerRect.bottom;
  const spaceAbove = triggerRect.top - safeTop;

  if (dropdownRect.height > spaceBelow && spaceAbove > spaceBelow) {
    container.classList.add(dropupClass);
  }
}

function positionScheduleFloatingDropdown(container, trigger, dropdown, options = {}) {
  if (!container || !trigger || !dropdown) return;

  const host = schedulePanel || document.body;
  const {
    maxWidth = 420,
    minWidth = trigger.getBoundingClientRect().width,
    matchTriggerWidth = false
  } = options;

  if (dropdown.parentNode !== host) {
    host.appendChild(dropdown);
  }

  dropdown.hidden = false;
  dropdown.classList.add('is-floating');

  const triggerRect = trigger.getBoundingClientRect();
  const viewportPadding = 16;
  let width = matchTriggerWidth
    ? triggerRect.width
    : Math.max(minWidth, Math.min(maxWidth, Math.max(triggerRect.width, dropdown.scrollWidth + 24)));

  width = Math.min(width, window.innerWidth - (viewportPadding * 2));
  dropdown.style.width = `${width}px`;
  dropdown.style.minWidth = `${Math.min(minWidth, width)}px`;

  const dropdownRect = dropdown.getBoundingClientRect();
  const spaceBelow = window.innerHeight - triggerRect.bottom - viewportPadding;
  const spaceAbove = triggerRect.top - viewportPadding;
  const openUp = dropdownRect.height > spaceBelow && spaceAbove > spaceBelow;
  const left = Math.min(
    window.innerWidth - viewportPadding - width,
    Math.max(viewportPadding, triggerRect.left)
  );
  const top = openUp
    ? Math.max(viewportPadding, triggerRect.top - dropdownRect.height - 10)
    : Math.min(window.innerHeight - viewportPadding - dropdownRect.height, triggerRect.bottom + 10);

  dropdown.style.left = `${left}px`;
  dropdown.style.top = `${top}px`;
}

function positionActiveScheduleDropdowns() {
  if (scheduleServiceSelectUI?.wrapper.classList.contains('is-open')) {
    positionScheduleFloatingDropdown(scheduleServiceSelectUI.wrapper, scheduleServiceSelectUI.trigger, scheduleServiceSelectUI.dropdown, {
      matchTriggerWidth: true,
      maxWidth: scheduleServiceSelectUI.trigger.getBoundingClientRect().width
    });
  }

  if (schedulePhoneUI?.country.classList.contains('is-open')) {
    positionScheduleFloatingDropdown(schedulePhoneUI.country, schedulePhoneUI.trigger, schedulePhoneUI.dropdown, {
      minWidth: schedulePhoneUI.trigger.getBoundingClientRect().width,
      maxWidth: 420
    });
  }
}

function syncScheduleServiceSelectState() {
  if (!scheduleServiceSelectUI) return;

  const { select, wrapper, triggerText, options } = scheduleServiceSelectUI;
  const selectedOption = Array.from(select.options).find((option) => option.value === select.value);
  const placeholderOption = select.options[0] || null;
  const hasValue = Boolean(select.value && selectedOption);
  const label = hasValue
    ? selectedOption.textContent
    : (placeholderOption?.textContent || '');

  triggerText.textContent = label;
  triggerText.classList.toggle('is-placeholder', !hasValue);
  wrapper.classList.remove('is-invalid');

  Array.from(options.querySelectorAll('.schedule-select-option')).forEach((button) => {
    button.classList.toggle('is-selected', button.dataset.value === select.value);
  });
}

function refreshScheduleServiceSelectOptions() {
  if (!scheduleServiceSelectUI) return;

  const { select, options } = scheduleServiceSelectUI;
  options.innerHTML = '';

  Array.from(select.options).forEach((option) => {
    if (option.disabled && !option.value) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'schedule-select-option';
    button.dataset.value = option.value;
    button.textContent = option.textContent;
    button.classList.toggle('is-selected', option.selected);
    button.addEventListener('click', () => {
      select.value = option.value;
      select.dispatchEvent(new Event('input', { bubbles: true }));
      select.dispatchEvent(new Event('change', { bubbles: true }));
      syncScheduleServiceSelectState();
      closeScheduleServiceSelect();
      scheduleNextButton?.focus();
    });
    options.appendChild(button);
  });

  syncScheduleServiceSelectState();
}

function initScheduleServiceSelect() {
  if (!scheduleServiceField || scheduleServiceSelectUI) return;

  const field = scheduleServiceField.closest('.schedule-field');
  if (!field) return;

  field.classList.add('schedule-field--service');
  scheduleServiceField.classList.add('schedule-service-native');

  const wrapper = document.createElement('div');
  wrapper.className = 'schedule-select';

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'schedule-select-trigger';
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('data-schedule-focus-target', 'service');

  const triggerText = document.createElement('span');
  triggerText.className = 'schedule-select-trigger-text';
  trigger.appendChild(triggerText);

  const dropdown = document.createElement('div');
  dropdown.className = 'schedule-select-dropdown';
  dropdown.hidden = true;

  const options = document.createElement('div');
  options.className = 'schedule-select-options';
  dropdown.appendChild(options);

  wrapper.appendChild(trigger);
  scheduleServiceField.insertAdjacentElement('afterend', wrapper);
  (schedulePanel || document.body).appendChild(dropdown);

  scheduleServiceSelectUI = { field, select: scheduleServiceField, wrapper, trigger, triggerText, dropdown, options };

  refreshScheduleServiceSelectOptions();

  trigger.addEventListener('click', () => {
    const shouldOpen = !wrapper.classList.contains('is-open');
    closeScheduleServiceSelect();

    if (!shouldOpen) return;

    wrapper.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    positionScheduleFloatingDropdown(wrapper, trigger, dropdown, {
      matchTriggerWidth: true,
      maxWidth: trigger.getBoundingClientRect().width
    });
  });

  trigger.addEventListener('keydown', (event) => {
    if (!['Enter', ' ', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    trigger.click();
    options.querySelector('.schedule-select-option')?.focus();
  });

  scheduleServiceField.addEventListener('change', syncScheduleServiceSelectState);

  document.addEventListener('pointerdown', (event) => {
    if (!scheduleServiceSelectUI) return;
    if (wrapper.contains(event.target) || dropdown.contains(event.target)) return;
    closeScheduleServiceSelect();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    closeScheduleServiceSelect();
  });
}

function getSchedulePhoneCountry(key) {
  return SCHEDULE_PHONE_COUNTRIES.find((country) => country.key === key) || SCHEDULE_PHONE_COUNTRIES[0];
}

function extractPhoneDigits(value) {
  return String(value || '').replace(/\D+/g, '');
}

function formatSchedulePhoneDigits(countryKey, digits) {
  const clean = extractPhoneDigits(digits);

  if (countryKey === 'br') {
    if (!clean) return '';
    if (clean.length <= 2) return `(${clean}`;
    if (clean.length <= 7) return `(${clean.slice(0, 2)}) ${clean.slice(2)}`;
    return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7, 11)}`;
  }

  if (countryKey === 'pt' || countryKey === 'es') {
    return clean.replace(/(\d{3})(?=\d)/g, '$1 ').trim();
  }

  if (countryKey === 'us' || countryKey === 'ca') {
    if (!clean) return '';
    if (clean.length <= 3) return `(${clean}`;
    if (clean.length <= 6) return `(${clean.slice(0, 3)}) ${clean.slice(3)}`;
    return `(${clean.slice(0, 3)}) ${clean.slice(3, 6)}-${clean.slice(6, 10)}`;
  }

  if (countryKey === 'ar') {
    if (clean.length <= 2) return clean;
    if (clean.length <= 6) return `${clean.slice(0, 2)} ${clean.slice(2)}`;
    return `${clean.slice(0, 2)} ${clean.slice(2, 6)}-${clean.slice(6, 10)}`;
  }

  if (countryKey === 'uy') {
    if (clean.length <= 2) return clean;
    if (clean.length <= 5) return `${clean.slice(0, 2)} ${clean.slice(2)}`;
    return `${clean.slice(0, 2)} ${clean.slice(2, 5)} ${clean.slice(5, 8)}`;
  }

  if (countryKey === 'co' || countryKey === 've') {
    if (clean.length <= 3) return clean;
    if (clean.length <= 6) return `${clean.slice(0, 3)} ${clean.slice(3)}`;
    return `${clean.slice(0, 3)} ${clean.slice(3, 6)} ${clean.slice(6, 10)}`;
  }

  if (countryKey === 'ec') {
    if (clean.length <= 2) return clean;
    if (clean.length <= 5) return `${clean.slice(0, 2)} ${clean.slice(2)}`;
    return `${clean.slice(0, 2)} ${clean.slice(2, 5)} ${clean.slice(5, 9)}`;
  }

  if (countryKey === 'fr') {
    return clean.replace(/(\d)(?=\d)/g, '$1 ').trim();
  }

  if (countryKey === 'gb') {
    if (clean.length <= 4) return clean;
    if (clean.length <= 7) return `${clean.slice(0, 4)} ${clean.slice(4)}`;
    return `${clean.slice(0, 4)} ${clean.slice(4, 7)} ${clean.slice(7, 10)}`;
  }

  return clean;
}

function updateSchedulePhoneFieldValidity() {
  if (!schedulePhoneUI || !scheduleWhatsappField) return true;

  const country = getSchedulePhoneCountry(schedulePhoneUI.countryKey);
  const digits = extractPhoneDigits(scheduleWhatsappField.value);

  if (!digits.length) {
    scheduleWhatsappField.setCustomValidity('');
    return false;
  }

  const isComplete = digits.length === country.digits;
  scheduleWhatsappField.setCustomValidity(isComplete ? '' : 'Digite um número completo.');
  return isComplete;
}

function closeSchedulePhoneCountryDropdown() {
  if (!schedulePhoneUI) return;

  schedulePhoneUI.country.classList.remove('is-open');
  schedulePhoneUI.country.classList.remove('is-dropup');
  schedulePhoneUI.dropdown.hidden = true;
  schedulePhoneUI.dropdown.classList.remove('is-floating');
  schedulePhoneUI.trigger.setAttribute('aria-expanded', 'false');
}

function syncSchedulePhoneFieldState() {
  if (!schedulePhoneUI || !scheduleWhatsappField) return;

  const country = getSchedulePhoneCountry(schedulePhoneUI.countryKey);
  const digits = extractPhoneDigits(scheduleWhatsappField.value).slice(0, country.digits);
  const formatted = formatSchedulePhoneDigits(country.key, digits);

  schedulePhoneUI.flag.textContent = country.flag;
  schedulePhoneUI.code.textContent = country.dial;
  schedulePhoneUI.trigger.setAttribute('aria-label', `${country.label} ${country.dial}`);
  scheduleWhatsappField.value = formatted;
  scheduleWhatsappField.placeholder = country.placeholder;
  scheduleWhatsappField.maxLength = country.placeholder.length;
  scheduleWhatsappField.dataset.phoneCountry = country.key;

  Array.from(schedulePhoneUI.options.querySelectorAll('.schedule-phone-option')).forEach((button) => {
    button.classList.toggle('is-selected', button.dataset.value === country.key);
  });

  schedulePhoneUI.country.classList.remove('is-invalid');
  updateSchedulePhoneFieldValidity();
}

function setSchedulePhoneCountry(countryKey, options = {}) {
  if (!schedulePhoneUI || !scheduleWhatsappField) return;

  const { preserveDigits = true } = options;
  const nextCountry = getSchedulePhoneCountry(countryKey);
  const nextDigits = preserveDigits
    ? extractPhoneDigits(scheduleWhatsappField.value).slice(0, nextCountry.digits)
    : '';

  schedulePhoneUI.countryKey = nextCountry.key;
  scheduleWhatsappField.value = formatSchedulePhoneDigits(nextCountry.key, nextDigits);
  syncSchedulePhoneFieldState();
}

function resetSchedulePhoneField() {
  if (!schedulePhoneUI || !scheduleWhatsappField) return;

  schedulePhoneUI.countryKey = 'br';
  scheduleWhatsappField.value = '';
  syncSchedulePhoneFieldState();
}

function refreshSchedulePhoneCountryOptions() {
  if (!schedulePhoneUI) return;

  schedulePhoneUI.options.innerHTML = '';

  SCHEDULE_PHONE_COUNTRIES.forEach((country) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'schedule-phone-option';
    button.dataset.value = country.key;
    button.innerHTML = `
      <span class="schedule-phone-flag" aria-hidden="true">${country.flag}</span>
      <span class="schedule-phone-option-code">${country.dial}</span>
      <span class="schedule-phone-option-label">${country.label}</span>
    `;
    button.classList.toggle('is-selected', country.key === schedulePhoneUI.countryKey);
    button.addEventListener('click', () => {
      setSchedulePhoneCountry(country.key);
      closeSchedulePhoneCountryDropdown();
      scheduleWhatsappField.focus();
    });
    schedulePhoneUI.options.appendChild(button);
  });

  syncSchedulePhoneFieldState();
}

function initSchedulePhoneField() {
  if (!scheduleWhatsappField || schedulePhoneUI) return;

  const field = scheduleWhatsappField.closest('.schedule-field');
  if (!field) return;

  const row = document.createElement('div');
  row.className = 'schedule-phone-row';

  const country = document.createElement('div');
  country.className = 'schedule-phone-country';

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'schedule-phone-country-trigger';
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');

  const flag = document.createElement('span');
  flag.className = 'schedule-phone-flag';

  const code = document.createElement('span');
  code.className = 'schedule-phone-code';

  trigger.append(flag, code);

  const dropdown = document.createElement('div');
  dropdown.className = 'schedule-phone-dropdown';
  dropdown.hidden = true;

  const options = document.createElement('div');
  options.className = 'schedule-phone-options';
  dropdown.appendChild(options);

  country.append(trigger);
  row.appendChild(country);

  scheduleWhatsappField.classList.add('schedule-phone-input');
  scheduleWhatsappField.parentNode.insertBefore(row, scheduleWhatsappField);
  row.appendChild(scheduleWhatsappField);
  (schedulePanel || document.body).appendChild(dropdown);

  schedulePhoneUI = {
    countryKey: 'br',
    row,
    country,
    trigger,
    flag,
    code,
    dropdown,
    options
  };

  refreshSchedulePhoneCountryOptions();

  trigger.addEventListener('click', () => {
    const shouldOpen = !country.classList.contains('is-open');
    closeSchedulePhoneCountryDropdown();

    if (!shouldOpen) return;

    country.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    positionScheduleFloatingDropdown(country, trigger, dropdown, {
      minWidth: trigger.getBoundingClientRect().width,
      maxWidth: 420
    });
  });

  scheduleWhatsappField.addEventListener('input', () => {
    const activeCountry = getSchedulePhoneCountry(schedulePhoneUI.countryKey);
    const digits = extractPhoneDigits(scheduleWhatsappField.value).slice(0, activeCountry.digits);
    scheduleWhatsappField.value = formatSchedulePhoneDigits(activeCountry.key, digits);
    updateSchedulePhoneFieldValidity();
    schedulePhoneUI.country.classList.remove('is-invalid');
  });

  document.addEventListener('pointerdown', (event) => {
    if (!schedulePhoneUI) return;
    if (schedulePhoneUI.row.contains(event.target) || dropdown.contains(event.target)) return;
    closeSchedulePhoneCountryDropdown();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    closeSchedulePhoneCountryDropdown();
  });

  window.addEventListener('resize', positionActiveScheduleDropdowns);
  document.addEventListener('scroll', positionActiveScheduleDropdowns, true);
}

function focusScheduleCurrentField() {
  const field = getScheduleCurrentField();
  const control = field?.querySelector('[data-schedule-focus-target], input, textarea, select');
  control?.focus();
}

function updateScheduleStepUI() {
  if (!scheduleForm || !scheduleStepFields.length) return;

  const total = getScheduleStepCount();
  const isComplete = scheduleForm.classList.contains('is-complete');
  const pack = getLanguagePack();

  scheduleStepFields.forEach((field, index) => {
    const isActive = !isComplete && index === scheduleCurrentStep;
    field.hidden = !isActive;
    field.classList.toggle('is-active', isActive);
  });

  if (!getScheduleCurrentField()?.contains(scheduleServiceSelectUI?.wrapper || null)) {
    closeScheduleServiceSelect();
  }

  if (!getScheduleCurrentField()?.contains(schedulePhoneUI?.row || null)) {
    closeSchedulePhoneCountryDropdown();
  }

  const progressText = (pack.scheduleForm.progress || 'Pergunta {current} de {total}')
    .replace('{current}', String(Math.min(scheduleCurrentStep + 1, total)))
    .replace('{total}', String(total));

  if (scheduleProgressStepLabel) {
    scheduleProgressStepLabel.textContent = progressText;
  }

  if (scheduleProgressFill) {
    scheduleProgressFill.style.width = `${(Math.min(scheduleCurrentStep + 1, total) / total) * 100}%`;
  }

  if (scheduleProgress) {
    scheduleProgress.hidden = isComplete;
  }

  if (scheduleBackButton) {
    scheduleBackButton.hidden = isComplete;
    scheduleBackButton.disabled = scheduleCurrentStep === 0;
  }

  if (scheduleNextButton) {
    scheduleNextButton.hidden = isComplete || scheduleCurrentStep === total - 1;
  }

  if (scheduleSubmitButton) {
    scheduleSubmitButton.hidden = isComplete || scheduleCurrentStep !== total - 1;
  }

  if (scheduleSuccess) {
    scheduleSuccess.hidden = !isComplete;
  }
}

function resetScheduleFormFlow({ resetValues = false } = {}) {
  if (!scheduleForm) return;

  scheduleCurrentStep = 0;
  scheduleForm.classList.remove('is-complete');

  if (resetValues) {
    scheduleForm.reset();
  }

  closeScheduleServiceSelect();
  syncScheduleServiceSelectState();
  resetSchedulePhoneField();
  updateScheduleStepUI();
}

function validateScheduleCurrentField() {
  const field = getScheduleCurrentField();
  if (!field) return false;

  const controls = Array.from(field.querySelectorAll('input, textarea, select'));
  return controls.every((control) => {
    if (control.tagName === 'SELECT') {
      const isValid = Boolean(control.value);
      if (!isValid && scheduleServiceSelectUI) {
        scheduleServiceSelectUI.wrapper.classList.add('is-invalid');
        scheduleServiceSelectUI.trigger.focus();
      }
      return isValid;
    }

    if (control === scheduleWhatsappField) {
      const isValid = updateSchedulePhoneFieldValidity();
      if (!isValid && schedulePhoneUI) {
        schedulePhoneUI.country.classList.add('is-invalid');
        scheduleWhatsappField.focus();
      }
      return control.reportValidity();
    }

    return control.reportValidity();
  });
}

function goToScheduleStep(nextStep) {
  if (!scheduleStepFields.length) return;

  scheduleCurrentStep = Math.max(0, Math.min(nextStep, scheduleStepFields.length - 1));
  updateScheduleStepUI();
  window.setTimeout(focusScheduleCurrentField, 40);
}

function completeScheduleFormFlow() {
  if (!scheduleForm) return;

  scheduleForm.classList.add('is-complete');
  updateScheduleStepUI();
}

function setSchedulePanelOpen(isOpen) {
  if (!schedulePanel) return;

  schedulePanel.classList.toggle('is-open', isOpen);
  schedulePanel.setAttribute('aria-hidden', String(!isOpen));
  document.body.classList.toggle('schedule-panel-open', isOpen);

  if (isOpen) {
    if (scheduleForm?.classList.contains('is-complete')) {
      resetScheduleFormFlow({ resetValues: true });
    } else {
      updateScheduleStepUI();
    }

    window.setTimeout(() => {
      focusScheduleCurrentField();
    }, 220);
    return;
  }

  if (scheduleForm?.classList.contains('is-complete')) {
    window.setTimeout(() => resetScheduleFormFlow({ resetValues: true }), 180);
  }

  scheduleLastTrigger?.focus?.();
}

function openSchedulePanel(trigger) {
  scheduleLastTrigger = trigger || document.activeElement;
  setSchedulePanelOpen(true);
}

function closeSchedulePanel() {
  setSchedulePanelOpen(false);
}

function stopHeroServiceTicker() {
  if (!heroServiceTickerTimer) return;

  clearInterval(heroServiceTickerTimer);
  heroServiceTickerTimer = null;
}

function updateHeroServiceTicker(forceReset = false) {
  if (!heroServiceItems.length) return;

  document.querySelector('.hero-services')?.classList.add('is-ticker-ready');

  if (forceReset || heroServiceTickerIndex >= heroServiceItems.length) {
    heroServiceTickerIndex = 0;
  }

  heroServiceItems.forEach((item, index) => {
    item.classList.toggle('is-active', index === heroServiceTickerIndex);
  });
}

function startHeroServiceTicker(forceReset = false) {
  stopHeroServiceTicker();
  updateHeroServiceTicker(forceReset);

  if (prefersReducedMotion.matches || heroServiceItems.length < 2) return;

  heroServiceTickerTimer = window.setInterval(() => {
    heroServiceTickerIndex = (heroServiceTickerIndex + 1) % heroServiceItems.length;
    updateHeroServiceTicker();
  }, 3200);
}

function applyLanguage(nextLanguage) {
  currentLanguage = translations[nextLanguage] ? nextLanguage : 'pt';
  const pack = getLanguagePack();

  DEFAULT_BRANDING_BUTTON_LABEL = pack.featureButtons.branding;
  DEFAULT_THUMBS_BUTTON_LABEL = pack.featureButtons.thumbs;
  document.documentElement.lang = pack.documentLang;
  document.title = pack.title;

  navLinks.forEach((link, index) => setNodeText(link, pack.nav[index]));
  heroActionButtons.forEach((button, index) => setNodeText(button, pack.heroButtons[index]));
  heroServiceItems.forEach((item, index) => setNodeHTML(item, formatHeroServiceLabel(pack.heroServices[index])));
  heroServiceTickerIndex = 0;
  setNodeText(aboutTitleNode, pack.about.title);
  setNodeText(aboutSubtitleNode, pack.about.subtitle);
  aboutTextNodes.forEach((node, index) => setNodeText(node, pack.about.paragraphs[index]));
  servicePillItems.forEach((item, index) => {
    item.innerHTML = `<span class="service-pill-label">${pack.servicePills[index]}</span>`;
  });

  setNodeHTML(featureHooks.branding, pack.featureHooks.branding);
  setNodeHTML(featureHooks.thumbs, pack.featureHooks.thumbs);
  setNodeHTML(featureHooks.social, pack.featureHooks.social);

  setNodeHTML(featureCardTitleNodes.branding, pack.featureCardTitles.branding);
  setNodeHTML(featureCardTitleNodes.thumbs, pack.featureCardTitles.thumbs);
  setNodeHTML(featureCardTitleNodes.social, pack.featureCardTitles.social);

  setListItems(featureListNodes.branding, pack.featureLists.branding);
  setListItems(featureListNodes.thumbs, pack.featureLists.thumbs);
  setListItems(featureListNodes.social, pack.featureLists.social);

  setNodeText(featureActionButtons.brandingPrimary, pack.common.contact);
  setNodeText(featureActionButtons.thumbsPrimary, pack.common.contact);
  setNodeText(featureActionButtons.socialPrimary, pack.common.contact);
  setNodeText(featureActionButtons.brandingSecondary, brandingSection?.classList.contains('is-gallery-active') ? getBrandingGalleryButtonOpenLabel() : pack.featureButtons.branding);
  setNodeText(featureActionButtons.thumbsSecondary, thumbsSection?.classList.contains('is-gallery-active') ? getThumbsGalleryButtonOpenLabel() : pack.featureButtons.thumbs);
  setNodeText(featureActionButtons.socialSecondary, pack.featureButtons.social);

  sportsActionButtons.forEach((button, index) => setNodeText(button, pack.sportsButtons[index]));
  lpTitleNodes.forEach((title, index) => setNodeHTML(title, pack.lpTitles[index]));
  lpHookNodes.forEach((hook, index) => setNodeHTML(hook, pack.lpHooks[index]));
  lpCardTitleNodes.forEach((title, index) => setNodeText(title, pack.lpCardTitles[index]));
  lpListNodes.forEach((list, listIndex) => setListItems(list, pack.lpLists[listIndex]));
  lpButtons.forEach((button) => setNodeText(button, pack.common.scheduleCall));
  setNodeText(faqKickerNode, pack.faq.kicker);
  setNodeText(faqTitleNode, pack.faq.title);
  setNodeText(faqIntroNode, pack.faq.intro);
  faqQuestionNodes.forEach((node, index) => setNodeText(node, pack.faq.questions[index]));
  faqAnswerNodes.forEach((node, index) => setNodeText(node, pack.faq.answers[index]));

  footerLabels.forEach((label, index) => setNodeText(label, pack.footerLabels[index]));
  setNodeText(footerButtons[0], pack.common.portfolio);
  setNodeText(footerButtons[1], pack.common.contact);
  setNodeText(footerBottom, pack.footerBottom);

  syncLanguageButtons();
  updateLpCardToggleLabels();
  updateSchedulePanelCopy();
  startHeroServiceTicker(true);
  runSafely('apply language sports track', renderTrack);
  runSafely('apply language branding gallery', restartBrandingGallery);
  runSafely('apply language thumbs gallery', restartThumbsGallery);

  try {
    window.localStorage.setItem('siteLanguage', currentLanguage);
  } catch (error) {
    // Ignore storage issues in restricted contexts.
  }
}

function initLanguageControls() {
  languageToggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetLanguage = button.dataset.siteLanguage || 'pt';
      applyLanguage(targetLanguage);
    });
  });

  let savedLanguage = 'pt';
  try {
    savedLanguage = window.localStorage.getItem('siteLanguage') || 'pt';
  } catch (error) {
    savedLanguage = 'pt';
  }

  applyLanguage(savedLanguage);
}

function initLpCards() {
  lpCardToggleButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const card = button.closest('.lp-card');
      if (!card) return;

      card.classList.toggle('is-expanded');
      updateLpCardToggleLabels();
    });
  });

  lpCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('.lp-card-toggle')) return;
      if (!card.classList.contains('is-expanded')) return;

      card.classList.remove('is-expanded');
      updateLpCardToggleLabels();
    });
  });

  updateLpCardToggleLabels();
}

function initSchedulePanel() {
  if (!schedulePanel || !scheduleForm) return;

  initScheduleServiceSelect();
  initSchedulePhoneField();
  resetScheduleFormFlow();

  scheduleOpenButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      openSchedulePanel(button);
    });
  });

  scheduleCloseButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      closeSchedulePanel();
    });
  });

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-schedule-open]');
    if (!trigger) return;

    event.preventDefault();
    openSchedulePanel(trigger);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !schedulePanel.classList.contains('is-open')) return;
    closeSchedulePanel();
  });

  scheduleNextButton?.addEventListener('click', (event) => {
    event.preventDefault();
    if (!validateScheduleCurrentField()) return;
    goToScheduleStep(scheduleCurrentStep + 1);
  });

  scheduleBackButton?.addEventListener('click', (event) => {
    event.preventDefault();
    goToScheduleStep(scheduleCurrentStep - 1);
  });

  scheduleStepFields.forEach((field) => {
    const control = field.querySelector('input, select, textarea');
    if (!control || control.tagName === 'TEXTAREA') return;

    control.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      event.preventDefault();

      if (scheduleCurrentStep === scheduleStepFields.length - 1) {
        scheduleForm.requestSubmit();
        return;
      }

      if (!validateScheduleCurrentField()) return;
      goToScheduleStep(scheduleCurrentStep + 1);
    });
  });

  scheduleForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validateScheduleCurrentField() || !scheduleForm.reportValidity()) return;
    completeScheduleFormFlow();
  });
}

function getVisibleSlides() {
  if (window.innerWidth <= 560) return 1;
  if (window.innerWidth <= 860) return 2;
  return 4;
}

function getFeatureTitleTravel() {
  if (window.innerWidth <= 560) return 36;
  if (window.innerWidth <= 860) return 52;
  if (window.innerWidth <= 1120) return 86;
  return 126;
}

function observeMotionElement(element) {
  if (!element) return;

  if (!motionObserver) {
    element.classList.add('is-visible');
    return;
  }

  motionObserver.observe(element);
}

function setMotion(element, classes, delay = 0) {
  if (!element) return;

  element.classList.add('motion-reveal');
  classes
    .split(' ')
    .filter(Boolean)
    .forEach((className) => element.classList.add(className));
  element.style.setProperty('--motion-delay', `${delay}ms`);
  observeMotionElement(element);
}

function setMotionGroup(elements, classes, options = {}) {
  const { baseDelay = 0, stagger = 80 } = options;

  Array.from(elements).forEach((element, index) => {
    setMotion(element, classes, baseDelay + index * stagger);
  });
}

function initMotionSystem() {
  document.querySelectorAll('.nav-links li').forEach((item, index) => {
    item.style.setProperty('--item-index', index);
  });

  setMotionGroup(document.querySelectorAll('.hero-services li'), 'motion-up motion-soft', {
    baseDelay: 240,
    stagger: 42
  });
  setMotionGroup(document.querySelectorAll('.hero-actions .btn'), 'motion-up', {
    baseDelay: 350,
    stagger: 70
  });
  setMotionGroup(document.querySelectorAll('.service-pill'), 'motion-up motion-soft', {
    baseDelay: 90,
    stagger: 70
  });

  const aboutSection = document.querySelector('.about-section');
  if (aboutSection) {
    setMotionGroup(aboutSection.querySelectorAll('.about-head > *'), 'motion-up motion-soft', {
      baseDelay: 40,
      stagger: 84
    });
    setMotion(aboutSection.querySelector('.about-photo-wrap'), 'motion-left motion-soft', 130);
    setMotionGroup(aboutSection.querySelectorAll('.about-copy p'), 'motion-right motion-soft', {
      baseDelay: 170,
      stagger: 90
    });
  }

  document.querySelectorAll('.feature-section').forEach((section) => {
    const directionClass = section.classList.contains('feature-section-right') ? 'motion-right' : 'motion-left';

    setMotionGroup(
      section.querySelectorAll('.feature-hook, .feature-body, .feature-line, .feature-card'),
      `${directionClass} motion-soft`,
      {
        baseDelay: 40,
        stagger: 92
      }
    );

    setMotionGroup(section.querySelectorAll('.feature-actions .btn'), 'motion-up motion-soft', {
      baseDelay: 140,
      stagger: 72
    });
  });

  setMotion(document.querySelector('.sports-carousel-shell'), 'motion-up motion-soft', 90);
  setMotion(document.querySelector('.sports-caption-track'), 'motion-up motion-soft', 180);
  setMotionGroup(document.querySelectorAll('.sports-actions .btn'), 'motion-up motion-soft', {
    baseDelay: 260,
    stagger: 72
  });

  document.querySelectorAll('.lp-column').forEach((column, index) => {
    const directionClass = index === 0 ? 'motion-left' : 'motion-right';
    setMotionGroup(column.children, `${directionClass} motion-soft`, {
      baseDelay: 50,
      stagger: 88
    });
  });

  const lpFaq = document.querySelector('.lp-faq');
  if (lpFaq) {
    setMotion(lpFaq.querySelector('.lp-faq-head'), 'motion-up motion-soft', 140);
    setMotionGroup(lpFaq.querySelectorAll('.lp-faq-list > *'), 'motion-up motion-soft', {
      baseDelay: 220,
      stagger: 68
    });
  }

}

function stopBrandingPan() {
  if (brandingPanFrameId) {
    cancelAnimationFrame(brandingPanFrameId);
    brandingPanFrameId = null;
  }

  brandingPanLastTime = 0;
}

function resetBrandingGalleryMotionState() {
  if (brandingTransitionResetId) {
    clearTimeout(brandingTransitionResetId);
    brandingTransitionResetId = null;
  }

  if (!brandingGallery) return;

  brandingGallery.classList.remove('is-moving-next', 'is-moving-prev');
  brandingGallerySlides.forEach((slide) => {
    slide.classList.remove('is-pre-enter', 'is-leaving');
  });
}

function updateBrandingSwapGeometry() {
  if (!brandingSection) return;

  const brandingInner = brandingSection.querySelector('.feature-inner');
  const brandingContent = brandingSection.querySelector('.feature-content');
  const brandingWatermark = brandingSection.querySelector('.feature-watermark');
  const brandingWordmark = brandingSection.querySelector('.feature-watermark-wordmark');

  if (!brandingInner || !brandingContent || !brandingWatermark || !brandingWordmark) return;

  if (window.innerWidth <= 860) {
    brandingSection.style.setProperty('--branding-content-shift-open', '0px');
    brandingSection.style.setProperty('--branding-watermark-shift-open', '0px');
    return;
  }

  const innerWidth = brandingInner.getBoundingClientRect().width;
  const contentWidth = brandingContent.getBoundingClientRect().width;
  const sectionWidth = brandingSection.getBoundingClientRect().width;
  const wordmarkWidth = brandingWordmark.getBoundingClientRect().width;
  const watermarkBaseLeft = parseFloat(getComputedStyle(brandingWatermark).left) || 0;
  const galleryInset = clamp(innerWidth * 0.062, 74, 118);
  const wordmarkOverflow = clamp(sectionWidth * 0.048, 88, 132);
  const contentShift = -(innerWidth - contentWidth - galleryInset);
  const watermarkShift = sectionWidth - wordmarkWidth + wordmarkOverflow - watermarkBaseLeft;

  brandingSection.style.setProperty('--branding-content-shift-open', `${contentShift.toFixed(2)}px`);
  brandingSection.style.setProperty('--branding-watermark-shift-open', `${watermarkShift.toFixed(2)}px`);
}

function updateThumbsSwapGeometry() {
  if (!thumbsSection) return;

  const thumbsInner = thumbsSection.querySelector('.feature-inner');
  const thumbsContent = thumbsSection.querySelector('.feature-content');
  const thumbsWatermark = thumbsSection.querySelector('.feature-watermark');

  if (!thumbsInner || !thumbsContent || !thumbsWatermark) return;

  if (window.innerWidth <= 860) {
    thumbsSection.style.setProperty('--thumbs-content-shift-open', '0px');
    thumbsSection.style.setProperty('--thumbs-watermark-shift-open', '0px');
    return;
  }

  const innerWidth = thumbsInner.getBoundingClientRect().width;
  const contentWidth = thumbsContent.getBoundingClientRect().width;
  const sectionWidth = thumbsSection.getBoundingClientRect().width;
  const watermarkWidth = thumbsWatermark.getBoundingClientRect().width;
  const watermarkBaseRight = parseFloat(getComputedStyle(thumbsWatermark).right) || 0;
  const galleryInset = clamp(innerWidth * 0.062, 74, 118);
  const wordmarkOverflow = clamp(sectionWidth * 0.048, 88, 132);
  const horizontalOffset = clamp(innerWidth * 0.072, 58, 96);
  const contentShift = innerWidth - contentWidth - galleryInset - horizontalOffset;
  const currentLeft = sectionWidth - watermarkWidth - watermarkBaseRight;
  const desiredLeft = -wordmarkOverflow;
  const watermarkShift = desiredLeft - currentLeft;

  thumbsSection.style.setProperty('--thumbs-content-shift-open', `${contentShift.toFixed(2)}px`);
  thumbsSection.style.setProperty('--thumbs-watermark-shift-open', `${watermarkShift.toFixed(2)}px`);
}

function setBrandingGalleryExpanded(isExpanded) {
  if (brandingSection) {
    brandingSection.classList.toggle('is-gallery-active', isExpanded);
  }

  if (brandingGallery) {
    brandingGallery.setAttribute('aria-hidden', String(!isExpanded));
  }

  brandingGalleryTriggers.forEach((trigger) => {
    trigger.setAttribute('aria-expanded', String(isExpanded));
  });

  if (brandingGalleryButton) {
    brandingGalleryButton.textContent = isExpanded ? getBrandingGalleryButtonOpenLabel() : DEFAULT_BRANDING_BUTTON_LABEL;
  }
}

function getBrandingGalleryViewport() {
  return brandingGalleryViewport;
}

function getBrandingGalleryOverflow(item) {
  const viewport = getBrandingGalleryViewport();
  if (!viewport) return 0;

  const viewportWidth = viewport.clientWidth || viewport.getBoundingClientRect().width;
  const viewportHeight = viewport.clientHeight || viewport.getBoundingClientRect().height;

  if (!viewportWidth || !viewportHeight) return 0;

  const scaledHeight = viewportWidth * (item.height / item.width);
  return Math.max(0, scaledHeight - viewportHeight);
}

function getBrandingGalleryDuration(overflow) {
  return Math.round(clamp(overflow * 4.3 + 14000, 18000, 34000));
}

function updateBrandingGalleryPreviews(index) {
  const totalItems = brandingGalleryItems.length;
  if (!totalItems) return;

  const previousItem = brandingGalleryItems[(index - 1 + totalItems) % totalItems];
  const nextItem = brandingGalleryItems[(index + 1) % totalItems];

  (brandingGalleryPrevPreviewImages || []).forEach((image) => {
    image.src = previousItem.src;
    image.alt = getSportsItemText(previousItem, 'alt');
  });

  (brandingGalleryNextPreviewImages || []).forEach((image) => {
    image.src = nextItem.src;
    image.alt = getSportsItemText(nextItem, 'alt');
  });
}

function getActiveBrandingSlide() {
  return brandingGalleryActiveSlide >= 0 ? brandingGallerySlides[brandingGalleryActiveSlide] : null;
}

function applyBrandingPanOffset(offset) {
  const activeSlide = getActiveBrandingSlide();
  if (!activeSlide) return;

  const image = activeSlide.querySelector('img');
  brandingPanOffset = clamp(offset, brandingPanTarget, 0);
  image.style.transform = `translate3d(0, ${brandingPanOffset}px, 0)`;
}

function finishBrandingPan() {
  stopBrandingPan();
  applyBrandingPanOffset(brandingPanTarget);
}

function animateBrandingPan(timestamp) {
  if (!getActiveBrandingSlide()) return;

  if (!brandingPanLastTime) {
    brandingPanLastTime = timestamp;
  }

  const deltaSeconds = (timestamp - brandingPanLastTime) / 1000;
  brandingPanLastTime = timestamp;
  const nextOffset = brandingPanOffset - brandingPanSpeed * deltaSeconds;

  if (nextOffset <= brandingPanTarget) {
    finishBrandingPan();
    return;
  }

  applyBrandingPanOffset(nextOffset);
  brandingPanFrameId = requestAnimationFrame(animateBrandingPan);
}

function startBrandingPan() {
  stopBrandingPan();

  if (prefersReducedMotion.matches || brandingPanTarget === 0) {
    return;
  }

  if (brandingPanOffset <= brandingPanTarget + 0.5) {
    finishBrandingPan();
    return;
  }

  brandingPanFrameId = requestAnimationFrame(animateBrandingPan);
}

function setBrandingGallerySlide(index, direction = 'next') {
  if (!brandingGallerySlides.length) return;

  const totalItems = brandingGalleryItems.length;
  const normalizedIndex = ((index % totalItems) + totalItems) % totalItems;
  const item = brandingGalleryItems[normalizedIndex];
  const overflow = getBrandingGalleryOverflow(item);
  const duration = prefersReducedMotion.matches ? 0 : getBrandingGalleryDuration(overflow);
  const incomingSlot = brandingGalleryActiveSlide === 0 ? 1 : 0;
  const incomingSlide = brandingGallerySlides[incomingSlot];
  const outgoingSlide = brandingGalleryActiveSlide >= 0 ? brandingGallerySlides[brandingGalleryActiveSlide] : null;
  const incomingImage = incomingSlide.querySelector('img');

  stopBrandingPan();
  resetBrandingGalleryMotionState();
  incomingSlide.classList.remove('is-visible');
  incomingSlide.classList.add('is-pre-enter');
  incomingImage.src = item.src;
  incomingImage.alt = getSportsItemText(item, 'alt');
  incomingImage.style.transform = 'translate3d(0, 0, 0)';
  brandingPanTarget = -overflow;
  brandingPanOffset = 0;
  brandingPanSpeed = duration > 0 ? overflow / (duration / 1000) : 0;
  updateBrandingGalleryPreviews(normalizedIndex);

  if (brandingGallery) {
    brandingGallery.classList.add(direction === 'prev' ? 'is-moving-prev' : 'is-moving-next');
  }

  requestAnimationFrame(() => {
    if (outgoingSlide) {
      outgoingSlide.classList.remove('is-visible');
      outgoingSlide.classList.add('is-leaving');
    }

    incomingSlide.classList.add('is-visible');
    incomingSlide.classList.remove('is-pre-enter');
    brandingGalleryActiveSlide = incomingSlot;
    brandingGalleryIndex = normalizedIndex;
    applyBrandingPanOffset(0);
    startBrandingPan();

    brandingTransitionResetId = window.setTimeout(() => {
      resetBrandingGalleryMotionState();
    }, 820);
  });
}

function activateBrandingGallery() {
  if (!brandingSection || !brandingGallery) return;

  const isAlreadyActive = brandingSection.classList.contains('is-gallery-active');
  setBrandingGalleryExpanded(true);

  if (isAlreadyActive) return;

  brandingGalleryIndex = 0;
  brandingGalleryActiveSlide = -1;
  setBrandingGallerySlide(brandingGalleryIndex, 'next');
}

function deactivateBrandingGallery() {
  if (!brandingSection || !brandingSection.classList.contains('is-gallery-active')) return;

  stopBrandingPan();
  resetBrandingGalleryMotionState();
  brandingGallerySlides.forEach((slide) => slide.classList.remove('is-visible'));
  brandingGalleryActiveSlide = -1;
  setBrandingGalleryExpanded(false);
}

function toggleBrandingGallery() {
  if (!brandingSection) return;

  if (brandingSection.classList.contains('is-gallery-active')) {
    deactivateBrandingGallery();
    return;
  }

  activateBrandingGallery();
}

function restartBrandingGallery() {
  if (!brandingSection || !brandingSection.classList.contains('is-gallery-active')) return;

  stopBrandingPan();
  resetBrandingGalleryMotionState();
  brandingGallerySlides.forEach((slide) => slide.classList.remove('is-visible'));
  brandingGalleryActiveSlide = -1;
  setBrandingGallerySlide(brandingGalleryIndex, 'next');
}

function handleBrandingPointerDown(event) {
  if (!brandingGalleryViewport || brandingGalleryActiveSlide < 0) return;

  if (event.pointerType === 'mouse' && event.button !== 0) return;

  stopBrandingPan();
  brandingDragPointerId = event.pointerId;
  brandingDragStartY = event.clientY;
  brandingDragStartOffset = brandingPanOffset;
  brandingDragMoved = false;
  brandingGalleryViewport.classList.add('is-dragging');
  brandingGalleryViewport.setPointerCapture(event.pointerId);
}

function handleBrandingPointerMove(event) {
  if (!brandingGalleryViewport || brandingDragPointerId !== event.pointerId) return;

  const deltaY = event.clientY - brandingDragStartY;
  if (Math.abs(deltaY) > 2) {
    brandingDragMoved = true;
  }

  applyBrandingPanOffset(brandingDragStartOffset + deltaY);
}

function handleBrandingPointerEnd(event) {
  if (!brandingGalleryViewport || brandingDragPointerId !== event.pointerId) return;

  if (brandingGalleryViewport.hasPointerCapture(event.pointerId)) {
    brandingGalleryViewport.releasePointerCapture(event.pointerId);
  }

  brandingDragPointerId = null;
  brandingGalleryViewport.classList.remove('is-dragging');

  if (brandingPanOffset <= brandingPanTarget + 0.5) {
    finishBrandingPan();
    return;
  }

  startBrandingPan();
}

function initBrandingGallery() {
  updateBrandingSwapGeometry();
  setBrandingGalleryExpanded(false);

  if (brandingGallery) {
    brandingGallery.addEventListener('dragstart', (event) => {
      event.preventDefault();
    });
  }

  brandingGalleryTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      toggleBrandingGallery();
    });

    if (trigger.tagName !== 'A') {
      trigger.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;

        event.preventDefault();
        toggleBrandingGallery();
      });
    }
  });

  [brandingGalleryPrevButton, brandingGalleryNextButton].forEach((button) => {
    if (!button) return;

    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    button.addEventListener('pointerup', (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
  });

  if (brandingGalleryPrevButton) {
    brandingGalleryPrevButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      setBrandingGallerySlide(brandingGalleryIndex - 1, 'prev');
    });
  }

  if (brandingGalleryNextButton) {
    brandingGalleryNextButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      setBrandingGallerySlide(brandingGalleryIndex + 1, 'next');
    });
  }

  if (brandingGalleryViewport) {
    brandingGalleryViewport.addEventListener('pointerdown', handleBrandingPointerDown);
    brandingGalleryViewport.addEventListener('pointermove', handleBrandingPointerMove);
    brandingGalleryViewport.addEventListener('pointerup', handleBrandingPointerEnd);
    brandingGalleryViewport.addEventListener('pointercancel', handleBrandingPointerEnd);
  }
}

function stopThumbsGalleryAutoplay() {
  if (!thumbsGalleryTimer) return;

  window.clearTimeout(thumbsGalleryTimer);
  thumbsGalleryTimer = null;
}

function setThumbsGalleryExpanded(isExpanded) {
  if (thumbsSection) {
    thumbsSection.classList.toggle('is-gallery-active', isExpanded);
  }

  if (thumbsGallery) {
    thumbsGallery.setAttribute('aria-hidden', String(!isExpanded));
  }

  thumbsGalleryTriggers.forEach((trigger) => {
    trigger.setAttribute('aria-expanded', String(isExpanded));
  });

  if (thumbsGalleryButton) {
    thumbsGalleryButton.textContent = isExpanded ? getThumbsGalleryButtonOpenLabel() : DEFAULT_THUMBS_BUTTON_LABEL;
  }
}

function updateThumbsGallerySlides() {
  if (!thumbsGalleryTrack) return;

  const slides = Array.from(thumbsGalleryTrack.children);
  if (!slides.length) return;

  const activeIndex = ((thumbsGalleryIndex % slides.length) + slides.length) % slides.length;
  const previousIndex = (activeIndex - 1 + slides.length) % slides.length;
  const previewIndex = (activeIndex + 1) % slides.length;

  slides.forEach((slide, index) => {
    slide.classList.toggle('is-active', index === activeIndex);
    slide.classList.toggle('is-prev-preview', index === previousIndex);
    slide.classList.toggle('is-preview', index === previewIndex);
  });
}

function queueThumbsGalleryAutoplay() {
  stopThumbsGalleryAutoplay();

  if (
    prefersReducedMotion.matches ||
    !thumbsSection ||
    !thumbsSection.classList.contains('is-gallery-active') ||
    thumbsGalleryItems.length < 2
  ) {
    return;
  }

  thumbsGalleryTimer = window.setTimeout(() => {
    stepThumbsGallery(1);
  }, THUMBS_GALLERY_AUTOPLAY_DELAY);
}

function stepThumbsGallery(direction) {
  if (!thumbsGalleryItems.length) return;

  thumbsGalleryIndex = (thumbsGalleryIndex + direction + thumbsGalleryItems.length) % thumbsGalleryItems.length;
  updateThumbsGallerySlides();
  queueThumbsGalleryAutoplay();
}

function renderThumbsGalleryTrack() {
  if (!thumbsGalleryTrack) return;

  stopThumbsGalleryAutoplay();

  if (thumbsGalleryRenderFrameId) {
    cancelAnimationFrame(thumbsGalleryRenderFrameId);
    thumbsGalleryRenderFrameId = null;
  }

  thumbsGalleryTrack.innerHTML = thumbsGalleryItems
    .map(
      (item) => `
        <figure class="thumbs-gallery-item">
          <img class="thumbs-gallery-backdrop" src="${item.src}" alt="" aria-hidden="true" draggable="false" />
          <span class="thumbs-gallery-card">
            <img class="thumbs-gallery-image" src="${item.src}" alt="${getSportsItemText(item, 'alt')}" draggable="false" />
          </span>
        </figure>
      `
    )
    .join('');

  thumbsGalleryRenderFrameId = requestAnimationFrame(() => {
    thumbsGalleryRenderFrameId = null;
    thumbsGalleryIndex = 0;
    updateThumbsGallerySlides();
    queueThumbsGalleryAutoplay();
  });
}

function activateThumbsGallery() {
  if (!thumbsSection || !thumbsGallery || !thumbsGalleryItems.length) return;

  updateThumbsSwapGeometry();
  setThumbsGalleryExpanded(true);
  renderThumbsGalleryTrack();
}

function deactivateThumbsGallery() {
  if (!thumbsSection || !thumbsSection.classList.contains('is-gallery-active')) return;

  stopThumbsGalleryAutoplay();
  setThumbsGalleryExpanded(false);
}

function toggleThumbsGallery() {
  if (!thumbsSection) return;

  if (thumbsSection.classList.contains('is-gallery-active')) {
    deactivateThumbsGallery();
    return;
  }

  activateThumbsGallery();
}

function restartThumbsGallery() {
  updateThumbsSwapGeometry();

  if (!thumbsSection || !thumbsSection.classList.contains('is-gallery-active')) return;

  renderThumbsGalleryTrack();
}

function initThumbsGallery() {
  setThumbsGalleryExpanded(false);
  updateThumbsSwapGeometry();

  if (thumbsGallery) {
    thumbsGallery.addEventListener('dragstart', (event) => {
      event.preventDefault();
    });
  }

  thumbsGalleryTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      toggleThumbsGallery();
    });

    if (trigger.tagName !== 'A') {
      trigger.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;

        event.preventDefault();
        toggleThumbsGallery();
      });
    }
  });

  [thumbsGalleryPrevButton, thumbsGalleryNextButton].forEach((button) => {
    if (!button) return;

    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    button.addEventListener('pointerup', (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
  });

  if (thumbsGalleryPrevButton) {
    thumbsGalleryPrevButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      stepThumbsGallery(-1);
    });
  }

  if (thumbsGalleryNextButton) {
    thumbsGalleryNextButton.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      stepThumbsGallery(1);
    });
  }
}

function updateFeatureTitles() {
  if (!featureTitleSections.length) return;

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportCenter = viewportHeight * 0.48;
  const travel = getFeatureTitleTravel();
  const isMobileLayout = window.innerWidth <= 860;
  let activeTitle = null;
  let closestDistance = Number.POSITIVE_INFINITY;

  featureTitleSections.forEach(({ section, title }) => {
    const rect = section.getBoundingClientRect();
    const isSportsTitle = title.classList.contains('sports-title');
    const direction = title.classList.contains('feature-watermark-right') ? 1 : -1;
    const progress = clamp((viewportHeight * 0.88 - rect.top) / (viewportHeight * 0.74), 0, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const shiftX = isMobileLayout || isSportsTitle ? 0 : (1 - easedProgress) * travel * direction;
    const shiftY = isMobileLayout
      ? (1 - easedProgress) * (isSportsTitle ? Math.round(travel * 0.52) : Math.round(travel * 0.4))
      : isSportsTitle
        ? (1 - easedProgress) * Math.round(travel * 0.72)
        : 0;
    const opacity = isMobileLayout ? 1 : 0.08 + easedProgress * 0.92;
    const isVisible = rect.bottom > viewportHeight * 0.16 && rect.top < viewportHeight * 0.84;

    title.style.setProperty('--watermark-shift', `${shiftX.toFixed(2)}px`);
    title.style.setProperty('--watermark-shift-y', `${shiftY.toFixed(2)}px`);
    title.style.setProperty('--watermark-opacity', opacity.toFixed(3));
    title.classList.remove('is-active');

    if (!isVisible) return;

    const sectionCenter = rect.top + rect.height / 2;
    const distanceToCenter = Math.abs(sectionCenter - viewportCenter);

    if (distanceToCenter < closestDistance) {
      closestDistance = distanceToCenter;
      activeTitle = title;
    }
  });

  if (activeTitle) {
    activeTitle.classList.add('is-active');
  }
}

function updateScrollEffects() {
  if (navbar) {
    navbar.classList.toggle('is-scrolled', window.scrollY > 20);
  }

  updateFeatureTitles();
}

function scheduleScrollEffects() {
  if (scrollFrameId) return;

  scrollFrameId = requestAnimationFrame(() => {
    scrollFrameId = null;
    updateScrollEffects();
  });
}

function renderCaptions() {
  if (!captions) return;

  if (sportsCaptionTimer) {
    clearInterval(sportsCaptionTimer);
    sportsCaptionTimer = null;
  }

  captions.classList.add('is-single');

  if (!captions.querySelector('.sports-pill-text')) {
    captions.innerHTML = `
      <div class="sports-pill sports-pill-single">
        <img src="public/images/icons/check-badge.svg" alt="" />
        <span class="sports-pill-text"></span>
      </div>
    `;
  }

  const captionText = captions.querySelector('.sports-pill-text');
  if (!captionText) return;

  const renderSingleCaption = () => {
    const item = fixedCaptionItems[sportsCaptionIndex % fixedCaptionItems.length];
    captionText.classList.remove('is-animating');
    void captionText.offsetWidth;
    captionText.textContent = getSportsItemText(item, 'caption');
    captionText.classList.add('is-animating');
  };

  renderSingleCaption();

  if (fixedCaptionItems.length > 1) {
    sportsCaptionTimer = window.setInterval(() => {
      sportsCaptionIndex = (sportsCaptionIndex + 1) % fixedCaptionItems.length;
      renderSingleCaption();
    }, 2600);
  }
}

function normalizeMarqueeOffset(offset) {
  if (!marqueeBaseWidth) return offset;

  let normalizedOffset = offset;

  while (normalizedOffset <= -marqueeBaseWidth) {
    normalizedOffset += marqueeBaseWidth;
  }

  while (normalizedOffset > 0) {
    normalizedOffset -= marqueeBaseWidth;
  }

  return normalizedOffset;
}

function measureMarquee() {
  if (!track) return;

  const slides = Array.from(track.children);
  if (!slides.length) return;

  const baseCount = marqueeItems.length;
  const gap = parseFloat(getComputedStyle(track).gap || '0');

  marqueeBaseWidth = slides
    .slice(0, baseCount)
    .reduce((total, slide) => total + slide.getBoundingClientRect().width, 0);

  marqueeBaseWidth += gap * baseCount;
}

function applyMarqueeOffset() {
  if (!track) return;
  track.style.transform = `translate3d(${marqueeOffset}px, 0, 0)`;
}

function resetMarqueePosition() {
  marqueeOffset = normalizeMarqueeOffset(0);
  applyMarqueeOffset();
}

function stopMarquee() {
  if (marqueeFrameId) {
    cancelAnimationFrame(marqueeFrameId);
    marqueeFrameId = null;
  }
  lastFrameTime = 0;
}

function animateMarquee(timestamp) {
  if (!track || !marqueeBaseWidth) return;

  if (!lastFrameTime) {
    lastFrameTime = timestamp;
  }

  const deltaSeconds = (timestamp - lastFrameTime) / 1000;
  lastFrameTime = timestamp;

  marqueeOffset = normalizeMarqueeOffset(marqueeOffset - MARQUEE_SPEED * deltaSeconds);

  applyMarqueeOffset();
  marqueeFrameId = requestAnimationFrame(animateMarquee);
}

function startMarquee() {
  stopMarquee();
  marqueeFrameId = requestAnimationFrame(animateMarquee);
}

function renderTrack() {
  if (!track) return;

  stopMarquee();
  marqueeBaseWidth = 0;
  if (renderFrameId) {
    cancelAnimationFrame(renderFrameId);
    renderFrameId = null;
  }

  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];
  track.innerHTML = repeatedItems
    .map(
      (item) => `
        <article class="sports-slide">
          <div class="sports-card">
            <img src="${item.image}" alt="${getSportsItemText(item, 'alt')}" />
          </div>
        </article>
      `
    )
    .join('');

  renderCaptions();

  const images = Array.from(track.querySelectorAll('img'));
  let marqueeReady = false;

  const finalizeMarquee = () => {
    if (marqueeReady) return;

    if (renderFrameId) {
      cancelAnimationFrame(renderFrameId);
    }

    renderFrameId = requestAnimationFrame(() => {
      renderFrameId = null;
      measureMarquee();

      if (!marqueeBaseWidth) return;

      marqueeReady = true;
      resetMarqueePosition();
      startMarquee();
    });
  };

  finalizeMarquee();

  images.forEach((image) => {
    if (image.complete) return;

    image.addEventListener('load', finalizeMarquee, { once: true });
    image.addEventListener('error', finalizeMarquee, { once: true });
  });

  window.setTimeout(finalizeMarquee, 120);
  window.setTimeout(finalizeMarquee, 420);
}

function handleSportsPointerDown(event) {
  if (!sportsCarousel || !marqueeBaseWidth) return;

  if (event.pointerType === 'mouse' && event.button !== 0) return;

  marqueeDragPointerId = event.pointerId;
  marqueeDragStartX = event.clientX;
  marqueeDragStartOffset = marqueeOffset;
  stopMarquee();
  sportsCarousel.classList.add('is-dragging');
  sportsCarousel.setPointerCapture(event.pointerId);
}

function handleSportsPointerMove(event) {
  if (!sportsCarousel || marqueeDragPointerId !== event.pointerId) return;

  const deltaX = event.clientX - marqueeDragStartX;
  marqueeOffset = normalizeMarqueeOffset(marqueeDragStartOffset + deltaX);
  applyMarqueeOffset();
}

function handleSportsPointerEnd(event) {
  if (!sportsCarousel || marqueeDragPointerId !== event.pointerId) return;

  if (sportsCarousel.hasPointerCapture(event.pointerId)) {
    sportsCarousel.releasePointerCapture(event.pointerId);
  }

  marqueeDragPointerId = null;
  sportsCarousel.classList.remove('is-dragging');
  startMarquee();
}

function initSportsCarouselInteraction() {
  if (!sportsCarousel) return;

  sportsCarousel.addEventListener('pointerdown', handleSportsPointerDown);
  sportsCarousel.addEventListener('pointermove', handleSportsPointerMove);
  sportsCarousel.addEventListener('pointerup', handleSportsPointerEnd);
  sportsCarousel.addEventListener('pointercancel', handleSportsPointerEnd);
  sportsCarousel.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
}

window.addEventListener('resize', () => {
  if (resizeFrameId) {
    cancelAnimationFrame(resizeFrameId);
  }

  resizeFrameId = requestAnimationFrame(() => {
    resizeFrameId = null;
    runSafely('resize branding geometry', updateBrandingSwapGeometry);
    runSafely('resize thumbs geometry', updateThumbsSwapGeometry);
    runSafely('resize sports track', renderTrack);
    runSafely('resize feature titles', updateFeatureTitles);
    runSafely('resize branding gallery', restartBrandingGallery);
    runSafely('resize thumbs gallery', restartThumbsGallery);
    runSafely('resize language apply', () => applyLanguage(currentLanguage));
  });
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    runSafely('visibility hidden marquee stop', stopMarquee);
    runSafely('visibility hidden hero ticker stop', stopHeroServiceTicker);
    if (sportsCaptionTimer) {
      clearInterval(sportsCaptionTimer);
      sportsCaptionTimer = null;
    }
    runSafely('visibility hidden branding pan stop', stopBrandingPan);
    runSafely('visibility hidden thumbs autoplay stop', stopThumbsGalleryAutoplay);
  } else {
    runSafely('visibility visible marquee start', startMarquee);
    runSafely('visibility visible sports captions', renderCaptions);
    runSafely('visibility visible branding gallery', restartBrandingGallery);
    runSafely('visibility visible thumbs gallery', restartThumbsGallery);
    runSafely('visibility visible hero ticker', () => startHeroServiceTicker());
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.defaultPrevented) return;

    if (link.hasAttribute('data-branding-gallery-trigger') || link.hasAttribute('data-thumbs-gallery-trigger')) {
      return;
    }

    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 52;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});

window.addEventListener('scroll', scheduleScrollEffects, { passive: true });

runSafely('motion system init', initMotionSystem);
runSafely('sports carousel init', initSportsCarouselInteraction);
runSafely('schedule panel init', initSchedulePanel);
runSafely('language controls init', initLanguageControls);
runSafely('lp cards init', initLpCards);
runSafely('scroll effect init', updateScrollEffects);
runSafely('thumbs gallery init', initThumbsGallery);
loadBrandingGalleryItemsFromDirectory()
  .catch(() => brandingGalleryItems)
  .finally(() => {
    runSafely('branding gallery init', initBrandingGallery);
  });
