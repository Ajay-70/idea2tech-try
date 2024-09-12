
// export const getImageSrc = (code) => {
//   const extensions = ['jpg', 'png', 'jpeg', 'gif','webp'];
//   for (let ext of extensions) {
//     const src = `/images/Arduino/${code}.${ext}`;
//     const img = new Image();
//     img.src = src;
//     // Check if image loads successfully
//     if (img.complete && img.naturalWidth > 0) {
//       return src;
//     }
//   }
//   return '/images/courses/defualt.jpeg'; // Fallback image if none of the types exist
// };

// utils/imageHelper.js
// export const getImageSrc = (code) => {
//   const extensions = ['jpg', 'png', 'jpeg', 'gif', 'webp'];
//   for (let ext of extensions) {
//     const src = `/images/Arduino/${code}.${ext}`;
//     // Simply return the path, check in the component if needed
//     return src;
//   }
//   return '/images/Arduino/default.jpg'; // Fallback image
// };


export const getImageSrc = (code,domain) => {
  const extensions = ['jpg', 'png', 'jpeg', 'gif', 'webp'];
  const srcs = extensions.map(ext => `/images/${domain}/${code}.${ext}`);
  console.log();
  
  return srcs;


}


