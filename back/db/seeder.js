const Good = require("./models/good.model");
const Admin = require("./models/admin.model");
const Agent = require("./models/agent.model");
const mongoose = require("mongoose");
const { options } = require('./config');
const dotenv = require("dotenv");
dotenv.config({path: '../.env'}); // Important!
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.eqypr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

async function seedDatabase() {
  console.log(process.env, dbUrl)
  await mongoose.connect(dbUrl);

  const adminsToSeed = [
    {
      login: "Admin",
      password: "123",
      isAdmin: true,
    },
  ];

  const agentsToSeed = [
    {
      title: "Алёнка",
      login: "Anton",
      phone: "+7924344499",
      email: "Anton@Mail.ro",
      itn: "49037285411",
      password: "123",
    },
  ];

  const goodsToSeed = [
    {
      title: '    Капуста "Пикантная" 0,850 кг п/в',
      stock: "1",
      price: "86",
    },
    {
      title: "    Баклажаны по-корейски 2 кг",
      stock: "1",
      price: "396",
    },
    {
      title: "    Аджика острая, 20 кг",
      stock: "1",
      price: "3210",
    },
    {
      title: "    Морковь по-корейски 2 кг п/в",
      stock: "2",
      price: "300",
    },
    {
      title: '    Капуста "Пилюски с аджикой " 5 кг п/в',
      stock: "2",
      price: "482",
    },
    {
      title: "    Закуска из морской капусты 4 кг пв",
      stock: "2",
      price: "550",
    },
    {
      title: "    Капуста квашеная 20 кг п/в ",
      stock: "2",
      price: "1320",
    },
    {
      title: '    Капуста "Пилюски" 0,600 кг п/в',
      stock: "3",
      price: "76",
    },
    {
      title: "    Огурцы соленые 14 кг п/в",
      stock: "3",
      price: "1386",
    },
    {
      title: "    Морковь по-корейски со спаржей 0,850 кг",
      stock: "4",
      price: "139",
    },
    {
      title: "    Морковь по-корейски 2,7 кг ",
      stock: "4",
      price: "375",
    },
    {
      title: "    Перец сладкий соленый ПВ 2 кг",
      stock: "4",
      price: "440",
    },
    {
      title: "    Баклажаны по-корейски 3 кг",
      stock: "4",
      price: "557",
    },
    {
      title: "    Аджика острая, 5кг",
      stock: "4",
      price: "910",
    },
    {
      title: "    Спаржа по-корейски 5 кг п/в",
      stock: "4",
      price: "1177",
    },
    {
      title: "    Паэлья 0,800 кг",
      stock: "5",
      price: "198",
    },
    {
      title: "    Спаржа по-корейски 2 кг п/в",
      stock: "5",
      price: "480",
    },
    {
      title: '    Капуста "Пилюски с аджикой " 1,5 кг п/в',
      stock: "6",
      price: "193",
    },
    {
      title: '    Капуста "Пилюски с аджикой" 3 кг п/в',
      stock: "6",
      price: "321",
    },
    {
      title: "    Хрен тертый 2 кг п/в",
      stock: "6",
      price: "825",
    },
    {
      title: "    Баклажаны по-корейски 5 кг",
      stock: "6",
      price: "931",
    },
    {
      title: "    Капуста квашеная 2 кг с яблоком п/в",
      stock: "7",
      price: "176",
    },
    {
      title: "    Морковь по-корейски 3кг п/в",
      stock: "7",
      price: "450",
    },
    {
      title: "    Ассорти острое 1,5 кг ( масса нетто 2,5)",
      stock: "7",
      price: "503",
    },
    {
      title: "    Капуста квашеная 2 кг сладкий вкус п/в",
      stock: "8",
      price: "165",
    },
    {
      title: "    Салат Хе из курицы 3 кг",
      stock: "8",
      price: "770",
    },
    {
      title: "    Капуста квашеная 2 кг с клюквой п/в",
      stock: "9",
      price: "187",
    },
    {
      title: "    Морковь по-корейски 5 кг п/в",
      stock: "9",
      price: "750",
    },
    {
      title: "    Капуста квашеная 3 кг п/в ",
      stock: "10",
      price: "225",
    },
    {
      title: "    Капуста квашеная 3 кг с яблоком п/в",
      stock: "11",
      price: "231",
    },
    {
      title: '    Соус "Тар-тар" 2,0 кг',
      stock: "11",
      price: "492",
    },
    {
      title: "    Капуста квашеная 3 кг сладкий вкус п/в",
      stock: "12",
      price: "214",
    },
    {
      title: "    Огурцы соленые 2 кг п/в",
      stock: "12",
      price: "279",
    },
    {
      title: "    Спаржа по-корейски 3 кг п/в",
      stock: "12",
      price: "706",
    },
    {
      title: "    Помидор соленый зеленый 3 кг п/в",
      stock: "13",
      price: "308",
    },
    {
      title: "    Суп Солянка 0,800 кг",
      stock: "14",
      price: "330",
    },
    {
      title: "    Капуста Пилюски с аджикой  п/в 0,600 кг",
      stock: "15",
      price: "81",
    },
    {
      title: '    Закуска "Нежность" 0,600 кг п/в',
      stock: "16",
      price: "81",
    },
    {
      title: "    Капуста квашеная 3 кг с клюквой п/в",
      stock: "17",
      price: "231",
    },
    {
      title: "    Капуста маринованная кисло-сладкая с яблоком 0,500 кг д/п",
      stock: "18",
      price: "61",
    },
    {
      title: "    Капуста маринованная по-грузински 2,7 кг ",
      stock: "19",
      price: "225",
    },
    {
      title: "    Капуста квашеная 2,5 кг п/э",
      stock: "20",
      price: "182",
    },
    {
      title: '    Капуста "Китайская острая 0,550 кг Д/П',
      stock: "21",
      price: "72",
    },
    {
      title: "    Капуста тушеная с мясом 0,800 кг",
      stock: "21",
      price: "165",
    },
    {
      title: "    Перловка с утиной грудкой и овощами 0,800 кг",
      stock: "24",
      price: "198",
    },
    {
      title: "    Ассорти острое 0,900 кг д/п",
      stock: "24",
      price: "236",
    },
    {
      title: "    Перец острый соленый 0,5 кг доу-пак",
      stock: "27",
      price: "236",
    },
    {
      title: "    Морковь по-корейски со спаржей 0,600 кг",
      stock: "29",
      price: "104",
    },
    {
      title: "    Капуста маринованная кисло-сладкая с клюквой 0,500 кг д/п",
      stock: "30",
      price: "61",
    },
    {
      title: "    Салат хе из курицы 0,600 кг",
      stock: "31",
      price: "132",
    },
    {
      title: "    Капуста маринованная кисло-сладкая 2,7 кг ",
      stock: "31",
      price: "161",
    },
    {
      title: "    Капуста маринованная кисло-сладкая 0,500 кг д/п",
      stock: "34",
      price: "59",
    },
    {
      title: "    Имбирь маринованный 0,340 кг п/в",
      stock: "34",
      price: "87",
    },
    {
      title: "    Капуста квашеная 0,900 кг п/в с клюквой  ",
      stock: "35",
      price: "88",
    },
    {
      title: "    Капуста квашеная 5 кг сладкий вкус п/в",
      stock: "36",
      price: "321",
    },
    {
      title: "    Закуска из морской капусты с кунжутом 0,550 кг",
      stock: "41",
      price: "99",
    },
    {
      title: "    Помидор соленый зеленый 0,5 кг Д/П",
      stock: "49",
      price: "77",
    },
    {
      title: "    Капуста квашеная 5 кг п/в",
      stock: "49",
      price: "348",
    },
    {
      title: '    Закуска "Нежность" 0,470 кг',
      stock: "54",
      price: "65",
    },
    {
      title: "    Закуска из морской капусты 0,550 кг пв",
      stock: "54",
      price: "85",
    },
    {
      title: "    Морковь по-корейски 0,220 кг п/б",
      stock: "55",
      price: "43",
    },
    {
      title: "    Морковь по-корейски с баклажаном 0,470 кг",
      stock: "56",
      price: "98",
    },
    {
      title: "    Огурцы соленые 3 кг п/в",
      stock: "57",
      price: "407",
    },
    {
      title: "    Капуста квашеная 5 кг. с клюквой п/в",
      stock: "58",
      price: "348",
    },
    {
      title: "    Морковь по-корейски со спаржей 0,220 кг п/б",
      stock: "60",
      price: "50",
    },
    {
      title: "    Капуста квашеная 5 кг с яблоком п/в",
      stock: "61",
      price: "348",
    },
    {
      title: "    Огурцы соленые 0,930 кг п/в ",
      stock: "64",
      price: "91",
    },
    {
      title: "    Капуста квашеная 0,900 кг п/в с яблоком ",
      stock: "67",
      price: "86",
    },
    {
      title: "    Жаркое по-домашнему  0,800 кг",
      stock: "68",
      price: "198",
    },
    {
      title: "    Грибная закуска 0,800 кг",
      stock: "68",
      price: "345",
    },
    {
      title: "    Гречка с мясом и овощами 800 гр",
      stock: "81",
      price: "198",
    },
    {
      title: "    Суп Гороховый 0,800 кг",
      stock: "95",
      price: "187",
    },
    {
      title: '    Суп Рассольник "Ленинградский" 0,800 кг',
      stock: "96",
      price: "187",
    },
    {
      title: '    Борщ со свежей капустой  "Калининградский" 0,800  кг',
      stock: "110",
      price: "170",
    },
    {
      title: "    Капуста маринованная по-грузински 0,5 кг",
      stock: "112",
      price: "63",
    },
    {
      title: '    Щи "Русские" из квашеной капусты 0,800 кг',
      stock: "117",
      price: "170",
    },
    {
      title: '    Закуска "Нежность" 0,220 кг п/б',
      stock: "131",
      price: "41",
    },
    {
      title: "    Хрен столовый 0,150 кг",
      stock: "145",
      price: "66",
    },
    {
      title: "    Горчица столовая 0,150 кг",
      stock: "151",
      price: "41",
    },
    {
      title: "    Баклажаны по-корейски 0,470 кг",
      stock: "151",
      price: "113",
    },
    {
      title: "    Спаржа по-корейски 0,470 кг",
      stock: "152",
      price: "160",
    },
    {
      title: '    Капуста "по-корейски" 0,220 кг п/б',
      stock: "166",
      price: "41",
    },
    {
      title: "    Морковь по-корейски  0,250 кг",
      stock: "166",
      price: "59",
    },
    {
      title: "    Морковь по-корейски со спаржей 0,470 кг",
      stock: "181",
      price: "98",
    },
    {
      title: '    Капуста "Соленушка"квашеная 0,600 кг п/в с клюквой',
      stock: "213",
      price: "63",
    },
    {
      title: "    Шампиньоны маринованные 0,340 кг п/в",
      stock: "226",
      price: "105",
    },
    {
      title: '    Капуста "Соленушка"квашеная 0,600 кг п/в с яблоком ',
      stock: "227",
      price: "63",
    },
    {
      title: "    Соус томатно-чесночный 0,280 кг п/в",
      stock: "243",
      price: "66",
    },
    {
      title: "    Закуска из морской капусты с кунжутом 0,220 кг п/б",
      stock: "258",
      price: "48",
    },
    {
      title: "    Капуста квашеная 0,750 Д/П ",
      stock: "275",
      price: "65",
    },
    {
      title: "    Капуста маринованная кисло-сладкая 0,350 кг п/в",
      stock: "282",
      price: "37",
    },
    {
      title: "    Морковь по-корейски с баклажаном 0,220 кг п/б",
      stock: "289",
      price: "54",
    },
    {
      title: "    Плов из курицы 0,800 кг",
      stock: "289",
      price: "198",
    },
    {
      title: '    Капуста "Соленушка"квашеная 0,600 кг п/в с/в',
      stock: "401",
      price: "60",
    },
    {
      title: '    Капуста "Пилюски" 0,470 кг пб',
      stock: "510",
      price: "70",
    },
    {
      title: "    Морковь Вкусняшка сл/остр. 0,340 кг п/в ",
      stock: "540",
      price: "59",
    },
    {
      title: "    Морковь по-корейски 0,470 кг п/б",
      stock: "807",
      price: "96",
    },
    {
      title: "    Аджика острая, 0,280 кг",
      stock: "910",
      price: "54",
    },
    {
      title: '    Соус "ТарТар"  0,280 кг',
      stock: "918",
      price: "73",
    },
    {
      title: '    Аджика острая "Кобра", 0,330 кг',
      stock: "927",
      price: "70",
    },
    {
      title: "    Капуста квашеная 0,900 кг п/в сл/вкус",
      stock: "991",
      price: "81",
    },
    {
      title: '    Огурчики соленые "Премиум" д/п, 380 гр ( 0,55 масса нетто )',
      stock: "1336",
      price: "81",
    },
    {
      title: '    Закуска "Кобра", 0,5кг',
      stock: "1477",
      price: "82",
    },
  ];

  await Good.insertMany(goodsToSeed);
  // await Admin.insertMany(adminsToSeed);
  // await Agent.insertMany(agentsToSeed);

  await mongoose.disconnect();
}

seedDatabase();
