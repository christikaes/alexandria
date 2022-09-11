import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { Hypothesis } from "../types";
// import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

type HypothesisCardProps = {
  hypothesis: Hypothesis;
};

export const HypothesisCard = ({ hypothesis }: HypothesisCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{ minWidth: "320px", maxWidth: "400px", margin: 2 }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography level="h2" fontSize="md" sx={{ alignSelf: "flex-start" }}>
          {hypothesis.title}
        </Typography>
        <Typography level="body2">{hypothesis.date}</Typography>
      </Box>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
      >
        {/* <BookmarkAdd /> */}
      </IconButton>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        {hypothesis.description}
      </AspectRatio>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography level="body3">Bounty:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            4 Eth
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", fontWeight: 600 }}
        >
          Read More
        </Button>
      </Box>
    </Card>
  );
};
