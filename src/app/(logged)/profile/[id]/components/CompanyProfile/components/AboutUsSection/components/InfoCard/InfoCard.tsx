type Props = {
  title: string;
  children: React.ReactNode;
};

const InfoCard = (props: Props) => {
  const { children, title } = props;

  return (
    <div className="flex flex-col justify-center">
      <dt className="text-body2 font-semibold">{title}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
};

export default InfoCard;
