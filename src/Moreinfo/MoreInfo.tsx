export default function MoreInfo(props : any) {
  return (
    <div className="moreinfo">
      <div className="infoimg">
        <img src={props.img} alt="info" />
      </div>
      <div className="infocap">{props.cap}</div>
      <div className="infodet">{props.det}</div>
      <div className="infolink">
        <a href={props.link}>詳しくはこちら &gt;</a>
      </div>
    </div>
  );
}
