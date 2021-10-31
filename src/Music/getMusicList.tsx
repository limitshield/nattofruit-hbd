export default function getMusicList() {
  return [
    new MusicInfo( "aarock", "aa", "20200329.wav" ),
    new MusicInfo( "aaajazz", "bb", "20200330.wav" )
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