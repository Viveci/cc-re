import StudiosHeader from "./studiosHeader";
import StudioImages from "./studiosImages";
import Address from "../../shared/address";
import SectionWOS from "../../shared/sectionWOS";

const CCStudios = () => {
  return (
    <>
      <StudiosHeader />
      <StudioImages />
      <SectionWOS />
      <div style={{height: "70vh"}}>
      <Address />
      </div>
    </>
  );
};

export default CCStudios;
