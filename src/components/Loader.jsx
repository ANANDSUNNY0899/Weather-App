// function Loader() {
//     return <div className="loader">Loading...</div>;
//   }
  
//   export default Loader;
  


import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1 }}
    />
  );
}

export default Loader;
