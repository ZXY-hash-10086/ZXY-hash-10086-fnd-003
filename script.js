"use strict";

let lang = "ja";

const ja = {
  hello: "はじめまして",

  name: "ソウ　シンウ",

  aboutTitle: "わたしのこと",

  from: "出身：中国 山東省",

  hobby: "趣味：ドラマを見ること、ジム",

  drama: "好きなドラマ：唐沢寿明さん主演の『白い巨塔』",

  skillsTitle: "このコースで学んだこと",

  skill1: "HTML：タグでページの形を作る（h1、div、img など）",

  skill2: "CSS：文字や色、余白を整える（color、font、margin など）",

  skill3: "CSS：枠や角の形を整える（border、border-radius など）",

  skill4: "JS：変数と条件分岐（let、const、if など）",

  skill5: "JS：関数（function、アロー関数）",

  skill6: "JS：配列とオブジェクト",

  skill7: "JS：ループ（for 文など）",

  skill8: "JS：配列のメソッド（map、filter など）",

  skill9: "JS：JS で HTML を動かす（getElementById、addEventListener など）",

  noteHtml: "HTML：ページの骨組み（どこに何を置くか）を作ります。",

  noteCss: "CSS：ページの見た目（色、文字、余白）を整えます。",

  noteJs: "JS：ボタンを押したときなど、ページに動きをつけます。",

  growthTitle: "やってみて思ったこと",

  growth:
    "JS を書いていると、( ) { } [ ] がどんどん増えて、どれを使うのか混ざってしまいます。たくさん書いても、少し時間があくとすぐ書き方を忘れてしまいます。",

  weakTitle: "まだ苦手なこと",

  weakLead: "苦手なことはたくさんありますが、たとえば：",

  weak1: "配列とオブジェクトの使い方は、まだまだです",

  weak2: "エラーが出たとき、どこが悪いのかすぐに分からない",

  nextTitle: "これから",

  next: "たくさん練習して、早く JS と HTML に慣れたいです。そして、Web アプリの構造や function を読めるようになりたいです。",

  thanks: "ご清聴ありがとうございました！",
};

const en = {
  hello: "Hello",

  name: "ZHUANG Xinyu",

  aboutTitle: "About me",

  from: "From: Shandong, China",

  hobby: "Hobbies: Watching TV dramas, going to the gym",

  drama: "Favorite drama: 『白い巨塔』 (starring Toshiaki Karasawa)",

  skillsTitle: "What I learned in this course",

  skill1: "HTML: Building pages with tags (h1, div, img, etc.)",

  skill2: "CSS: Styling text, color and spacing (color, font, margin, etc.)",

  skill3: "CSS: Shaping boxes (border, border-radius, etc.)",

  skill4: "JS: Variables and conditions (let, const, if, etc.)",

  skill5: "JS: Functions (function, arrow functions)",

  skill6: "JS: Arrays and objects",

  skill7: "JS: Loops (for statements, etc.)",

  skill8: "JS: Array methods (map, filter, etc.)",

  skill9:
    "JS: Controlling HTML with JS (getElementById, addEventListener, etc.)",

  noteHtml: "HTML builds the structure of the page (what goes where).",

  noteCss: "CSS styles the page (colors, fonts, spacing).",

  noteJs: "JS makes the page move, like when you click a button.",

  growthTitle: "What I noticed",

  growth:
    "When I write JS, the ( ) { } [ ] keep piling up and I mix up which one to use. Even after writing a lot, I forget the syntax quickly if I take a short break.",

  weakTitle: "Still hard for me",

  weakLead: "There are a lot of things, for example:",

  weak1: "I'm still not good at using arrays and objects",

  weak2: "When an error shows up, I can't tell right away what is wrong",

  nextTitle: "Next",

  next: "I want to practice a lot and get used to JS and HTML soon. Then I want to be able to read the structure and functions of a web app.",

  thanks: "Thank you for listening!",
};

const render = () => {
  let t;

  if (lang === "ja") {
    t = ja;
  } else {
    t = en;
  }

  document.getElementById("hello").textContent = t.hello;

  document.getElementById("name").textContent = t.name;

  document.getElementById("about-title").textContent = t.aboutTitle;

  document.getElementById("about-from").textContent = t.from;

  document.getElementById("about-hobby").textContent = t.hobby;

  document.getElementById("about-drama").textContent = t.drama;

  document.getElementById("skills-title").textContent = t.skillsTitle;

  document.getElementById("skill-1").textContent = t.skill1;

  document.getElementById("skill-2").textContent = t.skill2;

  document.getElementById("skill-3").textContent = t.skill3;

  document.getElementById("skill-4").textContent = t.skill4;

  document.getElementById("skill-5").textContent = t.skill5;

  document.getElementById("skill-6").textContent = t.skill6;

  document.getElementById("skill-7").textContent = t.skill7;

  document.getElementById("skill-8").textContent = t.skill8;

  document.getElementById("skill-9").textContent = t.skill9;

  document.getElementById("skill-note").textContent = "";

  document.getElementById("list-html").style.display = "block";

  document.getElementById("list-css").style.display = "block";

  document.getElementById("list-js").style.display = "block";

  document.getElementById("growth-title").textContent = t.growthTitle;

  document.getElementById("growth-text").textContent = t.growth;

  document.getElementById("weak-title").textContent = t.weakTitle;

  document.getElementById("weak-lead").textContent = t.weakLead;

  document.getElementById("weak-1").textContent = t.weak1;

  document.getElementById("weak-2").textContent = t.weak2;

  document.getElementById("error-demo").textContent = "";

  document.getElementById("next-title").textContent = t.nextTitle;

  document.getElementById("next-text").textContent = t.next;
};

// 日本語ボタン

document.getElementById("btn-ja").addEventListener("click", () => {
  lang = "ja";

  render();
});

// English ボタン

document.getElementById("btn-en").addEventListener("click", () => {
  lang = "en";

  render();
});

// ALL ボタン

document.getElementById("btn-all").addEventListener("click", () => {
  document.getElementById("list-html").style.display = "block";

  document.getElementById("list-css").style.display = "block";

  document.getElementById("list-js").style.display = "block";

  document.getElementById("skill-note").textContent = "";
});

// HTML ボタン

document.getElementById("btn-html").addEventListener("click", () => {
  document.getElementById("list-html").style.display = "block";

  document.getElementById("list-css").style.display = "none";

  document.getElementById("list-js").style.display = "none";

  if (lang === "ja") {
    document.getElementById("skill-note").textContent = ja.noteHtml;
  } else {
    document.getElementById("skill-note").textContent = en.noteHtml;
  }
});

// CSS ボタン

document.getElementById("btn-css").addEventListener("click", () => {
  document.getElementById("list-html").style.display = "none";

  document.getElementById("list-css").style.display = "block";

  document.getElementById("list-js").style.display = "none";

  if (lang === "ja") {
    document.getElementById("skill-note").textContent = ja.noteCss;
  } else {
    document.getElementById("skill-note").textContent = en.noteCss;
  }
});

// JS ボタン

document.getElementById("btn-js").addEventListener("click", () => {
  document.getElementById("list-html").style.display = "none";

  document.getElementById("list-css").style.display = "none";

  document.getElementById("list-js").style.display = "block";

  if (lang === "ja") {
    document.getElementById("skill-note").textContent = ja.noteJs;
  } else {
    document.getElementById("skill-note").textContent = en.noteJs;
  }
});

// エラーの行

document.getElementById("weak-2").addEventListener("click", () => {
  document.getElementById("error-demo").textContent =
    "Uncaught ReferenceError: lang is not defined";
});

//ZXYを押す

document.getElementById("footer").addEventListener("click", () => {
  document.getElementById("footer").style.textAlign = "center";

  document.getElementById("footer").style.fontSize = "32px";

  document.getElementById("footer").style.color = "#0071e3";

  if (lang === "ja") {
    document.getElementById("footer").textContent = ja.thanks;
  } else {
    document.getElementById("footer").textContent = en.thanks;
  }
});

render();
