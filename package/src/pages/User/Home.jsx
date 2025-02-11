// import React from "react";
// import { motion } from "framer-motion";
// import { Button, Box, Typography, Container } from "@mui/material";
// import ChartComponent from "../components/ChartComponent";  
// import FeatureCard from "../components/FeatureCard"; 
// const Home = () => {
//   return (
//     <div className="w-full flex flex-col items-center bg-gray-50">

//       {/* Hero Section */}
//       <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600 py-20 md:py-24">
//         <Container maxWidth="lg" className="text-center">
//           <Typography variant="h3" className="text-white font-semibold leading-tight mb-4">
//             Welcome to <span className="text-yellow-400">StockPip</span>
//           </Typography>
//           <Typography variant="h5" className="text-white font-light mb-8">
//             Unlock the power of investments with 500x leverage and advanced trading tools
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             className="px-8 py-3 shadow-lg hover:shadow-xl transition duration-300"
//             onClick={() => console.log("Start Trading")}
//           >
//             Get Started
//           </Button>
//         </Container>
//       </section>

//       {/* Chart Section */}
//       <section className="w-full bg-white py-16">
//         <Container maxWidth="lg" className="text-center">
//           <Typography variant="h4" className="text-gray-800 mb-8 font-semibold">
//             Live Trading Charts
//           </Typography>
//           <ChartComponent />
//         </Container>
//       </section>

//       {/* Features Section */}
//       <section className="w-full bg-gray-100 py-16">
//         <Container maxWidth="lg">
//           <Typography variant="h4" className="text-center text-gray-800 mb-12 font-semibold">
//             Why Choose StockPip?
//           </Typography>
//           <Box
//             display="grid"
//             gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))"
//             gap={6}
//             justifyItems="center"
//           >
//             <FeatureCard title="500x Leverage" description="Trade with up to 500x leverage to maximize your returns." />
//             <FeatureCard title="Real-Time Trading" description="Access live charts, real-time market data, and quick trades." />
//             <FeatureCard title="Low Fees" description="Enjoy low transaction fees on all your trades." />
//             <FeatureCard title="Advanced Analytics" description="Get deep insights with advanced charting and analysis tools." />
//           </Box>
//         </Container>
//       </section>

//       {/* Call to Action Section */}
//       <section className="w-full bg-gradient-to-r from-teal-500 to-blue-500 py-16">
//         <Container maxWidth="lg" className="text-center text-white">
//           <Typography variant="h4" className="font-semibold mb-8">
//             Ready to Start Trading?
//           </Typography>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <Typography variant="h6" className="mb-6 font-light">
//               Join thousands of successful traders and take control of your financial future with StockPip.
//             </Typography>
//             <Button
//               variant="contained"
//               color="secondary"
//               size="large"
//               className="px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition duration-300"
//               onClick={() => console.log("Sign Up")}
//             >
//               Sign Up Now
//             </Button>
//           </motion.div>
//         </Container>
//       </section>

//       {/* Testimonials Section */}
//       <section className="w-full bg-gray-50 py-16">
//         <Container maxWidth="lg" className="text-center">
//           <Typography variant="h4" className="text-gray-800 mb-12 font-semibold">
//             What Our Clients Say
//           </Typography>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             gap={6}
//             className="space-y-4 md:space-y-0 md:flex-row md:space-x-8"
//           >
//             {/* Testimonial 1 */}
//             <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/3">
//               <Typography variant="body1" className="text-gray-700 mb-4">
//                 "StockPip has changed the way I trade. The platform is intuitive, fast, and easy to use. Highly recommended!"
//               </Typography>
//               <Typography variant="subtitle1" className="text-gray-600 text-right">
//                 - John Doe, Professional Trader
//               </Typography>
//             </div>
//             {/* Testimonial 2 */}
//             <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/3">
//               <Typography variant="body1" className="text-gray-700 mb-4">
//                 "The 500x leverage is a game-changer. I can maximize my returns like never before!"
//               </Typography>
//               <Typography variant="subtitle1" className="text-gray-600 text-right">
//                 - Jane Smith, Investor
//               </Typography>
//             </div>
//           </Box>
//         </Container>
//       </section>

//       {/* Footer */}
//       <section className="w-full bg-gray-900 text-white py-6">
//         <Container maxWidth="lg" className="text-center">
//           <Typography variant="body2" className="text-gray-300">
//             © 2025 StockPip. All rights reserved.
//           </Typography>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Home;
