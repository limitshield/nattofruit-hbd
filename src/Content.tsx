import CitingList from "./Citing/CitingList";
import MusicList from "./Music/MusicList";
import IllustList from "./Illust/IllustList";
import MoreInfoList from "./Moreinfo/MoreInfoList";

function Content() {
  return (
    <div className="prlx_root">
      <PrlxBack />
      <PrlxFront />
    </div>
  );
}

function PrlxBack() {
  return <div className="prlx_cont prlx_back"></div>;
}

function PrlxFront() {
  const list = getList();
  return (
    <div className="prlx_cont prlx_front">
      {list.map((e, key) => {
        return <TextBlock key={key} capt={e.capt} pr={e.pr} other={e.other} />;
      })}
      <MoreInfoList />
      <Footer />
    </div>
  );
}
/* content block class */
class Block{
  capt : string;
  pr : string;
  other : string;
  
  constructor(capt:string, pr:string, other:string){
    this.capt = capt;
    this.pr = pr;
    this.other = other;
  }
}
////Get an external list file (for test)
function getList() : Array<Block> {
  return [
    new Block(
      "スマートな祝祭。",
      "2021年、11月17日。枯れた人々が何気なく時間を浪費していく中、ある一人のニンゲンは生誕から20年の花を咲かそうとしていた。",
      ""
    ),
    new Block(
      "シンプルに、たくさん祝う。",
      "誕生日おめでとう！誕生日おめでとう！誕生日おめでとう！誕生日おめでとう！誕生日おめでとう！誕生日おめでとう！誕生日おめでとう！誕生日おめでとう！",
      ""
    ),
    new Block(
      "誕生日業界でも、デジタル化が進む。",
      "著名人からも祝いのコメント・テキストデータが送られてきています。",
      "citing"
    ),
    new Block(
      "音楽で祝う。",
      "弊クラブは独自のルートで高品質なサウンドデータを取集しました。そのユーザー・エクスペリエンスを聴覚で感じ取ってください。",
      "music"
    ),
    new Block(
      "画像で祝う。",
      "視覚にも働きかけることで、バリアフリーな賞賛を実現します。",
      "illust"
    ),
    new Block( "これまでも、これからも。", "よろ", "" )
  ];
}

//// TextBlock Component
function TextBlock(props : Block) {
  const Other = (props : any) => {
    switch (props.other) {
      case "music":
        return <MusicList />;
      case "illust":
        return <IllustList />;
      case "citing":
        return <CitingList />;
      default:
        return <></>;
    }
  };
  return (
    <div className="textBlock">
      <h2 className="capt">{props.capt}</h2>
      <p className="pr">{props.pr}</p>
      <Other other={props.other} />
    </div>
  );
}

function Footer(props : any) {
  return <p>footer</p>;
}
export default Content;
