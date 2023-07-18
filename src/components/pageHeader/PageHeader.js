import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";
import HeaderStyles from "./PageHeader.module.css";

const PageHeader = ({page}) => {
  const navigate = useNavigate();
  return (
    <header className={HeaderStyles.header}>
      <ArrowLeft className={HeaderStyles.arrow} onClick={() => navigate(-1)} />
      <h1>{page}</h1>
    </header>
  );
};

export { PageHeader };
