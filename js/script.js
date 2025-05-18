"use strict";

const $HTML = document;

const kinolar = [
  {
    movieName: "Boshlang'ich",
    year: 2010,
    language: "UZ",
    country: "AQSH",
    genre: ["Fantastika", "Triller", "Drama"],
    rating: 8.8,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Parazit",
    year: 2019,
    language: "UZ",
    country: "Janubiy Koreya",
    genre: ["Drama", "Triller", "Komediya"],
    rating: 8.6,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "G'azab yo'li",
    year: 2015,
    language: "UZ",
    country: "Avstraliya, AQSH",
    genre: ["Jangari", "Fantastika", "Sarguzasht"],
    rating: 8.1,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Qorong'u ritsar",
    year: 2008,
    language: "UZ",
    country: "AQSH",
    genre: ["Jangari", "Kriminal", "Drama"],
    rating: 9.0,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Busanga yo'l",
    year: 2016,
    language: "UZ",
    country: "Janubiy Koreya",
    genre: ["Qo'rqinchli", "Triller", "Drama"],
    rating: 7.6,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Yulduzlar oralig'ida",
    year: 2014,
    language: "UZ",
    country: "AQSH",
    genre: ["Fantastika", "Drama", "Sarguzasht"],
    rating: 8.6,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Qasoskorlar",
    year: 2012,
    language: "UZ",
    country: "AQSH",
    genre: ["Jangari", "Fantastika", "Sarguzasht"],
    rating: 8.0,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Hammasi bir joyda",
    year: 2022,
    language: "UZ",
    country: "AQSH",
    genre: ["Fantastika", "Komediya", "Drama"],
    rating: 8.1,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Matritsa",
    year: 1999,
    language: "UZ",
    country: "AQSH",
    genre: ["Fantastika", "Jangari", "Triller"],
    rating: 8.7,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Buyuk Budapesht mehmonxonasi",
    year: 2014,
    language: "UZ",
    country: "AQSH, Germaniya",
    genre: ["Komediya", "Drama", "Jinoyat"],
    rating: 8.1,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Jinoyat shahri",
    year: 2005,
    language: "UZ",
    country: "AQSH",
    genre: ["Kriminal", "Triller", "Drama"],
    rating: 8.0,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Shutter oroli",
    year: 2010,
    language: "UZ",
    country: "AQSH",
    genre: ["Triller", "Sirlilik", "Drama"],
    rating: 8.2,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Qora pantera",
    year: 2018,
    language: "UZ",
    country: "AQSH",
    genre: ["Fantastika", "Jangari", "Drama"],
    rating: 7.3,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "O'rgimchak odam: Uydan yiroqda",
    year: 2019,
    language: "UZ",
    country: "AQSH",
    genre: ["Jangari", "Fantastika", "Komediya"],
    rating: 7.5,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Doktor Strange",
    year: 2016,
    language: "UZ",
    country: "AQSH",
    genre: ["Fantastika", "Sarguzasht", "Jangari"],
    rating: 7.5,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "So'nggi Jedi",
    year: 2017,
    language: "UZ",
    country: "AQSH",
    genre: ["Fantastika", "Sarguzasht", "Drama"],
    rating: 6.9,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Jasur yurak",
    year: 1995,
    language: "UZ",
    country: "AQSH",
    genre: ["Tarixiy", "Drama", "Jangari"],
    rating: 8.3,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Tog' orqasidagi qiz",
    year: 2011,
    language: "UZ",
    country: "AQSH",
    genre: ["Drama", "Romantik", "Triller"],
    rating: 7.1,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Marslik",
    year: 2015,
    language: "UZ",
    country: "AQSH",
    genre: ["Fantastika", "Sarguzasht", "Drama"],
    rating: 8.0,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Sherlok Xolms",
    year: 2009,
    language: "UZ",
    country: "AQSH, Britaniya",
    genre: ["Detektiv", "Sarguzasht", "Triller"],
    rating: 7.6,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Temir odam",
    year: 2008,
    language: "UZ",
    country: "AQSH",
    genre: ["Fantastika", "Jangari", "Drama"],
    rating: 7.9,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Qirol sher",
    year: 1994,
    language: "UZ",
    country: "AQSH",
    genre: ["Multfilm", "Drama", "Musiqiy"],
    rating: 8.5,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Yashil yo'l",
    year: 1999,
    language: "UZ",
    country: "AQSH",
    genre: ["Drama", "Fantastika", "Kriminal"],
    rating: 8.6,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Titanik",
    year: 1997,
    language: "UZ",
    country: "AQSH",
    genre: ["Romantik", "Drama", "Tarixiy"],
    rating: 7.9,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Avatar",
    year: 2009,
    language: "UZ",
    country: "AQSH",
    genre: ["Fantastika", "Sarguzasht", "Drama"],
    rating: 7.8,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Qasoskorlar: Oxirgi jang",
    year: 2019,
    language: "UZ",
    country: "AQSH",
    genre: ["Fantastika", "Jangari", "Drama"],
    rating: 8.4,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Zo'ravonlar shahri",
    year: 2021,
    language: "UZ",
    country: "AQSH",
    genre: ["Kriminal", "Drama", "Jangari"],
    rating: 7.2,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Qora oynali xona",
    year: 2020,
    language: "UZ",
    country: "Britaniya",
    genre: ["Triller", "Sirlilik", "Drama"],
    rating: 6.8,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Hayot yo'li",
    year: 2016,
    language: "UZ",
    country: "AQSH",
    genre: ["Drama", "Motivatsion", "Biografiya"],
    rating: 7.7,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Bo'ri chaqiruvi",
    year: 2020,
    language: "UZ",
    country: "AQSH",
    genre: ["Sarguzasht", "Drama", "Oilaviy"],
    rating: 6.9,
    movieImage: "../assets/img/movie/image.png"
  },
  {
    movieName: "Jinoyatchilar shahri",
    year: 2022,
    language: "UZ",
    country: "Fransiya, AQSH",
    genre: ["Jangari", "Triller", "Kriminal"],
    rating: 6.5,
    movieImage: "../assets/img/movie/image.png"
  },
];

// Elementlarni tanlab olish
const heroSec = $HTML.querySelector(".hero-section");
const searchInp = $HTML.querySelector("#search");

