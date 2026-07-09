const QUESTIONS = [
  ['Телефон Белла','iPhone',1876,2007,'tech','Телефон Белла запатентовали в 1876 году, а первый iPhone показали в 2007.'],
  ['Википедия','YouTube',2001,2005,'web','Википедия стартовала в 2001 году, YouTube появился в 2005.'],
  ['Google','Facebook',1998,2004,'web','Google основан в 1998 году, Facebook запущен в 2004.'],
  ['Nintendo','PlayStation',1889,1994,'games','Nintendo появилась как карточная компания в 1889 году.'],
  ['Minecraft','Fortnite',2009,2017,'games','Minecraft вышел в раннем доступе в 2009 году, Fortnite Battle Royale - в 2017.'],
  ['Тетрис','Doom',1984,1993,'games','Тетрис создали в 1984 году, Doom вышел в 1993.'],
  ['Pac-Man','Super Mario Bros.',1980,1985,'games','Pac-Man появился в аркадах в 1980 году.'],
  ['Sega Mega Drive','Nintendo 64',1988,1996,'games','Mega Drive вышла в Японии в 1988 году, Nintendo 64 - в 1996.'],
  ['Steam','Epic Games Store',2003,2018,'games','Steam запустился в 2003 году, Epic Games Store - в 2018.'],
  ['World of Warcraft','Roblox',2004,2006,'games','World of Warcraft стартовал в 2004 году, Roblox - в 2006.'],
  ['Counter-Strike','Valorant',1999,2020,'games','Первый Counter-Strike появился как мод в 1999 году.'],
  ['Angry Birds','Subway Surfers',2009,2012,'games','Angry Birds вышла в 2009 году, Subway Surfers - в 2012.'],
  ['Кинематограф братьев Люмьер','Телевидение BBC',1895,1936,'culture','Первые показы Люмьеров прошли в 1895 году.'],
  ['Звездные войны','Матрица',1977,1999,'movies','Первый фильм Звездных войн вышел в 1977 году.'],
  ['Титаник','Аватар',1997,2009,'movies','Титаник вышел в 1997 году, Аватар - в 2009.'],
  ['Гарри Поттер и философский камень','Властелин колец: Братство кольца',2001,2001,'movies','Оба фильма вышли в 2001 году, но Гарри Поттер вышел в прокат раньше в ноябре.'],
  ['Шрек','Ледниковый период',2001,2002,'movies','Шрек вышел в 2001 году, Ледниковый период - в 2002.'],
  ['Симпсоны','Южный Парк',1989,1997,'tv','Симпсоны стартовали в 1989 году, Южный Парк - в 1997.'],
  ['Игра престолов','Очень странные дела',2011,2016,'tv','Игра престолов вышла в 2011 году.'],
  ['Netflix стриминг','Disney+',2007,2019,'web','Netflix запустил стриминг в 2007 году, Disney+ - в 2019.'],
  ['Spotify','Apple Music',2008,2015,'music','Spotify стартовал в 2008 году, Apple Music - в 2015.'],
  ['CD-диск','MP3 формат',1982,1993,'music','Коммерческий CD появился раньше, чем стандарт MP3.'],
  ['Walkman','iPod',1979,2001,'tech','Sony Walkman вышел в 1979 году.'],
  ['Граммофон','Радиоэфир',1887,1906,'tech','Граммофон Берлинера появился в 1887 году.'],
  ['Первый полет братьев Райт','Первый спутник',1903,1957,'history','Братья Райт совершили полет в 1903 году, Спутник-1 запустили в 1957.'],
  ['Паровоз Стефенсона','Первый автомобиль Benz',1829,1886,'tech','Паровоз Rocket появился в 1829 году, автомобиль Benz - в 1886.'],
  ['Лифт Отиса','Эскалатор',1852,1892,'tech','Безопасный лифт Отиса был представлен в 1852 году.'],
  ['Электрическая лампа Эдисона','Шариковая ручка',1879,1938,'tech','Коммерческая лампа Эдисона появилась раньше шариковой ручки.'],
  ['Холодильник бытовой','Микроволновая печь',1913,1945,'tech','Бытовые холодильники появились раньше микроволновок.'],
  ['Посудомоечная машина','Стиральная машина автомат',1886,1937,'tech','Посудомоечную машину Кокрейн запатентовали в 1886 году.'],
  ['Банкомат','Пластиковая банковская карта',1967,1958,'finance','Пластиковые карты появились раньше первого массового банкомата.'],
  ['Bitcoin','Ethereum',2009,2015,'web','Bitcoin запустился в 2009 году, Ethereum - в 2015.'],
  ['PayPal','Apple Pay',1998,2014,'finance','PayPal появился в 1998 году, Apple Pay - в 2014.'],
  ['Amazon','AliExpress',1994,2010,'web','Amazon основан в 1994 году, AliExpress - в 2010.'],
  ['eBay','Avito',1995,2007,'web','eBay запустился в 1995 году, Avito - в 2007.'],
  ['Яндекс','Google',1997,1998,'web','Яндекс как поисковик был представлен в 1997 году.'],
  ['ВКонтакте','Instagram',2006,2010,'web','ВКонтакте запущен в 2006 году, Instagram - в 2010.'],
  ['Twitter','TikTok',2006,2016,'web','Twitter появился в 2006 году, TikTok - в 2016.'],
  ['Telegram','WhatsApp',2013,2009,'web','WhatsApp появился раньше Telegram.'],
  ['Zoom','Discord',2011,2015,'web','Zoom основан в 2011 году, Discord - в 2015.'],
  ['QR-код','Bluetooth',1994,1998,'tech','QR-код разработали в 1994 году.'],
  ['Wi-Fi стандарт 802.11','USB',1997,1996,'tech','USB появился чуть раньше первого Wi-Fi стандарта.'],
  ['HTML','CSS',1993,1996,'web','HTML появился раньше CSS.'],
  ['JavaScript','Python',1995,1991,'web','Python старше JavaScript.'],
  ['Linux','Windows 95',1991,1995,'tech','Linux появился в 1991 году.'],
  ['Android','iOS',2008,2007,'tech','iOS вышла вместе с iPhone в 2007 году, Android - в 2008.'],
  ['Первый Mac','Первый iPad',1984,2010,'tech','Macintosh представили в 1984 году.'],
  ['Калькулятор карманный','Персональный компьютер IBM PC',1971,1981,'tech','Карманные калькуляторы стали массовыми раньше IBM PC.'],
  ['DVD','Blu-ray',1996,2006,'tech','DVD появился раньше Blu-ray.'],
  ['3D-печать','Смартфон iPhone',1984,2007,'tech','Первые технологии 3D-печати появились в 1980-х.'],
  ['Coca-Cola','Pepsi',1886,1893,'brands','Coca-Cola появилась в 1886 году, Pepsi - в 1893.'],
  ['Adidas','Nike',1949,1964,'brands','Adidas основан в 1949 году, Nike - в 1964.'],
  ['McDonald’s','Burger King',1940,1954,'brands','Первый McDonald’s открылся в 1940 году.'],
  ['Lego','Barbie',1932,1959,'brands','Lego основана в 1932 году, Barbie появилась в 1959.'],
  ['IKEA','Zara',1943,1975,'brands','IKEA основана в 1943 году.'],
  ['Toyota','Tesla',1937,2003,'brands','Toyota основана в 1937 году, Tesla - в 2003.'],
  ['Mercedes-Benz','BMW',1926,1916,'brands','BMW старше современного бренда Mercedes-Benz.'],
  ['Rolex','Casio',1905,1946,'brands','Rolex основан в 1905 году.'],
  ['Chanel No. 5','Air Jordan',1921,1985,'brands','Chanel No. 5 появился в 1921 году.'],
  ['Kinder Surprise','Nutella',1974,1964,'brands','Nutella появилась раньше Kinder Surprise.'],
  ['Олимпийские игры современности','Чемпионат мира по футболу',1896,1930,'sport','Современные Олимпийские игры стартовали в 1896 году.'],
  ['NBA','UFC',1946,1993,'sport','NBA основана в 1946 году.'],
  ['Формула-1 чемпионат','Супербоул',1950,1967,'sport','Первый сезон Формулы-1 прошел в 1950 году.'],
  ['Уимблдон','Тур де Франс',1877,1903,'sport','Уимблдонский турнир старше Тур де Франс.'],
  ['Шахматы современные правила','Баскетбол',1475,1891,'sport','Современная форма шахмат сложилась задолго до баскетбола.'],
  ['Волейбол','Настольный теннис',1895,1880,'sport','Настольный теннис появился раньше волейбола.'],
  ['Пенициллин','Инсулин',1928,1921,'science','Инсулин был открыт раньше пенициллина.'],
  ['Таблица Менделеева','Теория относительности',1869,1905,'science','Периодическая таблица опубликована в 1869 году.'],
  ['ДНК двойная спираль','Первый искусственный спутник',1953,1957,'science','Структуру ДНК описали в 1953 году.'],
  ['Вакцина от оспы','Антибиотики',1796,1928,'science','Вакцина Дженнера появилась в 1796 году.'],
  ['Рентгеновские лучи','МРТ',1895,1977,'science','Рентген открыл X-лучи в 1895 году.'],
  ['Пластик бакелит','Нейлон',1907,1935,'science','Бакелит изобрели в 1907 году.'],
  ['Периодическая таблица','Нобелевская премия',1869,1901,'science','Таблица Менделеева старше Нобелевской премии.'],
  ['Первая фотография','Первый фильм',1826,1888,'culture','Самые ранние фотографии появились задолго до кино.'],
  ['Печатный станок Гутенберга','Газета',1440,1605,'culture','Станок Гутенберга появился раньше регулярных газет.'],
  ['Комиксы Marvel','Комиксы DC',1939,1934,'culture','DC Comics старше Marvel.'],
  ['Рубик кубик','Тамагочи',1974,1996,'toys','Кубик Рубика изобретен в 1974 году.'],
  ['Монополия','UNO',1935,1971,'toys','Монополия появилась в 1935 году, UNO - в 1971.'],
  ['Dungeons & Dragons','Magic: The Gathering',1974,1993,'games','D&D старше Magic: The Gathering.'],
  ['Покемон игра','Покемон GO',1996,2016,'games','Первые игры Pokemon вышли в 1996 году.'],
  ['The Sims','Animal Crossing',2000,2001,'games','The Sims вышла в 2000 году.'],
  ['Grand Theft Auto','Need for Speed',1997,1994,'games','Need for Speed появился раньше GTA.'],
  ['FIFA серия игр','Pro Evolution Soccer',1993,1995,'games','FIFA International Soccer вышла в 1993 году.'],
  ['The Legend of Zelda','Sonic the Hedgehog',1986,1991,'games','Zelda появилась в 1986 году.'],
  ['Final Fantasy','Pokemon',1987,1996,'games','Final Fantasy старше Pokemon.'],
  ['Half-Life','Portal',1998,2007,'games','Half-Life вышла в 1998 году.'],
  ['Skyrim','The Witcher 3',2011,2015,'games','Skyrim вышел в 2011 году.'],
  ['Among Us','Fall Guys',2018,2020,'games','Among Us вышла в 2018 году.'],
  ['Flappy Bird','Pokemon GO',2013,2016,'games','Flappy Bird появился раньше Pokemon GO.'],
  ['Первый поезд метро Лондона','Эйфелева башня',1863,1889,'history','Лондонское метро открылось в 1863 году.'],
  ['Статуя Свободы','Тауэрский мост',1886,1894,'history','Статую Свободы открыли в 1886 году.'],
  ['Панамский канал','Суэцкий канал',1914,1869,'history','Суэцкий канал старше Панамского.'],
  ['Берлинская стена','Евро валюта',1961,1999,'history','Берлинскую стену построили в 1961 году.'],
  ['ООН','Европейский союз',1945,1993,'history','ООН основана в 1945 году.'],
  ['Первая электронная почта','Первый SMS',1971,1992,'web','Email появился раньше SMS.'],
  ['Первый сайт','Первый блог Blogger',1991,1999,'web','Первый сайт появился в 1991 году.'],
  ['Reddit','Pinterest',2005,2010,'web','Reddit запущен в 2005 году.'],
  ['Twitch','Kick',2011,2022,'web','Twitch появился намного раньше Kick.'],
  ['Snapchat','BeReal',2011,2020,'web','Snapchat старше BeReal.'],
  ['Windows XP','Windows Vista',2001,2007,'tech','Windows XP вышла в 2001 году.'],
  ['PlayStation 2','Xbox',2000,2001,'games','PlayStation 2 вышла раньше первого Xbox.'],
  ['PlayStation 5','Nintendo Switch',2020,2017,'games','Nintendo Switch вышла раньше PlayStation 5.'],
  ['Kindle','iPad',2007,2010,'tech','Kindle появился в 2007 году.'],
  ['GoPro','DJI Phantom',2002,2013,'tech','GoPro основана в 2002 году.'],
  ['Электронная книга формат EPUB','PDF',2007,1993,'tech','PDF появился раньше EPUB.'],
  ['Photoshop','Canva',1990,2013,'tech','Photoshop вышел в 1990 году.'],
  ['Figma','Sketch',2016,2010,'tech','Sketch появился раньше Figma.'],
  ['GitHub','GitLab',2008,2011,'web','GitHub стартовал в 2008 году.'],
  ['Docker','Kubernetes',2013,2014,'tech','Docker появился чуть раньше Kubernetes.'],
  ['ChatGPT','Midjourney',2022.11,2022.07,'tech','Midjourney стал публичным раньше ChatGPT в 2022 году.'],
  ['OpenAI','DeepMind',2015,2010,'tech','DeepMind основана раньше OpenAI.'],
  ['USB-C','Lightning',2014,2012,'tech','Lightning появился раньше USB-C.'],
  ['AirPods','Apple Watch',2016,2015,'tech','Apple Watch вышли раньше AirPods.'],
  ['Nokia 3310','Motorola Razr V3',2000,2004,'tech','Nokia 3310 появилась в 2000 году.'],
  ['BlackBerry','iPhone',1999,2007,'tech','BlackBerry как линейка устройств старше iPhone.'],
  ['Камера Polaroid','GoPro Hero',1948,2004,'tech','Polaroid выпустила моментальную камеру в 1948 году.'],
  ['Первые наручные часы Rolex','Apple Watch',1905,2015,'brands','Rolex старше умных часов более чем на век.'],
  ['KFC','Subway',1952,1965,'brands','KFC основана раньше Subway.'],
  ['Starbucks','Costa Coffee',1971,1971,'brands','Starbucks открылась немного раньше Costa Coffee в 1971 году.'],
  ['H&M','Uniqlo',1947,1984,'brands','H&M старше современного бренда Uniqlo.'],
  ['Supreme','Off-White',1994,2012,'brands','Supreme появилась в 1994 году.'],
  ['Мстители фильм','Железный человек фильм',2012,2008,'movies','Железный человек запустил MCU раньше Мстителей.'],
  ['Холодное сердце','Головоломка',2013,2015,'movies','Холодное сердце вышло в 2013 году.'],
  ['Король Лев','История игрушек',1994,1995,'movies','Король Лев вышел раньше Истории игрушек.'],
  ['Джеймс Бонд в кино','Индиана Джонс',1962,1981,'movies','Первый фильм о Бонде вышел в 1962 году.'],
  ['Назад в будущее','Парк Юрского периода',1985,1993,'movies','Назад в будущее вышел в 1985 году.'],
  ['Friends','How I Met Your Mother',1994,2005,'tv','Friends стартовал в 1994 году.'],
  ['Во все тяжкие','Черное зеркало',2008,2011,'tv','Во все тяжкие вышел в 2008 году.'],
  ['Доктор Кто','Звездный путь',1963,1966,'tv','Доктор Кто старше Звездного пути.'],
  ['MTV','YouTube Music',1981,2015,'music','MTV запустился в 1981 году.']
].map((q, id) => ({ id, a:q[0], b:q[1], ya:q[2], yb:q[3], theme:q[4], fact:q[5] }));

const EXTRA_QUESTIONS = [
  ['Первый iPhone','Первый Android-смартфон',2007,2008,'tech','iPhone показали в 2007 году, первый Android-смартфон HTC Dream вышел в 2008.'],
  ['Первый YouTube-ролик','Первый Instagram-пост',2005,2010,'web','Первый ролик на YouTube загрузили в 2005 году, Instagram появился позже.'],
  ['Gmail','Outlook.com',2004,2012,'web','Gmail запустили в 2004 году, Outlook.com пришел на смену Hotmail в 2012.'],
  ['Hotmail','Gmail',1996,2004,'web','Hotmail появился в 1996 году и стал одним из первых массовых веб-почтовиков.'],
  ['Yahoo!','Google',1994,1998,'web','Yahoo! появился раньше Google.'],
  ['ICQ','Skype',1996,2003,'web','ICQ вышла в 1996 году, Skype - в 2003.'],
  ['MySpace','Facebook',2003,2004,'web','MySpace запустился на год раньше Facebook.'],
  ['Одноклассники','ВКонтакте',2006.03,2006.10,'web','Одноклассники стартовали весной 2006 года, ВКонтакте - осенью.'],
  ['Яндекс.Карты','Google Maps',2004,2005,'web','Яндекс.Карты появились раньше Google Maps.'],
  ['App Store','Google Play',2008,2012,'tech','App Store запустили в 2008 году, Google Play получил это имя в 2012.'],
  ['Первый Game Boy','Sega Game Gear',1989,1990,'games','Game Boy вышел в 1989 году, Game Gear - в 1990.'],
  ['PlayStation Portable','Nintendo DS',2004.12,2004.11,'games','Nintendo DS вышла чуть раньше PSP.'],
  ['Wii','Xbox 360',2006,2005,'games','Xbox 360 вышел раньше Nintendo Wii.'],
  ['PlayStation 3','Xbox 360',2006,2005,'games','Xbox 360 опередил PlayStation 3 на рынке.'],
  ['GameCube','PlayStation 2',2001,2000,'games','PlayStation 2 вышла раньше GameCube.'],
  ['The Witcher','Mass Effect',2007.10,2007.11,'games','The Witcher вышел за несколько недель до Mass Effect.'],
  ['Cyberpunk 2077','Elden Ring',2020,2022,'games','Cyberpunk 2077 вышел в 2020 году, Elden Ring - в 2022.'],
  ['League of Legends','Dota 2',2009,2013,'games','League of Legends вышла раньше Dota 2.'],
  ['PUBG','Apex Legends',2017,2019,'games','PUBG стал массовым хитом раньше Apex Legends.'],
  ['Clash of Clans','Clash Royale',2012,2016,'games','Clash of Clans вышла раньше Clash Royale.'],
  ['Терминатор','Хищник',1984,1987,'movies','Терминатор вышел в 1984 году, Хищник - в 1987.'],
  ['Чужой','Бегущий по лезвию',1979,1982,'movies','Чужой Ридли Скотта появился раньше Бегущего по лезвию.'],
  ['Крестный отец','Таксист',1972,1976,'movies','Крестный отец вышел раньше Таксиста.'],
  ['Один дома','Маска',1990,1994,'movies','Один дома появился раньше Маски.'],
  ['Форрест Гамп','Побег из Шоушенка',1994.07,1994.09,'movies','Оба фильма вышли в 1994 году, но Форрест Гамп стартовал раньше.'],
  ['Пираты Карибского моря','Сумерки',2003,2008,'movies','Пираты Карибского моря вышли раньше Сумерек.'],
  ['Люди Икс фильм','Человек-паук фильм',2000,2002,'movies','Люди Икс вышли раньше фильма о Человеке-пауке 2002 года.'],
  ['Дэдпул','Доктор Стрэндж',2016.02,2016.11,'movies','Дэдпул вышел раньше Доктора Стрэнджа в 2016 году.'],
  ['Миньоны','Гадкий я',2015,2010,'movies','Гадкий я вышел раньше отдельного фильма Миньоны.'],
  ['Кунг-фу Панда','Ральф',2008,2012,'movies','Кунг-фу Панда появилась раньше Ральфа.'],
  ['Breaking Bad','Better Call Saul',2008,2015,'tv','Во все тяжкие вышел раньше спин-оффа Лучше звоните Солу.'],
  ['Lost','The Walking Dead',2004,2010,'tv','Lost стартовал раньше Ходячих мертвецов.'],
  ['Секретные материалы','Сверхъестественное',1993,2005,'tv','Секретные материалы старше Сверхъестественного.'],
  ['Сопрано','Остаться в живых',1999,2004,'tv','Сопрано вышли раньше Lost.'],
  ['Карточный домик','Очень странные дела',2013,2016,'tv','Карточный домик стал ранним громким сериалом Netflix.'],
  ['Queen','Nirvana',1970,1987,'music','Queen образовались в 1970 году, Nirvana - в 1987.'],
  ['The Beatles','ABBA',1960,1972,'music','The Beatles появились раньше ABBA.'],
  ['Виниловая пластинка LP','Аудиокассета',1948,1963,'music','Долгоиграющая пластинка LP появилась раньше компакт-кассеты.'],
  ['SoundCloud','Bandcamp',2007,2008,'music','SoundCloud запустился чуть раньше Bandcamp.'],
  ['Shazam','Spotify',2002,2008,'music','Shazam появился раньше Spotify.'],
  ['Бумажные деньги в Китае','Банкноты Европы',1024,1661,'finance','Бумажные деньги в Китае появились за века до европейских банкнот.'],
  ['Diners Club карта','Visa',1950,1958,'finance','Diners Club считается одной из первых платежных карт.'],
  ['NASDAQ','Московская биржа',1971,2011,'finance','NASDAQ появился задолго до объединенной Московской биржи.'],
  ['PayPass','Apple Pay',2003,2014,'finance','Бесконтактные карты PayPass появились раньше Apple Pay.'],
  ['PayPal','Stripe',1998,2010,'finance','PayPal старше Stripe.'],
  ['Колесо','Компас',-3500,1040,'history','Колесо появилось на тысячи лет раньше магнитного компаса.'],
  ['Порох','Телескоп',850,1608,'history','Порох использовали задолго до появления телескопа.'],
  ['Магна Карта','Декларация независимости США',1215,1776,'history','Магна Карта была подписана в 1215 году.'],
  ['Открытие Америки Колумбом','Кругосветка Магеллана',1492,1519,'history','Плавание Колумба произошло раньше экспедиции Магеллана.'],
  ['Первая мировая война','Великая депрессия',1914,1929,'history','Первая мировая война началась раньше Великой депрессии.'],
  ['Гравитация Ньютона','Электромагнитная теория Максвелла',1687,1865,'science','Ньютон опубликовал закон всемирного тяготения в 1687 году.'],
  ['Паровая машина Уатта','Двигатель внутреннего сгорания',1769,1876,'science','Паровая машина Уатта появилась раньше ДВС.'],
  ['Первый лазер','Первый персональный компьютер',1960,1975,'science','Первый работающий лазер создали в 1960 году.'],
  ['CRISPR как инструмент','мРНК-вакцины COVID-19',2012,2020,'science','CRISPR как инструмент редактирования генома стал известен раньше мРНК-вакцин COVID-19.'],
  ['Геном человека расшифрован','iPhone',2003,2007,'science','Проект генома человека завершили до выхода iPhone.'],
  ['Puma','Nike',1948,1964,'brands','Puma основана раньше Nike.'],
  ['Ferrari','Lamborghini',1947,1963,'brands','Ferrari старше Lamborghini.'],
  ['Gucci','Prada',1921,1913,'brands','Prada старше Gucci.'],
  ['Samsung Electronics','Apple',1969,1976,'brands','Samsung Electronics основана раньше Apple.'],
  ['Sony','Microsoft',1946,1975,'brands','Sony появилась раньше Microsoft.']
].map((q, i) => ({ id: QUESTIONS.length + i, a:cleanGeneratedTitle(q[0]), b:cleanGeneratedTitle(q[1]), ya:q[2], yb:q[3], theme:q[4], fact:q[5] }));

QUESTIONS.push(...EXTRA_QUESTIONS);

function cleanGeneratedTitle(title) {
  return title.replace(/^(Первый|Первая|Первое|Первые)\s+/i, '');
}

const TIMELINE_ITEMS = [
  ['Первый пароход Фултона',1807,'tech'], ['Первая железная дорога общего пользования',1825,'tech'], ['Азбука Морзе',1838,'tech'],
  ['Первый телеграфный кабель через Атлантику',1858,'tech'], ['Пишущая машинка Remington',1873,'tech'], ['Фонограф Эдисона',1877,'tech'],
  ['Первый электрический трамвай',1881,'tech'], ['Кинетоскоп Эдисона',1891,'culture'], ['Радио Маркони',1895,'tech'],
  ['Первый дирижабль Zeppelin',1900,'tech'], ['Первый трактор Fordson',1917,'tech'], ['Первый телевизор Бэрда',1926,'tech'],
  ['Первый реактивный самолет Heinkel He 178',1939,'tech'], ['Первый электронный компьютер ENIAC',1945,'tech'], ['Первый транзистор',1947,'science'],
  ['Первый промышленный робот Unimate',1961,'tech'], ['Компьютерная мышь',1964,'tech'], ['Первый микропроцессор Intel 4004',1971,'tech'],
  ['Первый GPS-спутник',1978,'tech'], ['Портативный CD-плеер Discman',1984,'music'], ['Первый домен .com',1985,'web'],
  ['Photoshop 1.0',1990,'tech'], ['Первый веб-браузер Mosaic',1993,'web'], ['Amazon Kindle Store',2007,'web'],
  ['Первый Oculus Rift DK1',2013,'tech'], ['Apple Vision Pro',2024,'tech'], ['Первый Telegram-канал',2015,'web'],
  ['Periscope',2015,'web'], ['Clubhouse',2020,'web'], ['Threads от Meta',2023,'web'], ['Windows 1.0',1985,'tech'],
  ['Windows 7',2009,'tech'], ['Windows 10',2015,'tech'], ['Windows 11',2021,'tech'], ['Mac OS X',2001,'tech'],
  ['Ubuntu Linux',2004,'tech'], ['Первый iMac',1998,'tech'], ['Первый MacBook Air',2008,'tech'], ['Raspberry Pi',2012,'tech'],
  ['Arduino',2005,'tech'], ['Unity Engine',2005,'games'], ['Unreal Engine',1998,'games'], ['Godot Engine',2014,'games'],
  ['Pokemon Red and Green',1996,'games'], ['Resident Evil',1996,'games'], ['Metal Gear Solid',1998,'games'], ['Silent Hill',1999,'games'],
  ['Halo: Combat Evolved',2001,'games'], ['Call of Duty',2003,'games'], ['Gears of War',2006,'games'], ['Assassin’s Creed',2007,'games'],
  ['Dark Souls',2011,'games'], ['Genshin Impact',2020,'games'], ['Honkai: Star Rail',2023,'games'], ['Baldur’s Gate 3',2023,'games'],
  ['Hades',2020,'games'], ['Stardew Valley',2016,'games'], ['Terraria',2011,'games'], ['Limbo',2010,'games'],
  ['Braid',2008,'games'], ['Cuphead',2017,'games'], ['Hollow Knight',2017,'games'], ['Celeste',2018,'games'],
  ['Кинокамера Kodak',1888,'culture'], ['Первый Оскар',1929,'movies'], ['Каннский кинофестиваль',1946,'movies'], ['Первый IMAX-фильм',1970,'movies'],
  ['Первый фильм Pixar',1995,'movies'], ['DVD-релиз фильма',1997,'movies'], ['Первый фильм Marvel Studios',2008,'movies'], ['Первый сериал Netflix Original',2013,'tv'],
  ['Первый сезон Stranger Things',2016,'tv'], ['Первый сезон The Mandalorian',2019,'tv'], ['Первый сезон Wednesday',2022,'tv'], ['Первый сезон The Last of Us',2023,'tv'],
  ['Первое радио BBC',1922,'music'], ['Первый Eurovision',1956,'music'], ['Первый музыкальный CD в продаже',1982,'music'], ['Первый iTunes Store',2003,'music'],
  ['Первый TikTok Billboard чарт',2020,'music'], ['Первый Grammy Awards',1959,'music'], ['Woodstock',1969,'music'], ['Live Aid',1985,'music'],
  ['Первый Олимпийский огонь современности',1928,'sport'], ['Первый чемпионат Европы по футболу',1960,'sport'], ['Первый матч NHL',1917,'sport'],
  ['Первый матч MLB World Series',1903,'sport'], ['Первый чемпионат мира FIBA',1950,'sport'], ['Первый X Games',1995,'sport'],
  ['Первый матч Лиги чемпионов UEFA',1992,'sport'], ['Первый чемпионат мира по киберспорту WCG',2000,'games'], ['The International Dota 2',2011,'games'],
  ['Первый Super Mario Kart',1992,'games'], ['Gran Turismo',1997,'games'], ['Forza Motorsport',2005,'games'], ['Rocket League',2015,'games'],
  ['Кофейня Starbucks Reserve',2014,'brands'], ['Первый магазин Apple Store',2001,'brands'], ['Первый магазин Uniqlo',1984,'brands'],
  ['Первый смартфон Samsung Galaxy S',2010,'brands'], ['Первый Xiaomi смартфон',2011,'brands'], ['Первый Huawei Mate',2013,'brands'],
  ['Первый Tesla Model S',2012,'brands'], ['Первый Toyota Prius',1997,'brands'], ['Первый Nissan Leaf',2010,'brands'], ['Первый Ford Model T',1908,'brands'],
  ['Первый Porsche 911',1964,'brands'], ['Первый Volkswagen Golf',1974,'brands'], ['Первый Mini Cooper',1959,'brands'],
  ['Первый McDonald’s Happy Meal',1979,'brands'], ['Первый Big Mac',1967,'brands'], ['Первый Red Bull',1987,'brands'],
  ['Первый Monster Energy',2002,'brands'], ['Первый Oreo',1912,'brands'], ['Первый KitKat',1935,'brands'], ['Первый Snickers',1930,'brands'],
  ['Первый Mars батончик',1932,'brands'], ['Первый Twix',1967,'brands'], ['Первый Pringles',1968,'brands'],
  ['Первый Lego Minifigure',1978,'toys'], ['Первый Hot Wheels',1968,'toys'], ['Первый Nerf',1969,'toys'], ['Первый Play-Doh',1956,'toys'],
  ['Первый Furby',1998,'toys'], ['Первый Beyblade',1999,'toys'], ['Первый Bakugan',2007,'toys'], ['Первый Funko Pop',2010,'toys'],
  ['Первые шахматные часы',1883,'sport'], ['Первый Кубик Рубика в продаже',1980,'toys'], ['Первая настольная Catan',1995,'toys'],
  ['Первая Ticket to Ride',2004,'toys'], ['Первая Carcassonne',2000,'toys'], ['Первая Pandemic',2008,'toys'],
  ['Первый телескоп Галилея',1609,'science'], ['Первый микроскоп Левенгука',1674,'science'], ['Открытие кислорода',1774,'science'],
  ['Открытие электрона',1897,'science'], ['Открытие нейтрона',1932,'science'], ['Первый ядерный реактор',1942,'science'],
  ['Первый человек в космосе',1961,'history'], ['Первый выход в открытый космос',1965,'history'], ['Высадка на Луну',1969,'history'],
  ['Первый марсоход Sojourner',1997,'science'], ['Марсоход Curiosity',2012,'science'], ['Марсоход Perseverance',2021,'science'],
  ['Телескоп Hubble',1990,'science'], ['Телескоп James Webb',2021,'science'], ['Открытие графена',2004,'science'],
  ['Первая кредитная карта Visa',1958,'finance'], ['Первый Mastercard',1966,'finance'], ['Первый SWIFT',1973,'finance'],
  ['Первый онлайн-банк Stanford FCU',1994,'finance'], ['Первый Kickstarter',2009,'finance'], ['Первый Patreon',2013,'finance'],
  ['Первый NFT CryptoPunks',2017,'finance'], ['Первый OpenSea',2017,'finance'], ['Первый Binance',2017,'finance'],
  ['Первая Всемирная выставка',1851,'history'], ['Первый телефонный справочник',1878,'history'], ['Первый небоскреб Home Insurance Building',1885,'history'],
  ['Первый современный паспорт',1920,'history'], ['Первый коммерческий авиарейс',1914,'history'], ['Первый контейнеровоз',1956,'history'],
  ['Первый Disneyland',1955,'culture'], ['Первый Disney World',1971,'culture'], ['Первый Comic-Con San Diego',1970,'culture'],
  ['Первый Burning Man',1986,'culture'], ['Первый TED Talk',1984,'culture'], ['Первый SXSW',1987,'culture'],
  ['Первая камера GoPro Hero',2004,'tech'], ['Первый DJI Phantom',2013,'tech'], ['Первый Fitbit',2009,'tech'],
  ['Первый Pebble Watch',2013,'tech'], ['Первый Amazon Echo',2014,'tech'], ['Первый Google Home',2016,'tech'],
  ['Первый Roomba',2002,'tech'], ['Первый Segway',2001,'tech'], ['Первый Tesla Roadster',2008,'tech'],
  ['Первый электронный калькулятор Casio',1957,'tech'], ['Первый Sony Trinitron',1968,'tech'], ['Первый VHS',1976,'tech'],
  ['Первый Betamax',1975,'tech'], ['Первый LaserDisc',1978,'tech'], ['Первый MiniDisc',1992,'music']
].map((item, id) => ({ id, title: cleanGeneratedTitle(item[0]), year: item[1], theme: item[2] }));

function addGeneratedQuestions(targetTotal) {
  const existing = new Set(QUESTIONS.map(q => [q.a, q.b].sort().join('|')));
  const generated = [];
  for (let step = 17; generated.length + QUESTIONS.length < targetTotal && step < TIMELINE_ITEMS.length; step += 7) {
    for (let i = 0; i < TIMELINE_ITEMS.length && generated.length + QUESTIONS.length < targetTotal; i++) {
      const first = TIMELINE_ITEMS[i];
      const second = TIMELINE_ITEMS[(i + step) % TIMELINE_ITEMS.length];
      if (first.title === second.title || first.year === second.year) continue;
      const key = [first.title, second.title].sort().join('|');
      if (existing.has(key)) continue;
      existing.add(key);
      const older = first.year < second.year ? first : second;
      const newer = first.year < second.year ? second : first;
      generated.push({
        id: QUESTIONS.length + generated.length,
        a: first.title,
        b: second.title,
        ya: first.year,
        yb: second.year,
        theme: first.theme === second.theme ? first.theme : 'mixed',
        fact: `${older.title} появилось раньше: ${displayYear(older.year)} против ${displayYear(newer.year)}.`
      });
    }
  }
  QUESTIONS.push(...generated);
}

function addThemeQuestions(minPerTheme) {
  const existing = new Set(QUESTIONS.map(q => [q.a, q.b].sort().join('|')));
  Object.keys(THEMES).forEach(theme => {
    let count = QUESTIONS.filter(q => q.theme === theme).length;
    const items = TIMELINE_ITEMS.filter(item => item.theme === theme);
    for (let i = 0; i < items.length && count < minPerTheme; i++) {
      for (let j = i + 1; j < items.length && count < minPerTheme; j++) {
        const first = items[i];
        const second = items[j];
        if (first.year === second.year) continue;
        const key = [first.title, second.title].sort().join('|');
        if (existing.has(key)) continue;
        existing.add(key);
        const older = first.year < second.year ? first : second;
        const newer = first.year < second.year ? second : first;
        QUESTIONS.push({
          id: QUESTIONS.length,
          a: first.title,
          b: second.title,
          ya: first.year,
          yb: second.year,
          theme,
          fact: `${older.title} появилось раньше: ${displayYear(older.year)} против ${displayYear(newer.year)}.`
        });
        count++;
      }
    }
  });
}

const THEMES = {
  games: ['Игры', 'Культовые релизы и платформы'],
  tech: ['Технологии', 'Гаджеты, стандарты, изобретения'],
  web: ['Интернет', 'Сервисы, соцсети и цифровая культура'],
  movies: ['Кино', 'Фильмы, студии и франшизы'],
  tv: ['Сериалы', 'Телевидение и стриминг'],
  brands: ['Бренды', 'Компании, продукты и легенды рынка'],
  history: ['История', 'События, города и открытия'],
  science: ['Наука', 'Открытия, медицина и материалы'],
  sport: ['Спорт', 'Турниры, лиги и дисциплины'],
  music: ['Музыка', 'Носители, сервисы и индустрия'],
  culture: ['Культура', 'Медиа, книги и массовые явления'],
  toys: ['Игрушки', 'Настольные игры и коллекции'],
  finance: ['Деньги', 'Платежи, банки и крипто']
};

addThemeQuestions(25);
addGeneratedQuestions(1050);

const state = {
  screen: 'home',
  mode: null,
  theme: null,
  index: 0,
  score: 0,
  streak: 0,
  lives: 3,
  hints: 3,
  round: [],
  current: null,
  locked: false,
  sessionEnded: false,
  timeLeft: 0,
  timer: null,
  sessionAnswers: 0,
  careerLevel: 1,
  correctInSession: 0,
  wrongInSession: 0,
  bestSessionStreak: 0,
  currentDisplay: [],
  sdk: null,
  player: null,
  lb: null,
  audio: null,
  music: null,
  musicPausedBySystem: false,
  data: {
    level: 1,
    stars: 0,
    bestStreak: 0,
    bestScore: 0,
    usedCareerQuestionIds: [],
    seenFacts: {},
    dailyDate: '',
    dailyDone: false,
    sound: true,
    musicOn: true,
    sfxOn: true,
    style: 'premium'
  }
};

const screen = document.querySelector('#screen');
const homeTpl = document.querySelector('#homeTemplate');
const backBtn = document.querySelector('#backBtn');
const resetBtn = document.querySelector('#resetBtn');
const musicBtn = document.querySelector('#musicBtn');
const sfxBtn = document.querySelector('#sfxBtn');
const styleBtn = document.querySelector('#styleBtn');
const bgMusic = document.querySelector('#bgMusic');
const favicon = document.querySelector('#favicon');
const SFX_GAIN = 3.2;

init();

async function init() {
  loadLocal();
  bindGlobal();
  await initYandex();
  renderHome();
  if (state.data.musicOn) startMusic();
  else stopMusic();
  yandexReady();
  showInterstitial();
}

function bindGlobal() {
  backBtn.addEventListener('click', () => {
    if (state.screen === 'game') return finishGame(false);
    renderHome();
  });
  resetBtn.addEventListener('click', resetProgress);
  musicBtn.addEventListener('click', () => {
    state.data.musicOn = !state.data.musicOn;
    updateAudioButtons();
    if (state.data.musicOn) startMusic();
    else stopMusic();
    save();
  });
  sfxBtn.addEventListener('click', () => {
    state.data.sfxOn = !state.data.sfxOn;
    updateAudioButtons();
    save();
  });
  styleBtn.addEventListener('click', () => {
    state.data.style = state.data.style === 'premium' ? 'modern' : 'premium';
    applyStyle();
    save();
  });
  document.addEventListener('pointerdown', () => {
    if (state.data.musicOn) startMusic();
  }, { once: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseAudioForSystem();
    else resumeAudioAfterSystem();
  });
  window.addEventListener('blur', pauseAudioForSystem);
  window.addEventListener('focus', resumeAudioAfterSystem);
}

async function initYandex() {
  if (!window.YaGames) return;
  try {
    state.sdk = await YaGames.init();
    state.player = await state.sdk.getPlayer({ scopes: false });
    const cloud = await state.player.getData();
    if (cloud && Object.keys(cloud).length) state.data = { ...state.data, ...cloud };
    state.lb = state.sdk.getLeaderboards ? await state.sdk.getLeaderboards() : null;
  } catch (err) {
    console.warn('Yandex SDK unavailable in local mode', err);
  }
}

function yandexReady() {
  try { state.sdk?.features?.LoadingAPI?.ready(); } catch {}
}

function save() {
  localStorage.setItem('chronoDuelSave', JSON.stringify(state.data));
  try { state.player?.setData(state.data, true); } catch {}
}

function loadLocal() {
  try {
    const raw = localStorage.getItem('chronoDuelSave');
    if (raw) state.data = { ...state.data, ...JSON.parse(raw) };
    if (state.data.musicOn === undefined) state.data.musicOn = state.data.sound !== false;
    if (state.data.sfxOn === undefined) state.data.sfxOn = state.data.sound !== false;
  } catch {}
}

function renderHome() {
  stopTimer();
  state.screen = 'home';
  screen.innerHTML = '';
  screen.append(homeTpl.content.cloneNode(true));
  screen.querySelector('[data-stat="level"]').textContent = state.data.level;
  screen.querySelector('[data-stat="best"]').textContent = state.data.bestStreak;
  const themeCardTitle = screen.querySelector('[data-mode="themes"] strong');
  if (themeCardTitle) themeCardTitle.textContent = 'Выбор категории';
  const endlessCard = screen.querySelector('[data-mode="endless"]');
  if (endlessCard) {
    endlessCard.querySelector('strong').textContent = 'Без лимита ошибок';
    endlessCard.querySelector('em').textContent = 'Отвечай, пока сам не выйдешь из раздела';
  }
  screen.querySelectorAll('[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => runAfterInterstitial(() => openMode(btn.dataset.mode)));
  });
  backBtn.style.visibility = 'hidden';
  updateAudioButtons();
  applyStyle();
}

function resetProgress() {
  const firstConfirm = confirm('Сбросить весь прогресс, рекорды и прохождение уровней?');
  if (!firstConfirm) return;
  const secondConfirm = confirm('Подтвердите сброс еще раз. Это действие нельзя отменить.');
  if (!secondConfirm) return;
  runAfterInterstitial(() => {
    state.data = {
      ...state.data,
      level: 1,
      stars: 0,
      bestStreak: 0,
      bestScore: 0,
      usedCareerQuestionIds: [],
      seenFacts: {},
      dailyDate: '',
      dailyDone: false
    };
    save();
    showToast('Прогресс сброшен');
    renderHome();
  });
}

function openMode(mode) {
  backBtn.style.visibility = 'visible';
  if (mode === 'career') return renderCareerMap();
  if (mode === 'themes') return renderThemes();
  if (mode === 'leaderboard') return renderLeaderboard();
  if (mode === 'daily' && state.data.dailyDone && state.data.dailyDate === new Date().toISOString().slice(0, 10)) {
    return renderDailyLocked();
  }
  startGame(mode);
}

function renderCareerMap() {
  state.screen = 'careerMap';
  const totalLevels = 40;
  const nodes = Array.from({ length: totalLevels }, (_, i) => {
    const level = i + 1;
    const locked = level > state.data.level;
    const status = level < state.data.level ? 'Пройден' : level === state.data.level ? 'Текущий' : 'Закрыт';
    return `
      <button class="level-node ${locked ? 'locked' : ''} ${level === state.data.level ? 'current' : ''}" data-level="${level}" ${locked ? 'disabled' : ''}>
        <span>${status}</span>
        <strong>${level}</strong>
        <span>${careerLevelSize(level)} вопросов</span>
      </button>`;
  }).join('');
  screen.innerHTML = `
    <section class="leader-box career-intro">
      <h2>Карта карьеры</h2>
      <p>Выбирай открытый уровень. Вопросы между уровнями не повторяются.</p>
    </section>
    <section class="career-map">${nodes}</section>`;
  screen.querySelectorAll('[data-level]:not(:disabled)').forEach(btn => {
    btn.addEventListener('click', () => runAfterInterstitial(() => startGame('career', null, Number(btn.dataset.level))));
  });
}

function renderDailyLocked() {
  state.screen = 'dailyLocked';
  screen.innerHTML = `
    <section class="leader-box">
      <h2>Вызов уже пройден</h2>
      <p>Новый набор из 10 вопросов откроется завтра. Пока можно добрать очки в карьере, блице или бесконечном режиме.</p>
      <button class="action-btn gold" data-sprint>Играть блиц</button>
      <button class="action-btn" data-home>На главный экран</button>
    </section>`;
  screen.querySelector('[data-sprint]').addEventListener('click', () => runAfterInterstitial(() => startGame('sprint')));
  screen.querySelector('[data-home]').addEventListener('click', () => runAfterInterstitial(renderHome));
}

function renderThemes() {
  state.screen = 'themes';
  const items = Object.entries(THEMES).map(([key, t]) => {
    const count = QUESTIONS.filter(q => q.theme === key).length;
    return `<button class="theme-card" data-theme="${key}"><span>${count} вопросов</span><strong>${t[0]}</strong><em>${t[1]}</em></button>`;
  }).join('');
  screen.innerHTML = `<section class="theme-grid">${items}</section>`;
  screen.querySelectorAll('[data-theme]').forEach(btn => {
    btn.addEventListener('click', () => runAfterInterstitial(() => startGame('theme', btn.dataset.theme)));
  });
}

async function renderLeaderboard() {
  state.screen = 'leaderboard';
  let text = `Ваш лучший счет: ${state.data.bestScore}. Лучшая серия: ${state.data.bestStreak}.`;
  if (state.lb) {
    try {
      const entries = await state.lb.getLeaderboardEntries('bestScore', { quantityTop: 5, includeUser: true, quantityAround: 3 });
      text = entries.entries.map((e, i) => `${i + 1}. ${e.player.publicName || 'Игрок'} - ${e.score}`).join('<br>');
    } catch {}
  }
  screen.innerHTML = `<section class="leader-box"><h2>Рейтинг</h2><p>${text}</p><button class="action-btn gold" data-home>На главный экран</button></section>`;
  screen.querySelector('[data-home]').addEventListener('click', () => runAfterInterstitial(renderHome));
}

function startGame(mode, theme = null, careerLevel = state.data.level) {
  stopTimer();
  state.screen = 'game';
  state.sessionEnded = false;
  state.mode = mode;
  state.theme = theme;
  state.careerLevel = careerLevel;
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.hints = 0;
  state.sessionAnswers = 0;
  state.correctInSession = 0;
  state.wrongInSession = 0;
  state.bestSessionStreak = 0;
  state.round = buildRound(mode, theme, careerLevel);
  state.lives = startingLives(mode, careerLevel);
  if (mode === 'sprint') startTimer(90);
  renderQuestion();
}

function buildRound(mode, theme, careerLevel = state.data.level) {
  let pool = [...QUESTIONS];
  if (mode === 'theme') pool = pool.filter(q => q.theme === theme);
  if (mode === 'career') {
    pool = careerQuestionsForLevel(careerLevel);
  }
  if (mode === 'daily') pool = dailyQuestions();
  if (mode === 'sprint') pool = shuffle(pool);
  if (mode === 'endless') pool = shuffle(pool);
  return shuffle(pool);
}

function careerLevelSize(level) {
  return Math.min(10 + level * 2, 28);
}

function startingLives(mode, careerLevel) {
  if (mode === 'endless' || mode === 'sprint') return Infinity;
  if (mode !== 'career') return 3;
  if (careerLevel <= 5) return 5;
  return Math.ceil(careerLevelSize(careerLevel) * 0.3);
}

function careerQuestionsForLevel(level) {
  const ordered = level <= 5 ? easyCareerQuestions() : seededShuffle(QUESTIONS, 709686);
  const size = careerLevelSize(level);
  let start = 0;
  for (let i = 1; i < level; i++) start += careerLevelSize(i);
  if (start + size > ordered.length) start = start % Math.max(1, ordered.length - size);
  return ordered.slice(start, start + size);
}

function easyCareerQuestions() {
  const easy = QUESTIONS
    .filter(q => Math.abs(q.ya - q.yb) >= 80)
    .sort((a, b) => Math.abs(b.ya - b.yb) - Math.abs(a.ya - a.yb));
  const used = new Set(easy.map(q => q.id));
  const fallback = QUESTIONS
    .filter(q => !used.has(q.id))
    .sort((a, b) => Math.abs(b.ya - b.yb) - Math.abs(a.ya - a.yb));
  return [...easy, ...fallback];
}

function dailyQuestions() {
  const date = new Date().toISOString().slice(0, 10);
  const seed = Number(date.replaceAll('-', ''));
  return seededShuffle(QUESTIONS, seed).slice(0, 10);
}

function renderQuestion() {
  if (state.sessionEnded || state.screen !== 'game') return;
  if (state.mode === 'sprint' && state.timeLeft <= 0) return finishGame(true);
  if (state.index >= state.round.length) {
    if (state.mode === 'endless' || state.mode === 'sprint') state.round.push(...shuffle(QUESTIONS));
    else return finishGame(true);
  }
  state.locked = false;
  state.current = state.round[state.index];
  const q = state.current;
  state.currentDisplay = shuffle([
    { key: 'a', title: q.a, year: q.ya },
    { key: 'b', title: q.b, year: q.yb }
  ]);
  const progress = state.mode === 'sprint'
    ? Math.round(((90 - state.timeLeft) / 90) * 100)
    : Math.round((state.index / Math.max(1, state.round.length)) * 100);
  const answeredCount = state.index;
  const hasQuestionLimit = state.mode !== 'endless' && state.mode !== 'sprint';
  const totalCount = hasQuestionLimit ? state.round.length : '∞';
  const leftCount = hasQuestionLimit ? Math.max(0, state.round.length - state.index) : 'без лимита';
  const modeName = modeTitle();
  const timer = state.mode === 'sprint' ? `<div class="timer-card"><span>Время</span><strong class="timer-value">${state.timeLeft}</strong></div>` : '';
  const lives = state.mode === 'sprint' ? '' : `<div><span>Жизни</span><strong>${state.lives}</strong></div>`;
  screen.innerHTML = `
    <section class="hud">
      <div><span>Режим</span><strong>${modeName}</strong></div>
      <div><span>Очки</span><strong>${state.score}</strong></div>
      <div><span>Серия</span><strong>${state.streak}</strong></div>
      ${lives}
      ${timer}
    </section>
    <div class="progress"><i style="width:${progress}%"></i></div>
    <div class="progress-meta">
      <span>Пройдено: <strong>${answeredCount}</strong> / <strong>${totalCount}</strong></span>
      <span>Осталось: <strong>${leftCount}</strong></span>
    </div>
    <section class="question-panel">
      <div class="question-title">
        <h2>Что появилось раньше?</h2>
        <p>Выбери более ранний вариант. Чем длиннее серия, тем выше множитель награды.</p>
      </div>
      <div class="answer-grid">
        ${state.currentDisplay.map(item => `
          <button class="answer-card" data-choice="${item.key}" data-year="????">
            <small>${themeLabel(q.theme)}</small>
            <b>${item.title}</b>
          </button>
        `).join('')}
      </div>
      <div class="tools">
        <button class="action-btn gold" data-ad-hint>Подсказка за рекламу</button>
      </div>
      <div class="hint-box" hidden></div>
      <div class="fact-box" hidden></div>
    </section>`;
  screen.querySelectorAll('[data-choice]').forEach(btn => btn.addEventListener('click', () => answer(btn.dataset.choice)));
  screen.querySelector('[data-ad-hint]').addEventListener('click', rewardedHint);
  screen.querySelectorAll('.answer-card').forEach(card => {
    const year = document.createElement('span');
    year.className = 'answer-year';
    year.textContent = 'Дата скрыта';
    card.querySelector('small').append(year);
  });
  if (state.mode === 'endless') {
    const livesCell = Array.from(screen.querySelectorAll('.hud > div')).find(cell => cell.querySelector('strong')?.textContent === 'Infinity');
    if (livesCell) {
      livesCell.querySelector('span').textContent = 'Ошибки';
      livesCell.querySelector('strong').textContent = 'без лимита';
    }
  }
  updateSprintTimerWarning();
}

function answer(choice) {
  if (state.locked || state.sessionEnded || state.screen !== 'game') return;
  if (state.mode === 'sprint' && state.timeLeft <= 0) return finishGame(true);
  state.locked = true;
  state.sessionAnswers++;
  const q = state.current;
  const correctChoice = q.ya <= q.yb ? 'a' : 'b';
  const ok = choice === correctChoice;
  const cards = screen.querySelectorAll('.answer-card');
  cards.forEach(card => {
    const year = displayYear(card.dataset.choice === 'a' ? q.ya : q.yb);
    card.dataset.year = year;
    const yearLabel = card.querySelector('.answer-year');
    if (yearLabel) yearLabel.textContent = year;
    if (card.dataset.choice === correctChoice) card.classList.add('correct');
    if (card.dataset.choice === choice && !ok) card.classList.add('wrong');
  });
  if (ok) {
    state.streak++;
    state.correctInSession++;
    state.bestSessionStreak = Math.max(state.bestSessionStreak, state.streak);
    state.score += 100 + Math.min(state.streak, 12) * 20;
    playAnswerSound(true);
  } else {
    state.streak = 0;
    if (state.mode !== 'endless' && state.mode !== 'sprint') state.lives--;
    state.wrongInSession++;
    playAnswerSound(false);
  }
  state.data.bestStreak = Math.max(state.data.bestStreak, state.streak);
  state.data.seenFacts[q.id] = true;
  const fact = screen.querySelector('.fact-box');
  fact.hidden = false;
  fact.innerHTML = `<strong>${ok ? 'Верно' : 'Мимо'}.</strong> ${q.fact}`;
  save();
  setTimeout(() => {
    if (state.sessionEnded || state.screen !== 'game') return;
    if (state.mode === 'sprint' && state.timeLeft <= 0) return finishGame(true);
    if (state.mode !== 'endless' && state.mode !== 'sprint' && state.lives <= 0) return finishGame(false);
    state.index++;
    maybeInterstitial();
    renderQuestion();
  }, 1450);
}

function revealEra() {
  const q = state.current;
  screen.querySelectorAll('.answer-card').forEach(card => {
    const year = Math.floor(card.dataset.choice === 'a' ? q.ya : q.yb);
    const era = Math.floor(year / 10) * 10 + 'е';
    card.dataset.year = era;
    const yearLabel = card.querySelector('.answer-year');
    if (yearLabel) yearLabel.textContent = era;
  });
  const hint = screen.querySelector('.hint-box');
  if (hint) {
    const left = state.currentDisplay[0];
    const right = state.currentDisplay[1];
    hint.hidden = false;
    hint.innerHTML = `Эпохи открыты: ${left.title} - ${Math.floor(left.year / 10) * 10}е, ${right.title} - ${Math.floor(right.year / 10) * 10}е<small>Теперь выбери, что появилось раньше.</small>`;
  }
}

function rewardedHint() {
  showRewarded(() => {
    revealEra();
    playHintSound();
    showToast('Подсказка получена');
  });
}

function finishGame(completed) {
  if (state.sessionEnded && state.screen === 'result') return;
  state.sessionEnded = true;
  state.screen = 'result';
  stopTimer();
  if (state.mode === 'career' && completed && state.careerLevel >= state.data.level) {
    state.data.level++;
  }
  state.data.bestScore = Math.max(state.data.bestScore, state.score);
  if (state.mode === 'daily') {
    state.data.dailyDate = new Date().toISOString().slice(0, 10);
    state.data.dailyDone = true;
  }
  save();
  submitScore();
  showInterstitial();
  const result = resultContent(completed);
  screen.innerHTML = `
    <section class="result-box">
      <h2>${result.title}</h2>
      <p>${result.text}</p>
      <div class="reward-row">
        ${result.stats.map(item => `<div><strong>${item.value}</strong><span> ${item.label}</span></div>`).join('')}
      </div>
      <button class="action-btn gold" data-next>${result.next}</button>
      <button class="action-btn" data-home>На главный экран</button>
    </section>`;
  screen.querySelector('[data-next]').addEventListener('click', () => {
    runAfterInterstitial(() => {
      if (result.nextMode === 'careerMap') return renderCareerMap();
      startGame(result.nextMode || state.mode, result.nextMode ? null : state.theme, state.careerLevel);
    });
  });
  screen.querySelector('[data-home]').addEventListener('click', () => runAfterInterstitial(renderHome));
}

function resultContent(completed) {
  const accuracy = state.sessionAnswers ? Math.round((state.correctInSession / state.sessionAnswers) * 100) : 0;
  const base = [
    { value: state.score, label: 'очков' },
    { value: `${accuracy}%`, label: 'точность' },
    { value: state.bestSessionStreak, label: 'лучшая серия' }
  ];
  if (state.mode === 'career') {
    return {
      title: completed ? 'Уровень закрыт' : 'Маршрут прерван',
      text: completed ? `Уровень ${state.careerLevel} пройден. На карте открыт следующий этап.` : 'Жизни закончились, но лучший счет сохранен.',
      stats: [{ value: state.score, label: 'очков' }, { value: `${accuracy}%`, label: 'точность' }, { value: state.bestSessionStreak, label: 'серия' }],
      next: completed ? 'Карта уровней' : 'Повторить уровень',
      nextMode: completed ? 'careerMap' : null
    };
  }
  if (state.mode === 'theme') {
    return {
      title: completed ? `${THEMES[state.theme][0]} завершены` : 'Тема не покорилась',
      text: `Тема: ${THEMES[state.theme][0]}. Можно сразу сыграть еще раз и улучшить точность.`,
      stats: base,
      next: 'Повторить тему'
    };
  }
  if (state.mode === 'sprint') {
    return {
      title: 'Блиц завершен',
      text: 'Время вышло. Здесь решают скорость, серия и минимум ошибок.',
      stats: [{ value: state.score, label: 'очков за 90 секунд' }, { value: state.correctInSession, label: 'верных ответов' }, { value: state.bestSessionStreak, label: 'серия' }],
      next: 'Еще блиц'
    };
  }
  if (state.mode === 'daily') {
    return {
      title: 'Вызов дня сыгран',
      text: 'Ежедневный результат сохранен. Следующий набор откроется завтра.',
      stats: [{ value: state.score, label: 'очков дня' }, { value: `${accuracy}%`, label: 'точность' }, { value: state.correctInSession, label: 'из 10 верно' }],
      next: 'Играть блиц',
      nextMode: 'sprint'
    };
  }
  if (state.mode === 'endless') {
    return {
      title: 'Серия остановлена',
      text: 'Бесконечный режим держится на концентрации. Чем дольше серия, тем выше итоговый счет.',
      stats: [{ value: state.sessionAnswers, label: 'вопросов' }, { value: state.score, label: 'очков' }, { value: state.bestSessionStreak, label: 'серия' }],
      next: 'Новая серия'
    };
  }
  return { title: 'Сессия окончена', text: 'Результат сохранен.', stats: base, next: 'Играть еще' };
}

function startTimer(seconds) {
  state.timeLeft = seconds;
  state.timer = setInterval(() => {
    if (state.sessionEnded || state.screen !== 'game') {
      stopTimer();
      return;
    }
    state.timeLeft--;
    if (state.timeLeft < 0) state.timeLeft = 0;
    const el = screen.querySelector('.timer-value');
    if (el && state.mode === 'sprint') el.textContent = state.timeLeft;
    updateSprintTimerWarning();
    if (state.mode === 'sprint' && state.timeLeft > 0 && state.timeLeft <= 10) playTimerWarning();
    if (state.timeLeft <= 0) finishGame(true);
  }, 1000);
}

function updateSprintTimerWarning() {
  const timerCard = screen.querySelector('.timer-card');
  if (!timerCard) return;
  timerCard.classList.toggle('timer-warning', state.timeLeft <= 10);
}

function stopTimer() {
  if (state.timer) clearInterval(state.timer);
  state.timer = null;
}

function maybeInterstitial() {
  if (state.sessionAnswers % 5 === 0) showInterstitial();
}

function runAfterInterstitial(action) {
  showInterstitial(action);
}

function showInterstitial(onDone) {
  let finished = false;
  const done = () => {
    if (finished) return;
    finished = true;
    resumeAudioAfterAd();
    if (typeof onDone === 'function') onDone();
  };
  try {
    if (!state.sdk?.adv?.showFullscreenAdv) return done();
    state.sdk.adv.showFullscreenAdv({
      callbacks: {
        onOpen: pauseAudioForSystem,
        onClose: done,
        onError: done
      }
    });
  } catch {
    done();
  }
}

function showRewarded(onReward) {
  let rewarded = false;
  try {
    state.sdk?.adv?.showRewardedVideo({
      callbacks: {
        onRewarded: () => { rewarded = true; onReward(); },
        onOpen: pauseAudioForSystem,
        onClose: () => {
          resumeAudioAfterAd();
          if (!rewarded) showToast('Награда не получена');
        },
        onError: () => {
          resumeAudioAfterAd();
          onReward();
        }
      }
    }) || onReward();
  } catch {
    onReward();
  }
}

function submitScore() {
  try { state.lb?.setLeaderboardScore('bestScore', state.data.bestScore); } catch {}
}

function modeTitle() {
  if (state.mode === 'theme') return THEMES[state.theme][0];
  return { career: 'Карьера', sprint: 'Блиц', daily: 'Вызов', endless: 'Бесконечный' }[state.mode] || 'Игра';
}

function themeLabel(theme) {
  if (theme === 'mixed') return 'Разное';
  return THEMES[theme]?.[0] || 'Тема';
}

function displayYear(year) {
  return String(Math.floor(year));
}

function applyStyle() {
  const isModern = state.data.style === 'modern';
  document.body.classList.toggle('modern', isModern);
  if (favicon) {
    favicon.href = isModern
      ? 'assets/icon_modern_128.png'
      : 'favicon.png';
  }
  styleBtn.textContent = isModern ? '◑' : '◐';
  styleBtn.title = isModern ? 'Современный стиль' : 'Премиальный стиль';
}

function updateAudioButtons() {
  musicBtn.textContent = state.data.musicOn ? '♫' : '♬';
  musicBtn.classList.toggle('muted', !state.data.musicOn);
  musicBtn.title = state.data.musicOn ? 'Музыка включена' : 'Музыка выключена';
  sfxBtn.textContent = '♪';
  sfxBtn.classList.toggle('muted', !state.data.sfxOn);
  sfxBtn.title = state.data.sfxOn ? 'Звуки включены' : 'Звуки выключены';
}

function ensureAudio() {
  if (!state.data.sfxOn || !window.AudioContext) return null;
  if (!state.audio) state.audio = new AudioContext();
  if (state.audio.state === 'suspended') state.audio.resume();
  return state.audio;
}

function startMusic() {
  if (!state.data.musicOn) return;
  if (!state.music) state.music = bgMusic || new Audio('assets/background.mp3');
  state.music.loop = true;
  state.music.volume = 0.34;
  state.music.play().catch(() => {});
}

function stopMusic() {
  if (!state.music) return;
  state.music.pause();
}

function pauseAudioForSystem() {
  state.musicPausedBySystem = !!state.music && !state.music.paused;
  stopMusic();
  try { state.audio?.suspend?.(); } catch {}
}

function resumeAudioAfterSystem() {
  if (state.data.musicOn && state.musicPausedBySystem) startMusic();
  state.musicPausedBySystem = false;
}

function resumeAudioAfterAd() {
  if (state.data.musicOn) startMusic();
  state.musicPausedBySystem = false;
}

function playTone(freq, duration, type = 'sine', volume = 0.05, delay = 0) {
  const ctx = ensureAudio();
  if (!ctx) return;
  const now = ctx.currentTime + delay;
  const sfxVolume = Math.min(volume * SFX_GAIN, 0.22);
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(sfxVolume, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.02);
}

function playAnswerSound(ok) {
  if (ok) {
    playTone(523, 0.12, 'sine', 0.06);
    playTone(784, 0.16, 'triangle', 0.05, 0.08);
  } else {
    playTone(220, 0.18, 'sawtooth', 0.035);
    playTone(146, 0.22, 'sine', 0.04, 0.08);
  }
}

function playHintSound() {
  playTone(440, 0.1, 'triangle', 0.035);
  playTone(660, 0.14, 'triangle', 0.032, 0.07);
}

function playTimerWarning() {
  playTone(880, 0.07, 'square', 0.025);
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function seededShuffle(arr, seed) {
  const copy = [...arr];
  let s = seed;
  for (let i = copy.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showToast(text) {
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = text;
  document.body.append(toast);
  setTimeout(() => toast.remove(), 1700);
}
