import Tile from '../components/Grid/Tile';

const GridBackground = () => {
  const tilesCount = 80; // adjust based on grid shape

  return (
    <div className="absolute inset-0 grid grid-cols-10 gap-0.5 z-[-3]">
      {Array.from({ length: tilesCount }).map((_, index) => (
        <Tile key={index} />
      ))}
    </div>
  );
};

export default GridBackground;
