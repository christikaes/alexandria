import { Button, Container, Typography } from "@mui/joy";
import type { NextPage } from "next";
import { HypothesisCard } from "../components/HypothesisCard";

const Home: NextPage = () => {
  return (
    <Container>
      <Typography level="h2">All Hypotheses</Typography>
      <HypothesisCard
        hypothesis={{
          date: "September 11, 2022",
          title: "The earth is flat",
          description: "I believe the earth is flat because ....",
          proofs: [],
          submittedBy: {
            name: "Alex",
            walletAddress: "123",
          },
        }}
      />
      <Typography level="h2">My Hypotheses</Typography>
    </Container>
  );
};

export default Home;
