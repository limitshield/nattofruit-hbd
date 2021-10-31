//// Music Components
import Music from "./Music";
import getMusicList from "./getMusicList";

export default function MusicList(props : any) {
  const list = getMusicList();
  return (
    <div className="musicList">
      {list.map((e, key) => {
        return (
          <Music key={key} file={e.file} title={e.title} author={e.author} />
        );
      })}
    </div>
  );
}
