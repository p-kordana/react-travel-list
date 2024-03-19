export default function Summary({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((i) => i.packed).length;
  const percentPacked = numPacked / numItems;

  return (
    <footer className="stats">
      <em>
        {numPacked === numItems ? (
          numPacked === 0 ? (
            <>Start adding some items!</>
          ) : (
            <>You got it all! Get on the move!</>
          )
        ) : (
          <>
            You have {numItems} items to pack, and have {numPacked} (
            {Math.round(percentPacked * 100)}%) packed.
          </>
        )}
      </em>
    </footer>
  );
}
