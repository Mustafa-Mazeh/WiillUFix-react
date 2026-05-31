export const applications = [
  {
    name: 'Adobe Master Collection',
    img: 'Adobemater.jpg',
    desc: 'Full suite including all Adobe applications that every student need and lifetime activated.',
    price: '$45.00',
  },
  {
    name: 'Autodesk AutoCAD',
    img: 'Autocad.jpeg',
    desc: 'Professional 2D and 3D design software.',
    price: '$10.00',
  },
  {
    name: 'Windows 11 Pro',
    img: 'WIN11_Pro.webp',
    desc: 'Full activation for professional use.',
    price: '$30.00',
  },
  {
    name: 'Microsoft Office 2021',
    img: 'Office2021.avif',
    desc: 'Word, Excel, PowerPoint, and more (ALL Applications). Life time activation.',
    price: '$25.00',
  },
  {
    name: 'Adobe Premiere Pro',
    img: 'Adobe-Premiere-Pro2026.jpg',
    desc: 'Professional video editing software.',
    price: '$35.00',
  },
  {
    name: 'Autodesk Revit',
    img: 'Revit.webp',
    desc: 'BIM software for architects and engineers.',
    price: '$65.00',
  },
  {
    name: 'SolidWorks',
    img: 'SolidWorks.png',
    desc: '3D CAD design and analysis software. Life time activated with support.',
    price: '$30.00',
  },
  {
    name: 'Internet Download Manager',
    img: 'idmjpeg.jpeg',
    desc: 'Increase download speeds significantly.',
    price: '$15.00',
  },
  {
    name: 'Sketchup',
    img: 'SketchUp-Pro.webp',
    desc: 'SketchUp is an intuitive, user-friendly 3D modeling software utilized across fields like architecture, interior design, and engineering to easily create, visualize, and modify three-dimensional designs.',
    price: '$20.00',
  },
]

// Three "coming soon" placeholder cards.
export const comingSoon = Array.from({ length: 3 }, () => ({
  name: 'New Application',
  img: 'Coming soon.jpg',
  desc: 'We are constantly expanding our software library. Check back soon for this exciting new addition!',
  price: 'TBA',
  disabled: true,
}))
