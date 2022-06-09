import { css } from "@emotion/react";

export default function Map({ weather }) {
  let mapImage;
  console.log(weather);
  if (weather.temperature <= 0) {
    mapImage = "/src/assets/mapImage/yeongdo1.png";
  } else if (weather.temperature <= 5) {
    mapImage = "/src/assets/mapImage/yeongdo2.png";
  } else if (weather.temperature <= 10) {
    mapImage = "/src/assets/mapImage/yeongdo3.png";
  } else if (weather.temperature <= 15) {
    mapImage = "/src/assets/mapImage/yeongdo4.png";
  } else if (weather.temperature <= 20) {
    mapImage = "/src/assets/mapImage/yeongdo5.png";
  } else {
    mapImage = "/src/assets/mapImage/yeongdo6.png";
  }
  return (
    <div css={styleMapWrapper}>
      <figure css={styleMapImageWrapper}>
        <img src={mapImage} alt="yeongdo-map" css={styleMapImage} />
      </figure>
    </div>
  );
}

const styleMapWrapper = css({
  display: "flex",
  justifyContent: "center",
});

const styleMapImageWrapper = css({
  width: "600px",
  flexGrow: "1",
});

const styleMapImage = css({
  width: "100%",
  objectFit: "cover",
});
