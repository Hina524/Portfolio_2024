type Props = {
  title: string,
  date: string,
}

export default function BlogCard(props: Props) {
  return (
    <div className="card">
      <div className="blogTitle">
        {props.title}
      </div>
      <div className="blogDate">
        {props.date}
      </div>
    </div>
  );
}