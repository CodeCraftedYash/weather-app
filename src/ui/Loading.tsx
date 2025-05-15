function Loading() {
  return (
    <div className="scale-50 w-20 aspect-square relative animate-spin ">
      {Array(6).fill(0).map((_, i) => (
        <div
          key={i}
          className="w-4 h-8 bg-gradient-to-b from-pink-500 to-pink-200 rounded-tl-full absolute left-[40%] top-1/3"
          style={{
            transform: `rotate(${i * 60}deg) translateY(-75%)`,
            transformOrigin: 'center',
          }}
        />
      ))}
    </div>
  );
}

export default Loading;
