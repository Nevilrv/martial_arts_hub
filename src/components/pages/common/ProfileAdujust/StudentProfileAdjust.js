import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slider from "@mui/material/Slider";

// Styled components
const CropContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: 200,
  background: "#D6D3CA",
  [theme.breakpoints.up("sm")]: {
    height: 400,
  },
}));

const Controls = styled("div")(({ theme }) => ({
  padding: 16,
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

const SliderContainer = styled("div")({
  display: "flex",
  flex: "1",
  alignItems: "center",
});

const SliderLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  [theme.breakpoints.down("xs")]: {
    minWidth: 65,
  },
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
  padding: "22px 0px",
  marginLeft: 16,
  color: "#000",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "center",
    margin: "0 16px",
  },
}));

const Demo = ({
  open,
  onClose,
  image,
  crop,
  rotation,
  zoom,
  onCropChange,
  onRotationChange,
  onCropComplete,
  onZoomChange,
  setZoomchange,
  setRoationchnage,
  onClick,
  showCroppedImageOnclick,
  children,
}) => {
  return (
    <div>
      {children}

      {/* Dialog for Image Cropping */}
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle className="bg-primary_dark">Crop Image</DialogTitle>
        <DialogContent className="bg-primary_dark">
          <CropContainer>
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
          </CropContainer>
          <Controls>
            <SliderContainer>
              <SliderLabel variant="overline">Zoom</SliderLabel>
              <StyledSlider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={setZoomchange}
              />
            </SliderContainer>
            <SliderContainer>
              <SliderLabel variant="overline">Rotation</SliderLabel>
              <StyledSlider
                value={rotation}
                min={0}
                max={360}
                step={1}
                aria-labelledby="Rotation"
                onChange={setRoationchnage}
              />
            </SliderContainer>
          </Controls>
        </DialogContent>
        <DialogActions className="bg-primary_dark">
          <Button onClick={onClick} color="dark">
            Cancel
          </Button>
          <button
            onClick={showCroppedImageOnclick}
            className="bg-Dark_black text-white px-3 py-1 rounded-md"
          >
            Crop & Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Demo;
