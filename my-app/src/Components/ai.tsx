import './Styles/ai.css';

const Info = [
    {
        name: 'Chat Gpt',
        img: 'https://habrastorage.org/getpro/habr/upload_files/6de/ef1/890/6deef1890756d1d298e9fcec18ef2a61.jpg',
        info: 'Продвинутый ИИ для обработки. Помогает в сложных задач.',
        link: 'https://chat.openai.com'
    },
    {
        name: 'Unity Learn',
        img: 'https://www.cdmi.in/courses@2x/unity.webp',
        info: 'Официальная обучающая платформа для разработчиков игр на Unity', // 10 слов
        link: 'https://learn.unity.com'
    }, {
        name: 'Reyohoho',
        img: 'https://avatars.githubusercontent.com/u/157532397?v=4',
        info: 'Генератор смешных голосовых сообщений с эффектами', // 9 слов
        link: 'https://reyohoho.github.io/reyohoho/'
    },
    {
        name: 'Babadum',
        img: 'https://i.ytimg.com/vi/Bn1zoWyIn3U/mqdefault.jpg',
        info: 'Игра для изучения слов на 20+ языках в увлекательной форме',
        link: 'https://babadum.com'
    },
    {
        name: 'DeepSeek',
        img: 'https://source.washu.edu/app/uploads/2025/02/deepresize1-1024x684.jpg',
        info: 'Открытая платформа ИИ с мощными языковыми моделями',
        link: 'https://deepseek.ai'
    },
    {
        name: 'Midjourney',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjNOehajErJK-7ooWalfVgASL5-0Cjkf6xQ&s',
        info: 'ИИ для генерации изображений по текстовому описанию.',
        link: 'https://www.midjourney.com'
    },
    {
        name: 'CSS Animation',
        img: 'https://saigontechnology.com/wp-content/uploads/animation-in-css9.webp',
        info: 'Анимации и уроки по CSS',
        link: 'https://cssanimation.io'
    },
    {
        name: 'Disqus',
        img: 'https://blog.disqus.com/hubfs/Blog%20Banner%20%28New%20Era%2023%29%20%281135%20x%20639%20px%29%20%2812%29.png',
        info: 'Платформа для комментариев на сайте',
        link: 'https://disqus.com'
    }, {
        name: 'Sketchfab',
        img: 'https://support.spatial.io/hc/article_attachments/10380744824340',
        info: '3D-модели и визуализация онлайн',
        link: 'https://sketchfab.com'
    },
    {
        name: 'Cargo',
        img: 'https://habrastorage.org/getpro/habr/post_images/b09/a34/0ce/b09a340ced4b344dd08dda0b70b5e847.jpg',
        info: 'Платформа для создания портфолио',
        link: 'https://cargo.site'
    }, {
        name: 'Codedex',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8C4ZkZDJhPPl9cqsG4_DphA7FQ7Ys5ra-yg&s',
        info: 'Обучение программированию в стиле RPG',
        link: 'https://www.codedex.io'
    }, {
        name: 'Roadmap',
        img: 'https://yt3.googleusercontent.com/lQOIfT-JFOGOUKYcmZMirl17je3BiAwoqvr8HCK_UN9SE0hkWxHXrcsos2POM_K-PEdZq3Fo4g=s900-c-k-c0x00ffffff-no-rj',
        info: 'Подробные роадмапы по разработке и IT-профессиям',
        link: 'https://roadmap.sh'
    },
    {
        name: 'Gamma',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0BusFc30ecQ4gVBBNr9A-t8Ez_05cnpp9w&s',
        info: 'Инструмент для создания красивых презентаций и документов',
        link: 'https://gamma.app'
    }, {
        name: 'Spline',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5uBotVhfsUJWEE1l97bNreRHR06BCoV8FA&s',
        info: '3D-дизайн прямо в браузере с анимациями',
        link: 'https://spline.design'
    },
    {
        name: 'MPJO App',
        img: 'https://play-lh.googleusercontent.com/MqLnh94wVddzcmFHfjGLikG6UY7yAXjykx9qzjsWVp-Y2UFFRWCXPGWsRRiOVv1BRLA',
        info: 'Инструмент для улучшения производительности и организации задач',
        link: 'https://mpjoapp.com'
    },
    {
        name: 'MagicSlides',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGhEfcErpeFAq1m0ROpAdHf0F1l3Z0_zP-yZRcOlwg2ChNJhjBG5E6ptNYpJml5O9YvE&usqp=CAU',
        info: 'Автоматическое создание слайд-презентаций из текста',
        link: 'https://magicslides.app'
    },
    {
        name: 'Uiverse',
        img: 'https://media.licdn.com/dms/image/v2/D5622AQH6PWh8Tfr1xg/feedshare-shrink_800/feedshare-shrink_800/0/1697949302925?e=2147483647&v=beta&t=POXncCp9xdmytbMhryhOIQNhjMvkqoJFB3-tM7c5GlQ',
        info: 'Коллекция анимаций и элементов UI для дизайнеров',
        link: 'https://uiverse.io'
    },
    {
        name: 'Meshy',
        img: 'https://www.unite.ai/wp-content/uploads/2024/11/Unite.AI-Featured-Images-14.png',
        info: 'Искусственный интеллект для создания 3D-моделей и анимаций',
        link: 'https://meshy.ai'
    },
    {
        name: 'Cutout.pro',
        img: 'https://cdn.prod.website-files.com/648e04d4bbae7004f1b35f15/65de12549cea8be0328cc25f_cutout-pro-icon.jpeg',
        info: 'Автоматическое удаление фона с изображений с помощью ИИ',
        link: 'https://cutout.pro'
    },
    {
        name: 'Remove.bg',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RfzXPn56ehtYsPwBanMH2DMF-LR6oY1j3A&s',
        info: 'Удаление фона с изображений с помощью ИИ',
        link: 'https://www.remove.bg'
    },
    {
        name: 'Dora',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7oQlpI4VUN47JsD3OPALYPiE0LnPEDypUPVnPJaVeOhA7fyKPdRYkrgNTSxcEGfPA9zM&usqp=CAU',
        info: 'Автоматизация процессов тестирования и мониторинга сайтов',
        link: 'https://www.dora.run'
    },
    {
        name: 'Weights.gg',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-asrORTLLLQo4ixtn6I7zVtIuwy_YPnkeA&s',
        info: 'Платформа для обучения и использования моделей машинного обучения',
        link: 'https://weights.gg'
    },
    {
        name: 'Vanta.js',
        img: 'https://www.bypeople.com/wp-content/uploads/2019/12/free-webgl-3d-background-tool.png',
        info: 'Анимированные фоны на JavaScript для сайтов',
        link: 'https://www.vantajs.com'
    },
    {
        name: 'CodeCombat',
        img: 'https://codecombat.com/images/pages/parents/tiles/pbox_2.webp',
        info: 'Изучение программирования через игру и приключения',
        link: 'https://codecombat.com'
    },
    {
        name: 'Mystical',
        img: 'https://opengraph.githubassets.com/f259505aa8d7af37781dfe1be85e357ccaac193439e915ede79bb38389912f37/dburles/mystical',
        info: 'CSS-in-JS библиотека для темизируемых React-компонентов',
        link: 'https://github.com/dburles/mystical'
    },

    {
        name: 'Moescape AI',
        img: 'https://pbs.twimg.com/profile_images/1836841253863862272/Fuyq43vZ_400x400.jpg',
        info: 'Платформа для общения с AI-персонажами и создания аниме-арта',
        link: 'https://moescape.ai'
    },
    {
        name: 'Replicate',
        img: 'https://sprout24.com/hub/wp-content/uploads/sites/2/2023/10/replicate.png',
        info: 'Платформа для запуска ИИ-моделей через API',
        link: 'https://replicate.com'
    },
    {
        name: 'Qwen',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0d48utyIH7Ki1z8wu_FxHcuaaRfLvdRrOw&s',
        info: 'Мультимодальная ИИ-платформа от Alibaba Cloud',
        link: 'https://chat.qwen.ai'
    },
    {
        name: 'Claude AI',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTI25J_JoBR4QN6S5Oe7emeubBtjsLkcwceA&s',
        info: 'Мощный ИИ-ассистент от Anthropic для текста и кода',
        link: 'https://claude.ai'
    },
    {
        name: 'Typeframes',
        img: 'https://cdn.prod.website-files.com/6696cc1b6bbc689d64ed80f0/66a1366fac3b77ebdfcdbdfa_8.png',
        info: 'Создание видео из текста для соцсетей и маркетинга',
        link: 'https://www.typeframes.com'
    },
    {
        name: 'Kittl',
        img: 'https://cdnp.kittl.com/647b524a-a05a-4500-b4c7-684d6bf3798d_output-onlinegiftools.png?auto=compress,format',
        info: 'Браузерная платформа для профессионального дизайна с ИИ-инструментами',
        link: 'https://www.kittl.com'
    },
    {
        name: 'Coolors',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8XxwfHy5JGvjOrpr9IJ_p238mizAhLQKR9w&s',
        info: 'Быстрый генератор цветовых палитр для дизайнеров',
        link: 'https://coolors.co'
    },
    {
        name: "Shots.so",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWa9axoLdIT5GLyG8ayXUzXoS_mNIpEZm-g&s",
        info: "Инструмент для стильных скриншотов кода",
        link: "https://shots.so"
    },
    {
        name: 'Huemint',
        img: 'https://api.talentgenius.net/directus/assets/36f3675b-7bbc-478b-8cfc-aa11f947ff53?download',
        info: 'Генератор цветовых палитр с ИИ для дизайнеров', // 9 слов
        link: 'https://huemint.com'
    },
    {
        name: 'CodePen',
        img: 'https://miro.medium.com/v2/resize:fit:800/1*Otx7CXIY9eh0Sxlp54olxA.png',
        info: 'Онлайн-редактор для тестирования HTML, CSS и JavaScript кода', // 10 слов
        link: 'https://codepen.io'
    },
    {
        name: 'PimEyes',
        img: 'https://media.npr.org/assets/img/2023/10/10/pim-eyes-for-seamus-a6d23a4e1016c66d0ce83aa084294896c47aef1c.png?s=1100&c=50&f=png',
        info: 'Онлайн-поиск лиц по фотографии с использованием ИИ', // 9 слов
        link: 'https://pimeyes.com'
    },
    {
        name: 'Fancy Blobs',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIPWXmOWFu-nyahyVODOGkmHV8fSoxjJFuQ&s',
        info: 'Генератор абстрактных SVG-фигур с настраиваемыми параметрами', // 9 слов
        link: 'https://fancyblobs.app'
    },
    {
        name: 'SVG Artista',
        img: 'https://id23.net/wp-content/uploads/id23_tipps_svg_artista_preview.jpg',
        info: 'Инструмент для создания анимированных SVG-рисунков', // 8 слов
        link: 'https://svgartista.net'
    },
    {
        name: 'Soul Machines',
        img: 'https://i.ytimg.com/vi/27UiAo3OyeE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgSigzMA8=&rs=AOn4CLAIHopEkmJNK1Yk-7XfEZUeNvxHiw',
        info: 'Платформа для создания цифровых людей с ИИ', // 9 слов
        link: 'https://www.soulmachines.com'
    },

];

const Ai = () => {
    return (
        <div className="container py-5">
            <div className="row">
                {Info.map((service, index) => (
                    <div className=" col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card ai-service-card">
                            <div className="ai-service-img-container ai-service-img-overlay">
                                <img
                                    src={service.img}
                                    className="card-img-top ai-service-img"
                                    alt={service.name}
                                />
                            </div>
                            <div className="card-body ai-service-body">
                                <h5 className="card-title ai-service-title">{service.name}</h5>
                                <p className="card-text ai-service-description">
                                    {service.info}
                                </p>
                                <a
                                    href={service.link}
                                    className="btn ai-service-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Попробовать
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ai;