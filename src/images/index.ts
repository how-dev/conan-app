export interface Conan {
    ref: number
    title: string;
    company: string;
    history: Array<{ name: string; id: number; }>;
    totalPages: number;
    year: number;
    licensor: string;
    status: string;
    coverPrice: string;
    cover: string;
    persons: Array<{ name: string; id: number; }>;
    screenwriters: Array<{ name: string; id: number; }>;
    artists: Array<{ name: string; id: number; }>;
    finalArt: Array<{ name: string; id: number; }>;
    originalPublisher: Array<{ name: string; id: number; }>;
    description: string;
}

export let result: Conan[];
result = [
    {
        ref: 1,
        title: `O habitante das trevas`,
        company: `Minami & Cunha (M & C)`,
        history: [],
        totalPages: 36,
        year: 1972,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 1,50`,
        cover: `https://lh3.googleusercontent.com/proxy/e288cre04hSTsrpZRDjxV7jUNiUQMexLE743DG65IG81Xl7xVVs_0xXVU7gpJRZ1Bn1cON85Wf7mZmyseooUZ371iI3B-oAGIJ-oj7nBxs9TxNhPnp5_7ySDcstWMIe7dsaC3OnyFo1E0FlrGZr_6269`,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Yulek`, id: 2,},
            {name: `Rainha Fátima`, id: 3,},
            {name: `Yaila`, id: 4,},
            {name: `Habitante das Trevas`, id: 5,},
        ],
        screenwriters: [
            {name: `Roy Thomas`, id: 1,},
        ],
        artists: [
            {name: `Barry Windsor-Smith`, id: 1,},
        ],
        finalArt: [],
        originalPublisher: [
            {name: `Roy Thomas`, id: 1,},
            {name: `Len Wein`, id: 2,},
            {name: `Marv Wolfman`, id: 3,},
        ],
        description: `Publicada originalmente em Conan The Barbarian (1970) n° 12/1971 - Marvel Comics
        Título original "The Dweller in the Dark."
        Numa cidade na fronteira de Zamora, Conan conquista o amor da rainha local. Logo, porém, a paixão se transforma em ódio e o Bárbaro descobre o horror que se esconde por baixo das paredes do palácio real. Existem três versões desta HQ: a com a nudez feminina censurada (Conan the Barbarian, n° 12), a com a nudez sem censura (Savage Tales, n° 2) e com a nudez semicensurada (Savage Sword, TPB n° 12).`,
    },
    {
        ref: 2,
        title: `Teia do Deus-Aranha!`,
        company: `Minami & Cunha (M & C)`,
        history: [],
        totalPages: 36,
        year: 1972,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 1,50`,
        cover: `https://1.bp.blogspot.com/-4L0mQTBZ-OM/V4AFmjsjfII/AAAAAAAAGDw/oDtoTffPSqcfPCq6Afugwlbc-A-rruljwCLcB/s1600/ShowImage%2B%25281%2529.jpg`,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Sarkon`, id: 2,},
            {name: `Thanix`, id: 3,},
            {name: `Modar`, id: 4,},
            {name: `Tork`, id: 5,},
            {name: `Léa`, id: 6,},
            {name: `Omm (Deus-Aranha)`, id: 7,},
        ],
        screenwriters: [
            {name: `Roy Thomas`, id: 1,},
            {name: `John Jakes`, id: 2,},
        ],
        artists: [
            {name: `Barry Windsor-Smith`, id: 1,},
        ],
        finalArt: [
            {name: `Sal Buscema`, id: 1,},
        ],
        originalPublisher: [
            {name: `Stan Lee`, id: 1,},
        ],
        description: `Publicada originalmente em Conan The Barbarian (1970) n° 13/1972 - Marvel Comics
        Titulo original "Web of the Spider God!"
        Perdido no deserto, Conan chega à lendária Yezud. No entanto, em vez de uma acolhida amigável, o herói é levado para ser sacrificado a uma monstruosa divindade.`,
    },
    {
        ref: 3,
        title: `Guardiães da cripta`,
        company: `Minami & Cunha (M & C)`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 36,
        year: 1972,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 1,50`,
        cover: `https://lh3.googleusercontent.com/proxy/2d5Am9AGUH4cPAl9bJeCFl4fcb5lce59HiGTqS57gOL0TTjXh_5fcaHYFB8UiA1fDL5eMSIzmMIgCYYWgLpyFuFA5Z7KXYyxP6A-HvcDz6jR4qMHem6QtSSvsimE1t5M21_vy1xu1xQNlSZACqHnzmQE`,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Burgun`, id: 2,},
            {name: `Jenna`, id: 3,},
        ],
        screenwriters: [
            {name: `Roy Thomas`, id: 1,},
        ],
        artists: [
            {name: `Barry Windsor-Smith`, id: 1,},
        ],
        finalArt: [
            {name: `Tom Palmer`, id: 1,},
            {name: `Tom Sutton`, id: 2,},
        ],
        originalPublisher: [
            {name: `Stan Lee`, id: 1,},
        ],
        description: `Publicada originalmente em Conan The Barbarian (1970) n° 8/1971 - Marvel Comics
        Titulo original "The Keepers of the Crypt!"
        Enquanto Conan está sendo rastreado por soldados coríntios a pedido de Nemedia. Em uma cidade abandonada da Corinthia, ele encontra uma cidade abandonada, guardada por um monstro gigante de gila. Ele começa a bisbilhotar a cidade, mas fica surpreso com o reaparecimento de Burgun, aliando-se encontram um tesouro fenomenal... ferrenhamente protegido por um grupo de tenebrosos guardiões ancestrais.`,
    },
    {
        ref: 4,
        title: `Espada Selvagem de Conan, A n° 1`,
        company: `Abril`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 84,
        year: 1984,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 700,00`,
        cover: `https://image.isu.pub/180502031150-3e9a40ab1966efdaba991e4fd1cd20b2/jpg/page_1_thumb_large.jpg`,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Amalric (Malthom)`, id: 2,},
            {name: `Zuleika`, id: 3,},
            {name: `Khelru-Shan`, id: 4,},
            {name: `Mordek, O Amaldiçoado`, id: 5,},
            {name: `Aballah Bin Khor`, id: 6,},
            {name: `Ali-Bey`, id: 7,},
            {name: `Hari Bin Nasru`, id: 8,},
        ],
        screenwriters: [
            {name: `Roy Thomas`, id: 1,},
        ],
        artists: [
            {name: `John Buscema`, id: 1,},
        ],
        finalArt: [
            {name: `Alfredo Alcala`, id: 1,},
        ],
        originalPublisher: [
            {name: `Stan Lee`, id: 1,},
        ],
        description: `Publicada originalmente em Savage Sword of Conan, The (1974) n° 12/1976 - Marvel Comics
        Titulo original "The Haunters Of Castle Crimson". Adaptação de "The Slave Princess" de Howard.
        Diviso: Os Espectros do Castelo Rubro/A Herança do Terror/Barganha Entre Demônios/ O Teste de Zuleika/Choque Entre Ladrões/O Inimigo Interior/ Espadas e Espectros/Noite Vermelha.
        A escrava chamada Zuleika cruza o caminho com Conan, salvado-a, aliando-se a um amigo mercenário e elabora um plano ousado para extorquir um nobre. Porém havia uma terrível maldição oculta sob o sinistro Castelo Rubro.`,
    },
];

