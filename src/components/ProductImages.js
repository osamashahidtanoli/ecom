import classes from '../pages/Pages.module.css';
import {useState} from 'react';
import { Skeleton } from '@material-ui/lab';

const ProductImages = ({images = [{url: ''}]}) => {
    const [main, setMain] = useState(0)
    return (
        <>
        
         <div  className={classes.mainImg}>
           {images[main] && <img  src={images[main].url} alt="1st Img" />}
           {!images[main] && <Skeleton  variant="rectangular" width={210} height={118} /> }
               
          </div>
          <div className={classes.imagesGrid}>
              
              {images && images.length > 0 ? (
                  images.map((img,index)=> {
                  return <img alt={img.filename} key={index} src={img.url} onClick={() => {setMain(index)}}/>
                })
              ) : (
                <Skeleton  variant="rectangular" width={210} height={118} />
              )}
        </div>   
        </>
    )
}

export default ProductImages
