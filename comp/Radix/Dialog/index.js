import * as RadixDialog from "@radix-ui/react-dialog";
import styles from "./Styles.module.scss";

const Dialog = () => {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger className={styles.trigger}>
        <span>Open</span>
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.overlay} />
        <RadixDialog.Content className={styles.content}>
          <RadixDialog.Title className={styles.title}>Title</RadixDialog.Title>
          <RadixDialog.Description>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>Something to read here. maybe You should agree</p>
          </RadixDialog.Description>
          <RadixDialog.Close className={styles.close}>Close</RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

export default Dialog;
