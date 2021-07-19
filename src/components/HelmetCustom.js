import { Helmet } from "react-helmet";

const HelmetCustom = ({
  title = "YouTube using YouTube",
  description = "a project made with youtube api and react js",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
  );
};

export default HelmetCustom;
