import * as RadixAccordion from "@radix-ui/react-accordion";
import styles from "./Styles.module.scss";

const AccordionItem = ({ index, title, children }) => (
  <RadixAccordion.Item value={`acc-${index}`} className={styles.item}>
    <RadixAccordion.Header className={styles.header} asChild>
      <RadixAccordion.Trigger className={styles.trigger}>
        <h2>{title}</h2>
        <span className={styles.arrow}>V</span>
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
    <RadixAccordion.Content className={styles.content}>
      {children}
    </RadixAccordion.Content>
  </RadixAccordion.Item>
);

const Accordion = () => {
  return (
    <div className={styles.accordion}>
      <RadixAccordion.Root type="single" defaultValue="acc-0" collapsible>
        <AccordionItem index={0} title="First">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
        </AccordionItem>
        <AccordionItem index={1} title="Second">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
        </AccordionItem>
        <AccordionItem index={2} title="Third">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
        </AccordionItem>
      </RadixAccordion.Root>
    </div>
  );
};

export default Accordion;
