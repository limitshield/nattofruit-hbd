//// Citing Components
import Citing from "./Citing";
import getCitingList from "./getCitingList";

export default function CitingList(props : any) {
  const list = getCitingList();
  return (
    <div className="citingList">
      {list.map((e, key) => {
        return <Citing key={key} comment={e.comment} author={e.author} />;
      })}
    </div>
  );
}
