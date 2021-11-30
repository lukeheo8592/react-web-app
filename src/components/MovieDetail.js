import styles from "./MovieDetail.module.css";
function MoiveDetail({
  large_cover_image,
  title,
  rating,
  genres,
  year,
  runtime,
  description_full,
}) {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.imgbox}>
          <img src={large_cover_image} alt={title} />
        </div>
        <div className={styles.textbox}>
          <h1>{title}</h1>
          <div>rating : {rating}</div>
          <div>
            genres :
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
          <div>year : {year}</div>
          <div>runtime : {runtime}</div>
          <div>{description_full}</div>
        </div>
      </div>
    </>
  );
}



export default MoiveDetail;
