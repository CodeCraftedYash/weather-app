type InformationCardItemProps = {
  title: string;
  value?: string;
};

function InformationCardItem({ title, value }: InformationCardItemProps) {
  return (
    <div className="w-full min-h-4 text-white text-md">
      <span>{title}</span>: <span>{value ?? 'N/A'}</span>
    </div>
  );
}

export default InformationCardItem;
