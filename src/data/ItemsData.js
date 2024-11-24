const ItemsData = [
  {
    id: 1,
    name: "육개장 사발면",
    tags: ["플라스틱", "알루미늄", "종이"],
    image: "https://i.pinimg.com/736x/16/e7/1a/16e71abd02325faddd07758eedb6a853.jpg",
    disposal: [
      "용기는 깨끗이 헹군 후 플라스틱으로 배출하세요.",
      "뚜껑은 알루미늄으로 배출하세요.",
      "포장지는 종이로 배출하세요.",
    ],
  },
  {
    id: 2,
    name: "컵라면",
    tags: ["플라스틱", "일반쓰레기"],
    image: "https://img.danawa.com/prod_img/500000/852/238/img/1238852_1.jpg?shrink=330:*&_v=20180321135527",
    disposal: [
      "용기는 깨끗이 헹군 후 플라스틱으로 배출하세요.",
      "남은 내용물은 일반쓰레기로 버리세요.",
    ],
  },
  {
    id: 3,
    name: "우유팩",
    tags: ["종이"],
    image: "https://img.danawa.com/prod_img/500000/149/008/img/1008149_1.jpg?shrink=330:*&_v=20220207092831",
    disposal: [
      "내용물을 비우고 깨끗이 헹군 뒤 종이로 배출하세요.",
      "우유팩 전용 수거함이 있다면 그곳에 배출하세요.",
    ],
  },
  {
    id: 4,
    name: "콜라캔",
    tags: ["알루미늄"],
    image: "https://img.danawa.com/prod_img/500000/808/151/img/10151808_1.jpg?shrink=330:*&_v=20211019125643",
    disposal: ["내용물을 비우고 알루미늄으로 배출하세요."],
  },
  {
    id: 5,
    name: "생수병",
    tags: ["플라스틱", "라벨지"],
    image: "https://img.danawa.com/prod_img/500000/906/904/img/904906_1.jpg?shrink=330:*&_v=20180702134032",
    disposal: [
      "내용물을 비우고 병은 플라스틱으로 배출하세요.",
      "라벨지는 떼어내서 비닐로 배출하세요.",
    ],
  },
  {
    id: 6,
    name: "맥주병",
    tags: ["유리"],
    image: "https://image.fnnews.com/resource/media/image/2021/03/16/202103161422053518_l.jpg",
    disposal: ["병은 깨지지 않게 유리로 배출하세요."],
  },
  {
    id: 7,
    name: "휴지",
    tags: ["종이"],
    image: "https://i.namu.wiki/i/EjtUXct6NGVEWfS2hG9Aae2W4RV5_myWvlyrNDtR1zi9LSHMGzy9W-gsp_-_rQXpnMHrLG1nestzqBPgt-qTMQ.webp",
    disposal: ["휴지는 재활용이 불가능하므로 일반쓰레기로 버리세요."],
  },
  {
    id: 8,
    name: "치약튜브",
    tags: ["플라스틱", "일반쓰레기"],
    image: "https://preview.free3d.com/img/2023/07/3191676437832664890/i8iypdp7.jpg",
    disposal: [
      "튜브는 일반쓰레기로 배출하세요.",
      "뚜껑은 플라스틱으로 분리 배출하세요.",
    ],
  },
  {
    id: 9,
    name: "소주병",
    tags: ["유리"],
    image: "https://i.namu.wiki/i/D0l2d6oy4j6dKr0jmjylhQyqCtm-o05O9INxI4NVAZkEgENEDvQFDycPL92mgqOEormTKE8Q3Iu9c2FXuDnwqg.webp",
    disposal: ["병은 깨지지 않게 유리로 배출하세요."],
  },
  {
    id: 10,
    name: "알루미늄 호일",
    tags: ["알루미늄"],
    image: "https://lh3.googleusercontent.com/proxy/ldbJSFInCfO2pFmSwWit_-ZMoLcsmLaNej69TGvALclW3cECYIxSdBhi0vDI_fzQf4wu9aSW_1OpyqquN7RgmghpDQoi8VY8nSb61x3DixDaLvzFCirhi9g_VKxlNzss",
    disposal: ["깨끗한 상태로 알루미늄으로 배출하세요."],
  },
  {
    id: 11,
    name: "테이크아웃 커피컵",
    tags: ["플라스틱", "종이"],
    image: "https://godomall.speedycdn.net/d7b391dd571392c69c097161bbdd2aea/goods/1000000411/image/detail/1000000411_detail_062.jpg",
    disposal: [
      "뚜껑은 플라스틱으로 배출하세요.",
      "컵은 깨끗이 헹군 후 종이로 배출하세요.",
    ],
  },
  {
    id: 12,
    name: "치킨 박스",
    tags: ["종이", "기름종이", "일반쓰레기"],
    image: "https://cdn.imweb.me/thumbnail/20240412/5a3f1b2c1125b.jpg",
    disposal: [
      "기름이 묻은 부분은 일반쓰레기로 버리세요.",
      "깨끗한 종이 부분은 종이로 배출하세요.",
    ],
  },
  {
    id: 13,
    name: "초코우유팩",
    tags: ["종이"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwhoIxglLY6dWiyis-CWGmHSW2yMVGwxMCQ&s",
    disposal: ["내용물을 비우고 깨끗이 헹군 뒤 종이로 배출하세요."],
  },
  {
    id: 14,
    name: "삼각김밥 포장",
    tags: ["플라스틱", "비닐"],
    image: "https://i.namu.wiki/i/IDL1GtDWvaae-iDODd0vylIA3RIFvgg-omHUZ6RNPOWLToxOnS-qUmFnTmSmY8zSo7xmj9ZLs9i3riIeAOUwXg.webp",
    disposal: [
      "외부 비닐은 비닐로 배출하세요.",
      "내부 포장지는 플라스틱으로 배출하세요.",
    ],
  },
  {
    id: 15,
    name: "과자봉지",
    tags: ["비닐"],
    image: "https://view01.wemep.co.kr/wmp-product/3/843/912478433/pm_gscg3wbjpcve.jpg?1586590554",
    disposal: ["깨끗이 비우고 비닐로 배출하세요."],
  },
];

export default ItemsData;