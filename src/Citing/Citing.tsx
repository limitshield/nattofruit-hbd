export default function Citing(props : any) {
  return (
    <div className="citing">
      <p className="comment">
        {props.comment}
        <span className="author">{props.author}</span>
      </p>
    </div>
  );
}
