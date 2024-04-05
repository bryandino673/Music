type SongInfoProps = {
  title?: string;
  artist?: string;
  coverArtSrc?: string;
};

const SongInfo = ({ title, artist, coverArtSrc }: SongInfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <img
        className="drop-shadow-lg rounded-sm mb-10"
        width={180}
        height={180}
        src={coverArtSrc}
      />
      <span className="text-2xl drop-shadow-lg text-primary">{title}</span>
      <span className="text-base drop-shadow-lg text-primary">{artist}</span>
    </div>
  );
};

export default SongInfo;
