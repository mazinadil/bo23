import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  data: object;
}

const StructuredData = ({ data }: StructuredDataProps) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
