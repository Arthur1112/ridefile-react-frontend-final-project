import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "../styling/titleCardStyling.css";

export default function TitleCards() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://wallpapercave.com/wp/wp4787826.png"
            alt="sample Car image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              corrupti, aspernatur sint tempora doloribus cum eligendi quam ab
              corporis quibusdam quas amet veniam obcaecati perferendis, facilis
              numquam adipisci magnam quo!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <section>
        <div id="columnOne">
          <img src="https://wallpapercave.com/wp/wp4787826.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, blanditiis soluta iste quae aliquid libero alias
            officia eius? Quasi, non. Reprehenderit dolor itaque voluptate
            voluptates ea! Facere reprehenderit delectus quisquam.
          </p>
        </div>
        <div id="columnOne">
          <img src="https://wallpapercave.com/wp/wp4787826.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, blanditiis soluta iste quae aliquid libero alias
            officia eius? Quasi, non. Reprehenderit dolor itaque voluptate
            voluptates ea! Facere reprehenderit delectus quisquam.
          </p>
        </div>
        <div id="columnOne">
          <img src="https://wallpapercave.com/wp/wp4787826.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos, blanditiis soluta iste quae aliquid libero alias
            officia eius? Quasi, non. Reprehenderit dolor itaque voluptate
            voluptates ea! Facere reprehenderit delectus quisquam.
          </p>
        </div>
      </section>
    </>
  );
}
