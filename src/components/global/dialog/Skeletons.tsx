interface SkeletonProps {
  className?: string;
}

export const TypographySkeleton = ({ className = '' }: SkeletonProps) => {
  return (
    <p
      className={`ml-3 animate-pulse w-full min-w-[70px] h-4 bg-gray-200 rounded-md dark:bg-gray-700 ${className}`}></p>
  );
};
