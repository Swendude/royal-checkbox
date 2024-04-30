import { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { motion, AnimatePresence } from "framer-motion";
import { Crown } from "lucide-react";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <p className="eed">
        Ik zweer (beloof) aan de volkeren van het Koninkrijk dat Ik het Statuut
        voor het Koninkrijk en de Grondwet steeds zal onderhouden en handhaven.
        Ik zweer (beloof) dat Ik de onafhankelijkheid en het grondgebied van het
        Koninkrijk met al Mijn vermogen zal verdedigen en bewaren; dat Ik de
        vrijheid en de rechten van alle Nederlanders en alle ingezetenen zal
        beschermen, en tot instandhouding en bevordering van de welvaart alle
        middelen zal aanwenden welke de wetten Mij ter beschikking stellen,
        zoals een goed en getrouw Koning schuldig is te doen. Zo waarlijk helpe
        Mij God almachtig!
      </p>
      <div className="check">
        <Checkbox.Root
          id="cb-root"
          asChild
          onCheckedChange={() => setChecked(!checked)}
          checked={checked}
        >
          <motion.div
            animate={checked ? "checked" : "initial"}
            variants={{
              initial: {
                borderColor: "#ffffff",
                // backgroundColor: "#ff800000",
                transition: {
                  duration: 0.1,
                },
              },
              checked: {
                borderColor: "#ff8000",
                // backgroundColor: "#ff8000",
                transition: {
                  duration: 0.1,
                },
              },
            }}
          >
            <motion.div
              key="crown"
              className="crown"
              variants={{
                initial: {
                  y: "0%",
                  opacity: 0,
                  transition: {
                    duration: 0.1,
                  },
                },
                checked: {
                  y: "-90%",
                  opacity: 1,
                  transition: {
                    y: {
                      delay: 0.15,
                      type: "spring",
                      stiffness: 160,
                      damping: 7,
                    },
                  },
                },
              }}
            >
              <Crown stroke="none" fill="#ff8000" size={42} />
            </motion.div>

            <Checkbox.Indicator />
            <AnimatePresence>
              <motion.div
                className="indicator"
                variants={{
                  initial: {
                    scale: 0,
                  },
                  checked: {
                    scale: 0.82,
                  },
                }}
                transition={{
                  duration: 0.1,
                }}
              />
            </AnimatePresence>
          </motion.div>
        </Checkbox.Root>
        <span className="beloof">Dat beloof Ik!</span>
      </div>
      <div className="footer">
        <p>
          Made{" "}
          <a target="_blank" href="https://github.com/Swendude/royal-checkbox">
            open-source
          </a>{" "}
          with ❤️ by{" "}
          <a target="_blank" href="https://www.mindmingle.nl">
            Mind Mingle
          </a>
          , learn to code in ten weeks!
        </p>
      </div>
    </>
  );
}

export default App;
