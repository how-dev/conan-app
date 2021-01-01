import ref1 from "./covers/ref1.jpg";
import ref2 from "./covers/ref2.jpg";
import ref3 from "./covers/ref3.jpeg";
import ref4 from "./covers/ref4.jpg";
import ref5 from "./covers/ref5.jpeg";
import ref6 from "./covers/ref6.jpeg";
import ref7 from "./covers/ref7.jpeg";
import ref8 from "./covers/ref8.jpeg";
import ref9 from "./covers/ref9.jpeg";
import ref10 from "./covers/ref10.jpeg";
import ref11 from "./covers/ref11.jpeg";
import ref12 from "./covers/ref12.jpeg";
import ref13 from "./covers/ref13.jpeg";
import ref14 from "./covers/ref14.jpeg";

export interface Conan {
    id: number;
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
        id: 1,
        title: `O habitante das trevas`,
        company: `Minami & Cunha (M & C)`,
        history: [],
        totalPages: 36,
        year: 1972,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 1,50`,
        cover: ref1,
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
        id: 2,
        title: `Teia do Deus-Aranha!`,
        company: `Minami & Cunha (M & C)`,
        history: [],
        totalPages: 36,
        year: 1972,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 1,50`,
        cover: ref2,
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
        id: 3,
        title: `Guardiões da cripta`,
        company: `Minami & Cunha (M & C)`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 36,
        year: 1972,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 1,50`,
        cover: ref3,
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
        id: 4,
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
        cover: ref4,
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
    {
        id: 5,
        title: `Espada Selvagem de Conan, A n° 2`,
        company: `Abril`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 68,
        year: 1984,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 850,00`,
        cover: ref5,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Valéria`, id: 2,},
            {name: `Chicmec`, id: 3,},
            {name: `Techotl`, id: 4,},
        ],
        screenwriters: [
            {name: `Roy Thomas`, id: 1,},
        ],
        artists: [
            {name: `Barry Windsor-Smith`, id: 1,},
        ],
        finalArt: [
            {name: `Pablo Marcos`, id: 1,},
            {name: `Barry Windsor-Smith`, id: 2,},
        ],
        originalPublisher: [
            {name: `Roy Thomas`, id: 1,},
            {name: `Marv Wolfman`, id: 2,},
        ],
        description: `Publicada originalmente em Savage Tales (1971) n° 2/1973 - Curtis Magazines (Marvel Comics)
        Título original "Red Nails." Adaptação do conto "Red Nails" de Robert E. Howard.
        Conan encontra-se com Valéria, a linda pirata de olhos cor-do-mar. Juntos, eles enfrentaram a ameaça de um gigantesco dragão, indo acabar no castelo conecido como Suchotl, a misteriosa cidadela onde a morte rondava cada uma de suas dependências.`,
    },
    {
        id: 6,
        title: `Espada Selvagem de Conan, A n° 3`,
        company: `Abril`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 68,
        year: 1984,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 1000,00`,
        cover: ref6,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Shevatas`, id: 2,},
            {name: `Vatessa`, id: 3,},
            {name: `Yasmela`, id: 4,},
            {name: `Thespides`, id: 5,},
            {name: `Chanceler Taurus`, id: 6,},
            {name: `Amalric (Malthom)`, id: 7,},
            {name: `Fahim`, id: 8,},
            {name: `Thurga Khotan`, id: 9,},
            {name: `Tevalos`, id: 10,},
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
            {name: `Roy Thomas`, id: 1,},
            {name: `Len Wein`, id: 2,},
            {name: `Marv Wolfman`, id: 3,},
            {name: `Tony Isabella`, id: 4,},
        ],
        description: `Publicada originalmente em Savage Sword of Conan, The (1974) n° 2/1974 - Marvel Comics
        Títulos originais "Black Colossus” (4 páginas), “Hordes of the veiled one” (13 páginas) e “Chariot of the man-demon" (19 páginas).
        A libertação de Tugra Khotan (pgs 5 a 8)/As hordas do encapuzado (9 a 21)/A carruagem do demônio (22 a 40)
        Adaptação do conto "Black Colossus" de Robert E. Howard.
        Conan, o Bárbaro, enfrenta a fúria, o poder e a sede de sangue de um monstro morto a milênios que chegou à princesa Yasmela durante a noite - e que esperou por ele no deserto, sem vida, além de Khoraja!`,
    },
    {
        id: 7,
        title: `Espada Selvagem de Conan, A n° 4`,
        company: `Abril`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 68,
        year: 1984,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 1350,00`,
        cover: ref7,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Shah Amurath`, id: 2,},
            {name: `Amalrus`, id: 3,},
            {name: `Olivia`, id: 4,},
            {name: `Sergius de Khrosha`, id: 5,},
            {name: `Ivanos`, id: 6,},
            {name: `Aratus`, id: 7,},
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
            {name: `Roy Thomas`, id: 1,},
            {name: `Gerry Conway`, id: 2,},
            {name: `Len Wein`, id: 3,},
            {name: `Marv Wolfman`, id: 4,},
            {name: `Chris Claremont`, id: 5,},
            {name: `Scott Edelman`, id: 6,},
            {name: `Don McGregor`, id: 7,},
            {name: `David Anthony Kraft`, id: 8,},
            {name: `Irene Vartanoff`, id: 9,},
        ],
        description: `Publicada originalmente em Savage Sword of Conan, The (1974) n° 4/1975 - Marvel Comics
        Títulos originais "Iron shadows in the moon/What dreams may come.../The haunting and the horror".
        Adaptação do conto "Iron Shadows in the Moon" de Robert E. Howard.
        Diviso: A ilha dos desesperado (pgs 5 a 19), O templo maldito (pgs 20 a 34), Perseguição implacável pgs 35 a 49)
        Conan tem a vingança contra Shah Amurath e foge para o Mar Vilayet! Em uma ilha abandonada a morte esconde-se em muitas formas. Piratas e horrores maiores a todo instante! E Conan deve enfrentá-los toda esta noite!`,
    },
    {
        id: 8,
        title: `Espada Selvagem de Conan, A n° 5`,
        company: `Abril`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 68,
        year: 1985,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 1700,00`,
        cover: ref8,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Taramis`, id: 2,},
            {name: `Salomé`, id: 3,},
            {name: `Márcios`, id: 4,},
            {name: `Ivga, de Khauran`, id: 5,},
            {name: `Olgerd Vladislav`, id: 6,},
            {name: `Astreas`, id: 7,},
            {name: `Farrah`, id: 8,},
            {name: `Zang`, id: 9,},
            {name: `Zinn`, id: 10,},
            {name: `Zhumbanigash`, id: 11,},
        ],
        screenwriters: [
            {name: `Roy Thomas`, id: 1,},
        ],
        artists: [
            {name: `John Buscema`, id: 1,},
        ],
        finalArt: [
            {name: `Tony Dezuñiga`, id: 1,},
            {name: `The Tribe`, id: 2,},
        ],
        originalPublisher: [
            {name: `Marv Wolfman`, id: 1,},
        ],
        description: `Publicada originalmente em Savage Sword of Conan, The (1974) n° 5/1975 - Marvel Comics
    Título original "A Witch Shall Be Born". Adaptação de Robert E. H (Weird Tales de 1934).
    A maldição da lua crescente (5 a 11) Um povo traído (2 a 15) A árvore da morte (16 a 24) Carta para a Nemédia (25 a 29) Em meio às trevas (30 a 33) Os lobos do deserto (34 a 38) A voz de cristal (39 a 46) A sobra do templo (47 a 59)
    Clássica história onde Conan é crucificado por Salomé e Constatiuns. O líder Olgerd Vladislav salva Conan, alguns meses depois liderando os zuagires inicia revolução em Khauran!`,
    },
    {
        id: 9,
        title: `Espada Selvagem de Conan, A n° 6`,
        company: `Abril`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 68,
        year: 1985,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 2400,00`,
        cover: ref9,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Olgerd Vladislav`, id: 2,},
            {name: `Ahmed Mullas`, id: 3,},
            {name: `Dhira`, id: 4,},
        ],
        screenwriters: [
            {name: `Roy Thomas`, id: 1,},
        ],
        artists: [
            {name: `Sonny Trinidad`, id: 1,},
        ],
        finalArt: [],
        originalPublisher: [
            {name: `Marv Wolfman`, id: 1,},
        ],
        description: `Publicada originalmente em Savage Sword of Conan, The (1974) n° 6/1975 - Marvel Comics
        Título original “The sleeper beneath the sands”.
        Conan tomou o poder das mãos de Olgerd Vladislav, chefe da tribo Zuagir, e enviou o bandoleiro para morrer no deserto. No entanto, o ódio e a sede de vingança foram mais fortes do que a própria morte. Olgerd conseguiu sobreviver... saciar seus anseios mortais... e despertar o monstruoso Adormecido, transformando as areias escaldantes num palco de horror!`,
    },
    {
        id: 10,
        title: `Espada Selvagem de Conan, A n° 7`,
        company: `Abril`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 68,
        year: 1985,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 2600,00`,
        cover: ref10,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Mellani`, id: 2,},
            {name: `Darami`, id: 3,},
            {name: `Makkar`, id: 4,},
            {name: `Belissar Khan`, id: 5,},
            {name: `Hammad`, id: 6,},
            {name: `Kabul Nulla`, id: 7,},
            {name: `Ali Shah`, id: 8,},
        ],
        screenwriters: [
            {name: `Roy Thomas`, id: 1,},
        ],
        artists: [
            {name: `John Buscema`, id: 1,},
        ],
        finalArt: [
            {name: `Yong Montano`, id: 1,},
        ],
        originalPublisher: [
            {name: `Gerry Conway`, id: 1,},
        ],
        description: `Publicada originalmente em Savage Sword of Conan, The (1974) n° 11/1976 - Marvel Comics
        Titulo original "The country of the knife". Adaptação do conto de Robert E. H.
        Jornada para o inferno 5 a 10/O pais da espada 10 a18/Às portas da morte 19 a 30/A jóia do além 31 a 35/Leilão maldito 36 a 44/Quando o sol se põe 45 a 55
        Mellani resolveu vingar seu irmão morto e Conan, disfarçado de Zamoriano, ruma a Cidadela dos Condenados com uma missão; ambos se conhecem a caminho da forte, e em sua sina, são responsáveis por uma revolução de medo, sangue, morte, e encontro com os seres do além!`,
    },
    {
        id: 11,
        title: `Espada Selvagem de Conan, A n° 8`,
        company: `Abril`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 68,
        year: 1985,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 2900,00`,
        cover: ref11,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Nafertari`, id: 2,},
            {name: `Jungir Khan`, id: 3,},
            {name: `Totrasmek`, id: 4,},
            {name: `Aram Baksh`, id: 5,},
        ],
        screenwriters: [
            {name: `Roy Thomas`, id: 1,},
        ],
        artists: [
            {name: `Neal Adams`, id: 1,},
        ],
        finalArt: [
            {name: `Neal Agams`, id: 1,},
            {name: `Tony Dezuñiga`, id: 2,},
            {name: `The Tribe`, id: 3,},
        ],
        originalPublisher: [
            {name: `Roy Thomas`, id: 1,},
        ],
        description: `Publicada originalmente em Savage Sword of Conan, The (1974) n° 14/1976 - Marvel Comics
        Título original "Shadows In Zamboula". Adaptação do conto de Robert E. Howard.
        Zamboula é uma estranha cidade. Tão logo o sol se põe, ninguém mais é visto em suas ruas, gritos de horror se espalham até os confins do deserto e, a cada noite que passa, aumenta o número de pessoas que desaparecem misteriosamente. No entanto, tudo se modifica quando Conan resolve pernoitar em uma de suas estalagens, causando a mais sanguinária noite da história dessa cidade.`,
    },
    {
        id: 12,
        title: `Espada Selvagem de Conan, A n° 9`,
        company: `Abril`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 68,
        year: 1985,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 3300,00`,
        cover: ref12,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Ghaznav`, id: 2,},
            {name: `Yateli`, id: 3,},
            {name: `Jehungir Agha`, id: 4,},
            {name: `Khosatral Khel`, id: 5,},
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
            {name: `Roy Thomas`, id: 1,},
        ],
        description: `Publicada originalmente em Savage Sword of Conan, The (1974) n° 15/1976 - Marvel Comics
        Titulo original "The Devil in Iron" de Robert E. H saiu em Weird Tales, agosto de 1934.
        As muitas faces da morte (5 a 14) A Magia de Khosatral Khel (15 a 26) Noite Maldita (26 a 44)
        Uma linda escrava loira, fugitiva em uma ilha obscura, serve de isca para assassinar Conan. A trama toda foi criada por um comandante turaniano, que odiava o bárbaro mais do que tudo. Ele só não sabia que o horror sem limites se ocultava na ilha, cujo poder iria decretar a morte de todos que se encontravam no local.`,
    },
    {
        id: 13,
        title: `Espada Selvagem de Conan, A n° 10`,
        company: `Abril`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 68,
        year: 1985,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 3700,00`,
        cover: ref13,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Natala`, id: 2,},
            {name: `Thalis`, id: 3,},
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
            {name: `Archie Goodwin`, id: 1,},
        ],
        description: `Publicada originalmente em Savage Sword of Conan, The (1974) n° 20/1977 - Marvel Comics
        Título original “The Slithering Shadow” adaptação do conto Robert E. Howard, publicada em Weird Tales, setembro de 1933.
        1 -A sombra no Palácio da Morte (pg5 a 27); 2 - Os Tentáculos de Thog (ps28 a 34) 3 -Xuthal, A Maldita (35 a 51).
        Perdidos no deserto, sem água e já bem próximos do fim, Conan e a linda Natala encontram um palácio deslumbrante. Desesperados, eles se aventuram a entrar na fortaleza... para conhecer o maior horror que já caminhou sobre a terra.`,
    },
    {
        id: 14,
        title: `Espada Selvagem de Conan, A n° 11`,
        company: `Abril`,
        history: [
            {name: "Robert E. Howard", id: 1,}
        ],
        totalPages: 68,
        year: 1985,
        licensor: `Marvel Comics`,
        status: `Título encerrado`,
        coverPrice: `Cr$ 4500,00`,
        cover: ref14,
        persons: [
            {name: `Conan, O Bárbaro`, id: 1,},
            {name: `Taurus, O Príncipe dos Ladrões`, id: 2,},
            {name: `Yag-Kosha`, id: 3,},
            {name: `Yara`, id: 4,},
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
            {name: `Archie Goodwin`, id: 1,},
        ],
        description: `Publicada originalmente em Savage Sword of Conan, The (1974) n° 24/1977 - Marvel Comics
        Título original "The Tower of the Elephant".
        Adaptação livre do conto de Robert E. Howard. Saiu na Weird Tales, Março de 1933.
        Uma das mais famosas aventuras de Conan de todos os tempos! Conan assume um assalto impossível na Torre do Elefante! Em busca da jóia mística escondida o Cimério invade uma misteriosa torre guardada por um monstro pavoroso... e nem mesmo leões, Taurus rei dos ladrões ou uma aranha gigante e venenosa podem detê-lo!`,
    },
];
