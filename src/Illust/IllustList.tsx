//// Illust Components
import Illust from "./Illust";
import getIllustList from "./getIllustList";

export default function IllustList(props : any) {
  const list = getIllustList();
  return (
    <div className="illustList">
      {list.map((e, key) => {
        return (
          <Illust key={key} file={e.file} title={e.title} author={e.author} />
        );
      })}
    </div>
  );
}
