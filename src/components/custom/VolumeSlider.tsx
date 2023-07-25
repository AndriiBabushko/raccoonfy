"use client";

import React from "react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box } from "@chakra-ui/react";

export default function VolumeSlider() {
  return (
    <Slider aria-label="slider-ex-4" defaultValue={30}>
      <SliderTrack bg="red.100">
        <SliderFilledTrack bg="tomato" />
      </SliderTrack>
      <SliderThumb boxSize={6}>
        <Box color="tomato" />
      </SliderThumb>
    </Slider>
  );
}
