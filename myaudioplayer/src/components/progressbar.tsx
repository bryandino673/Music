type ProgressBarProps = {
  progress: number;
  onChange: (value: number) => void;
  leftLabel: string;
  rightLabel: string;
};

const ProgressBar = ({
  progress,
  onChange,
  leftLabel,
  rightLabel,
}: ProgressBarProps) => {
  return (
    <div className="flex flex-col">
      <input
        type="range"
        min="1"
        max="100"
        value={progress}
        step="0.25"
        className="slider"
        onChange={(event) => {
          onChange(parseInt(event?.target.value));
        }}
      />
      <div className="flex w-full flex-row justify-between mt-1 text-primary">
        <span className="text-xs">{leftLabel}</span>
        <span className="text-xs">{rightLabel}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
