import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function NavNode({ onNavigate }) {
  const [rotation, setRotation] = useState(0);
  const tapTimeout = useRef(null);
  const lastTap = useRef(0);

  const handleTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 250) {
      // double tap
      clearTimeout(tapTimeout.current);
      lastTap.current = 0;
      onNavigate("inner");
    } else {
      lastTap.current = now;
      tapTimeout.current = setTimeout(() => {
        onNavigate("out");
      }, 250);
    }
  };

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setRotation((r) => r - 90);
      onNavigate("left");
    }
    if (direction === "right") {
      setRotation((r) => r + 90);
      onNavigate("right");
    }
    if (direction === "up") {
      onNavigate("clear");
    }
    if (direction === "down") {
      onNavigate("add");
    }
  };

  const handleLongPress = () => {
    onNavigate("home");
  };

  return (
    <motion.div
      className="nav-node"
      style={{
        width: 80,
        height: 80,
        borderRadius: "50%",
        background: "#333",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        userSelect: "none",
        touchAction: "none",
      }}
      animate={{ rotate: rotation }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onTap={handleTap}
      onTapStart={() => {
        // long press detection
        tapTimeout.current = setTimeout(handleLongPress, 600);
      }}
      onTapCancel={() => clearTimeout(tapTimeout.current)}
      onPanEnd={(e, info) => {
        const { offset } = info;
        if (Math.abs(offset.x) > Math.abs(offset.y)) {
          handleSwipe(offset.x > 0 ? "right" : "left");
        } else {
          handleSwipe(offset.y > 0 ? "down" : "up");
        }
      }}
    >
      NAV
    </motion.div>
  );
        }
