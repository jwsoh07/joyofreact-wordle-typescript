interface BannerProps {
  type: 'happy' | 'sad';
  children?: React.ReactNode;
}

export default function Banner({ type, children }: BannerProps) {
  return (
    <div className={`${type} banner`}>
      <p className="">{children}</p>
    </div>
  );
}