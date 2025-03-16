import { useState } from "react";
import "./App.css";
import Session from "./components/Session";
import { Box, Button, Container, CssBaseline } from "@mui/material";

function App() {
  const [startSession, setStartSession] = useState(false);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          height={600}
          width={"100%"}
          my={4}
          display="flex"
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: "2px solid grey" }}
        >
          {startSession && <Session setStartSession={setStartSession} />}
          <Button
            variant="outlined"
            color="info"
            onClick={() => setStartSession(true)}
          >
            Start Session
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
