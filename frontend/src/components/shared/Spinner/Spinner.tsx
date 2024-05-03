interface SpinnerProps {
  className?: string;
  size?: number;
}

export const Spinner = ({ className = "", size = 8 }: SpinnerProps) => {
  const borderSize = Math.max(1, size);
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`rounded-full border-${borderSize} border-gray-200 border-t-blue-500 animate-spin`}
        style={{
          width: `${size * 4}px`,
          height: `${size * 4}px`,
          borderWidth: `${borderSize}px`,
        }}
      />
    </div>
  );
};
