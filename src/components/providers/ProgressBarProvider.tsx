'use client'
import NextNProgress from 'nextjs-progressbar';

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextNProgress
        color="#fffd00"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      {children}
    </>
  );
};

export default ProgressBarProvider;
