import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageCard = ({ src, alt = "image", css_class = "" }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      height="100%"
      className={css_class}
    />
  );
};
export default ImageCard;
