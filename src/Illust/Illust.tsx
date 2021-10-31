export default function Illust(props : any) {
  return (
    <div className="illust">
      <style>{"img{width:50%;}"}</style>
      <img src={props.file} alt={props.title} />
      <p>
        {props.title} - {props.author}
      </p>
    </div>
  );
}
