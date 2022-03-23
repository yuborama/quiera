/** @type {import('next').NextConfig} */
const nextConfig = {
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/xampp/htdocs/quiera.org/InformesAnuales/FQ2022/': { page: '/' },
  //     '/xampp/htdocs/quiera.org/InformesAnuales/FQ2022/carta-de-presidencia': { page: '/carta-de-presidencia' },
  //     '/xampp/htdocs/quiera.org/InformesAnuales/FQ2022/gestion-social': { page: '/gestion-social' },
  //     '/xampp/htdocs/quiera.org/InformesAnuales/FQ2022/gestion-y-estrcutura': { page: '/gestion-y-estrcutura' },
  //     '/xampp/htdocs/quiera.org/InformesAnuales/FQ2022/modelo-de-inversion-social': { page: '/modelo-de-inversion-social' },
  //   }
  // },
  images: {
    loader: 'akamai',
    path: '',
  },
}
//xampp\htdocs\quiera.org\InformesAnuales\FQ2022\

module.exports = nextConfig
