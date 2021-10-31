export default function Music(props : any) {
  return (
    <div className="music">
      {props.author} - {props.title}
      <div className="audioPlayer"><audio src={"files/"+ props.file }></audio></div>
    </div>
  );
}
