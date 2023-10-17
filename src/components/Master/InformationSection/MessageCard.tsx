interface Props {
  message: string;
  className?: string;
  lineColor?: string;
}

function MessageCard({ message, className, lineColor = "bg-black" }: Props) {
  return (
    <article className={className}>
      <div className="flex items-center">
        <div className={`h-1.5 w-4 ${lineColor}`}></div>
        <div className={`h-0.5 w-full ${lineColor}`}></div>
      </div>
      <div className="lg:max-w-xs lg:whitespace-pre-line p-3 ">{message}</div>
      <div className="flex items-center">
        <div className={`h-0.5 w-full ${lineColor}`}></div>
        <div className={`h-1.5 w-4 ${lineColor}`}></div>
      </div>
    </article>
  );
}

export default MessageCard;
