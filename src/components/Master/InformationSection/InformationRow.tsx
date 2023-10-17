interface Props {
  title: string;
  description: string;
}

function InformationRow({ title, description }: Props) {
  return (
    <li>
      <span className="text-lg text-brown-sub">{`${title}: `}</span>
      <span className="text-lg text-brown-main">{description}</span>
    </li>
  );
}

export default InformationRow;
