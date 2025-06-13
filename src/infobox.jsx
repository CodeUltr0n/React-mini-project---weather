import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import FilterDramaSharpIcon from '@mui/icons-material/FilterDramaSharp';
export default function Infobox({info}){
   const INIT_URL = "https://img.freepik.com/free-photo/weather-effects-with-tsunami_23-2149667407.jpg?t=st=1748795166~exp=1748798766~hmac=c0312a4015caebeb18922aee87de2c20a8ebfb25dd015566af820dd5af216b7c&w=1800"
    
   const HOT_URL = "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const COLD_URL = "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const RAIN_URL= "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const MODERATE_URL= "https://images.unsplash.com/photo-1605107140735-3640719d3404?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="infobox">
           <Card sx={{ 
            maxWidth: 345 ,
             transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: 8, 
      cursor: "pointer"}
            }}>
      <CardMedia
        component="img"
        // alt="green iguana"
        height="140"
        image={
           info.Humidity > 80
      ? RAIN_URL
      : info.temp > 30
      ? HOT_URL
      : info.temp < 15
      ? COLD_URL
      : MODERATE_URL
          }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{" "}
    {info.Humidity > 80 ? (
  <ThunderstormTwoToneIcon />
) : info.temp > 30 ? (
  <SunnyIcon />
) : info.temp < 15 ? (
  <AcUnitIcon />
) : (
  <FilterDramaSharpIcon />
)}
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary'}}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humdity = {info.Humidity}</p>
         <p>Feels like = {info.feelslike}&deg;C</p>
         <p>Maximum Temperature = {info.tempMax}&deg;C</p>
         <p>Minimum Temperature = {info.tempMin}&deg;C</p>
         <p> The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C
         </p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}