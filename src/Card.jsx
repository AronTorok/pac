const Card = ({ image, title, text }) => {
  return (
    <>
      <div className="rounded-2xl border-3 border-[blue] p-2" id={title}>
        <div className="rounded-lg border-3 border-[blue] h-full">
          <img src={image} alt={title} />
          <h1 className="text-3xl text-center">{title}</h1>
          <p className="px-5 py-3">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
