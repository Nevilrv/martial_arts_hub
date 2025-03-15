import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { styles } from './styles'

const Demo = ({ classes, open, onClose, image, crop, rotation, zoom, onCropChange, onRotationChange, onCropComplete, onZoomChange, setZoomchange, setRoationchnage, onClick, showCroppedImageOnclick, children }) => {


  return (
    <div>
      {children}

      {/* Dialog for Image Cropping */}
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle className='bg-primary_dark'>Crop Image</DialogTitle>
        <DialogContent className='bg-primary_dark'>
          <div className={classes.cropContainer}>
            <Cropper
              image={image}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={onCropChange}
              onRotationChange={onRotationChange}
              onCropComplete={onCropComplete}
              onZoomChange={onZoomChange}
            />
          </div>
          <div className={classes.controls}>
            <div className={classes.sliderContainer}>
              <Typography variant="overline" classes={{ root: classes.sliderLabel }}>
                Zoom
              </Typography>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                classes={{ root: classes.slider }}
                onChange={setZoomchange}
              />
            </div>
            <div className={classes.sliderContainer}>
              <Typography variant="overline" classes={{ root: classes.sliderLabel }}>
                Rotation
              </Typography>
              <Slider
                value={rotation}
                min={0}
                max={360}
                step={1}
                color=''
                aria-labelledby="Rotation"
                classes={{ root: classes.slider }}
                onChange={setRoationchnage}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions className='bg-primary_dark'>
          <Button onClick={onClick} color="dark">
            Cancel
          </Button>
          <button onClick={showCroppedImageOnclick} className='bg-Dark_black text-white px-3 py-1 rounded-md'>
            Crop & Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )
}


const StyledDemo = withStyles(styles)(Demo)

export default StyledDemo
