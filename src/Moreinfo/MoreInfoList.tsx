//// MoreInfoList Component
import MoreInfo from "./MoreInfo";
import getInfoList from "./getInfoList";

export default function MoreInfoList(props : any) {
  const list = getInfoList();
  return (
    <div id="moreinfoList">
      {list.map((e, key) => {
        return (
          <MoreInfo
            key={key}
            img={e.img}
            pr={e.cap}
            det={e.det}
            link={e.link}
          />
        );
      })}
    </div>
  );
}
