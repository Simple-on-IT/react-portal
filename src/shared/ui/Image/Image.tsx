import style from './Image.module.scss';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {

}

export const Image = (props: ImageProps) => {
  return (<img className={style.image} {...props} />)
};
