import classes from '../pages/Pages.module.css';
import {useState} from 'react';
import { Skeleton } from '@material-ui/lab';

const ProductImages = ({images = [{url: ''}]}) => {
    const [main, setMain] = useState(0)
    return (
        <>
        
         <div className={classes.mainImg}>
            <img src={images[main].url} alt="1st Img" />   
          </div>
          <div className={classes.imagesGrid}>
              
              {images && images.length > 0 ? (
                  images.map((img,index)=> {
                    console.log(img.url)
                  return   <img alt={img.filename} key={img.id} src={img.url} onClick={() => {setMain(index)}}/>
                })
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}
        </div>   
        </>
    )
}

export default ProductImages
