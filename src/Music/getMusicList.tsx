export default function getMusicList() {
  return [
    new MusicInfo( "in the bed all day", "aa", "01 - LimitShield - in the bed all day.mp3" ),
    new MusicInfo( "honobono0 remix", "", "02 - （不明なアーティスト） - honobono0 remix.mp3" ),
    new MusicInfo( "マリン・ポリューション (Asian Rock Remix)", "運命のドツボ", "03 - 運命のドツボ - マリン・ポリューション (Asian Rock Remix).mp3" ),
    new MusicInfo( "マリン・ポリューション (LimitShield remix)", "LimitShield", "04 - LimitShield - マリン・ポリューション (LimitShield remix).mp3" ),
    new MusicInfo( "マリン・ポリューション (5h4ru Remix)", "5h4ru", "05 - 5h4ru - マリン・ポリューション (5h4ru Remix).mp3" )
  ];
}

export class MusicInfo{
  title : string;
  author : string;
  file : string;
  constructor(t:string, a:string, f:string){
    this.title = t;
    this.author = a;
    this.file = f;
  }
}