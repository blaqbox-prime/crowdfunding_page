import { Container, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import AboutCard from "./Components/AboutCard/AboutCard";
import Header from "./Components/Header/Header";
import ProjectHeaderCard from "./Components/ProjectHeader/ProjectHeaderCard";
import StatsCard from "./Components/StatsCard/StatsCard";
import RewardCard from "./Components/RewardCard/RewardCard";
import BackProjectModal from "./Components/BackProjectModal/BackProjectModal";

function App() {
  const [bookmarked, setBookmarked] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();

  const onToggleBookmarked = () => {
    setBookmarked(!bookmarked);
  }

  return (
    <div className="App">
      <Header/>
      <Container maxW={730} mt={-20}>
        {/* Project Header */}
        <ProjectHeaderCard isBookmarked={bookmarked} toggleBookmark={onToggleBookmarked} onBackProjectClick={onOpen}/>
        {/* Stats */}
        <StatsCard />
        {/* About the project */}
        <AboutCard />
        <BackProjectModal isOpen={isOpen} onClose={onClose} />
      </Container>
    </div>
  );
}

export default App;
