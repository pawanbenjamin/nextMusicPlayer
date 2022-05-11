import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <GradientLayout
      roundImage
      color="green"
      roundImage="true"
      subtitle="profile"
      title="Pawan Benjamin"
      description="15 Public Playlists"
      image="https://static.scientificamerican.com/sciam/cache/file/ACF0A7DC-14E3-4263-93F438F6DA8CE98A_source.jpg"
    >
      <div>Home Page</div>
    </GradientLayout>
  );
};

export default Home;
