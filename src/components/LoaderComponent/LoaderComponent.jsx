import { helix } from "ldrs";
export const LoaderComponent = () => {
  helix.register();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <l-helix size="250" speed="2.5" color="pink"></l-helix>
    </div>
  );
};