import React, { useContext } from "react";
import { Context } from "../../Context";
import { getClass } from "../utils";
import Image from "../components/Image";

export default function Photos() {
  const { allPhotos } = useContext(Context);

  let imagesEl = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));
  return <main className="photos">{imagesEl}</main>;
}
