import { ContentSection } from "../components/ContentSection/ContentSection";

export const AboutPage = (props) => {
  return (
    <ContentSection title={props.title}>
      <h3>Here is the about page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        numquam, assumenda eveniet autem accusamus at, adipisci officia
        repellendus sapiente ipsa aperiam cumque similique! Tenetur, quis odit
        repellendus voluptatem qui ipsa.
      </p>
    </ContentSection>
  );
};
