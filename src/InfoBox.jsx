import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL= "https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.webp?b=1&s=170667a&w=0&k=20&c=KmUu3hmpzMt22rs0DgfbOtQNbCM0NvycsaOsXGIv8qk=";
    let HOT_URL= "https://media.istockphoto.com/id/1011128754/photo/thermometer-in-the-sky-the-heat.webp?b=1&s=170667a&w=0&k=20&c=kKYCK4MuCkm5dV0isRuV0K5qjLmHEo8m0L8fbnd82KQ=";
    let RAINY_URL="https://media.istockphoto.com/id/1053791954/photo/open-black-umbrella-in-wet-weather-autumn-rain-deep-sorrow-wet-umbrella-against-backdrop-of.webp?b=1&s=170667a&w=0&k=20&c=MUAgWEoZv83cEpOthggtCeFLXM5owhQC_gHbOKrM9_s=";

//   let info = {
//     city: "Varanasi",
//     feelslike: 41.05,
//     temp: 34.05,
//     tempMin: 34.05,
//     tempMax: 34.05,
//     humidity: 75,
//     weather: "haze",
//   };
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity >80 ? RAINY_URL :info.temp >15 ? HOT_URL : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{info.humidity >80 ? <ThunderstormIcon style={{marginLeft: "0.5rem" }} /> :info.temp >15 ? <WbSunnyIcon style={{marginLeft: "0.5rem" }} /> : <AcUnitIcon style={{marginLeft: "0.5rem" }} />}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C </p>
              <p>Humidity = {info.humidity} </p>
              <p>Min Temp = {info.tempMin}&deg;C </p>
              <p>Max Temp = {info.tempMax}&deg;C </p>
              <p>
                The weather can be described as <b>{info.weather}</b> feels like
                = {info.feelsLike}&deg;C{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
