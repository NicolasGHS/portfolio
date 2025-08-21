import { AnimatePresence, motion } from "framer-motion";
import { IconButton, ClientOnly, Skeleton } from "@chakra-ui/react";
import { LuSun, LuMoon } from "react-icons/lu";
import { useColorMode, useColorModeValue } from "./ui/color-mode";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <ClientOnly fallback={<Skeleton boxSize="10" />}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          style={{ display: "inline-block" }}
          key={useColorModeValue("light", "dark")}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue("purple", "orange")}
            onClick={toggleColorMode}
          >
            {useColorModeValue(<LuMoon />, <LuSun />)}
          </IconButton>
        </motion.div>
      </AnimatePresence>
    </ClientOnly>
  );
};

export default ThemeToggleButton;
